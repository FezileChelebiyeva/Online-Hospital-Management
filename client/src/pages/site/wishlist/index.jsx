import { RightOutlined } from "@ant-design/icons";
import React from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {
  removeAll,
  removeToWishlist,
} from "../../../redux/slice/addRemoveWishlist";
import "./index.scss";
const WishListPage = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  return (
    <div id="wishlist-page">
      <Helmet>
        <title>Doctris - Wishlist</title>
      </Helmet>
      <div className="wishlist-page">
        <div className="container">
          <div className="wishlist-head">
            <div className="header-team">
              <div className="head">
                <h1>Favorite Doctors</h1>
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
                    <NavLink to={"/wishlist"}>WISHLIST</NavLink>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fav-doctors">
        <div className="container">
          <div className="cards">
            {wishlist.data?.map((element) => {
              return (
                <div key={element._id} className="card">
                  <div className="image">
                    <img src={element.image} alt="" />
                  </div>{" "}
                  <div className="about-doctor">
                    <h4>
                      <Link>{`${element.firstName} ${element.lastName}`}</Link>
                    </h4>
                    <p className="job">{element.doctorJob}</p>
                    <div className="star">
                      <div className="star-icon">
                        {new Array(element.star).fill(
                          <i className="fa-sharp fa-solid fa-star"></i>
                        )}
                      </div>
                    </div>
                    <div className="btn">
                      <button
                        onClick={() => dispatch(removeToWishlist(element._id))}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="card-icons">
                      <div className="circle">
                        <i className="fa-brands fa-facebook-f"></i>
                      </div>
                      <div className="circle">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </div>
                      <div className="circle">
                        <i className="fa-brands fa-github"></i>
                      </div>
                      <div className="circle">
                        <i className="fa-brands fa-twitter"></i>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="btn">
            <button onClick={() => dispatch(removeAll([]))}>Remove All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListPage;
