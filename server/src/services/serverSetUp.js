import express from 'express';
import router from '../routes/index.js';
import { connectToDB } from './mongo.js';

const setUpServer = async () => {
  const app = express();

  await connectToDB();

  app.use(
    express.json(),
    router,
  );

  return app;
};

export default setUpServer;
