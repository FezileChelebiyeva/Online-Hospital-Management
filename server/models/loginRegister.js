const mongoose = require("mongoose");
const Joi = require("joi");
const { options } = require("joi");
const joigoose = require("joigoose")((mongoose, { convert: false }));

const joiPatientsSchema = Joi.object({
  firstName: Joi.string()
    .required("this input is required")
    .regex(/^([A-Za-z]*)$/, "job can only contain letters."),
  lastName: Joi.string()
    .required("this input is required")
    .regex(/^([A-Za-z]*)$/, "job can only contain letters."),
  email: Joi.string()
    .required("this input is required")
    .email(),
  password: Joi.string().required("this input is required"),
  doctor: Joi.string().required("this input is required"),
  job: Joi.string().required("this input is required"),
  birthday: Joi.string().required("this input is required"),
  address: Joi.string().required("this input is required"),
  phone: Joi.string().required("this input is required"),
});

const { Schema } = mongoose;

const patientsSchema = new Schema(joigoose.convert(joiPatientsSchema, options));

const Patients = mongoose.model("patients", patientsSchema);

module.exports = Patients;
