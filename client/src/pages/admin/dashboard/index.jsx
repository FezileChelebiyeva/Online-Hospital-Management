import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import favicon from "../../../assets/images/favicon.png";
import { getData } from "../../../redux/slice/doctorsDataSlice";
import "./index.scss";
const DashBoard = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div id="admin-page">
      <Helmet>
        <title>Doctris - Admin</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <div className="dashboard">
        <div className="navbar">
          <nav>
            <ul>
              <li>
                <NavLink>Doctors</NavLink>
              </li>
              <li>
                <NavLink>Patients</NavLink>
              </li>
              <li>
                <NavLink>Add Doctor</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="body-admin">
          <div className="doctors">
            <h1>Doctors</h1>
            <div className="cards-doctor">
              {doctors.data?.map((element) => {
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
                        <Link>{element.doctorName}</Link>
                      </h4>
                      <p className="job">{element.doctorJob}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
