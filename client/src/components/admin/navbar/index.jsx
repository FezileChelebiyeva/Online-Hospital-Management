import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UpOutlined } from "@ant-design/icons";
import "./index.scss";
import { useSelector } from "react-redux";
import logo_dark from "../../../assets/images/logo-dark.png";
import logo_light from "../../../assets/images/logo-light.png";
const AdminNavbar = () => {
  const [doctor, setDoctor] = useState(false);
  const [patient, setPatient] = useState(false);
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div className="admin-navbar">
      <div className="nav">
        <div className="logo">
          {darkMode.value ? (
            <Link to={"/admin/"}>
              <img src={logo_dark} alt="" />
            </Link>
          ) : (
            <Link to={"/admin/"}>
              <img src={logo_light} alt="" />
            </Link>
          )}
        </div>
      </div>
      <nav>
        <ul>
          <li className="nav-menu">
            <NavLink to={"/admin/"}>
              <div className="icon">
                <i className="fa-solid fa-gauge"></i>
              </div>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-menu">
            <Link onClick={() => setDoctor(!doctor)}>
              <div className="icon">
                <i className="fa-solid fa-user-doctor"></i>
              </div>
              Doctors
            </Link>
            {doctor && (
              <ul>
                <li className="menu-item">
                  <NavLink to={"doctors-list"}>
                    <i className="fa-solid fa-caret-right"></i> Doctors
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to={"add-doctor"}>
                    <i className="fa-solid fa-caret-right"></i> Add Doctor
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-menu">
            <Link onClick={() => setPatient(!patient)}>
              <div className="icon">
                <i className="fa-solid fa-hospital-user"></i>
              </div>
              Patients
            </Link>
            {patient && (
              <ul>
                <li className="menu-item">
                  <NavLink to={"patients-list"}>
                    <i className="fa-solid fa-caret-right"></i> Patients
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to={"add-patient"}>
                    <i className="fa-solid fa-caret-right"></i> Add Patient
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNavbar;
