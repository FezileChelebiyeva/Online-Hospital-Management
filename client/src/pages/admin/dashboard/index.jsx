import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import favicon from "../../../assets/images/favicon.png";
import AdminNavbar from "../../../components/admin/navbar";
import { getData } from "../../../redux/slice/doctorsDataSlice";
import "./index.scss";
const DashBoard = () => {

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
        <div className="body-admin"></div>
      </div>
    </div>
  );
};

export default DashBoard;
