import PatientModel from '../models/patient.js';

const Patient = {
  create: async (req, res, next) => {
    const { patientName, email, age, creatorId } = req.body;

    const newPatient = new PatientModel({
      patientName,
      email,
      age,
      creatorId,
    });

    let patient;
    try {
      patient = await newPatient.save();
    } catch (err) {
      return res.status(500).send(err);
    }

    return res.status(201).send(patient);
  },

  fetchOne: async (req, res, next) => {
    
  },

  fetchAll: async (req, res, next) => {

  }, 

  delete: async (req, res, next) => {
    const { id } = req.body;
    const patient = await PatientModel.findById(id).exec();

    if (!patient) {
      return res.status(404).send({
        error: 'The patient with the given ID was not found.',
      });
    }

    await group.deleteOne();
    return res.status(204).send();
  },

  update: async (req, res, next) => {},

  uploadImage: async (req, res, next) => {},
};

export default Patient;
