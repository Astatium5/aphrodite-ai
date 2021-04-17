import mongoose from 'mongoose';
import Patient from './patient.js';

const modelName = 'User';

const userSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  password: String,
  patients: [Patient],
});

const User = mongoose.model(modelName, userSchema);

export default User;
