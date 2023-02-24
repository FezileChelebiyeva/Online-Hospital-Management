import React from "react";
import { Helmet } from "react-helmet";
import favicon from "../../../assets/images/favicon.png";
import AdminNavbar from "../../../components/admin/navbar";
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
        <div className="body-admin">
          <h1>This is admin panel</h1>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
