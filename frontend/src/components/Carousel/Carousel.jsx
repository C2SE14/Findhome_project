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

const Carousel = ({
  items,
  reviews,
  data_area,
  data_news_viewed,
  data__newEstate,
}) => {
  const slidesToShow = data_news_viewed ? 4 : data__newEstate ? 1 : 3;
  const autoPlay = data_news_viewed ? true : false;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: autoPlay,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {items
        ? items.map((item) => (
            <div key={item.id} className="carou">
              <div className="carou__container">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="carou__img"
                />
                <div className="carou__content">
                  <h3 className="carou__title">{item.title}</h3>
                  <div className="cus__grid">
                    <div className="carou__address">
                      Địa điểm: {item.address}
                    </div>
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
          ))
        : reviews
        ? reviews.map((review) => (
            <div key={review.id} className="review">
              <div className="review__container">
                <p>{review.comment}</p>
                <div className="group">
                  <img src={review.imageUrl} alt="" />
                  <div>
                    <h4>{review.name}</h4>
                    <span>{review.position}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        : data_area
        ? data_area.map((area) => (
            <div key={area.id} className="na">
              <div className="na__container">
                <img src={area.imageUrl} alt="" />
                <div className="na__content">
                  <h4>{area.name}</h4>
                  <p>{area.address}</p>
                  <div className="na__info">
                    <div>
                      <i className="bi bi-cash"></i>
                      <span>{area.price}</span>
                    </div>

                    <div>
                      <i className="bi bi-textarea"></i>
                      <span>{area.area}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : data_news_viewed
        ? data_news_viewed.map((area) => (
            <div key={area.id} className="na">
              <div className="na__container">
                <img src={area.imageUrl} alt="" />
                <div className="na__content">
                  <h4>{area.name}</h4>
                  <p>{area.address}</p>
                  <div className="na__info">
                    <div>
                      <i className="bi bi-cash"></i>
                      <span>{area.price}</span>
                    </div>

                    <div>
                      <i className="bi bi-textarea"></i>
                      <span>{area.area}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : data__newEstate.map((area) => (
            <div key={area.id} className="na">
              <div className="na__container">
                <img src={area.imageUrl} alt="" />
                <div className="na__content">
                  <h4>{area.name}</h4>
                  <p>{area.address}</p>
                  <div className="na__info">
                    <div>
                      <i className="bi bi-cash"></i>
                      <span>{area.price}</span>
                    </div>

                    <div>
                      <i className="bi bi-textarea"></i>
                      <span>{area.area}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </Slider>
  );
};

export default Carousel;
