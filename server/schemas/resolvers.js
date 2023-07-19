const { AuthenticationError } = require('apollo-server-express');
const { User, Drink } = require('../models');
const { signToken } = require('../utils/auth');
const mongoose = require('mongoose');

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
      // Process the response and return the data
    },

    getMargarita: async () => {
      const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
      // Process the response and return the data
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addDrink: async (parent, { drinkText }, context) => {
      if (context.user) {
        const drink = await Drink.create({
          drinkText,
          drinkAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { drinks: drink._id } }
        );

        return drink;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    removeDrink: async (parent, { drinkId }, context) => {
      if (context.user) {
        const drink = await Drink.findOneAndDelete({
          _id: drinkId,
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
