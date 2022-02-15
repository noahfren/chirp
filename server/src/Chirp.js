import mongoose from "mongoose";
import { composeMongoose } from "graphql-compose-mongoose";
import { USER_MODEL_NAME } from "./User.js";

// Chirp - tweet-like message composed by users, 250 char limit
const chirpSchema = new mongoose.Schema(
    {
        authorId: { type: mongoose.Schema.Types.ObjectId, index: true, ref: USER_MODEL_NAME },
        message: { type: String, maxLength: 250 },
    },
    { timestamps: true }
);
const CHIRP_MODEL_NAME = "Chirp";
const Chirp = mongoose.model(CHIRP_MODEL_NAME, chirpSchema);

const ChirpTC = composeMongoose(Chirp);

export const chirpQueries = {
    chirpFindById: ChirpTC.mongooseResolvers.findById(),
    chirpFindMany: ChirpTC.mongooseResolvers.findMany(),
};

export const chirpMutations = {
    compose: ChirpTC.schemaComposer.createResolver({
        name: "compose",
        type: "Chirp",
        args: {
            authorId: "String",
            message: "String"
        },
        resolve: async ({ args }) => {
            const { authorId, message } = args;
            if (!authorId || !mongoose.isValidObjectId(authorId)) {
                throw Error("Valid author is required");
            }
            if (!message) {
                throw Error("Chirp cannot be blank")
            }
            const chirp = new Chirp({ authorId, message });
            await chirp.save();
            return chirp;
        },
    }),
};
