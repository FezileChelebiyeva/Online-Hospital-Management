import { RightOutlined } from "@ant-design/icons";
import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import "./index.scss";
import { Collapse, theme } from "antd";
import { UpOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const TermsPolicy = () => {
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
    <div id="terms-policy-page">
      <div id="terms-policy">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Doctris - Terms Policy</title>
        </Helmet>
        <div className="container">
          <div className="terms-policy">
            <div className="head">
              <h1>Terms & Policy</h1>
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
                  <NavLink to={"/terms-policy"}>TERMS</NavLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="introduction">
        <div className="container">
          <div className="introduction-body">
            <div className="introduction">
              <h3>Introduction :</h3>
              <p>
                It seems that only fragments of the original text remain in the
                Lorem Ipsum texts used today. One may speculate that over the
                course of time certain letters were added or deleted at various
                positions within the text.
              </p>
              <h3>User Agreements :</h3>
              <p>
                The most well-known dummy text is the 'Lorem Ipsum', which is
                said to have originated in the 16th century. Lorem Ipsum is
                composed in a pseudo-Latin language which more or less
                corresponds to 'proper' Latin. It contains a series of real
                Latin words. This ancient dummy text is also incomprehensible,
                but it imitates the rhythm of most European languages in Latin
                script. The advantage of its Latin origin and the relative
                meaninglessness of Lorum Ipsum is that the text does not attract
                attention to itself or distract the viewer's attention from the
                layout.
              </p>
              <p>
                There is now an abundance of readable dummy texts. These are
                usually used when a text is required purely to fill a space.
                These alternatives to the classic Lorem Ipsum texts are often
                amusing and tell short, funny or nonsensical stories.
              </p>
              <p>
                It seems that only fragments of the original text remain in the
                Lorem Ipsum texts used today. One may speculate that over the
                course of time certain letters were added or deleted at various
                positions within the text.
              </p>
              <h3>Restrictions :</h3>
              <ul>
                <p>
                  You are specifically restricted from all of the following :
                </p>
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
              <h3>Users Question & Answer :</h3>
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
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                  </Panel>
                  <Panel
                    header="Do I need a designer to use Doctris ?"
                    key="2"
                    style={panelStyle}
                  >
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                  </Panel>
                  <Panel
                    header="What do I need to do to start selling ?"
                    key="3"
                    style={panelStyle}
                  >
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                  </Panel>
                  <Panel
                    header="What happens when I receive an order ?"
                    key="4"
                    style={panelStyle}
                  >
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                  </Panel>
                </Collapse>
              </div>
              <div className="btn">
                <button className="accept">Accept</button>
                <button className="decline">Decline</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPolicy;
