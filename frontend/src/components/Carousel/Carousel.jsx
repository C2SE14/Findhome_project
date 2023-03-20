import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
//
import "./Carousel.scss";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        left: "-25%",
        top: "60%",
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        left: "-33%",
        top: "60%",
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

const Carousel = ({ items }) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    // centerMode: true,
  };

  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div key={item.id} className="carou">
          <div className="carou__container">
            <img src={item.imageUrl} alt={item.title} className="carou__img" />
            <div className="carou__content">
              <h3 className="carou__title">{item.title}</h3>
              <div className="cus__grid">
                <div className="carou__address">Địa điểm: {item.address}</div>
                <div className="carou__bedroom">
                  Phòng ngủ: {item.bedroom} PN
                </div>
                <div className="carou__area">Diện tích: {item.area} m²</div>
                <div className="carou__price">Mức giá: {item.price}</div>
              </div>
              <Link to="#">Xem chi tiết</Link>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
