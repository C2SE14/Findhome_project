import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import formatNumber from "../Common/currencyFormat";
import { Link } from "react-router-dom";
import { convertToSlug } from "../Common/convertToSlug";

const Carousel = ({ items, noimage, info, show }) => {
  const slidesToShow = info ? 1 : show ? 4 : 3;
  const speed = 500;
  const slidesToScroll = 1;
  const autoplaySpeed = 5000;
  const arrows = info ? false : true;
  const settings = {
    dots: info ? true : false,
    infinite: true,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: true,
    autoplaySpeed: autoplaySpeed,
    pauseOnHover: true,
    arrows: arrows,
  };
  return (
    <div className="carousel">
      <div className="carousel__container">
        <Slider {...settings}>
          {items.slice(8, 13).map((item, index) => (
            <Link
              to={`/${convertToSlug(item.nameEstate)}`}
              state={{ id: item.id }}
              className="carousel__item"
              key={index}
            >
              {!noimage ? (
                <>
                  <img src={item.imageModelList[0].image} alt="" />
                  <div className="carousel__content">
                    <span className="carousel__price">
                      {formatNumber(item.price)} / m²
                    </span>
                    <h2 className="carousel__name">{item.nameEstate}</h2>
                    <div className="carousel__address">
                      <i className="bi bi-geo-alt"></i>
                      <span>{item.address}</span>
                    </div>
                    <div className="carousel__scale">
                      <i className="bi bi-pie-chart"></i>
                      <div>
                        <span>
                          <strong>Quy mô: </strong> TIN TỨC NỔI BẬT
                        </span>
                      </div>
                    </div>
                    <div className="carousel__juridical">
                      <i className="bi bi-journal-bookmark"></i>
                      <div>
                        <span>
                          {" "}
                          <strong>Pháp lý: </strong>{" "}
                          {item.legalDocument ? item.legalDocument : "---"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="carousel__status">Đang mở bán</div>
                </>
              ) : (
                <Link
                  to={`/${convertToSlug(item.nameEstate)}`}
                  state={{ id: item.id }}
                  className="carousel__content2"
                >
                  <h2 className="carousel__name2">{item.nameEstate}</h2>
                  <div className="carousel__price2">
                    <span>{item.area} m²</span>
                    <span className="divider-dot"></span>
                    <span>{formatNumber(item.price)} </span>
                  </div>
                  <div className="carousel__address2">
                    <i className="bi bi-geo-alt"></i>
                    <span>{item.address}</span>
                  </div>
                  <div className="carousel__time2">
                    <i className="bi bi-clock"></i>
                    <span>{item.postDate}</span>
                  </div>
                </Link>
              )}
            </Link>
          ))}
          {info &&
            items.map((item, index) => (
              <div className="carousel__item">
                <div className="carousel__info" key={index}>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
