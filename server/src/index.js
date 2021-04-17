import express from 'express';
import router from './routes/index';

(async function main() {
  const app = express();

  app.use(
    router,
    express.json(),
  );

  app.listen(5000);
}());
