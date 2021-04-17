import dotenv from 'dotenv';
import pino from 'pino';
import setup from './services/serverSetUp.js';

(async function main() {
  dotenv.config();

  const app = await setup();

  app.listen(5000);

  pino().info('Server is running on port 5000.');
}());
