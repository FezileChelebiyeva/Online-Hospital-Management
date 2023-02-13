import Patients from "../models/patients.js";

export const getPatientsData = async (req, res) => {
  try {
    const patients = await Patients.find();
    res.status(200).json(patients);
    console.log("get");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPatientsDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const patients = await Patients.findById(id);
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createNewPatientInfo = async (req, res) => {
  console.log(req);
  const newPatient = new Patients(req.body);
  try {
    await newPatient.save();
    res.status(201).send(newPatient).json({ message: "Added New Patient" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePatientInfo = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPatient = await Patients.findByIdAndDelete(id);
    res
      .status(200)
      .send(deletedPatient)
      .json({ message: "Deleted Patient information" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePatientsData = async (req, res) => {
  console.log(req);
  const { id } = req.params;
  try {
    const updatedPatientData = await Patients.findByIdAndUpdate(id, req.body);
    res
      .status(201)
      .send(updatedPatientData)
      .json({ message: "Updated Patient information" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
