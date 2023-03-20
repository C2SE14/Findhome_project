import React from "react";
import { Link } from "react-router-dom";

//
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
          <Link to="#" className="button button__secondary">
            Khám phá
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
