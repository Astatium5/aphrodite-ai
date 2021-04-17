import mongoose from 'mongoose';
import Patient from './patient';

const modelName = 'User';

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  patients: [Patient],
});

const User = mongoose.model(modelName, userSchema);

export default User;
