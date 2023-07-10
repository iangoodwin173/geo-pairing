//IMPORT modules that define the GraphQL schema 
const typeDefs = require('./typeDefs');

// IMPORT Resolvers retrieve data required by GraphQL queries- 
// Allows Server to fetch data from databases, APIs, or any other data sources, and shape the response according to the structure defined in the GraphQL schema.
const resolvers = require('./resolvers');

// EXPORT the typeDefs and resolvers
module.exports = { typeDefs, resolvers };

// additional Schemas typeDefs.js and resolvers.js