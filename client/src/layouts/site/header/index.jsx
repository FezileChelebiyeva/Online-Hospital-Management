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
import {
  getPatientsData,
  patientData,
} from "../../../redux/slice/patientsDataSlice";
import axios from "axios";
import { getData } from "../../../redux/slice/doctorsDataSlice";
import { removeAll } from "../../../redux/slice/addRemoveWishlist";

const Header = () => {
  const dispatch = useDispatch();
  const [blog, setBlog] = useState(false);
  const [navbar, setNavbar] = useState(true);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchDoctor, setSearchDoctor] = useState(false);
  const [user, setUser] = useState(false);
  const [settings, setSettings] = useState(false);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.darkMode);
  const patients = useSelector((state) => state.patients);
  const doctors = useSelector((state) => state.doctors);
  const [filtredProducts, setFiltredProducts] = useState(doctors.data);

  useEffect(() => {
    dispatch(getPatientsData(""));
    dispatch(getData(""));
  }, []);
  window.addEventListener("scroll", () => {
    window.scrollY > 60 ? setNavbar(false) : setNavbar(true);
  });
  const handleLogout = async () => {
    const response = await axios
      .create({
        withCredentials: true,
      })
      .post("http://localhost:8080/logout")
      .then((res) => {
        if (res.status === 200) {
          dispatch(patientData(undefined));
          dispatch(removeAll([]))
          navigate("/login");
          setUser(false);
        }
      });
  };
  const handleSearch = (e) => {
    setInput(e.target.value);
    e.target.value ? setSearchDoctor(true) : setSearchDoctor(false);
    e.target.value &&
      setFiltredProducts(
        doctors.data?.filter(
          (elem) =>
            `${elem.firstName} ${elem.lastName}`
              .toLocaleLowerCase()
              .includes(e.target.value.toLocaleLowerCase()) ||
            elem.doctorJob
              .toLocaleLowerCase()
              .includes(e.target.value.toLocaleLowerCase())
        )
      );
  };
  return (
    <div id={navbar ? "header" : "fixed-header"}>
      <div className="container">
        <div className="header">
          <div className={menu ? "active-menu" : "navbar"}>
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
                {patients?.patient?.firstName == undefined ? null : (
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
                )}
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
                {patients?.patient?.isAdmin == true ? (
                  <li>
                    <NavLink target={"_blank"} to={"/admin/"}>
                      ADMIN
                    </NavLink>
                  </li>
                ) : null}
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
              {patients?.patient?.firstName == undefined ? (
                <div onClick={() => setUser(!user)} className="user">
                  <i className="fa-solid fa-user"></i>
                </div>
              ) : (
                <div onClick={() => setUser(!user)} className="user">
                  <img src={patients?.patient?.image} alt="" />
                </div>
              )}

              {user && (
                <div className="user-profile">
                  {patients?.patient?.firstName == undefined ? (
                    <ul>
                      <li>
                        <NavLink to={"/login"}>
                          <i className="fa-solid fa-right-to-bracket"></i>
                          LOGIN
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={"/signup"}>
                          <i className="fa-solid fa-right-to-bracket"></i>
                          SIGN UP
                        </NavLink>
                      </li>
                    </ul>
                  ) : (
                    <div className="patient-profile">
                      <h4>
                        {`${patients.patient.firstName} ${patients.patient.lastName}`}
                      </h4>
                      <div className="btn">
                        <button onClick={() => handleLogout()}>
                          <i className="fa-solid fa-right-to-bracket"></i>
                          LOGOUT
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div onClick={() => setMenu(!menu)} className="menu-item">
              <div className="menu">
                {menu ? (
                  <i className="fa-solid fa-x"></i>
                ) : (
                  <i className="fa-solid fa-bars"></i>
                )}
              </div>
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
                  <input
                    value={input}
                    onChange={(e) => handleSearch(e)}
                    type="text"
                    placeholder="Search..."
                  />
                  <button>Search</button>
                </div>
              </div>
              {searchDoctor && (
                <div id="doctors">
                  <div className="doctors">
                    <ul>
                      {filtredProducts?.map((element) => {
                        return (
                          <li key={element._id}>
                            <div className="img">
                              <img src={element.image} alt="" />
                            </div>
                            <div className="name">
                              <Link
                                onClick={() => {
                                  setInput("");
                                  setSearchDoctor(false);
                                }}
                                to={`/details-doctor/${element._id}`}
                              >
                                {`${element.firstName} ${element.lastName}`}
                              </Link>
                              <p>{element.doctorJob}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}
              <div
                onClick={() => setSearch(false)}
                className="close-search"
              ></div>
            </div>
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
