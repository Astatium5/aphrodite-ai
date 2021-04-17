import setup from './services/serverSetUp.js';
import dotenv from 'dotenv';

(async function main() {
  dotenv.config();

  const app = await setup();

  app.listen(5000);
}());
