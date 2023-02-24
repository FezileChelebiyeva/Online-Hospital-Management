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
        name: "",
        adminPassword: "",
      },
      validationSchema: adminSchema,
      onSubmit: (values) => {
        values.name === "admin" &&
        values.adminPassword === "doctrisadmin001"
          ? navigate("/admin")
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
                  <label htmlFor="name" className="m-2">
                    Name
                    <span className="required">*</span>
                  </label>
                </p>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={values.name}
                  placeholder="Name"
                />
                {errors.name && touched.name && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 0 5px 3px",
                    }}
                  >
                    {errors.name}
                  </div>
                )}
              </div>
              <div className="input-control">
                <p>
                  <label htmlFor="adminPassword" className="m-2">
                    Password
                    <span className="required">*</span>
                  </label>
                </p>
                <input
                  id="adminPassword"
                  name="adminPassword"
                  type="password"
                  onChange={handleChange}
                  value={values.adminPassword}
                  placeholder="Password"
                />
                {errors.adminPassword && touched.adminPassword && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 0 5px 3px",
                    }}
                  >
                    {errors.adminPassword}
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
