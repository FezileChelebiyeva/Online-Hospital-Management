import mongoose from "mongoose";

const { Schema } = mongoose;

const patientsSchema = new Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    location: { type: String, required: true },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Patients = mongoose.model("patients", patientsSchema);
// Patients = module.exports;

export default Patients;
