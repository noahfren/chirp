require("./db");

const { ApolloServer } = require("apollo-server");

// const { typeDefs } = require("./schema");
// const { resolvers } = require("./resolvers");

// const server = new ApolloServer({ typeDefs, resolvers });

const { schema } = require("./schema");

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
