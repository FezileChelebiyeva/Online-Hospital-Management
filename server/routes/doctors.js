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
  deletePatientInfo,
  updatePatientsData
} = require("../controllers/patients.js");
const { register, login, changePassword, logout } = require("../controllers/loginRegister");


const router = express.Router();
function useRouter(router) {
  router.get("/doctors", getDoctorsData);
  router.post("/register", register);
  router.post("/login", login);
  router.post("/logout", logout);
  router.post("/password", changePassword);
  router.get("/patients", getPatientsData);
  router.get("/doctors/:id", getDoctorsDataById);
  router.get("/patients/:id", getPatientsDataById);
  router.delete("/patients/:id", deletePatientInfo);
  router.delete("/doctors/:id", deleteDoctorInfo);
  router.post("/doctors", createNewDoctorInfo);
  router.put("/doctors/:id", updateDoctorsData);
  router.put("/patients/:id", updatePatientsData);
}

module.exports = useRouter;
