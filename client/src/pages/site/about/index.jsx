import { RightOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import about_image from "../../../assets/images/about-2.png";
import departmentsDarkIcon1 from "../../../assets/images/departments-dark-icon1.png";
import departmentsDarkIcon2 from "../../../assets/images/departments-dark-icon2.png";
import departmentsDarkIcon3 from "../../../assets/images/departments-dark-icon3.png";
import departmentsDarkIcon4 from "../../../assets/images/departments-dark-icon4.png";
import departmentsDarkIcon5 from "../../../assets/images/departments-dark-icon5.png";
import departmentsDarkIcon6 from "../../../assets/images/departments-dark-icon6.png";
import departmentsDarkIcon7 from "../../../assets/images/departments-dark-icon7.png";
import departmentsDarkIcon8 from "../../../assets/images/departments-dark-icon8.png";
import departmentsIcon1 from "../../../assets/images/departments-icon1.png";
import departmentsIcon2 from "../../../assets/images/departments-icon2.png";
import departmentsIcon3 from "../../../assets/images/departments-icon3.png";
import departmentsIcon4 from "../../../assets/images/departments-icon4.png";
import departmentsIcon5 from "../../../assets/images/departments-icon5.png";
import departmentsIcon6 from "../../../assets/images/departments-icon6.png";
import departmentsIcon7 from "../../../assets/images/departments-icon7.png";
import departmentsIcon8 from "../../../assets/images/departments-icon8.png";
import { getData } from "../../../redux/slice/doctorsDataSlice";
import {Helmet} from 'react-helmet'
import "./index.scss";
const AboutPage = () => {
  const [video, setVideo] = useState(false);
  const [count, setCount] = useState(4);
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div id="about-page">
       <Helmet>
        <meta charSet="utf-8" />
        <title>Doctris - About Us</title>
      </Helmet>
      <div id="about-us">
        <div className="container">
          <div className="about-us">
            <div className="header-about">
              <div className="head">
                <h1>About us</h1>
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
                      <NavLink to={"/about"}>ABOUT US</NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about-with-video">
        <div className="container">
          <div className="about-with-video">
            <div className="video">
              <div className="img">
                <img src={about_image} alt="" />
                <div className="play-video">
                  <a onClick={() => setVideo(true)}>
                    <i className="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="text">
              <div className="head">About Doctris</div>
              <h1>
                Good Services And Better <br /> Health By Our Specialists
              </h1>
              <p>
                Great doctor if you need your family member to get effective
                immediate assistance, emergency treatment or a simple
                consultation.
              </p>
              <p>
                The most well-known dummy text is the 'Lorem Ipsum', which is
                said to have originated in the 16th century. Lorem Ipsum is
                composed in a pseudo-Latin language which more or less
                corresponds to 'proper' Latin. It contains a series of real
                Latin words.
              </p>
              <button>Read More</button>
            </div>
          </div>

          {video && (
            <div onClick={() => setVideo(false)} className="youtube-video">
              <div onClick={() => setVideo(false)} className="close">
                x
              </div>
              <iframe
                width="700"
                height="360"
                src="https://www.youtube.com/embed/cj_9aZmXbSE?playlist=cj_9aZmXbSE&loop=1"
              ></iframe>
            </div>
          )}
        </div>
      </div>
      <div id="departments">
        <div className="container">
          <div className="departments">
            <div className="about-cards-head">
              <div className="head">Departments</div>
            </div>
            <h1>Our Medical Services</h1>
            <div className="head-title">
              <p>
                Great doctor if you need your family member to get effective
                immediate assistance, emergency treatment or a simple
                consultation.
              </p>
            </div>
            <div className="about-depatrtments">
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
            </div>
          </div>
        </div>
      </div>
      <div id="doctors">
        <div className="container">
          <div className="doctors">
            <h1>Our Medical Services</h1>
            <div className="head-title">
              <p>
                Great doctor if you need your family member to get effective
                immediate assistance, emergency treatment or a simple
                consultation.
              </p>
            </div>
            <div className="cards-doctor">
              {doctors.data?.slice(0, count).map((element) => {
                return (
                  <div key={element._id} className="card">
                    <div className="image">
                      <img src={element.image} alt="" />
                      <div className="card-icons">
                        <div className="circle">
                          <i className="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className="circle">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                        <div className="circle">
                          <i className="fa-brands fa-github"></i>
                        </div>
                        <div className="circle">
                          <i className="fa-brands fa-twitter"></i>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="about-doctor">
                      <h4>
                        <Link>{`${element.firstName} ${element.lastName}`}</Link>
                      </h4>
                      <p className="job">{element.doctorJob}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="btn">
              <button onClick={() => setCount(count + 4)}>See More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
