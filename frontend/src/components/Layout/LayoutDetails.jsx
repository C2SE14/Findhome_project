import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Banner from "../../pages/Home/components/Banner/Banner";
import SearchBox from "../SearchBox/SearchBox";

const LayoutDetails = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="layout">
      <Header />
      <Banner />
      <SearchBox />
      <div className="layout__content" style={{ background: "#f4f2f0" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutDetails;
