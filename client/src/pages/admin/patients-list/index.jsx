import React from "react";
import { Helmet } from "react-helmet";
import AdminNavbar from "../../../components/admin/navbar";
import "./index.scss";
const PatientsList = () => {
  return (
    <div id="patients-list">
      <Helmet>
        <title>Doctris - Patients List</title>
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <AdminNavbar />
    </div>
  );
};

export default PatientsList;
