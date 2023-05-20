import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const LayoutDefault = () => {
  return (
    <div className="layout">
      <Header setColor />
      <div className="layout__content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutDefault;
