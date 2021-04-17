import express from 'express';
import router from '../routes/index.js';
import { connectToDB } from './mongo.js';
import cors from 'cors';

const setUpServer = async () => {
  const app = express();

  await connectToDB();

  app.use(
    cors(),
    express.json(),
    router,
  );

  return app;
};

export default setUpServer;
