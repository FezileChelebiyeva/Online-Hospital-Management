import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import AdminNavbar from "../../../components/admin/navbar";
import { getData } from "../../../redux/slice/doctorsDataSlice";
import { patientsSchema } from "../add-patient/schema";
import "./index.scss";

const AddPatient = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);
  const [postImage, setPostImage] = useState("");
  useEffect(() => {
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
      validationSchema: patientsSchema,
      onSubmit: async (values) => {
        console.log(values);
        postImage ? (values.image = postImage) : "";
        const checkUser = await axios
          .create({
            withCredentials: true,
          })
          .post("http://localhost:8080/register", values);
      },
    });

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

  return (
    <div id="add-patient">
      <Helmet>
        <title>Doctris - Add Patient</title>
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <AdminNavbar />
      <div className="add-patient">
        <form onSubmit={handleSubmit}>
          <div className="form">
            <div className="left">
              <div className="input-control">
                <p>
                  <label htmlFor="firstName" className="m-2">
                    First Name
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
                  placeholder="Image"
                  onChange={(e) => {
                    handleFileUpload(e);
                  }}
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
              <div className="input-control">
                <p>
                  <label htmlFor="phone" className="m-2">
                    Phone
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
            </div>

            <div className="right">
              <div className="input-control">
                <p>
                  <label htmlFor="lastName" className="m-2">
                    Last Name
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
                  <label htmlFor="birthday" className="m-2">
                    Birthday
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
            </div>
          </div>
          <div className="btn">
            <button type="submit" className="btn btn-success mt-2">
              Add Patient
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPatient;
