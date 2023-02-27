const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const { options } = require("joi");
const joigoose = require("joigoose")((mongoose, { convert: false }));

const joiDoctorsSchema = Joi.object({
  image: Joi.string()
    .required("this input is required")
    .default(
      "https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
    ),
  doctorJob: Joi.string()
    .required("this input is required")
    .regex(/^([A-Za-z]*)$/, "job can only contain letters."),
  firstName: Joi.string()
    .required("this input is required")
    .regex(/^([A-Za-z]*)$/, "name can only contain letters."),
  lastName: Joi.string()
    .required("this input is required")
    .regex(/^([A-Za-z]*)$/, "name can only contain letters."),
  star: Joi.number().required("this input is required"),
  location: Joi.string().required("this input is required"),
  hour: Joi.string().required("this input is required"),
  money: Joi.string().required("this input is required"),
  email: Joi.string().required("this input is required").email(),
  password: Joi.string().required("this input is required"),
  gender: Joi.string().required("this input is required"),
  phone: Joi.string().required("this input is required"),
});

const { Schema } = mongoose;

const doctorsSchema = new Schema(joigoose.convert(joiDoctorsSchema, options));

const Doctors = mongoose.model("doctors", doctorsSchema);

module.exports = Doctors;
