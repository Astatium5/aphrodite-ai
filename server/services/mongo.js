import mongoose from 'mongoose';

const connectToDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true });
  } catch (error) {
    throw new Error(error);
  }
};

const disconnectFromDB = async () => {
  await mongoose.connection.close();
};

export { connectToDB, disconnectFromDB };