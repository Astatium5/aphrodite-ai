import express from 'express';
import Patient from '../controllers/patient.js';

const patientRouter = express.Router();

patientRouter.post('/create', Patient.create);
patientRouter.get('/fetch', Patient.fetch);
patientRouter.delete('/delete', Patient.delete);
patientRouter.put('/update', Patient.update);
patientRouter.post('/uploadImage', Patient.uploadImage);

export default patientRouter;
