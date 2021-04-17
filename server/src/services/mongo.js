import mongoose from 'mongoose';
import pino from 'pino';

const connectToDB = async () => {
  const connectionOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };

  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);

  try {
    await mongoose.connect(process.env.MONGO_URI, connectionOptions);
  } catch (error) {
    throw new Error(error);
  }

  pino().info('MongoDB is connected.');
};

const disconnectFromDB = async () => {
  await mongoose.connection.close();
};

export { connectToDB, disconnectFromDB };
