import dotenv from 'dotenv';
import setup from './services/serverSetUp.js';
import pino from 'pino';

(async function main() {
  dotenv.config();

  const app = await setup();

  app.listen(5000);

  pino().info('Server is running on port 5000.');
}());
