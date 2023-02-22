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

const router = express.Router();
function useRouter(router) {
  router.get("/doctors", getDoctorsData);
  router.get("/patients", getPatientsData);
  router.get("/doctors/:id", getDoctorsDataById);
  router.get("/patients/:id", getPatientsDataById);
  router.delete("/doctors/:id", deleteDoctorInfo);
  router.post("/doctors", createNewDoctorInfo);
  router.put("/doctors/:id", updateDoctorsData);
}

module.exports = useRouter;
