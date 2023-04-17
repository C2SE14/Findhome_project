import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const LayoutHome = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
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
