import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminSchema } from "./schema";
import "./index.scss";
import { getPatientsData } from "../../redux/slice/patientsDataSlice.js";
import { Alert, Space } from "antd";
import { Helmet } from "react-helmet";
const SignInForAdmin = () => {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients);
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    dispatch(getPatientsData(""));
  }, []);
  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: adminSchema,
      onSubmit: (values) => {
        values.email === "admin@gmail.com" &&
        values.password === "doctrisadmin001"
          ? navigate("/admin/")
          : setAlert(true);
        resetForm();
      },
    });
  return (
    <div id="admin-signin">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Doctris - Admin Login</title>
      </Helmet>
      <div className="container">
        {alert && (
          <div className="alert">
            <Space direction="vertical" style={{ width: "100%" }}>
              <Alert message="You are not admin" type="error" showIcon />
            </Space>
          </div>
        )}
        <div className="admin-login">
          <div className="form">
            <h2>Sign In For Admin</h2>
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
                  <label htmlFor="password" className="m-2">
                    Password
                    <span className="required">*</span>
                  </label>
                </p>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  value={values.password}
                  placeholder="Password"
                />
                {errors.password && touched.password && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 0 5px 3px",
                    }}
                  >
                    {errors.password}
                  </div>
                )}
              </div>

              <div className="btn">
                <button type="submit" className="btn btn-success mt-2">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForAdmin;
