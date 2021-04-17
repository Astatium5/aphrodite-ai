import mongoose from 'mongoose';

const modelName = 'Photo';

const photoSchema = new mongoose.Schema({
  URL: String,
  dateUploaded: { type: Date, default: new Date() },
  cancer: Boolean,
});

export default photoSchema;
