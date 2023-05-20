import React from "react";
import { banner, detailBanner } from "../../../../assets/images";
import "./Banner.scss";
import { detailsBanner } from "../../../../assets/images";

const Banner = ({ details, detail, title, text }) => {
  return (
    <div className="banner">
      <div className="banner__container">
        <img
          src={details ? detailsBanner : detail ? detailBanner : banner}
          alt="Banner"
          className="banner__img"
        />
        <div className="banner__content">
          <h3>{title}</h3>
          <h2>{text}</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
