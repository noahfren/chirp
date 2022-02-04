const { User, Chirp, Comment, Rechirp } = require("./models");

// Helper function to check if user exists w/ given id
const isValidUserId = async (userId) => {
    const userCount =  await User.findById(userId).count().exec();
    return userCount > 0;
};

// Helper function to check if chirp exists w/ given id
const isValidChirpId = async (chirpId) => {
    const chirpCount = Chirp.findById(chirpId).count() > 0;
    return chirpCount > 0;
};

exports.resolvers = {
    Query: {
        users: () => {
            return User.find().exec();
        },
        userById: (_, { id }) => {
            return User.findById(id).exec();
        },
        userByUserName: (_, { userName }) => {
            return User.findOne({ userName }).exec();
        },
        chirps: () => {
            return Chirp.find().populate("author").exec();
        },
        comments: () => {
            return Comment.find().exec();
        },
        rechirps: () => {
            return Rechirp.find().exec();
        },
    },
    Mutation: {
        addUser: async (_, { input }) => {
            const { userName } = input;
            const usernameAvailable = (await User.find({ userName }).count().exec()) === 0;
            if (!usernameAvailable) {
                throw Error(`Username ${userName} is taken`);
            }
            const newUser = new User(input);
            return newUser.save();
        },
        addChirp: async (_, { input }) => {
            const { authorId, message } = input;
            if (!message) {
                throw Error("Invalid chirp, must contain contents");
            }
            const validAuthor = await isValidUserId(authorId);
            if (!validAuthor) {
                throw Error("Invalid author Id");
            }
            const newChirp = new Chirp({ author: authorId, message });
            return newChirp.save();
        },
        addComment: async (_, { input }) => {
            const { authorId, parentChirpId, message } = input;
            if (!message) {
                throw Error("Invalid comment, must contain contents");
            }
            const validAuthor = await isValidUserId(authorId);
            if (!validAuthor) {
                throw Error("Invalid author Id");
            }
            const validParentChirp = await isValidChirpId(parentChirpId);
            if (!validParentChirp) {
                throw Error("Invalid parent chirp Id");
            }
            const newComment = new Comment({
                author: authorId,
                parentChirp: parentChirpId,
                message,
            });
            return newComment.save();
        },
        addRechirp: async (_, { input }) => {
            const { userId, originalChirpId } = input;
            const validUser = await isValidUserId(userId);
            if (!validUser) {
                throw Error("Invalid user Id");
            }
            const validOriginalChirp = await isValidChirpId(originalChirpId);
            if (!validOriginalChirp) {
                throw Error("Invalid parent chirp Id");
            }
            const newRechirp = new Rechirp({ user: userId, originalChirp: originalChirpId });
            return newRechirp.save();
        },
    },
};
