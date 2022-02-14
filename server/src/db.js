import mongoose from "mongoose";

const url = "mongodb://chirp:chirp@localhost:27017/chirp";

mongoose.connect(url);
mongoose.connection.once('open', () => console.log(`Conected to mongodb at ${url}`));
