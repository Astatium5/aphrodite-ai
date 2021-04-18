import PatientModel from '../models/patient.js';

const Patient = {
  create: async (req, res) => {
    const {
      patientName, email, age, creatorId,
    } = req.body;

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

  fetchOne: async (req, res) => {
    const { id } = req.params;
    let patient;

    try {
      patient = await PatientModel.findById(id).exec();
    } catch (err) {
      return res.status(500).send({
        error: 'Internal error',
      });
    }

    if (!patient) {
      return res.status(404).send({
        error: 'Patient was not found.',
      });
    }

    patient = patient.toJSON();
    return res.status(200).send(patient);
  },

  fetchAll: async (req, res) => {
    const { creatorId } = req.params;
    let patients;

    try {
      patients = await PatientModel.find({ creatorId }).exec();
    } catch (err) {
      return res.status(500).send({
        error: 'Internal error',
      });
    }

    if (!patients) {
      return res.status(404).send({
        error: 'No patients were found for the given creator ID.',
      });
    }

    return res.status(200).send(patients);
  },

  delete: async (req, res) => {
    const { id } = req.params;
    const patient = await PatientModel.findById(id).exec();

    if (!patient) {
      return res.status(404).send({
        error: 'The patient with the given ID was not found.',
      });
    }

    await patient.deleteOne();
    return res.status(204).send();
  },

  uploadImage: async (req, res) => {
    const { id } = req.params;

    if (!req.file) {
      res.status(415).send({
        error: 'Could not find the file attached.',
      });
    }

    const patient = await PatientModel.findById(id);

    const imageBuffer = req.file.buffer;

    try {
      await patient.updateOne({ photo: imageBuffer }).exec();
    } catch (err) {
      return res.status(500).send({
        error: 'Internal error',
      });
    }

    return res.status(200).send(imageBuffer);
  },
};

export default Patient;
