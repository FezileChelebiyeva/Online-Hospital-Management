import React, { useState } from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import logo_dark from "../../../assets/images/logo-dark.png";
import logo_light from "../../../assets/images/logo-light.png";
import { Menu, Dropdown } from "antd";

const Header = () => {
  const [blog, setBlog] = useState(false);
  const [navbar, setNavbar] = useState(true);
  window.addEventListener("scroll", () => {
    window.scrollY > 60 ? setNavbar(false) : setNavbar(true);
  });
  return (
    <div id={navbar ? "header" : "fixed-header"}>
      <div className="container">
        <div className="header">
          <div className="navbar">
            <div className="logo">
              <img src={logo_dark} alt="" />
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
