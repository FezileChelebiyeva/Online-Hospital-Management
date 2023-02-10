import React, { useState } from "react";
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
import about_image from "../../../assets/images/about-2.png";
import image2 from "../../../assets/images/development.svg";
import { Collapse, theme } from "antd";
import { UpOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

import "./index.scss";
import DoctorsCard from "../../../components/site/card-doctors";
const HomePage = () => {
  const [video, setVideo] = useState(false);
  const [active, setActive] = useState(false);
  const onChange = (key) => {
    key == "" ? setActive(false) : setActive(true);
  };
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginBottom: "0",
    marginTop: "10px",
  };

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
      <section id="about">
        <div className="container">
          <div className="about">
            <div className="text">
              <div className="head">About Doctris</div>
              <h1>
                Good Services And Better <br /> Health By Our Specialists
              </h1>
              <p>
                Great doctor if you need your family member to get effective
                immediate assistance, emergency treatment or a simple
                consultation.
              </p>
              <p>
                The most well-known dummy text is the 'Lorem Ipsum', which is
                said to have originated in the 16th century. Lorem Ipsum is
                composed in a pseudo-Latin language which more or less
                corresponds to 'proper' Latin. It contains a series of real
                Latin words.
              </p>
              <button>Read More</button>
            </div>
            <div className="video">
              <div className="img">
                <img src={about_image} alt="" />
                <div className="play-video">
                  <a onClick={() => setVideo(true)}>
                    <i className="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {video && (
          <div onClick={() => setVideo(false)} className="youtube-video">
            <div onClick={() => setVideo(false)} className="close">
              x
            </div>
            <iframe
              width="700"
              height="360"
              src="https://www.youtube.com/embed/cj_9aZmXbSE?playlist=cj_9aZmXbSE&loop=1"
            ></iframe>
          </div>
        )}
      </section>
      <section id="our-work">
        <div className="container">
          <div className="our-work">
            <div className="cards">
              <div className="card">
                <div className="icon">
                  <i className="fa-solid fa-briefcase"></i>
                </div>
                <div className="text">
                  <h4>Our Mission</h4>
                  <p>
                    The most well-known dummy text is the 'Lorem Ipsum', which
                    is said to have originated in the 16th century.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <i className="fa-sharp fa-solid fa-mattress-pillow"></i>
                </div>

                <div className="text">
                  <h4>Our Vision</h4>
                  <p>
                    The most well-known dummy text is the 'Lorem Ipsum', which
                    is said to have originated in the 16th century.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="icon">
                  <i className="fa-brands fa-solid fa-flipboard"></i>
                </div>
                <div className="text">
                  <h4>Who We Are ?</h4>
                  <p>
                    The most well-known dummy text is the 'Lorem Ipsum', which
                    is said to have originated in the 16th century.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DoctorsCard/>
      <section id="question-answer">
        <div className="container">
          <div className="question-answer">
            <div className="img">
              <img src={image2} alt="" />
            </div>
            <div className="accordion">
              <Collapse
                bordered={false}
                expandIcon={({ isActive }) => (
                  <UpOutlined
                    className={`antd-icon ${active && "blue"}`}
                    rotate={isActive ? 360 : 180}
                  />
                )}
                style={{
                  background: token.colorBgContainer,
                }}
                defaultActiveKey={["1"]}
                onChange={onChange}
                accordion
              >
                <Panel
                  className={active ? "blue" : ".ant-collapse-header-text"}
                  header="How does it work ?"
                  key="1"
                  style={panelStyle}
                >
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </Panel>
                <Panel
                  className={active ? "blue" : null}
                  header="Do I need a designer to use Doctris ?"
                  key="2"
                  style={panelStyle}
                >
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </Panel>
                <Panel
                  className={active ? "blue" : null}
                  header="What do I need to do to start selling ?"
                  key="3"
                  style={panelStyle}
                >
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </Panel>
                <Panel
                  className={active ? "blue" : null}
                  header="What happens when I receive an order ?"
                  key="4"
                  style={panelStyle}
                >
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </Panel>
              </Collapse>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <div className="contact">
            <h1>Have Question ? Get in touch!</h1>
            <div className="head-title">
              <p>
                Great doctor if you need your family member to get effective
                immediate assistance, emergency treatment or a simple
                consultation.
              </p>
            </div>
              <div className="btn">
                <button>
                  <i className="fa-solid fa-phone"></i> Contact us
                </button>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
