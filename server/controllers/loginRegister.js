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
  const hashedPassword = await bcrypt.hash(password, 8);
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
      image: req.body.image,
      address: req.body.address,
      phone: req.body.phone,
      isAdmin: req.body.isAdmin,
    });

    const result = await newPatient.save();
    const { password, ...rest } = result.toJSON();
    const token = createToken(newPatient._id);

    res.cookie("jwt", token, {
      withCredentials: true,
      maxAge: maxAge * 1000,
    });
    res.status(201).json({ patient: newPatient, created: true });
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
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

module.exports.changePassword = async (req, res) => {
  const { currentPassword, newPassword, confrimPassword, email } = req.body;

  const patient = await Patients.findOne({ email: email });

  if (!patient) {
    return res.status(404).send("Patient not found");
  }
  const isCurrentPasswordValid = await bcrypt.compare(
    currentPassword,
    patient.password
  );
  if (!isCurrentPasswordValid) {
    return res.status(400).send("Invalid current password");
  }
  if (newPassword !== confrimPassword) {
    return res.status(400).send("New password do not match");
  }
  // if (newPassword.length < 8) {
  //   return res.status(400).send("New password do not match");
  // }
  const salt = await bcrypt.genSalt(8);
  const hashedPassword = await bcrypt.hash(newPassword, salt);

  patient.password = hashedPassword;
  await patient.save();

  res.send("Password updated");
};

module.exports.logout = async (req, res) => {
  const cookies = req.cookies;
  console.log(cookies);
  console.log("======1");
  if (!cookies?.jwt) {
    return res.status(403).send();
  }
  res.clearCookie("jwt", { httpOnly: true, someSite: "None", secure: true });
  return res.status(200).json({ message: "Cookie cleared" }).send();
};
