import * as Yup from "yup";

export const adminSchema = Yup.object().shape({
  name: Yup.string().required("Please enter a name"),
  adminPassword: Yup.string()
    .required("Please enter a password")
    .min(8, "must use min 8 characters!")
    .max(16, "must use max 16 characters!"),
});
