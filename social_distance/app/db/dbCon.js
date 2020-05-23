const mongoose = require("mongoose");
mongoose.set("bufferCommands", false);

const testMongoDBUrl = "mongodb://localhost:27017/social";
let isConnected;

exports.dbConn = async function () {
  const dbUrl = process.env.MONGODB_URL || testMongoDBUrl;
  if (!!isConnected) return isConnected;
  try {
    const db = await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    isConnected = db.connections[0].readyState;
    console.log('DB connection establish successfully');
    return isConnected;
  } catch (err) {
    throw [500, "M500", false, "Something happen wrong"];
  }
};