import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import logo_dark from "../../../assets/images/logo-dark.png";
import logo_light from "../../../assets/images/logo-light.png";
import homepage from "../../../assets/images/darkmodeimage.png";
import darkdash from "../../../assets/images/dark-dash.png";
import { darkModeState } from "../../../redux/slice/darkMode";
const AdminHeader = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const patients = useSelector((state) => state.patients);
  const navigate = useNavigate();
  const [settings, setSettings] = useState(false);
  const dispatch = useDispatch();
  return (
    <div id="admin-header">
      <div className="header">
        <div className="header-body">
          <div className="menu-item">
            <div className="menu">
              <i className="fa-solid fa-bars"></i>{" "}
            </div>
          </div>

          <div className="settings">
            <div onClick={() => setSettings(true)} className="setting">
              <i className="fa-solid fa-gear"></i>
            </div>
          </div>
          <div className="btn">
            <button onClick={() => navigate("/")}>
              <i className="fa-solid fa-right-to-bracket"></i>
              GO TO SITE
            </button>
          </div>
        </div>
        <div className="user-item">
          {patients?.data?.map((elem) => {
            return elem.isAdmin ? (
              <div className="admin">
                <h4>{elem.firstName}</h4>
                <img src={elem.image} alt="" />
              </div>
            ) : null;
          })}
        </div>
      </div>
      {settings && (
        <div id="settings">
          <div
            onClick={() => setSettings(false)}
            className="background-setting"
          ></div>
          <div className="settings">
            <div className="head">
              <div className="logo">
                {darkMode.value ? (
                  <img src={logo_dark} alt="" />
                ) : (
                  <img src={logo_light} alt="" />
                )}
              </div>
              <div
                onClick={() => setSettings(false)}
                className="close-settings"
              >
                x
              </div>
            </div>
            <div className="img">
              <img
                onClick={() => {
                  dispatch(darkModeState(!darkMode.value));
                }}
                src={darkdash}
                alt=""
              />
            </div>
            <h4
              onClick={() => {
                dispatch(darkModeState(!darkMode.value));
              }}
            >
              {darkMode.value ? " Dark Version" : "Light Version"}
            </h4>
            <div className="img">
              <img onClick={() => navigate("/")} src={homepage} alt="" />
            </div>
            <h4>HOME PAGE</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHeader;
