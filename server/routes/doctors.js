import express from "express";
import {
  getDoctorsData,
  getDoctorsDataById,
  createNewDoctorInfo,
  deleteDoctorInfo,
  updateDoctorsData,
} from "../controllers/doctors.js";

const router = express.Router();

router.get("/", getDoctorsData);
router.get("/:id", getDoctorsDataById);
router.delete("/:id", deleteDoctorInfo);
router.post("/", createNewDoctorInfo);
router.put("/:id", updateDoctorsData);

export default router;
