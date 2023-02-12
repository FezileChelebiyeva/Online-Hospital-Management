import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { uid } from "uid";
import { getData } from "../../../redux/slice/doctorsDataSlice";
import "./index.scss";
const DoctorsCard = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);

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
          <div className="cards-doctor">
            {doctors.data?.map((element) => {
              return (
                <div key={element._id} className="card">
                  <div className="image">
                    <img src={element.image} alt="" />
                  </div>{" "}
                  key={element._id}
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

export default DoctorsCard;
