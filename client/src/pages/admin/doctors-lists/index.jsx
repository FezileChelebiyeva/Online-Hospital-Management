import React from "react";
import { Helmet } from "react-helmet";
import AdminNavbar from "../../../components/admin/navbar";
import "./index.scss";
const DoctorsList = () => {
  return (
    <div id="doctors-list">
      <Helmet>
        <title>Doctris - Doctors List</title>
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <AdminNavbar />
    </div>
  );
};

export default DoctorsList;
