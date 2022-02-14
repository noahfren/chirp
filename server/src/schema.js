import { schemaComposer } from "graphql-compose";

import { userQueries, userMutations } from "./User.js";

schemaComposer.Query.addFields(userQueries);
schemaComposer.Mutation.addFields(userMutations);

export default schemaComposer.buildSchema();

// import { composeMongoose } from "graphql-compose-mongoose";
// import { Chirp, Comment, Rechirp } from "./models";
// // Chirp
// const ChirpTC = composeMongoose(Chirp);
// schemaComposer.Query.addFields({
//     userById: ChirpTC.mongooseResolvers.findById(),
//     userByIds: ChirpTC.mongooseResolvers.findByIds(),
//     userOne: ChirpTC.mongooseResolvers.findOne(),
//     userMany: ChirpTC.mongooseResolvers.findMany(),
//     userDataLoader: ChirpTC.mongooseResolvers.dataLoader(),
//     userDataLoaderMany: ChirpTC.mongooseResolvers.dataLoaderMany(),
//     userCount: ChirpTC.mongooseResolvers.count(),
//     userConnection: ChirpTC.mongooseResolvers.connection(),
//     userPagination: ChirpTC.mongooseResolvers.pagination(),
// });
// schemaComposer.Mutation.addFields({
//     userCreateOne: ChirpTC.mongooseResolvers.createOne(),
//     userCreateMany: ChirpTC.mongooseResolvers.createMany(),
//     userUpdateById: ChirpTC.mongooseResolvers.updateById(),
//     userUpdateOne: ChirpTC.mongooseResolvers.updateOne(),
//     userUpdateMany: ChirpTC.mongooseResolvers.updateMany(),
//     userRemoveById: ChirpTC.mongooseResolvers.removeById(),
//     userRemoveOne: ChirpTC.mongooseResolvers.removeOne(),
//     userRemoveMany: ChirpTC.mongooseResolvers.removeMany(),
// });

// // Comment
// const CommentTC = composeMongoose(Comment);
// schemaComposer.Query.addFields({
//     userById: CommentTC.mongooseResolvers.findById(),
//     userByIds: CommentTC.mongooseResolvers.findByIds(),
//     userOne: CommentTC.mongooseResolvers.findOne(),
//     userMany: CommentTC.mongooseResolvers.findMany(),
//     userDataLoader: CommentTC.mongooseResolvers.dataLoader(),
//     userDataLoaderMany: CommentTC.mongooseResolvers.dataLoaderMany(),
//     userCount: CommentTC.mongooseResolvers.count(),
//     userConnection: CommentTC.mongooseResolvers.connection(),
//     userPagination: CommentTC.mongooseResolvers.pagination(),
// });
// schemaComposer.Mutation.addFields({
//     userCreateOne: CommentTC.mongooseResolvers.createOne(),
//     userCreateMany: CommentTC.mongooseResolvers.createMany(),
//     userUpdateById: CommentTC.mongooseResolvers.updateById(),
//     userUpdateOne: CommentTC.mongooseResolvers.updateOne(),
//     userUpdateMany: CommentTC.mongooseResolvers.updateMany(),
//     userRemoveById: CommentTC.mongooseResolvers.removeById(),
//     userRemoveOne: CommentTC.mongooseResolvers.removeOne(),
//     userRemoveMany: CommentTC.mongooseResolvers.removeMany(),
// });

// // Rechirp
// const RechirpTC = composeMongoose(Rechirp);
// schemaComposer.Query.addFields({
//     userById: RechirpTC.mongooseResolvers.findById(),
//     userByIds: RechirpTC.mongooseResolvers.findByIds(),
//     userOne: RechirpTC.mongooseResolvers.findOne(),
//     userMany: RechirpTC.mongooseResolvers.findMany(),
//     userDataLoader: RechirpTC.mongooseResolvers.dataLoader(),
//     userDataLoaderMany: RechirpTC.mongooseResolvers.dataLoaderMany(),
//     userCount: RechirpTC.mongooseResolvers.count(),
//     userConnection: RechirpTC.mongooseResolvers.connection(),
//     userPagination: RechirpTC.mongooseResolvers.pagination(),
// });
// schemaComposer.Mutation.addFields({
//     userCreateOne: RechirpTC.mongooseResolvers.createOne(),
//     userCreateMany: RechirpTC.mongooseResolvers.createMany(),
//     userUpdateById: RechirpTC.mongooseResolvers.updateById(),
//     userUpdateOne: RechirpTC.mongooseResolvers.updateOne(),
//     userUpdateMany: RechirpTC.mongooseResolvers.updateMany(),
//     userRemoveById: RechirpTC.mongooseResolvers.removeById(),
//     userRemoveOne: RechirpTC.mongooseResolvers.removeOne(),
//     userRemoveMany: RechirpTC.mongooseResolvers.removeMany(),
// });
