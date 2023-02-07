import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../layouts/site/footer";
import Header from "../../../layouts/site/header";

const MainRoot = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainRoot;
