// db.js

const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

let connectionPromise;
let warnedAboutLegacyName = false;

const getMongoUri = () => {
  if (process.env.MONGODB_URI) return process.env.MONGODB_URI;

  if (process.env.MONGO_URI) {
    if (!warnedAboutLegacyName) {
      console.warn(
        "[Config] MONGO_URI is deprecated; rename it to MONGODB_URI."
      );
      warnedAboutLegacyName = true;
    }
    return process.env.MONGO_URI;
  }

  throw new Error(
    "Missing required MONGODB_URI environment variable. Add it to the server environment (never to frontend/Vite variables)."
  );
};

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (!connectionPromise) {
    const uri = getMongoUri();
    connectionPromise = mongoose.connect(uri)
      .then(() => {
        console.log("MongoDB is connected");
        return mongoose.connection;
      })
      .catch((error) => {
        connectionPromise = undefined;
        throw new Error(`MongoDB connection failed: ${error.message}`);
      });
  }

  return connectionPromise;
};

module.exports = connectDB;
module.exports.getMongoUri = getMongoUri;
