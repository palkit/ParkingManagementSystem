const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(`Database Connected: ${connection.host} - ${connection.name}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDb;
