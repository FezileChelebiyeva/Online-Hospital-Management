import React from "react";
import AdminNavbar from "../../../components/admin/navbar";
import "./index.scss";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import { doctorsSchema } from "./schema";
const AddDoctor = () => {
  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "",
        doctorJob: "",
        address: "",
        phone: "",
        appointment: "",
      },
      validationSchema: doctorsSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <div id="add-doctor">
      <Helmet>
        <title>Doctris - Add Doctor</title>
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <AdminNavbar />
      <div className="add-doctor">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div className="form">
              <div className="left">
                <div className="input-control">
                  <p>
                    <label htmlFor="firstName" className="m-2">
                      First name
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
                    <label htmlFor="email" className="m-2">
                      Your Email
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
                    <label htmlFor="phone" className="m-2">
                      Phone no
                    </label>
                  </p>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    onChange={handleChange}
                    value={values.phone}
                    placeholder="Phone no:"
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
                    <label htmlFor="Gender" className="m-2">
                      Gender
                    </label>
                  </p>
                  <select
                    id="gender"
                    name="gender"
                    onChange={handleChange}
                    value={values.gender}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
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
                <div className="input-control">
                  <p>
                    <label htmlFor="Appointment" className="m-2">
                      Appointment
                    </label>
                  </p>
                  <input
                    id="appointment"
                    name="appointment"
                    type="number"
                    onChange={handleChange}
                    value={values.appointment}
                    placeholder="Appointment Price"
                  />
                  {errors.appointment && touched.appointment && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.appointment}
                    </div>
                  )}
                </div>
              </div>
              <div className="right">
                <div className="input-control">
                  <p>
                    <label htmlFor="lastName" className="m-2">
                      Last name
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
                <div className="input-control">
                  <p>
                    <label htmlFor="password" className="m-2">
                      Password
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
                <div className="input-control">
                  <p>
                    <label htmlFor="address" className="m-2">
                      Address
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
                <div className="input-control">
                  <p>
                    <label htmlFor="Departments" className="m-2">
                      Departments
                    </label>
                  </p>
                  <select
                    id="doctorJob"
                    name="doctorJob"
                    onChange={handleChange}
                    value={values.doctorJob}
                  >
                    <option value="Eye Care">Eye Care</option>
                    <option value="Gynecologist">Gynecologist</option>
                    <option value="Psychotherapist">Psychotherapist</option>
                    <option value="Orthopedic">Orthopedic</option>
                    <option value="Dentist">Dentist</option>
                    <option value="Gastrologist">Gastrologist</option>
                    <option value="Urologist">Urologist</option>
                    <option value="Neurologist">Neurologist</option>
                  </select>
                  {errors.doctorJob && touched.doctorJob && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.doctorJob}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="Hour" className="m-2">
                    Working Hours
                    </label>
                  </p>
                  <input
                    id="hour"
                    name="hour"
                    type="text"
                    onChange={handleChange}
                    value={values.hour}
                    placeholder="Working Hours"
                  />
                  {errors.hour && touched.hour && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.hour}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="btn">
              <button type="submit" className="btn btn-success mt-2">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
