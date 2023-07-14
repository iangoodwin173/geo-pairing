const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

module.exports = { typeDefs, resolvers };const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    drinks: [Drink]!
    drinksCount: Int
  }

  type Drink {
    _id: ID
    name: String
    recipe: String
    image: String
    link: String

  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    drinks(username: String): [Drink]
    drink(drinkId: ID!): Drink
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addDrink(drinkText: String!): Drink
    removeDrink(drinkId: ID!): Drink
  }
`;

module.exports = typeDefs;

