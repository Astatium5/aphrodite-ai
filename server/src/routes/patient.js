import express from 'express';
import Patient from '../controllers/patient.js';

const patientRouter = express.Router();

patientRouter.post('/create', Patient.create);
patientRouter.get('/fetchOne/:id', Patient.fetchOne);
patientRouter.get('/fetchAll/:creatorId', Patient.fetchAll);
patientRouter.delete('/delete/:id', Patient.delete);
patientRouter.put('/update', Patient.update);
patientRouter.post('/uploadImage', Patient.uploadImage);

export default patientRouter;
