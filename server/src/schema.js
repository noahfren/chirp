const { gql } = require("apollo-server");

exports.typeDefs = gql`
    type User {
        _id: ID!
        userName: String
        displayName: String
    }

    input UserInput {
        userName: String
        displayName: String
        password: String
    }

    type Chirp {
        _id: ID!
        author: User
        message: String
        createdAt: String
    }

    input ChirpInput {
        authorId: ID
        message: String
    }

    type Comment {
        _id: ID!
        author: User
        parentChirp: Chirp
        message: String
    }

    input CommentInput {
        authorId: ID
        parentChirpId: ID
        message: String
    }

    type Rechirp {
        _id: ID
        user: User
        originalChirp: Chirp
    }

    input RechirpInput {
        userId: ID
        originalChirpId: ID
    }

    union TimelineContent = Chirp | Comment | Rechirp

    type Query {
        userById(id: ID): User
        userByUserName(userName: String): User
        users: [User]
        chirps: [Chirp]
        comments: [Comment]
        rechirps: [Rechirp]
        timeline: [TimelineContent]
    }

    type Mutation {
        addUser(input: UserInput): User
        addChirp(input: ChirpInput): Chirp
        addComment(input: CommentInput): Comment
        addRechirp(input: RechirpInput): Rechirp
    }
`;
