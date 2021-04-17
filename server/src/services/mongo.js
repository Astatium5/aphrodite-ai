import mongoose from 'mongoose';

const connectToDB = async () => {
  const connectionOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };

  try {
    await mongoose.connect('mongodb://localhost:27017/db', connectionOptions);
  } catch (error) {
    throw new Error(error);
  }
};

const disconnectFromDB = async () => {
  await mongoose.connection.close();
};

export { connectToDB, disconnectFromDB };
