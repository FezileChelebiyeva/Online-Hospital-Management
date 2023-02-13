import { RightOutlined } from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
import departmentsDarkIcon1 from "../../../assets/images/departments-dark-icon1.png";
import departmentsDarkIcon2 from "../../../assets/images/departments-dark-icon2.png";
import departmentsDarkIcon3 from "../../../assets/images/departments-dark-icon3.png";
import departmentsDarkIcon4 from "../../../assets/images/departments-dark-icon4.png";
import departmentsDarkIcon5 from "../../../assets/images/departments-dark-icon5.png";
import departmentsDarkIcon6 from "../../../assets/images/departments-dark-icon6.png";
import departmentsDarkIcon7 from "../../../assets/images/departments-dark-icon7.png";
import departmentsDarkIcon8 from "../../../assets/images/departments-dark-icon8.png";
import departmentsDarkIcon9 from "../../../assets/images/departments-dark-icon9.png";
import departmentsDarkIcon10 from "../../../assets/images/departments-dark-icon10.png";
import departmentsDarkIcon11 from "../../../assets/images/departments-dark-icon11.png";
import departmentsIcon1 from "../../../assets/images/departments-icon1.png";
import departmentsIcon2 from "../../../assets/images/departments-icon2.png";
import departmentsIcon3 from "../../../assets/images/departments-icon3.png";
import departmentsIcon4 from "../../../assets/images/departments-icon4.png";
import departmentsIcon5 from "../../../assets/images/departments-icon5.png";
import departmentsIcon6 from "../../../assets/images/departments-icon6.png";
import departmentsIcon7 from "../../../assets/images/departments-icon7.png";
import departmentsIcon8 from "../../../assets/images/departments-icon8.png";
import departmentsIcon9 from "../../../assets/images/departments-icon9.png";
import departmentsIcon10 from "../../../assets/images/departments-icon10.png";
import departmentsIcon11 from "../../../assets/images/departments-icon11.png";
import { useSelector } from "react-redux";
const DepartmentsPage = () => {
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div id="departments-page">
      <div id="departments-head">
        <div className="container">
          <div className="departments-head">
            <div className="header-department">
              <div className="head">
                <h1>Departments</h1>
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
                      <NavLink to={"/departments"}>DEPARTMENTS</NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="departments">
        <div className="container">
          <div className="departments">
            <div className="card">
              {darkMode.value ? (
                <img src={departmentsIcon1} alt="" />
              ) : (
                <img src={departmentsDarkIcon1} alt="" />
              )}
              <h4>Eye Care</h4>
              <p>
                There is now an abundance of readable dummy texts required
                purely to fill a space.
              </p>
              <button>
                Read More <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="card">
              {darkMode.value ? (
                <img src={departmentsIcon2} alt="" />
              ) : (
                <img src={departmentsDarkIcon2} alt="" />
              )}
              <h4>Psychotherapy</h4>
              <p>
                There is now an abundance of readable dummy texts required
                purely to fill a space.
              </p>
              <button>
                Read More <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="card">
              {darkMode.value ? (
                <img src={departmentsIcon3} alt="" />
              ) : (
                <img src={departmentsDarkIcon3} alt="" />
              )}
              <h4>Primary Care</h4>
              <p>
                There is now an abundance of readable dummy texts required
                purely to fill a space.
              </p>
              <button>
                Read More <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="card">
              {darkMode.value ? (
                <img src={departmentsIcon4} alt="" />
              ) : (
                <img src={departmentsDarkIcon4} alt="" />
              )}
              <h4>Dental Care</h4>
              <p>
                There is now an abundance of readable dummy texts required
                purely to fill a space.
              </p>
              <button>
                Read More <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="card">
              {darkMode.value ? (
                <img src={departmentsIcon5} alt="" />
              ) : (
                <img src={departmentsDarkIcon5} alt="" />
              )}
              <h4>Orthopedic</h4>
              <p>
                There is now an abundance of readable dummy texts required
                purely to fill a space.
              </p>
              <button>
                Read More <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="card">
              {darkMode.value ? (
                <img src={departmentsIcon6} alt="" />
              ) : (
                <img src={departmentsDarkIcon6} alt="" />
              )}
              <h4>Cardiology</h4>
              <p>
                There is now an abundance of readable dummy texts required
                purely to fill a space.
              </p>
              <button>
                Read More <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="card">
              {darkMode.value ? (
                <img src={departmentsIcon7} alt="" />
              ) : (
                <img src={departmentsDarkIcon7} alt="" />
              )}
              <h4>Gynecology</h4>
              <p>
                There is now an abundance of readable dummy texts required
                purely to fill a space.
              </p>
              <button>
                Read More <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="card">
              {darkMode.value ? (
                <img src={departmentsIcon8} alt="" />
              ) : (
                <img src={departmentsDarkIcon8} alt="" />
              )}
              <h4>Neurology</h4>
              <p>
                There is now an abundance of readable dummy texts required
                purely to fill a space.
              </p>
              <button>
                Read More <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="card">
              {darkMode.value ? (
                <img src={departmentsIcon9} alt="" />
              ) : (
                <img src={departmentsDarkIcon9} alt="" />
              )}
              <h4>Dermatologists</h4>
              <p>
                There is now an abundance of readable dummy texts required
                purely to fill a space.
              </p>
              <button>
                Read More <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="card">
              {darkMode.value ? (
                <img src={departmentsIcon10} alt="" />
              ) : (
                <img src={departmentsDarkIcon10} alt="" />
              )}
              <h4>Nutritionists</h4>
              <p>
                There is now an abundance of readable dummy texts required
                purely to fill a space.
              </p>
              <button>
                Read More <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="card">
              {darkMode.value ? (
                <img src={departmentsIcon11} alt="" />
              ) : (
                <img src={departmentsDarkIcon11} alt="" />
              )}
              <h4>Physical Therapists</h4>
              <p>
                There is now an abundance of readable dummy texts required
                purely to fill a space.
              </p>
              <button>
                Read More <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentsPage;
