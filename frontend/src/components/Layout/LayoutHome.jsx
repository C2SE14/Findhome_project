import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const LayoutHome = () => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutHome;
