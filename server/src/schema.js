const { composeMongoose } = require("graphql-compose-mongoose");
const { schemaComposer } = require("graphql-compose");

const { User, Chirp, Comment, Rechirp } = require("./models");

// User
const UserTC = composeMongoose(User);
schemaComposer.Query.addFields({
    userById: UserTC.mongooseResolvers.findById(),
    userByIds: UserTC.mongooseResolvers.findByIds(),
    userOne: UserTC.mongooseResolvers.findOne(),
    userMany: UserTC.mongooseResolvers.findMany(),
    userDataLoader: UserTC.mongooseResolvers.dataLoader(),
    userDataLoaderMany: UserTC.mongooseResolvers.dataLoaderMany(),
    userCount: UserTC.mongooseResolvers.count(),
    userConnection: UserTC.mongooseResolvers.connection(),
    userPagination: UserTC.mongooseResolvers.pagination(),
});
schemaComposer.Mutation.addFields({
    userCreateOne: UserTC.mongooseResolvers.createOne(),
    userCreateMany: UserTC.mongooseResolvers.createMany(),
    userUpdateById: UserTC.mongooseResolvers.updateById(),
    userUpdateOne: UserTC.mongooseResolvers.updateOne(),
    userUpdateMany: UserTC.mongooseResolvers.updateMany(),
    userRemoveById: UserTC.mongooseResolvers.removeById(),
    userRemoveOne: UserTC.mongooseResolvers.removeOne(),
    userRemoveMany: UserTC.mongooseResolvers.removeMany(),
});

// Chirp
const ChirpTC = composeMongoose(Chirp);
schemaComposer.Query.addFields({
    userById: ChirpTC.mongooseResolvers.findById(),
    userByIds: ChirpTC.mongooseResolvers.findByIds(),
    userOne: ChirpTC.mongooseResolvers.findOne(),
    userMany: ChirpTC.mongooseResolvers.findMany(),
    userDataLoader: ChirpTC.mongooseResolvers.dataLoader(),
    userDataLoaderMany: ChirpTC.mongooseResolvers.dataLoaderMany(),
    userCount: ChirpTC.mongooseResolvers.count(),
    userConnection: ChirpTC.mongooseResolvers.connection(),
    userPagination: ChirpTC.mongooseResolvers.pagination(),
});
schemaComposer.Mutation.addFields({
    userCreateOne: ChirpTC.mongooseResolvers.createOne(),
    userCreateMany: ChirpTC.mongooseResolvers.createMany(),
    userUpdateById: ChirpTC.mongooseResolvers.updateById(),
    userUpdateOne: ChirpTC.mongooseResolvers.updateOne(),
    userUpdateMany: ChirpTC.mongooseResolvers.updateMany(),
    userRemoveById: ChirpTC.mongooseResolvers.removeById(),
    userRemoveOne: ChirpTC.mongooseResolvers.removeOne(),
    userRemoveMany: ChirpTC.mongooseResolvers.removeMany(),
});

// Comment
const CommentTC = composeMongoose(Comment);
schemaComposer.Query.addFields({
    userById: CommentTC.mongooseResolvers.findById(),
    userByIds: CommentTC.mongooseResolvers.findByIds(),
    userOne: CommentTC.mongooseResolvers.findOne(),
    userMany: CommentTC.mongooseResolvers.findMany(),
    userDataLoader: CommentTC.mongooseResolvers.dataLoader(),
    userDataLoaderMany: CommentTC.mongooseResolvers.dataLoaderMany(),
    userCount: CommentTC.mongooseResolvers.count(),
    userConnection: CommentTC.mongooseResolvers.connection(),
    userPagination: CommentTC.mongooseResolvers.pagination(),
});
schemaComposer.Mutation.addFields({
    userCreateOne: CommentTC.mongooseResolvers.createOne(),
    userCreateMany: CommentTC.mongooseResolvers.createMany(),
    userUpdateById: CommentTC.mongooseResolvers.updateById(),
    userUpdateOne: CommentTC.mongooseResolvers.updateOne(),
    userUpdateMany: CommentTC.mongooseResolvers.updateMany(),
    userRemoveById: CommentTC.mongooseResolvers.removeById(),
    userRemoveOne: CommentTC.mongooseResolvers.removeOne(),
    userRemoveMany: CommentTC.mongooseResolvers.removeMany(),
});

// Rechirp
const RechirpTC = composeMongoose(Rechirp);
schemaComposer.Query.addFields({
    userById: RechirpTC.mongooseResolvers.findById(),
    userByIds: RechirpTC.mongooseResolvers.findByIds(),
    userOne: RechirpTC.mongooseResolvers.findOne(),
    userMany: RechirpTC.mongooseResolvers.findMany(),
    userDataLoader: RechirpTC.mongooseResolvers.dataLoader(),
    userDataLoaderMany: RechirpTC.mongooseResolvers.dataLoaderMany(),
    userCount: RechirpTC.mongooseResolvers.count(),
    userConnection: RechirpTC.mongooseResolvers.connection(),
    userPagination: RechirpTC.mongooseResolvers.pagination(),
});
schemaComposer.Mutation.addFields({
    userCreateOne: RechirpTC.mongooseResolvers.createOne(),
    userCreateMany: RechirpTC.mongooseResolvers.createMany(),
    userUpdateById: RechirpTC.mongooseResolvers.updateById(),
    userUpdateOne: RechirpTC.mongooseResolvers.updateOne(),
    userUpdateMany: RechirpTC.mongooseResolvers.updateMany(),
    userRemoveById: RechirpTC.mongooseResolvers.removeById(),
    userRemoveOne: RechirpTC.mongooseResolvers.removeOne(),
    userRemoveMany: RechirpTC.mongooseResolvers.removeMany(),
});

exports.schema = schemaComposer.buildSchema();
