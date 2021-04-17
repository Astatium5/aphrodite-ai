import PatientModel from '../models/patient.js';

const Patient = {
  fetch: async (req, res, next) => {

  },

  create: async (req, res, next) => {
    const { fullName, email, creatorId } = req.body;

    const newPatient = new PatientModel({
      fullName,
      email,
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

  delete: async (req, res, next) => {
    const { id } = req.body;
    const patient = await PatientModel.findById(id).exec();

    if (!patient) {
      return res.status(404).send({
        error: 'The patient with the given ID was not found.',
      });
    }
  },

  update: async (req, res, next) => {},

  uploadImage: async (req, res, next) => {},
};

export default Patient;
