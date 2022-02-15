import argon2 from "argon2";
import mongoose from "mongoose";
import { composeMongoose } from "graphql-compose-mongoose";
import jwt from "jsonwebtoken";

// TODO: Move this into env variable
const JWT_SECRET = "kfjbre1ljhgbf57alsj";

// User - track identifying info for users + auth info
export const USER_MODEL_NAME = "User";

const userMongooseSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    displayName: String,
    hash: String,
});
userMongooseSchema.methods.setPassword = async function (password) {
    this.hash = await argon2.hash(password);
};
userMongooseSchema.methods.verifyPassword = function (password) {
    return argon2.verify(this.hash, password);
};
userMongooseSchema.methods.getJWT = async function () {
    return jwt.sign({
        userId: this._id,
        username: this.username
    }, 
    JWT_SECRET, 
    {
        expiresIn: "1h",
    });
};
const User = mongoose.model(USER_MODEL_NAME, userMongooseSchema);
const UserTC = composeMongoose(User, { removeFields: ["hash"] });

export const userQueries = {
    userFindById: UserTC.mongooseResolvers.findById(),
    userFindMany: UserTC.mongooseResolvers.findMany(),
};
export const userMutations = {
    signUp: UserTC.schemaComposer.createResolver({
        name: "signUp",
        type: "String",
        args: {
            username: "String",
            password: "String",
            displayName: "String",
        },
        resolve: async ({ args }) => {
            const { username, password, displayName } = args;
            if (!username || !password || !displayName) {
                throw Error("Username, password and display name are required");
            }

            const usernameCount = await User.findOne({ username }).count().exec();
            if (usernameCount !== 0) {
                throw Error("Username is taken")
            }

            const user = new User({ username, displayName });
            await user.setPassword(password);
            await user.save();

            return user.getJWT();
        },
    }),
    logIn: UserTC.schemaComposer.createResolver({
        name: "logIn",
        type: "String",
        args: {
            username: "String",
            password: "String"
        },
        resolve: async ({ args }) => {
            const { username, password } = args;
            if (!username || !password) {
                throw Error("Invalid username or password");
            }
            const user = await User.findOne({ username }).exec();
            if (!user) {
                throw Error("Invalid username or password");
            }
            const isPasswordValid = await user.verifyPassword(password);
            if (!isPasswordValid) {
                throw Error("Invalid username or password")
            }

            return user.getJWT();
            
        }
    }),
};
