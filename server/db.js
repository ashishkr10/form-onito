const mongoose = require("mongoose");

const mongoURL = "mongodb+srv://admin:<password>@cluster0.t4r9gbi.mongodb.net/";

const connectToMongo = async () => {
  await mongoose.connect(mongoURL, () => {
    console.log("Connected to mongoose successfully");
  });
};

module.exports = connectToMongo;
