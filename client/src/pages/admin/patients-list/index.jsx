import { RightOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import AdminNavbar from "../../../components/admin/navbar";
import { getData } from "../../../redux/slice/doctorsDataSlice";
import {
  deletePatientsData,
  getPatientsData,
  updatePatientsData,
} from "../../../redux/slice/patientsDataSlice";
import { doctorsSchema } from "../add-doctor/schema";
import "./index.scss";
const PatientsList = () => {
  const [editData, setEditData] = useState(false);
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients);
  const doctors = useSelector((state) => state.doctors);
  useEffect(() => {
    dispatch(getPatientsData());
    dispatch(getData(""));
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
        address: "",
        phone: "",
        image: "",
      },
      // validationSchema: doctorsSchema,
      onSubmit: (values) => {
        dispatch(updatePatientsData(values)).then(() =>
          dispatch(getPatientsData())
        );
      },
    });
  const handleEdit = async (id) => {
    setEditData(true);
    patients.data?.map((element) => {
      if (element._id === id) {
        values.id = element._id;
        values.firstName = element.firstName;
        values.lastName = element.lastName;
        values.email = element.email;
        values.password = element.password;
        values.image = element.image;
        values.phone = element.phone;
        values.address = element.address;
        values.doctor = element.doctor;
        values.job = element.job;
        values.birthday = element.birthday;
      }
    });
  };
  return (
    <div id="patients-list">
      <Helmet>
        <title>Doctris - Patients List</title>
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <AdminNavbar />
      <div className="patients">
        <h1>Patients</h1>
        <div className="links">
          <span>
            <NavLink to={"/admin/"}>DASHBOARD</NavLink>
            <RightOutlined className="antd-icon" />
          </span>
          <span>
            <NavLink to={"/admin/patients-list"}>PATIENTS</NavLink>
          </span>
        </div>
        <div className="patients-list">
          {patients.data?.map((element) => {
            return element.isAdmin ? null : (
              <div key={element._id} className="patient">
                <div className="card">
                  <div className="image">
                    <img src={element.image} alt="" />
                  </div>
                  <div className="about-patient">
                    <h4>
                      <Link>{`${element.firstName} ${element.lastName}`}</Link>
                    </h4>
                    <a href={`mailto:${element.email}`}>{element.email}</a>
                    <a href={`tel:${element.phone}`}>{element.phone}</a>
                  </div>
                </div>
                <div className="btn">
                  <button
                    onClick={() =>
                      dispatch(deletePatientsData(element._id)).then(() =>
                        dispatch(getPatientsData())
                      )
                    }
                    className="deleteBtn"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEdit(element._id)}
                    className="editBtn"
                  >
                    Edit
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {editData && (
        <div id="update-patient">
          <form onSubmit={handleSubmit}>
            <div onClick={() => setEditData(false)} className="close">
              x
            </div>
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
                    <label htmlFor="doctor" className="m-2">
                      Doctor
                    </label>
                  </p>
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
                          {`${element.firstName} ${element.lastName}`}
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
                    <label htmlFor="job" className="m-2">
                      Departments
                    </label>
                  </p>
                  <select
                    id="job"
                    name="job"
                    onChange={handleChange}
                    value={values.job}
                  >
                    <option selected value="">
                      Departments
                    </option>
                    {doctors.data?.map((element) => {
                      if (
                        values.doctor ===
                        `${element.firstName} ${element.lastName}`
                      ) {
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
                <div className="input-control">
                  <p>
                    <label htmlFor="image" className="m-2">
                      Image
                    </label>
                  </p>
                  <input
                    id="image"
                    name="image"
                    type="text"
                    onChange={handleChange}
                    value={values.image}
                    placeholder="Image"
                  />
                  {errors.image && touched.image && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.image}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="btn">
              <button type="submit" className="btn btn-success mt-2">
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default PatientsList;
