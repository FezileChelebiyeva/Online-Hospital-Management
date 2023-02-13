import { RightOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getData } from "../../../redux/slice/doctorsDataSlice";
import "./index.scss";
const DoctorsTeam = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <section id="doctors-team">
        <Helmet>
        <meta charSet="utf-8" />
        <title>Doctris - Doctors Team</title>
      </Helmet>
      <div className="doctors-team">
        <div className="doctors">
          <div className="container">
            <div className="header-team">
              <div className="head">
                <h1>Doctors team</h1>
                <div className="about">
                  <p>
                    Great doctor if you need your family member to get effective
                    immediate assistance, emergency treatment or a simple
                    consultation.
                  </p>
                </div>
                <div className="links">
                  <span>
                    <NavLink to={"/"}>DOCTRIS</NavLink>
                    <RightOutlined className="antd-icon" />
                  </span>
                  <span>
                    <NavLink to={"/doctors-team"}>DOCTORS TEAM</NavLink>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-doctors-team">
        <div className="container">
          <div className="cards">
            {doctors.data?.map((element) => {
              return (
                <div key={element._id} className="card">
                  <div className="image">
                    <img src={element.image} alt="" />
                  </div>{" "}
                  <div className="about-doctor">
                    <h4>
                      <Link>{element.doctorName}</Link>
                    </h4>
                    <p className="job">{element.doctorJob}</p>
                    <div className="star">
                      <div className="star-icon">
                        {new Array(element.star).fill(
                          <i className="fa-sharp fa-solid fa-star"></i>
                        )}
                      </div>
                      <div className="star-count">{element.star} Star</div>
                    </div>
                    <div className="about-work">
                      <i className="fa-solid fa-location-dot icon"></i>
                      <span>{element.location}</span>
                    </div>
                    <div className="about-work">
                      <i className="fa-regular fa-clock icon"></i>
                      <span>{element.hour}</span>
                    </div>
                    <div className="about-work">
                      <i className="fa-solid fa-comment-dollar icon"></i>
                      <span>$ {element.money} USD / Visit</span>
                    </div>
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsTeam;
