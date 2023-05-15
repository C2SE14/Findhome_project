import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { ProductProvider } from "../../context";
import Banner from "../../pages/Home/components/Banner/Banner";

const LayoutDetail = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <ProductProvider>
      <div className="layout">
        <Header />
        <Banner />
        <div className="layout__content" style={{ background: "#f4f2f0" }}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </ProductProvider>
  );
};

export default LayoutDetail;
