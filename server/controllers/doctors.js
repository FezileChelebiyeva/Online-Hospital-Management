const Doctors = require("../models/doctors.js");
const bcrypt = require("bcrypt");
module.exports.getDoctorsData = async (req, res) => {
  try {
    const doctors = await Doctors.find();
    res.status(200).json(doctors);
    console.log("get");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getDoctorsDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const doctors = await Doctors.findById(id);
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.createNewDoctorInfo = async (req, res) => {
  console.log(req);
  const newDoctor = new Doctors(req.body);
  try {
    await newDoctor.save();
    res.status(201).send(newDoctor).json({ message: "Added New Doctor" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.deleteDoctorInfo = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDoctor = await Doctors.findByIdAndDelete(id);
    res
      .status(200)
      .send(deletedDoctor)
      .json({ message: "Deleted Doctor information" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.updateDoctorsData = async (req, res) => {
  console.log(req);
  const { id } = req.params;
  try {
    const updatedDoctorData = await Doctors.findByIdAndUpdate(id, req.body);
    res
      .status(201)
      .send(updatedDoctorData)
      .json({ message: "Updated Doctor information" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
