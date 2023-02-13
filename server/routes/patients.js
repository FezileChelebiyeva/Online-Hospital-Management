import express from "express";
import {
  createNewPatientInfo,
  deletePatientInfo,
  getPatientsData,
  getPatientsDataById,
  updatePatientsData,
} from "../controllers/patients.js";

const router = express.Router();

router.get("/", getPatientsData);
router.get("/:id", getPatientsDataById);
router.delete("/:id", deletePatientInfo);
router.post("/", createNewPatientInfo);
router.put("/:id", updatePatientsData);

export default router;
