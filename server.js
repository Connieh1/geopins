const { ApolloServer } = require("apollo-server");

const typeDefs = require("./typeDefs");

const resolvers = require("./resolvers");
const { isCompositeType } = require("graphql");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
