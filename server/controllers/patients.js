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

// module.exports.deleteDoctorInfo = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletedDoctor = await Doctors.findByIdAndDelete(id);
//     res
//       .status(200)
//       .send(deletedDoctor)
//       .json({ message: "Deleted Doctor information" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports.updateDoctorsData = async (req, res) => {
//   console.log(req);
//   const { id } = req.params;
//   try {
//     const updatedDoctorData = await Doctors.findByIdAndUpdate(id, req.body);
//     res
//       .status(201)
//       .send(updatedDoctorData)
//       .json({ message: "Updated Doctor information" });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

