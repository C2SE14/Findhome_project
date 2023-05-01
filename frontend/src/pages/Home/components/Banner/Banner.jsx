import React from "react";
import { banner } from "../../../../assets/images";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__container">
        <img src={banner} alt="Banner" className="banner__img" />
        <div className="banner__content">
          <h3>CÙNG TÌM KIẾM</h3>
          <h2>NGÔI NHÀ TUYỆT NHẤT CHO BẠN</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
