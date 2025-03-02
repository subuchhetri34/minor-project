const mongoose = require('mongoose');

const connectDB = async () => {
  try {
   const connectionInstance =  await mongoose.connect(process.env.MONGODBURI);
   console.log(`mongodb connected as hostname :${connectionInstance.connection.host}`)

    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;