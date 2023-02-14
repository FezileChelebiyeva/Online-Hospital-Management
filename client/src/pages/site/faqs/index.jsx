import React from "react";
import { Helmet } from "react-helmet";
import "./index.scss";
import departmentsDarkIcon1 from "../../../assets/images/departments-dark-icon1.png";
import departmentsIcon1 from "../../../assets/images/departments-icon1.png";
import icon1 from "../../../assets/images/contact-icon1.png";
import icon2 from "../../../assets/images/contact-icon2.png";
import darkicon1 from "../../../assets/images/contact-icon-dark1.png";
import darkicon2 from "../../../assets/images/contact-icon-dark2.png";
import { useSelector } from "react-redux";
import { Collapse, theme } from "antd";
import { UpOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const FaqsPage = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const onChange = (key) => {};
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginBottom: "0",
    marginTop: "10px",
  };
  return (
    <div id="faqs-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Doctris - Faqs</title>
      </Helmet>
      <div id="faqs">
        <div className="container">
          <div className="faqs">
            <h1>How can we help you ?</h1>
            <div className="search">
              <div className="input-control">
                <input type="text" placeholder="Ask a questions..." />
                <button>
                  <i className="fa-solid fa-magnifying-glass"></i>Search
                </button>
              </div>
            </div>
            <p>*We are collect your searching keywords to improve our FAQ</p>
          </div>
        </div>
      </div>
      <div id="category">
        <div className="container">
          <div className="category">
            <h1>Choose a category to quickly find</h1>
            <div className="head-title">
              <p>
                Great doctor if you need your family member to get effective
                immediate assistance, emergency treatment or a simple
                consultation.
              </p>
            </div>
            <div className="cards">
              <div className="card">
                <div className="img">
                  {darkMode.value ? (
                    <img src={departmentsIcon1} alt="" />
                  ) : (
                    <img src={departmentsDarkIcon1} alt="" />
                  )}
                </div>
                <h4>Get started</h4>
                <p>
                  There is now an abundance of readable dummy texts required
                  purely to fill a space.
                </p>
                <div className="btn">
                  <button>
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  {darkMode.value ? (
                    <img src={departmentsIcon1} alt="" />
                  ) : (
                    <img src={departmentsDarkIcon1} alt="" />
                  )}
                </div>
                <h4>Pricing plan</h4>
                <p>
                  There is now an abundance of readable dummy texts required
                  purely to fill a space.
                </p>
                <div className="btn">
                  <button>
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  {darkMode.value ? (
                    <img src={departmentsIcon1} alt="" />
                  ) : (
                    <img src={departmentsDarkIcon1} alt="" />
                  )}
                </div>
                <h4>Sales questions</h4>
                <p>
                  There is now an abundance of readable dummy texts required
                  purely to fill a space.
                </p>
                <div className="btn">
                  <button>
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="questions">
        <div className="container">
          <div className="questions">
            <h1>General Questions</h1>
            <div className="head-title">
              <p>
                Great doctor if you need your family member to get effective
                immediate assistance, emergency treatment or a simple
                consultation.
              </p>
            </div>
            <div className="accordion">
              <Collapse
                bordered={false}
                expandIcon={({ isActive }) => (
                  <UpOutlined
                    className="antd-icon"
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
                <Panel header="How does it work ?" key="1" style={panelStyle}>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </Panel>
                <Panel
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
      </div>
      <div id="still-questions">
        <div className="container">
          <div className="still-questions">
            <h1>Still have a questions ?</h1>
            <div className="head-title">
              <p>
                Great doctor if you need your family member to get effective
                immediate assistance, emergency treatment or a simple
                consultation.
              </p>
            </div>
            <div className="contact">
              <div className="card">
                <div className="img">
                  {darkMode.value ? (
                    <img src={icon1} alt="" />
                  ) : (
                    <img src={darkicon1} alt="" />
                  )}
                </div>
                <h4>Get started</h4>
                <p>
                  Great doctor if you need your family member to get effective
                  assistance
                </p>
                <div className="contact-us">
                <a href="tel:+152 534-468-854">+152 534-468-854</a>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  {darkMode.value ? (
                    <img src={icon2} alt="" />
                  ) : (
                    <img src={darkicon2} alt="" />
                  )}
                </div>
                <h4>Get started</h4>
                <p>
                  Great doctor if you need your family member to get effective
                  assistance
                </p>
                <div className="contact-us">
                <a href="mailto:contact@example.com">contact@example.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqsPage;
