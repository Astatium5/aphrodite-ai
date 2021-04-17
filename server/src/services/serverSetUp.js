import express from 'express';
import cors from 'cors';
import router from '../routes/index.js';
import { connectToDB } from './mongo.js';

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
