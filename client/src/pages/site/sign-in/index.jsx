import React, { useEffect } from "react";
import { useFormik } from "formik";
import { patientsSchema } from "./schema";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { getPatientsData } from "../../../redux/slice/patientsDataSlice";
const LoginPage = () => {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getPatientsData(""));
  }, []);

  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: patientsSchema,
      onSubmit: (values) => {
        // let checkPatients = patients.data.some(
        //   (element) =>
        //     element.email == values.email && element.password == values.password
        // );
        // checkPatients ? navigate("/") : alert("not found");
        dispatch(getPatientsData(values)) ? navigate("/") : alert("not found")
        console.log(values);
      },
    });

  return (
    <div id="login-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Doctris - Login</title>
      </Helmet>
      <div className="container">
        <div className="login">
          <div className="form">
            <h2>Sign In</h2>
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
              <p className="or">Or</p>
              <div className="btns">
                <button>Facebook</button>
                <button>Google</button>
              </div>
              <div className="new-account">
                <p>Don't have an account ?</p>
                <Link to={"/signup"}>Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
