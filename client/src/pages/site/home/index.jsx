import React from "react";
import { Helmet } from "react-helmet";
import image from "../../../assets/images/background.png";
import logo1 from "../../../assets/images/logo1.png";
import logo2 from "../../../assets/images/logo2.png";
import logo3 from "../../../assets/images/logo3.png";
import logo4 from "../../../assets/images/logo4.png";
import logo5 from "../../../assets/images/logo5.png";
import logo6 from "../../../assets/images/logo6.png";
import icon1 from "../../../assets/images/icon1.png";
import icon2 from "../../../assets/images/icon2.png";
import icon3 from "../../../assets/images/icon3.png";
import icon4 from "../../../assets/images/icon4.png";
import icon5 from "../../../assets/images/icon5.png";
import "./index.scss";
const HomePage = () => {
  return (
    <div id="home-sections">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Doctris - Doctor Appointment Booking System</title>
      </Helmet>
      <section id="search-doctors">
        <div className="container">
          <div className="search-doctors">
            <div className="search">
              <h1>Find Best Doctor</h1>
              <p>
                Great doctor if you need your family member to get immediate
                assistance, emergency treatment or a simple consultation.
              </p>
              <div className="input-control">
                <input type="text" placeholder="Doctor name..." />
                <button>
                  <i className="fa-solid fa-magnifying-glass"></i>Search
                </button>
              </div>
              <div className="note">
                <span className="name">Note: </span>Please search best doctors
                here,
              </div>
            </div>
            <div className="image">
              <img src={image} alt="doctor image" />
            </div>
          </div>
        </div>
      </section>
      <section id="logos">
        <div className="container">
          <div className="logos">
            <div className="logo">
              <img src={logo1} alt="" />
            </div>
            <div className="logo">
              <img src={logo2} alt="" />
            </div>
            <div className="logo">
              <img src={logo3} alt="" />
            </div>
            <div className="logo">
              <img src={logo4} alt="" />
            </div>
            <div className="logo">
              <img src={logo5} alt="" />
            </div>
            <div className="logo">
              <img src={logo6} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="categories">
        <div className="container">
          <div className="categories">
            <h1>Explore By Categories</h1>
            <div className="head-title">
              <p>
                Great doctor if you need your family member to get effective
                immediate assistance, emergency treatment or a simple
                consultation.
              </p>
            </div>
            <div className="cards">
              <div className="card">
                <img src={icon1} alt="" />
                <h4>Doctors</h4>
                <p>Due to its wide spread use as filler text</p>
                <button>
                  Find here <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
              <div className="card">
                <img src={icon2} alt="" />
                <h4>Clinics</h4>
                <p>Due to its wide spread use as filler text</p>
                <button>
                  Find here <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
              <div className="card">
                <img src={icon3} alt="" />
                <h4>Labs</h4>
                <p>Due to its wide spread use as filler text</p>
                <button>
                  Find here <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
              <div className="card">
                <img src={icon4} alt="" />
                <h4>Emergency</h4>
                <p>Due to its wide spread use as filler text</p>
                <button>
                  Find here <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
              <div className="card">
                <img src={icon5} alt="" />
                <h4>Insurance</h4>
                <p>Due to its wide spread use as filler text</p>
                <button>
                  Find here <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
