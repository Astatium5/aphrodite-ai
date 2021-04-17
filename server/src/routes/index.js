import express from 'express';
import userRouter from './user.js';
import patientRouter from './patient.js';

const router = express.Router();

router.use('/users', userRouter);
router.use('/patients', patientRouter)

export default router;
