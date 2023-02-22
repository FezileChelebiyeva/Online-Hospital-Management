import React from "react";
import AdminNavbar from "../../../components/admin/navbar";
import "./index.scss";
import { Helmet } from "react-helmet";
const AddDoctor = () => {
  return (
    <div id="add-doctor">
      <Helmet>
        <title>Doctris - Add Doctor</title>
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <AdminNavbar />
    </div>
  );
};

export default AddDoctor;
