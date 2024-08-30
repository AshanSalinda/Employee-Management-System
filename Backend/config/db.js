const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Database connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
  }
};

module.exports = connectDB;