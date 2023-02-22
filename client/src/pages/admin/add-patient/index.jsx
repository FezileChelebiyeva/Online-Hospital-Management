import React from "react";
import { Helmet } from "react-helmet";
import AdminNavbar from "../../../components/admin/navbar";
import "./index.scss";

const AddPatient = () => {
  return (
    <div id="add-patient">
      <Helmet>
        <title>Doctris - Add Patient</title>
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <AdminNavbar />
    </div>
  );
};

export default AddPatient;
