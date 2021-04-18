import express from 'express';
import multer from 'multer';
import Patient from '../controllers/patient.js';

const photo = multer({ storage: multer.memoryStorage() });
const patientRouter = express.Router();

patientRouter.post('/create', Patient.create);
patientRouter.get('/fetchOne/:id', Patient.fetchOne);
patientRouter.get('/fetchAll/:creatorId', Patient.fetchAll);
patientRouter.delete('/delete/:id', Patient.delete);
patientRouter.put('/update', Patient.update);
patientRouter.put('/uploadImage/:id', photo.single('photo'), Patient.uploadImage);

export default patientRouter;
