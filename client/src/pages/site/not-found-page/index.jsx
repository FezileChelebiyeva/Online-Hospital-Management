import React from "react";
import { useNavigate } from "react-router-dom";
import notFoundImg from "../../../assets/images/error.svg";
import "./index.scss";
const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div id="not-found">
      <div className="container">
        <div className="not-found">
          <div className="img">
            <img src={notFoundImg} alt="" />
          </div>
          <h1>Page Not Found</h1>
          <div className="head-title">
            <p>
              Explore and learn more about everything from machine learning and
              global payments to scaling your team.
            </p>
          </div>
          <div className="btn">
            <button onClick={() => navigate("/")}>Go To Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
