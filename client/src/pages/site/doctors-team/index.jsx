import { RightOutlined } from "@ant-design/icons";
import { Button, Input, Space, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getData } from "../../../redux/slice/doctorsDataSlice";
import "./index.scss";
const DoctorsTeam = () => {
  const [sort, setSort] = useState(true);
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);
  const [sortBy, setSortBy] = useState(false);

  useEffect(() => {
    dispatch(getData(""));
  }, []);

  const handleSortByPrice = () => {
    setSort(!sort);
    sort ? dispatch(getData(1)) : dispatch(getData(""));
  };
  const handleSortByName = () => {
    setSort(!sort);
    sort ? dispatch(getData(2)) : dispatch(getData(""));
  };

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
          <div className="filter">
            <Input
              onChange={(e) => dispatch(getData(e.target.value))}
              placeholder="Search doctor..."
            />
            <div className="sort">
              <div onClick={() => setSortBy(!sortBy)}>
                <Button type="primary" ghost>
                  Sort by
                </Button>
              </div>
              {sortBy && (
                <div className="btn">
                  <div>
                    <Button
                      onClick={() => handleSortByPrice()}
                      type="primary"
                      ghost
                    >
                      Sort By Price
                    </Button>
                    <Button
                      type="primary"
                      ghost
                      onClick={() => handleSortByName()}
                    >
                      Sort By Name
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          {doctors.loading ? (
            <div className="spinner">
              <Space direction="vertical" style={{ width: "100%" }}>
                <Spin tip="Loading" size="large">
                  <div className="content" />
                </Spin>
              </Space>
            </div>
          ) : (
            <div className="cards">
              {doctors.data?.map((element) => {
                return (
                  <div key={element._id} className="card">
                    <div className="image">
                      <img src={element.image} alt="" />
                    </div>{" "}
                    <div className="about-doctor">
                      <h4>
                        <Link>{`${element.firstName} ${element.lastName}`}</Link>
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
          )}
        </div>
      </div>
    </section>
  );
};

export default DoctorsTeam;
