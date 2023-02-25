import { RightOutlined } from "@ant-design/icons";
import React from "react";
import image from "../../../assets/images/about-2.png";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import "./index.scss";

const ContactPage = () => {
  return (
    <div id="contact-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Doctris - Contact</title>
      </Helmet>
      <div id="contact-head">
        <div className="container">
          <div className="contact-head">
            <div className="head">
              <h1>Contact Us</h1>
              <div className="about">
                <p>
                  Great doctor if you need your family member to get effective
                  immediate assistance, emergency treatment or a simple
                  consultation.
                </p>
              </div>
              <div className="links-about">
                <div className="links">
                  <span>
                    <NavLink to={"/"}>DOCTRIS</NavLink>
                    <RightOutlined className="antd-icon" />
                  </span>
                  <span>
                    <NavLink to={"/contact"}>ABOUT US</NavLink>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact-us">
        <div className="container">
          <div className="contact-us">
            <div className="img">
              <img src={image} alt="" />
            </div>
            <div className="contact">
              <form action="">
                <h3>Get in touch!</h3>
                <div className="row">
                  <div className="input-control">
                    <p>
                      <label htmlFor="name" className="m-2">
                        Your Name
                        <span className="required">*</span>
                      </label>
                    </p>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="input-control">
                    <p>
                      <label htmlFor="email" className="m-2">
                        Your Email
                        <span className="required">*</span>
                      </label>
                    </p>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="subject" className="m-2">
                      Subject
                    </label>
                  </p>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                  />
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="message" className="m-2">
                      Comments
                      <span className="required">*</span>
                    </label>
                  </p>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                  />
                </div>
                <button>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="map">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="1080"
              height="450"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              style={{ width: "100%" }}
            ></iframe>
            <a href="https://123movies-i.net"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
