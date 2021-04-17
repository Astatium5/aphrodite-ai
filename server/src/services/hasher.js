import bcrypt from 'bcrypt';

const Hasher = {
  hash: async (plaintext) => bcrypt.hash(plaintext, 10),
  validateHash: async (plaintext, hash) => bcrypt.compare(plaintext, hash),
};

export default Hasher;
