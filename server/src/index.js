import "dotenv/config";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server";

import schema from "./schema.js";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
mongoose.connection.once('open', () => console.log(`Conected to mongodb`));

const server = new ApolloServer({ schema, context: ({ req, res }) => ({ req, res }) });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
