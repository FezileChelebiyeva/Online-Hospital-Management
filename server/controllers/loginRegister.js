const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Patients = require("../models/loginRegister");
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return (
    jwt.sign({ id }, "kishan sheth super secret key"),
    {
      expiresIn: maxAge,
    }
  );
};

module.exports.register = async (req, res) => {
  const { password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 16);
  try {
    console.log(req.body);
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
    console.log(err);
    res.status(404).json(err);
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    if (!email || !password) {
      return res.status(400).send("Please provide username and password");
    }
    const patient = await Patients.findOne({ email: email }).exec();

    if (!patient) {
      return res.status(400).send("Invalid username or password");
    }

    console.log(patient);

    const passwordMatch = await bcrypt.compare(password, patient.password);

    if (!passwordMatch) {
      return res.status(400).send("Invalid email or password");
    }

    const token = createToken(patient._id);

    res.cookie("jwt", token, {
      withCredentials: true,
      maxAge: maxAge * 1000,
    });
    res.status(200).json({ patient: patient, created: true });
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
};
