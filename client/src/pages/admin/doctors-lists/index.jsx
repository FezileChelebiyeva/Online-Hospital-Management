import { RightOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import AdminNavbar from "../../../components/admin/navbar";
import { deleteData, getData } from "../../../redux/slice/doctorsDataSlice";
import "./index.scss";
const DoctorsList = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div id="doctors-list">
      <Helmet>
        <title>Doctris - Doctors List</title>
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <AdminNavbar />
      <div className="doctors">
        <h1>Doctors</h1>
        <div className="links">
          <span>
            <NavLink to={"/admin/"}>DASHBOARD</NavLink>
            <RightOutlined className="antd-icon" />
          </span>
          <span>
            <NavLink to={"/admin/doctors-list"}>DOCTORS</NavLink>
          </span>
        </div>
        <div className="doctors-list">
          {doctors.data?.map((element) => {
            return (
              <div className="doctor">
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
                <div className="btn">
                  <button
                    onClick={() =>
                      dispatch(deleteData(element._id)).then(() =>
                        dispatch(getData())
                      )
                    }
                    className="deleteBtn"
                  >
                    Delete
                  </button>
                  <button className="editBtn">Edit</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;
