import * as Yup from "yup";

export const adminSchema = Yup.object().shape({
  email: Yup.string().required("Please enter a name"),
  password: Yup.string()
    .required("Please enter a password")
    .min(8, "must use min 8 characters!")
    .max(16, "must use max 16 characters!"),
});
