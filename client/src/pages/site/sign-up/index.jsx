import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./index.scss";
import { patientsSchema } from "./schema";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../redux/slice/doctorsDataSlice";
import { getPatientsData } from "../../../redux/slice/patientsDataSlice";
const SignupPage = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(getData());
    dispatch(getPatientsData());
  }, []);

  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        doctor: "",
        job: "",
        birthday: "",
        gender: "",
        address: "",
        phone: "",
      },
      validationSchema: patientsSchema,
      onSubmit: (values) => {
        console.log(values);
        dispatch(getPatientsData(values))
      },
    });

  return (
    <div id="sign-up-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Doctris - Sign Up</title>
      </Helmet>
      <div className="container">
        <div className="signup">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <h2>Sign Up</h2>
              <div className="row">
                <div className="left">
                  <div className="input-control">
                    <p>
                      <label htmlFor="firstName" className="m-2">
                        First name
                        <span className="required">*</span>
                      </label>
                    </p>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      onChange={handleChange}
                      value={values.firstName}
                      placeholder="First Name"
                    />
                    {errors.firstName && touched.firstName && (
                      <div
                        style={{
                          color: "red",
                          fontSize: "12px",
                          margin: "5px 0 5px 3px",
                        }}
                      >
                        {errors.firstName}
                      </div>
                    )}
                  </div>
                  <div className="input-control">
                    <p>
                      <label htmlFor="lastName" className="m-2">
                        Last name
                        <span className="required">*</span>
                      </label>
                    </p>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      onChange={handleChange}
                      value={values.lastName}
                      placeholder="Last Name"
                    />
                    {errors.lastName && touched.lastName && (
                      <div
                        style={{
                          color: "red",
                          fontSize: "12px",
                          margin: "5px 0 5px 3px",
                        }}
                      >
                        {errors.lastName}
                      </div>
                    )}
                  </div>
                </div>
                <div className="left">
                  <div className="input-control">
                    <p>
                      <label htmlFor="email" className="m-2">
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
                </div>
              </div>
              <div className="input-control">
                <p>
                  <label htmlFor="birthday" className="m-2">
                    Birthday
                    <span className="required">*</span>
                  </label>
                </p>
                <input
                  id="birthday"
                  name="birthday"
                  type="date"
                  onChange={handleChange}
                  value={values.birthday}
                />
                {errors.birthday && touched.birthday && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 0 5px 3px",
                    }}
                  >
                    {errors.birthday}
                  </div>
                )}
              </div>
              <div className="left">
                <div className="input-control">
                  <p>
                    <label htmlFor="phone" className="m-2">
                      Phone
                      <span className="required">*</span>
                    </label>
                  </p>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    onChange={handleChange}
                    value={values.phone}
                    placeholder="Phone"
                  />
                  {errors.phone && touched.phone && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.phone}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="address" className="m-2">
                    Address
                      <span className="required">*</span>
                    </label>
                  </p>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    onChange={handleChange}
                    value={values.address}
                    placeholder="Address"
                  />
                  {errors.address && touched.address && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.address}
                    </div>
                  )}
                </div>
              </div>
              <div className="input-checkbox">
                <div className="chechbox">
                  <label htmlFor="man">Man</label>
                  <input
                    id="gender"
                    name="gender"
                    type="checkbox"
                    onChange={handleChange}
                    value="man"
                  />
                </div>
                <div className="chechbox">
                  <label htmlFor="woman">Woman</label>
                  <input
                    id="gender"
                    name="gender"
                    type="checkbox"
                    onChange={handleChange}
                    value="woman"
                  />
                </div>
                {errors.gender && touched.gender && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 0 5px 3px",
                    }}
                  >
                    {errors.gender}
                  </div>
                )}
              </div>
              <div className="for-select">
                <div className="select">
                  <select
                    id="doctor"
                    name="doctor"
                    onChange={handleChange}
                    value={values.doctor}
                  >
                    <option selected disabled value="">
                      Doctor
                    </option>
                    {doctors.data.map((element) => {
                      return (
                        <option key={element._id} value={element.doctorName}>
                          {element.doctorName}
                        </option>
                      );
                    })}
                  </select>
                  {errors.doctor && touched.doctor && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.doctor}
                    </div>
                  )}
                </div>
                <div className="select">
                  <select
                    id="doctorJob"
                    name="doctorJob"
                    onChange={handleChange}
                    value={values.job}
                  >
                    <option selected value="">
                      Doctor's job
                    </option>
                    {doctors.data?.map((element) => {
                      if (values.doctor === element.doctorName) {
                        values.job = element?.doctorJob;
                      }
                      return (
                        <option key={element._id} value={element?.doctorJob}>
                          {element?.doctorJob}
                        </option>
                      );
                    })}
                  </select>
                  {errors.job && touched.job && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.job}
                    </div>
                  )}
                </div>
              </div>
              <div className="btn">
                <button type="submit" className="btn btn-success mt-2">
                  Register
                </button>
              </div>
              <p className="or">Or</p>
              <div className="btns">
                <button>Facebook</button>
                <button>Google</button>
              </div>
              <div className="have-account">
                <p>Already have an account ?</p>
                <Link to={"/login"}>Sign in</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
