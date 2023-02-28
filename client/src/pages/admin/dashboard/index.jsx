import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import favicon from "../../../assets/images/favicon.png";
import AdminNavbar from "../../../components/admin/navbar";
import { getData } from "../../../redux/slice/doctorsDataSlice";
import { getPatientsData } from "../../../redux/slice/patientsDataSlice";
import "./index.scss";
const DashBoard = () => {
  const patients = useSelector((state) => state.patients);
  const doctors = useSelector((state) => state.doctors);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getPatientsData());
    dispatch(getData(""))
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
        <AdminNavbar />
        <div className="body-admin">
          <h1> Admin panel</h1>
          <div className="admin-panel">
            <div id="admin">
            <h3>Admin: </h3>
              {patients.data?.map((elem) => {
                return elem.isAdmin ? (
                  <div className="admin">
                    <p>{`${elem.firstName} ${elem.lastName}`}</p>
                  </div>
                ) : null;
              })}
            </div>
            <div className="users">
              <div id="patients">
                <h3>Patients: </h3>
                {patients.data?.slice(0, 5).map((elem) => {
                  return !elem.isAdmin ? (
                    <div className="patient">
                      <div className="img">
                        <img src={elem.image} alt="" />
                      </div>
                    </div>
                  ) : null;
                })}
                <button onClick={() => navigate("/admin/patients-list")}>More</button>
              </div>
              <div id="doctors">
                <h3>Doctors: </h3>
                {doctors.data?.slice(0, 4).map((elem) => {
                  return (
                    <div className="doctor">
                      <div className="img">
                        <img src={elem.image} alt="" />
                      </div>
                    </div>
                  );
                })}
                <button onClick={() => navigate("/admin/doctors-list")}>More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
