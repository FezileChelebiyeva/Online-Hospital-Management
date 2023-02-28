import { Alert } from "antd";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import { changePasswordSchema } from "./schema";
const ChanePassword = () => {
  const navihate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(false);
  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        email: "",
        currentPassword: "",
        newPassword: "",
        confrimPassword: "",
      },
      validationSchema: changePasswordSchema,
      onSubmit: async (values) => {
        values.newPassword !== values.confrimPassword
          ? setErrorMessage(true)
          : setErrorMessage(false);
        const chechUser = await axios
          .create({
            withCredentials: true,
          })
          .post("http://localhost:8080/password", values)
          .then(() => navihate("/login"));
        resetForm();
      },
    });
  return (
    <div id="change-passord">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Doctris - Change Password</title>
      </Helmet>
      <div className="container">
        <div className="change-passord">
          <div className="form">
            <h2>Change Password</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-control">
                <p>
                  <label htmlFor="username" className="m-2">
                    Your Email
                    <span className="required">*</span>
                  </label>
                </p>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="Email"
                />
                {errors.email && touched.email && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 0 5px 3px",
                    }}
                  >
                    {errors.email}
                  </div>
                )}
              </div>
              <div className="input-control">
                <p>
                  <label htmlFor="currentPassword" className="m-2">
                    Current Password
                    <span className="required">*</span>
                  </label>
                </p>
                <input
                  id="currentPassword"
                  name="currentPassword"
                  type="password"
                  onChange={handleChange}
                  value={values.currentPassword}
                  placeholder="Password"
                />
                {errors.currentPassword && touched.currentPassword && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 0 5px 3px",
                    }}
                  >
                    {errors.currentPassword}
                  </div>
                )}
              </div>
              <div className="input-control">
                <p>
                  <label htmlFor="newPassword" className="m-2">
                    New Password
                    <span className="required">*</span>
                  </label>
                </p>
                <input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  onChange={handleChange}
                  value={values.newPassword}
                  placeholder="Password"
                />
                {errors.newPassword && touched.newPassword && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 0 5px 3px",
                    }}
                  >
                    {errors.newPassword}
                  </div>
                )}
              </div>
              <div className="input-control">
                <p>
                  <label htmlFor="confrimPassword" className="m-2">
                    Confrim Password
                    <span className="required">*</span>
                  </label>
                </p>
                <input
                  id="confrimPassword"
                  name="confrimPassword"
                  type="password"
                  onChange={handleChange}
                  value={values.confrimPassword}
                  placeholder="Password"
                />
                {errors.confrimPassword && touched.confrimPassword && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 0 5px 3px",
                    }}
                  >
                    {errors.confrimPassword}
                  </div>
                )}
              </div>
              {errorMessage && (
                <div className="error">
                  <Alert type="error" message="Invalid password" banner />
                </div>
              )}
              <div className="btn">
                <button type="submit">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChanePassword;
