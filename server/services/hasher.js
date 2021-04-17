import bcrypt from 'bcrypt';

const PasswordHasher = {
  hash: async (plaintext) => bcrypt.hash(plaintext, 10),
  validateHash: async (plaintext, hash) => bcrypt.compare(plaintext, hash),
};

export default PasswordHasher;