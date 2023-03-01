import { Space, Spin } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  addToWishlist,
  removeToWishlist,
} from "../../../redux/slice/addRemoveWishlist";
import { getData } from "../../../redux/slice/doctorsDataSlice";
import "./index.scss";
const DoctorsCard = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);
  const wishlist = useSelector((state) => state.wishlist);
  const patients = useSelector((state) => state.patients);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <section id="our-specialists">
      <div className="container">
        <div className="our-specialists">
          <div className="cards-head">
            <div className="head">Find Doctors</div>
          </div>
          <h1>Find Your Specialists</h1>
          <div className="head-title">
            <p>
              Great doctor if you need your family member to get effective
              immediate assistance, emergency treatment or a simple
              consultation.
            </p>
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
            <div className="cards-doctor">
              {doctors.data?.slice(0, 8).map((element) => {
                return (
                  <div key={element._id} className="card">
                    <div className="image">
                      {wishlist.data.find(
                        (elem) => elem._id === element._id
                      ) ? (
                        <div
                          onClick={() =>
                            dispatch(removeToWishlist(element._id))
                          }
                          className="icon"
                        >
                          <i className="fa-solid fa-heart"></i>
                        </div>
                      ) : (
                        <div
                          onClick={() => {
                            patients?.patient?.firstName == undefined
                              ? navigate("/login")
                              : dispatch(addToWishlist(element));
                          }}
                          className="icon"
                        >
                          <i className="fa-regular fa-heart"></i>
                        </div>
                      )}
                      <img src={element.image} alt="" />
                    </div>{" "}
                    <div className="about-doctor">
                      <h4>
                        <Link to={`/details-doctor/${element._id}`}>
                          {`${element.firstName} ${element.lastName}`}
                        </Link>
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
          <div className="btn">
            <button onClick={() => navigate("/doctors-team")}>Viev More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsCard;
