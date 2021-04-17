import mongoose from 'mongoose';

const modelName = 'Patient';

const PatientSchema = new mongoose.Schema({
  URL: String,
  dateUploaded: { type: Date, default: new Date() },
  cancerCategory: Number,

});

export default PatientSchema;
