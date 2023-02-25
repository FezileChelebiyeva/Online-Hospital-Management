const express = require("express");
const {
  getDoctorsData,
  getDoctorsDataById,
  createNewDoctorInfo,
  deleteDoctorInfo,
  updateDoctorsData,
} = require("../controllers/doctors.js");
const {
  getPatientsData,
  getPatientsDataById,
} = require("../controllers/patients.js");
const { register, login } = require("../controllers/loginRegister");

const {changePassword, checkAdmin} = require('../middlewares/loginRegister')

const router = express.Router();
function useRouter(router) {
  router.get("/doctors", getDoctorsData);
  router.post("/register", register);
  router.post("/login", login);
  router.post("/admin", checkAdmin);
  router.patch("/password/:id", changePassword);
  router.get("/patients", getPatientsData);
  router.get("/doctors/:id", getDoctorsDataById);
  router.get("/patients/:id", getPatientsDataById);
  router.delete("/doctors/:id", deleteDoctorInfo);
  router.post("/doctors", createNewDoctorInfo);
  router.put("/doctors/:id", updateDoctorsData);
}

module.exports = useRouter;
