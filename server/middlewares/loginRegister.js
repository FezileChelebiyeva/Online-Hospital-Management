const Patients = require("../models/loginRegister");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
module.exports.checkAdmin = async (req, res, next) => {
    const token = req.cookies.jwt;
    console.log(next);
    console.log(token);
    if (token) {
      jwt.verify(token, "secretkey", async (err, decodedToken) => {
        if (err) {
          res.json({ err });
          next();
          console.log("error:", err);
        } else {
          const patient = await Patients.findById(decodedToken.id);
  
          if (patient) {
            res.json({ status: true, patient: patient._id });
          } else {
            res.json({ status: false });
            next();
          }
        }
      });
    } else {
      res.json({ status: false });
      next();
    }
};

module.exports.changePassword = async (req, res) => {
  try {
    const { id } = req.params;
    let { yourPassword, newPassword } = req.body;
    const patient = await Patients.findById(id);
    if (!patient) {
      return res.status(400).send("patinet not found");
    }

    const passwordMatch = await bcrypt.compare(yourPassword, patient.password);

    if (!passwordMatch) {
      return res.status(400).send("password incorrect");
    }

    await Patients.findByIdAndUpdate(id);

    const newHashedPassword = await bcrypt.hash(newPassword, 10);
    patient.password = newHashedPassword;
    await patient.save();

    res.status(200).json({ message: "Password updated" });
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
};
