import argon2 from "argon2";
import mongoose from "mongoose";
import { composeMongoose } from "graphql-compose-mongoose";

// User - track identifying info for users + auth info
const USER_MODEL_NAME = "User";
const userMongooseSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    displayName: String,
    hash: String,
});
userMongooseSchema.methods.setPassword = async function (password) {
    this.hash = await argon2.hash(password);
};
const User = mongoose.model(USER_MODEL_NAME, userMongooseSchema);
const UserTC = composeMongoose(User, { removeFields: ["hash"] });

export const userQueries = {
    findById: UserTC.mongooseResolvers.findById(),
};
export const userMutations = {
    signUp: UserTC.schemaComposer.createResolver({
        name: "signUp",
        type: "User",
        args: {
            username: "String",
            password: "String",
            displayName: "String",
        },
        resolve: async ({ args }) => {
            const { username, password, displayName } = args;
            if (!username || !password || !displayName) {
                throw Error("username, password and display name are required");
            }

            const usernameCount = await User.findOne({ username }).count().exec();
            if (usernameCount !== 0) {
                throw Error("username is taken")
            }

            const user = new User({ username, displayName });
            await user.setPassword(password);
            await user.save();

            return user;
        },
    }),
};
