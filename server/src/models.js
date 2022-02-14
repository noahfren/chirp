const mongoose = require("mongoose");
const { Schema } = mongoose;
const { USER_MODEL_NAME } = require("./User");



// Chirp - tweet-like message composed by users, 250 char limit
const chirpSchema = new Schema(
    {
        author: { type: Schema.Types.ObjectId, index: true, ref: USER_MODEL_NAME },
        message: { type: String, maxLength: 250 },
    },
    { timestamps: true }
);
const CHIRP_MODEL_NAME = "Chirp";
exports.Chirp = mongoose.model(CHIRP_MODEL_NAME, chirpSchema);

// Comment - response to a chirp, also 250 char limit
const commentSchema = new Schema({
    author: { type: Schema.Types.ObjectId, index: true, ref: USER_MODEL_NAME },
    parentChirp: { type: Schema.Types.ObjectId, index: true, ref: CHIRP_MODEL_NAME },
    message: { type: String, maxLength: 250 },
});
const COMMENT_MODEL_NAME = "Comment";
exports.Comment = mongoose.model(COMMENT_MODEL_NAME, commentSchema);

// Rechirp - track when users share another user's chirp
const rechirpSchema = new Schema({
    user: { type: Schema.Types.ObjectId, index: true, ref: USER_MODEL_NAME },
    originalChirp: { type: Schema.Types.ObjectId, ref: CHIRP_MODEL_NAME },
});
const RECHIRP_MODEL_NAME = "Rechirp";
exports.Rechirp = mongoose.model(RECHIRP_MODEL_NAME, rechirpSchema);
