const mongoose = require("mongoose");
const Joi = require("joi");
const { options } = require("joi");
const joigoose = require("joigoose")((mongoose, { convert: false }));

const joiPatientsSchema = Joi.object({
  image: Joi.string()
    .required("this input is required")
    .default(
      "https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
    ),
  firstName: Joi.string()
    .required("this input is required")
    .regex(/^([A-Za-z]*)$/, "job can only contain letters."),
  lastName: Joi.string()
    .required("this input is required")
    .regex(/^([A-Za-z]*)$/, "job can only contain letters."),
  email: Joi.string().required("this input is required").email(),
  password: Joi.string().required("this input is required"),
  doctor: Joi.string().required("this input is required"),
  job: Joi.string().required("this input is required"),
  birthday: Joi.string().required("this input is required"),
  address: Joi.string().required("this input is required"),
  phone: Joi.string().required("this input is required"),
  isAdmin: Joi.boolean().default(false),
});

const { Schema } = mongoose;

const patientsSchema = new Schema(joigoose.convert(joiPatientsSchema, options));

const Patients = mongoose.model("patients", patientsSchema);

module.exports = Patients;
