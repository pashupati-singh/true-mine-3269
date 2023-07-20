const mongoose = require("mongoose");
require("dotenv").config();

const connection = async () => {
  try {
    const network = await mongoose.connect(process.env.MONGODB_URL);

    console.log("Database connected successfully...");
  } catch (error) {
    console.log({ error: error.message });
  }
};

module.exports = connection;
