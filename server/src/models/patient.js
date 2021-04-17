import mongoose from 'mongoose';

const modelName = 'Patient';

const PatientSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  photoURL: String,
  dateUploaded: { type: Date, default: new Date() },
  coordinates: Number
});

export default PatientSchema;
