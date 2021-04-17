import mongoose from 'mongoose';

const connectToDB = async () => {
  const connectionOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };

  try {
    await mongoose.connect('mongodb://mongoDB/db', connectionOptions);
  } catch (error) {
    throw new Error(error);
  }
};

const disconnectFromDB = async () => {
  await mongoose.connection.close();
};

export { connectToDB, disconnectFromDB };
