import mongoose from "mongoose";

const { Schema } = mongoose;

const patientsSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    doctor: {
      type: String,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
      required: true,
    },
    // gender: {
    //   type: String,
    //   required: true,
    // },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Patients = mongoose.model("patients", patientsSchema);
// Patients = module.exports;

export default Patients;
