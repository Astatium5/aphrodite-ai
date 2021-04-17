import setup from './services/serverSetUp.js';

(async function main() {
  const app = await setup();

  app.listen(5000);
}());
