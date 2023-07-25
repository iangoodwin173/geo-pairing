const { AuthenticationError } = require('apollo-server-express');
const { User, Drink } = require('../models');
const { signToken } = require('../utils/auth');
const mongoose = require('mongoose');
const fetch = require('node-fetch');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('drinks');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('drinks');
    },
    drinks: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Drink.find(params).sort({ createdAt: -1 });
    },
    drink: async (parent, { drinkId }) => {
      return Drink.findOne({ _id: drinkId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('drinks');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    getCocktails: async () => {
      const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail");
      const data = await response.json();
      return data.drinks;
    }
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      console.log(token, user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      console.log("======user42======");
      console.log(user);
      console.log("======user42======");
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      console.log('======document user======');
      console.log(token, user);
      console.log('======document user======');
      return { token, user };
      
    },
    addDrink: async (parent, { name, recipe, image, link }, context) => {
      if (context.user) {
        let drink;
        try {
          drink = await Drink.create({
            name,
            recipe,
            image,
            link
          });
          console.log('Created drink:', drink);
        } catch (err) {
          console.error('Error creating drink:', err);
        }
    
        let updatedUser;
        try {
          updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $push: { drinks: drink._id } },
            { new: true }
          );
          console.log('Updated user:', updatedUser);
        } catch (err) {
          console.error('Error updating user:', err);
        }
    
        return drink;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
    removeDrink: async (parent, { drinkId }, context) => {
      if (context.user) {
        const drink = await Drink.findOneAndDelete({
          _id: drinkId,
          // If drinkAuthor is no longer a field in your Drink model,
          // this line should be removed or replaced as needed.
          drinkAuthor: context.user.username,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { drinks: drink._id } }
        );
        return drink;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
