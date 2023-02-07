import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import logo_dark from "../../../assets/images/logo-dark.png";
import logo_light from "../../../assets/images/logo-light.png";
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="navbar">
            <div className="logo">
              <img src={logo_dark} alt="" />
            </div>
            <nav>
              <ul>
                <li>
                  <NavLink to={"/"}>
                    HOME <i className="fa-solid fa-chevron-down"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/doctors"}>
                    DOCTORS <i className="fa-solid fa-chevron-down"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/doctors"}>DOCTORS </NavLink>

                  {/* <i className="fa-solid fa-chevron-up"></i> */}
                </li>
                <li>
                  <NavLink to={"/patients"}>PATIENTS</NavLink>
                </li>
                <li>
                  <NavLink to={"/patients"}>PATIENTS</NavLink>
                </li>
                <li>
                  <NavLink to={"/patients"}>PATIENTS</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="settings-profil">
            <div className="setting-search">
              <i className="fa-solid fa-gear"></i>
            </div>
            <div className="setting-search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="user">
              <i className="fa-solid fa-user"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
