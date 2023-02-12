import React, { useState } from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import logo_dark from "../../../assets/images/logo-dark.png";
import logo_light from "../../../assets/images/logo-light.png";
import darkmode from "../../../assets/images/darkmodeimage.png";
import adminimage from "../../../assets/images/adminimage.png";
import { Menu, Dropdown } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { darkModeState } from "../../../redux/slice/darkMode";

const Header = () => {
  const [blog, setBlog] = useState(false);
  const [navbar, setNavbar] = useState(true);
  const [search, setSearch] = useState(false);
  const [settings, setSettings] = useState(false);

  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  window.addEventListener("scroll", () => {
    window.scrollY > 60 ? setNavbar(false) : setNavbar(true);
  });
  return (
    <div id={navbar ? "header" : "fixed-header"}>
      <div className="container">
        <div className="header">
          <div className="navbar">
            <div className="logo">
              {darkMode.value ? (
                <img src={logo_dark} alt="" />
              ) : (
                <img src={logo_light} alt="" />
              )}
            </div>
            <nav>
              <ul>
                <li>
                  <NavLink to={"/"}>HOME</NavLink>
                </li>
                <li>
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item key="0">
                          <NavLink to={"/doctor-team-one"}>DOCTORS ONE</NavLink>
                        </Menu.Item>
                        <Menu.Item key="1">
                          <NavLink to={"/doctor-team-two"}>DOCTORS TWO</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                          <NavLink to={"/doctor-team-three"}>
                            DOCTORS THREE
                          </NavLink>
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <NavLink
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                      to={"/doctors"}
                    >
                      DOCTORS <span className="menu-arrow"></span>
                    </NavLink>
                  </Dropdown>
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
                <li>
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item key="0">
                          <NavLink to={"/pharmacy"}>PHARMACY</NavLink>
                        </Menu.Item>
                        <Menu.Item key="1">
                          <NavLink to={"/pharmacy-shop"}>SHOP</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                          <NavLink to={"/pharmacy-product-detail"}>
                            MEDICINE DETAIL
                          </NavLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                          <NavLink to={"/pharmacy-shop-cart"}>
                            SHOP CART
                          </NavLink>
                        </Menu.Item>
                        <Menu.Item key="4">
                          <NavLink to={"/pharmacy-checkout"}>CHECKOUT</NavLink>
                        </Menu.Item>
                        <Menu.Item key="5">
                          <NavLink to={"/pharmacy-account"}>ACCOUNT</NavLink>
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
                </li>
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
                          <NavLink
                            to={"/blogs"}
                            onMouseEnter={() => setBlog(true)}
                          >
                            BLOGS <span className="blog-arrow"></span>
                            {blog && (
                              <ul
                                className="blog-item"
                                onMouseLeave={() => setBlog(false)}
                              >
                                <li>
                                  <NavLink to={"/blogs"}>BLOGS</NavLink>
                                </li>
                                <li>
                                  <NavLink to={"/blog-detail"}>
                                    BLOG DETAILS
                                  </NavLink>
                                </li>
                              </ul>
                            )}
                          </NavLink>
                        </Menu.Item>
                        <Menu.Item key="4">
                          <NavLink to={"/terms-policy"}>TERMS & POLICY</NavLink>
                        </Menu.Item>
                        <Menu.Item key="5">
                          <NavLink to={"/privacy-policy"}>
                            PRIVACY POLICY
                          </NavLink>
                        </Menu.Item>
                        <Menu.Item key="6">
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
                  <NavLink to={"/admin/"}>ADMIN</NavLink>
                </li>
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
            <div className="user">
              <i className="fa-solid fa-user"></i>
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
              <img src={adminimage} alt="" />
            </div>
            <h4>Admin Dashboard</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
