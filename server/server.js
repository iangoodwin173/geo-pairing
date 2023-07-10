// THIS IS A START, CHANGES TO BE MADE AS PROJECT EVOLVES
// EXPRESS SERVER
require('dotenv').config();
const express = require('express');


// IMPORT express-graphql middleware function to handle GraphQL requests
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
//IMPORT each Schema typeDefs file here

require('./config/connection'); // REQUIRE the connection.js file

const app = express();

// DEFINE GraphQL schema using buildSchema
// ADD each IMPORTED Schema type Query
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// DEFINE resolvers for GraphQL schema
const root = {
  hello: () => 'Hello, GraphQL!'
};

// SET UP the GraphQL endpoint
// ADD middleware function graphqlHTTP to handle GraphQL requests
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enable the GraphiQL tool
}));

// START the server
app.listen(4000, () => {
  console.log('Server running at http://localhost:4000/graphql');
});
