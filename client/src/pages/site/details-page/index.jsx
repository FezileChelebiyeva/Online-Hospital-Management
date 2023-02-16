import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink, useParams } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import "./index.scss"
const DoctorDetailsPage = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState({});
  const getDataByName = async () => {
    const response = await axios.get(`http://localhost:8080/doctors/${id}`);
    setDoctor(response.data);
  };

  useEffect(() => {
    getDataByName();
  }, []);
  return (
    <div id="details-page">
      <Helmet>
        <title>{id}</title>
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <div id="details-head">
        <div className="container">
          <div className="header">
            <div className="head">
              <h1>About Doctor</h1>
              <div className="about">
                <p>
                  Great doctor if you need your family member to get effective
                  immediate assistance, emergency treatment or a simple
                  consultation.
                </p>
              </div>
              <div className="links">
                <span>
                  <NavLink to={"/"}>DOCTRIS</NavLink>
                  <RightOutlined className="antd-icon" />
                </span>
                <span>
                  <NavLink to={`/details-doctor/${id}`}>DOCTOR DETAILS</NavLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div id="doctor-details">
        <div className="container">
            <div className="doctor-details">
                <div className="img">
                    <img src={doctor.image} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsPage;
