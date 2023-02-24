const Doctors = require("../models/doctors.js");
const Patients = require("../models/loginRegister.js");
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

module.exports.getPatientsData = async (req, res) => {
  try {
    const patients = await Patients.find();
    res.status(200).json(patients);
    console.log("get patients");
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

module.exports.createNewDoctorInfo = async (req, res) => {
  console.log(req);
  const newDoctor = new Doctors(req.body);
  try {
    await newDoctor.save();
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.deleteDoctorInfo = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDoctor = await Doctors.findByIdAndDelete(id);
    res.status(200).json(deletedDoctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.updateDoctorsData = async (req, res) => {
  console.log(req);
  const { id } = req.params;
  try {
    const updatedDoctorData = await Doctors.findByIdAndUpdate(id, req.body);
    res.status(201).json(updatedDoctorData);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message === "User not found")
    errors.email = "Email is not registered";

  if (err.message === "Incorrect password")
    errors.password = "Password is incorrect";

  if (err.code === 11000) {
    errors.email = "Email is already registered";
    return errors;
  }

  if (err.message.includes("Users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, "secret");
};

module.exports.register = async (req, res) => {
  const { password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 16);

  try {
    const newPatient = new Patients({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      doctor: req.body.doctor,
      job: req.body.job,
      birthday: req.body.birthday,
      address: req.body.address,
      phone: req.body.phone,
    });

    const result = await newPatient.save();
    const { password, ...rest } = result.toJSON();
    const token = createToken(newPatient._id);
    res.cookie("jwt", token, {
      withCredentials: true,
      maxAge: maxAge * 1000,
    });
    res.status(201).json({ patient: newPatient._id, created: true });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(404).json({ message: errors, created: false });
  }
};

module.exports.login = async (req, res) => {
  try {
    const patient = Patients.findOne({ email: req.body.email });
    if (!patient) {
      throw Error({ message: "Patient not found" });
    }
    const passwordCheck = bcrypt.compare(req.body.password, patient.password);
    const token = createToken(patient._id);
    res.cookie("jwt", token, {
      withCredentials: true,
      maxAge: maxAge * 1000,
    });
    res.status(200).json({ patient: patient._id, created: true });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(404).json({ message: errors, created: false });
  }
};
