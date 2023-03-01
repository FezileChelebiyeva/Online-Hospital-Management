import { RightOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getPatientsData } from "../../redux/slice/patientsDataSlice";
import "./index.scss";
const PatientProfile = () => {
  const patients = useSelector((state) => state.patients);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPatientsData(""));
  }, []);

  return (
    <div id="patient-profile-page">
      {console.log(patients.patient)}
      <div id="profile-header">
        <div className="container">
          <div className="profile-head">
            <div className="header-profile">
              <div className="head">
                <h1>Patient Profile</h1>
                <div className="about">
                  <p>
                    Great doctor if you need your family member to get effective
                    immediate assistance, emergency treatment or a simple
                    consultation.
                  </p>
                </div>
                <div className="links-about">
                  <div className="links">
                    <span>
                      <NavLink to={"/"}>DOCTRIS</NavLink>
                      <RightOutlined className="antd-icon" />
                    </span>
                    <span>
                      <NavLink to={"/patient-profile"}>PROFILE</NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="patient-profile">
        <div className="container">
          <div className="patient">
            <div className="img">
              <img src={patients?.patient.image} alt="" />
            </div>
            <div className="about-patient">
              <div>
                <div className="about">
                  <h3>{`${patients?.patient.firstName} ${patients?.patient.lastName}`}</h3>
                </div>
                <div className="about">
                  <span>Doctor: </span>
                  <p>{patients?.patient.doctor}</p>
                </div>
                <div className="about">
                  <span>Department: </span>
                  <p>{patients?.patient.job}</p>
                </div>
                <div className="about">
                  <span>Email: </span>
                  <p>{patients?.patient.email}</p>
                </div>
                <div className="about">
                  <span>Phone: </span>
                  <p>{patients?.patient.phone}</p>
                </div>
                <div className="about">
                  <span>Birthday: </span>
                  <p>{patients?.patient.birthday}</p>
                </div>
                <div className="btn">
                  <button onClick={() => navigate("/")}>Go Back Home</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
