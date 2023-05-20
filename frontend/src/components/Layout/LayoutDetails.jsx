import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { ProductProvider } from "../../context";
import Banner from "../../pages/Home/components/Banner/Banner";

const LayoutDetail = () => {
  return (
    <ProductProvider>
      <div className="layout">
        <Header />
        <Banner
          details
          title={"CÙNG TÌM KIẾM"}
          text={"BẤT ĐỘNG SẢN TUYỆT NHẤT DÀNH CHO BẠN"}
        />
        <div className="layout__content" style={{ background: "#f4f2f0" }}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </ProductProvider>
  );
};

export default LayoutDetail;
