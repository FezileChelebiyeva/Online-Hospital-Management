import * as Yup from "yup";

export const patientsSchema = Yup.object({
  firstName: Yup.string()
    .required("Please enter a first name")
    .max(20, "must use max 20 characters!")
    .matches(/^([A-Za-z]*)$/gi, "Surname can only contain letters."),
  lastName: Yup.string()
    .required("Please enter a last name")
    .max(20, "must use max 20 characters!")
    .matches(/^([A-Za-z]*)$/gi, "Surname can only contain letters."),
  password: Yup.string()
    .required("Please enter a password")
    .min(8, "must use min 8 characters!")
    .max(16, "must use max 16 characters!"),
  email: Yup.string().required("Please enter a email").email("must be email!"),
  doctor: Yup.string().required("Please select a doctor"),
  phone: Yup.string().required("Please enter a phone"),
  image: Yup.string().required("Please enter a image"),
  address: Yup.string().required("Please enter a address"),
  job: Yup.string().required("Please select a doctor's job"),
  birthday: Yup.string().required("Please select a your birthday"),
  // gender: Yup.array().of(Yup.string().required("Provide at least one tag")),
});
