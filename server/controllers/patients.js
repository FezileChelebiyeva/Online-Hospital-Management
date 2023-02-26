const Patients = require("../models/loginRegister.js");

module.exports.getPatientsData = async (req, res) => {
  try {
    const patients = await Patients.find();
    res.status(200).json(patients);
    console.log("get patients");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getPatientsDataById = async (req, res) => {
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

// module.exports.createNewDoctorInfo = async (req, res) => {
//   console.log(req);
//   const newDoctor = new Doctors(req.body);
//   try {
//     await newDoctor.save();
//     res.status(201).send(newDoctor).json({ message: "Added New Doctor" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

module.exports.deletePatientInfo = async (req, res) => {
  console.log("delete");
  const { id } = req.params;
  try {
    const deletedPatient = await Patients.findByIdAndDelete(id);
    res.status(200).json(deletedPatient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.updatePatientsData = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedData = await Patients.findByIdAndUpdate(id, req.body);
    res.status(201).json(updatedData);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// {
//   firstName: req.body.firstName,
//   lastName: req.body.lastName,
//   email: req.body.email,
//   password: req.body.password,
//   doctor: req.body.doctor,
//   job: req.body.job,
//   birthday: req.body.birthday,
//   address: req.body.address,
//   phone: req.body.phone,
//   image: req.body.firstName,
// }
