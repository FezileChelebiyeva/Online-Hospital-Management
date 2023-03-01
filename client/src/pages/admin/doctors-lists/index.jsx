import { RightOutlined } from "@ant-design/icons";
import { Space, Spin } from "antd";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import AdminNavbar from "../../../components/admin/navbar";
import {
  deleteData,
  getData,
  updateData,
} from "../../../redux/slice/doctorsDataSlice";
import { doctorsSchema } from "../add-doctor/schema";
import "./index.scss";
const DoctorsList = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);
  const [editData, setEditData] = useState(false);
  const [postImage, setPostImage] = useState("");

  useEffect(() => {
    dispatch(getData());
  }, []);

  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "",
        doctorJob: "",
        location: "",
        phone: "",
        money: "",
        hour: "",
        star: "",
        image: "",
      },
      validationSchema: doctorsSchema,
      onSubmit: (values) => {
        postImage ? (values.image = postImage) : "";
        dispatch(updateData(values)).then(() => dispatch(getData("")));
      },
    });
  // for image
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage(base64);
  };
  const handleEdit = async (id) => {
    setEditData(true);
    doctors.data?.map((element) => {
      if (element._id === id) {
        values.id = element._id;
        values.firstName = element.firstName;
        values.lastName = element.lastName;
        values.email = element.email;
        values.password = element.password;
        values.gender = element.gender;
        values.doctorJob = element.doctorJob;
        values.location = element.location;
        values.phone = element.phone;
        values.money = element.money;
        values.hour = element.hour;
        values.star = element.star;
        values.image = element.image;
      }
    });
  };
  return (
    <div id="doctors-list">
      <Helmet>
        <title>Doctris - Doctors List</title>
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <AdminNavbar />
      <div className="doctors">
        <h1>Doctors</h1>
        <div className="links">
          <span>
            <NavLink to={"/admin/"}>DASHBOARD</NavLink>
            <RightOutlined className="antd-icon" />
          </span>
          <span>
            <NavLink to={"/admin/doctors-list"}>DOCTORS</NavLink>
          </span>
        </div>
        {doctors.loading ? (
          <div style={{ marginTop: "40px" }} className="spinner">
            <Space direction="vertical" style={{ width: "100%" }}>
              <Spin tip="Loading" size="large">
                <div className="content" />
              </Spin>
            </Space>
          </div>
        ) : (
          <div className="doctors-list">
            {doctors.data?.map((element) => {
              return (
                <div key={element._id} className="doctor">
                  <div className="card">
                    <div className="image">
                      <img src={element.image} alt="" />
                      <div className="card-icons">
                        <div className="circle">
                          <i className="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className="circle">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                        <div className="circle">
                          <i className="fa-brands fa-github"></i>
                        </div>
                        <div className="circle">
                          <i className="fa-brands fa-twitter"></i>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="about-doctor">
                      <h4>
                        <Link>{`${element.firstName} ${element.lastName}`}</Link>
                      </h4>
                      <p className="job">{element.doctorJob}</p>
                    </div>
                  </div>
                  <div className="btn">
                    <button
                      onClick={() =>
                        dispatch(deleteData(element._id)).then(() =>
                          dispatch(getData())
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
        )}
      </div>
      {editData && (
        <div id="update-doctor">
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
                    id="money"
                    name="money"
                    type="number"
                    onChange={handleChange}
                    value={values.money}
                    placeholder="Appointment Price"
                  />
                  {errors.money && touched.money && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.money}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="point" className="m-2">
                      Point
                    </label>
                  </p>
                  <select
                    id="star"
                    name="star"
                    onChange={handleChange}
                    value={values.star}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  {errors.star && touched.star && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.star}
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
                    id="location"
                    name="location"
                    type="text"
                    onChange={handleChange}
                    value={values.location}
                    placeholder="Address"
                  />
                  {errors.location && touched.location && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.location}
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
                    <option value="Nutritionists">Nutritionists</option>
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
                <div className="input-image">
                  <p>
                    <label htmlFor="image" className="m-2">
                      Image
                    </label>
                  </p>
                  <input
                    id="image"
                    name="image"
                    type="file"
                    onChange={(e) => {
                      handleFileUpload(e);
                    }}
                    placeholder="Image"
                  />
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

export default DoctorsList;
