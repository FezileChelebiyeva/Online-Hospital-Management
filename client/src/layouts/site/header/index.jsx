import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo_dark from "../../../assets/images/logo-dark.png";
import logo_light from "../../../assets/images/logo-light.png";
import darkmode from "../../../assets/images/darkmodeimage.png";
import adminimage from "../../../assets/images/adminimage.png";
import { Menu, Dropdown } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { darkModeState } from "../../../redux/slice/darkMode";
import { getPatientsData } from "../../../redux/slice/patientsDataSlice";
import axios from "axios";

const Header = () => {
  const dispatch = useDispatch();
  const [blog, setBlog] = useState(false);
  const [navbar, setNavbar] = useState(true);
  const [search, setSearch] = useState(false);
  const [user, setUser] = useState(false);
  const [settings, setSettings] = useState(false);
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.darkMode);
  const patients = useSelector((state) => state.patients);
  useEffect(() => {
    dispatch(getPatientsData(""));
  }, []);
  window.addEventListener("scroll", () => {
    window.scrollY > 60 ? setNavbar(false) : setNavbar(true);
  });
  const handleLogout = async () => {
    console.log("lkjhbgvfc");
    const response = await axios.post("http://localhost:8080/logout", {
      withCredentials: true,
    });
    navigate("/login");
    console.log(response);
  };
  return (
    <div id={navbar ? "header" : "fixed-header"}>
      <div className="container">
        {console.log(patients.patient)}
        <div className="header">
          <div className="navbar">
            <div className="logo">
              {darkMode.value ? (
                <Link to={"/"}>
                  <img src={logo_dark} alt="" />
                </Link>
              ) : (
                <Link to={"/"}>
                  <img src={logo_light} alt="" />
                </Link>
              )}
            </div>
            <nav>
              <ul>
                <li>
                  <NavLink to={"/"}>HOME</NavLink>
                </li>
                <li>
                  <NavLink to={"/doctors-team"}>DOCTORS</NavLink>
                </li>
                <li>
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item key="0">
                          <NavLink to={"/patient-profile"}>PROFILE</NavLink>
                        </Menu.Item>
                        <Menu.Item key="1">
                          <NavLink to={"/booking-appointment"}>
                            BOOK APPOINTMENT
                          </NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                          <NavLink to={"/patient-invoice"}>INVOICE</NavLink>
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <NavLink
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                      to={"/patients"}
                    >
                      PATIENTS <span className="menu-arrow"></span>
                    </NavLink>
                  </Dropdown>
                </li>
                {/* <li>
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item key="0">
                          <NavLink to={"/pharmacy"}>PHARMACY</NavLink>
                        </Menu.Item>
                        <Menu.Item key="1">
                          <NavLink to={"/pharmacy-shop"}>SHOP</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                          <NavLink to={"/pharmacy-shop-cart"}>
                            SHOP CART
                          </NavLink>
                        </Menu.Item>
                        <Menu.Item key="4">
                          <NavLink to={"/pharmacy-checkout"}>CHECKOUT</NavLink>
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <NavLink
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                      to={"/pharmacy"}
                    >
                      PHARMACY <span className="menu-arrow"></span>
                    </NavLink>
                  </Dropdown>
                </li> */}
                <li onMouseLeave={() => setBlog(false)}>
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item key="0">
                          <NavLink to={"/about"}>ABOUT US</NavLink>
                        </Menu.Item>
                        <Menu.Item key="1">
                          <NavLink to={"/departments"}>DEPARTMENTS</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                          <NavLink to={"/faqs"}>FAQS</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                          <NavLink to={"/terms-policy"}>TERMS & POLICY</NavLink>
                        </Menu.Item>
                        <Menu.Item key="4">
                          <NavLink to={"/privacy-policy"}>
                            PRIVACY POLICY
                          </NavLink>
                        </Menu.Item>
                        <Menu.Item key="5">
                          <NavLink to={"/contact"}>CONTACT</NavLink>
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <NavLink
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                      to={"/pages"}
                    >
                      PAGES <span className="menu-arrow"></span>
                    </NavLink>
                  </Dropdown>
                </li>
                <li>
                  <NavLink to={"/wishlist"}>WISHLIST</NavLink>
                </li>
                <li>
                  <NavLink target={"_blank"} to={"/sign-in-admin/"}>
                    ADMIN
                  </NavLink>
                </li>
                <div className="btns">
                  <button className="first-child">
                    <NavLink to={"/login"}>
                      <i className="fa-solid fa-right-to-bracket"></i>
                      LOGIN
                    </NavLink>
                  </button>
                  <button>
                    <NavLink to={"/signup"}>
                      <i className="fa-solid fa-right-to-bracket"></i>
                      SIGN UP
                    </NavLink>
                  </button>
                </div>
              </ul>
            </nav>
          </div>
          <div className="settings-profil">
            <div onClick={() => setSettings(true)} className="setting-search">
              <i className="fa-solid fa-gear"></i>
            </div>
            <div onClick={() => setSearch(true)} className="setting-search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="user-setting">
              <div onClick={() => setUser(!user)} className="user">
                <i className="fa-solid fa-user"></i>
              </div>
              {user && (
                <div className="user-profile">
                  {patients.patient ? (
                    <div className="patient-profile">
                      <h4>
                        {`${patients.patient.firstName} ${patients.patient.lastName}`}
                      </h4>
                      <div className="btn">
                        <button onClick={() => handleLogout()}>
                          {/* <NavLink to={"/log-out"}> */}
                          <i className="fa-solid fa-right-to-bracket"></i>
                          LOGOUT
                          {/* </NavLink> */}
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {search && (
        <div className="background">
          <div className="search-now">
            <div className="container">
              <h1>Search now.....</h1>
              <div className="search">
                <div className="input-control">
                  <input type="text" placeholder="Search..." />
                  <button>Search</button>
                </div>
              </div>
            </div>
            <div
              onClick={() => setSearch(false)}
              className="close-search"
            ></div>
          </div>
        </div>
      )}
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
                src={darkmode}
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
              <img
                onClick={() => navigate("/sign-in-admin/")}
                src={adminimage}
                alt=""
              />
            </div>
            <h4>Admin Dashboard</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
