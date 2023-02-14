import { RightOutlined } from "@ant-design/icons";
import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import "./index.scss";
const PrivacyPolicy = () => {
  return (
    <div id="privacy-policy-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Doctris - Privacy Policy</title>
      </Helmet>
      <div id="privacy-policy">
        <div className="container">
          <div className="privacy-policy">
            <div className="head">
              <h1>Privacy policy</h1>
              <div className="about">
                <p>
                  Great doctor if you need your family member to get effective
                  immediate assistance, emergency treatment or a simple
                  consultation.
                </p>
              </div>
              <div className="links">
                <span>
                  <NavLink to={"/"}>DOCTRIS</NavLink>
                  <RightOutlined className="antd-icon" />
                </span>
                <span>
                  <NavLink to={"/privacy-policy"}>PRIVACY</NavLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="overview">
        <div className="container">
          <div className="overview">
            <div className="text">
              <h3>Overview :</h3>
              <p>
                It seems that only fragments of the original text remain in the
                Lorem Ipsum texts used today. One may speculate that over the
                course of time certain letters were added or deleted at various
                positions within the text.
              </p>
              <p>
                In the 1960s, the text suddenly became known beyond the
                professional circle of typesetters and layout designers when it
                was used for Letraset sheets (adhesive letters on transparent
                film, popular until the 1980s) Versions of the text were
                subsequently included in DTP programmes such as PageMaker etc.
              </p>
              <p>
                There is now an abundance of readable dummy texts. These are
                usually used when a text is required purely to fill a space.
                These alternatives to the classic Lorem Ipsum texts are often
                amusing and tell short, funny or nonsensical stories.
              </p>
              <h3>We use your information to :</h3>
              <ul>
                <li>
                  <i className="fa-solid fa-arrow-right"></i>Digital Marketing
                  Solutions for Tomorrow
                </li>
                <li>
                  <i className="fa-solid fa-arrow-right"></i>Our Talented &
                  Experienced Marketing Agency
                </li>
                <li>
                  <i className="fa-solid fa-arrow-right"></i>Create your own
                  skin to match your brand
                </li>
                <li>
                  <i className="fa-solid fa-arrow-right"></i>Digital Marketing
                  Solutions for Tomorrow
                </li>
                <li>
                  <i className="fa-solid fa-arrow-right"></i>Our Talented &
                  Experienced Marketing Agency
                </li>
                <li>
                  <i className="fa-solid fa-arrow-right"></i>Create your own
                  skin to match your brand
                </li>
              </ul>
              <h3>Information Provided Voluntarily :</h3>
              <p>
                In the 1960s, the text suddenly became known beyond the
                professional circle of typesetters and layout designers when it
                was used for Letraset sheets (adhesive letters on transparent
                film, popular until the 1980s) Versions of the text were
                subsequently included in DTP programmes such as PageMaker etc.
              </p>
              <div className="btn">
                <button>
                  <i className="fa-solid fa-print"></i>Print
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
