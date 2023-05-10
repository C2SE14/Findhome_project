import React from "react";
import "./layoutsystem.scss";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Siderbar from "./Siderbar/Siderbar";

const LayoutSystem = () => {
  return (
    <div className="layout">
      <Header setColor />
      <div className="layout__content">
        <div className="body_content">
          <div className="test"></div>
          <div className="content">
            <Siderbar />
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutSystem;
