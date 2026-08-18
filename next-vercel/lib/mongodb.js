import mongoose from "mongoose";

const globalForMongoose = globalThis;

if (!globalForMongoose.__fellowshipMongoose) {
  globalForMongoose.__fellowshipMongoose = {
    connection: null,
    promise: null,
  };
}

const cache = globalForMongoose.__fellowshipMongoose;

export function getMongoUri() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error(
      "Missing required MONGODB_URI environment variable. Configure it as a server-only Vercel variable."
    );
  }
  return uri;
}

export default async function connectDB() {
  if (cache.connection && mongoose.connection.readyState === 1) {
    return cache.connection;
  }

  if (!cache.promise) {
    cache.promise = mongoose.connect(getMongoUri(), { bufferCommands: false });
  }

  try {
    cache.connection = await cache.promise;
    return cache.connection;
  } catch (error) {
    cache.promise = null;
    throw new Error(`MongoDB connection failed: ${error.message}`);
  }
}
