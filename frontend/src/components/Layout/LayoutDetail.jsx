import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import SearchBox from "../SearchBox/SearchBox";

const LayoutDetail = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="layout">
      <Header />
      <SearchBox />
      <div className="layout__content" style={{ background: "#f4f2f0" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutDetail;
