import * as Yup from "yup";

export const changePasswordSchema = Yup.object().shape({
  email: Yup.string().required("Please enter a email").email("should be email"),
  currentPassword: Yup.string()
    .required("Please enter a password")
    .min(8, "must use min 8 characters!")
    .max(16, "must use max 16 characters!"),
    newPassword: Yup.string()
    .required("Please enter a password")
    .min(8, "must use min 8 characters!")
    .max(16, "must use max 16 characters!"),
    confrimPassword: Yup.string()
    .required("Please enter a password")
    .min(8, "must use min 8 characters!")
    .max(16, "must use max 16 characters!"),
});
