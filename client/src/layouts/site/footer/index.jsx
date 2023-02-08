import React from "react";
import "./index.scss";
import logo from "../../../assets/images/logo-light.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <footer>
          <div className="top">
            <div className="about">
              <div className="logo">
                <img src={logo} alt="" />
                <p>
                  Great doctor if you need your family member to get effective
                  immediate assistance, emergency treatment or a simple
                  consultation.
                </p>
              </div>
            </div>
            <nav>
              <ul>
                <h4>Company</h4>
                <li>
                  <Link to={"/about"}>
                    {" "}
                    <span className="menu-arrow"></span> About us
                  </Link>
                </li>
                <li>
                  <Link to={"/services"}>
                    {" "}
                    <span className="menu-arrow"></span> Services
                  </Link>
                </li>
                <li>
                  <Link to={"/team"}>
                    {" "}
                    <span className="menu-arrow"></span>Team
                  </Link>
                </li>
                <li>
                  <Link to={"/project"}>
                    <span className="menu-arrow"></span>Project
                  </Link>
                </li>
                <li>
                  <Link to={"/blogs"}>
                    <span className="menu-arrow"></span>Blog
                  </Link>
                </li>
                <li>
                  <Link to={"/login"}>
                    <span className="menu-arrow"></span>Login
                  </Link>
                </li>
              </ul>
              <ul>
                <h4>Departments</h4>

                <li>
                  <Link to={"/departments"}>
                    <span className="menu-arrow"></span>Eye Care
                  </Link>
                </li>
                <li>
                  <Link to={"/departments"}>
                    <span className="menu-arrow"></span>Psychotherapy
                  </Link>
                </li>
                <li>
                  <Link to={"/departments"}>
                    <span className="menu-arrow"></span>Dental Care
                  </Link>
                </li>
                <li>
                  <Link to={"/departments"}>
                    <span className="menu-arrow"></span>Orthopedic
                  </Link>
                </li>
                <li>
                  <Link to={"/departments"}>
                    <span className="menu-arrow"></span>Cardiology
                  </Link>
                </li>
                <li>
                  <Link to={"/departments"}>
                    <span className="menu-arrow"></span>Gynecology
                  </Link>
                </li>
                <li>
                  <Link to={"/departments"}>
                    <span className="menu-arrow"></span>Neurology
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="contact">
              <h5>Contact us</h5>
              <div className="contact-items">
                <i className="fa-regular fa-envelope icon"></i>
                <a href="mailto:contact@example.com">contact@example.com</a>
              </div>
              <div className="contact-items">
                <i className="fa-solid fa-phone icon"></i>
                <a href="tel:+152 534-468-854">+152 534-468-854</a>
              </div>
              <div className="contact-items">
                <i className="fa-solid fa-location-dot icon"></i>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Caspian+International+Hospital/@40.343109,49.8082956,17z/data=!4m5!3m4!1s0x40307e8e13662509:0x9c53ea41ee87cca0!8m2!3d40.3433082!4d49.8102321?hl=en"
                >
                  View on Google map
                </a>
              </div>
              <div className="contact-icons">
                <div className="circle">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className="circle">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div className="circle">
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className="circle">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="footer">
              2023 © Doctris. Design with <i className="fa-solid fa-heart"></i>{" "}
              by Shreethemes
            </div>
            <ul>
              <li>
                <Link to={"/terms-policy"}>Terms</Link>
              </li>
              <li>
                <Link to={"/privacy-policy"}>Privacy</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
