import dotenv from 'dotenv';
import setup from './services/serverSetUp.js';

(async function main() {
  dotenv.config();

  const app = await setup();

  app.listen(5000);
}());
