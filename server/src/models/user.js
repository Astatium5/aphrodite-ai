import mongoose from 'mongoose';

const modelName = 'User';

const userSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model(modelName, userSchema);

export default User;
