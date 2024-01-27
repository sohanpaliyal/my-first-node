const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_DB_URL}`,{
        family: 4,
    });
    console.log(" Mongodb Connection successful");
  } catch (error) {
    console.error("Connection failed:", error);
    throw error; // Rethrow the error to indicate connection failure
  }
};

module.exports = connectToDatabase;
