const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

// Define your GraphQL schema using buildSchema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Define resolvers for your GraphQL schema
const root = {
  hello: () => 'Hello, GraphQL!'
};

// Set up the GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enable the GraphiQL tool
}));

// Start the server
app.listen(4000, () => {
  console.log('Server running at http://localhost:4000/graphql');
});
