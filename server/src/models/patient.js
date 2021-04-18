import mongoose from 'mongoose';

const modelName = 'Patient';

const PatientSchema = new mongoose.Schema({
  patientName: String,
  email: String,
  age: Number,
  creatorId: String,
  dateUploaded: { type: Date, default: Date.now },
  photo: Buffer,
  coordinates: Number,
});

const Patient = mongoose.model(modelName, PatientSchema);

export default Patient;
