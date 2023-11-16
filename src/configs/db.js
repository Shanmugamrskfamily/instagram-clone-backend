const mongoose = require("mongoose");
require('dotenv').config();


const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    const con = await mongoose.connect(URI);
    console.log("DB Connected Successfully ✅");
  } catch (e) {
    console.log(`Authentication to database failed ❗`);
    process.exit(1);
  }
};

module.exports = connectDB;
