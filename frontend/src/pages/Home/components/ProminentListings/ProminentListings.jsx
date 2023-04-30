import React from "react";
import "./ProminentListings.scss";
import { Container } from "react-bootstrap";
import Heading from "../../../../components/Heading/Heading";
import fetchData from "../../../../components/Common/fetchData";
import { Link } from "react-router-dom";

const ProminentListings = () => {
  return (
    <div className="pl">
      <Container>
        <div className="pl__container">
          <Heading text={"TIN RAO NHÀ ĐẤT NỔI BẬT"} text_left />
          <div className="pl__list">
            {fetchData.slice(0, 8).map((item, index) => (
              <div className="pl__item" key={index}>
                <img src={item.imageModelList[1].image} alt="" />
                <div className="pl__content">
                  <div className="pl__body">
                    <h2>{item.nameEstate}</h2>
                    <div className="pl__info">
                      <span>{item.area}</span>
                      <span className="divider-dot"></span>
                      <span>{item.price} Tỷ</span>
                    </div>
                    <div className="pl__address">
                      <i className="bi bi-geo-alt"></i>
                      <span>{item.address}</span>
                    </div>
                  </div>
                  <div className="pl__time">
                    <div>
                      <i className="bi bi-clock"></i>
                      <span>Hôm qua</span>
                    </div>
                    <div>
                      <i className="bi bi-heart"></i>
                      <span>Lưu tin</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pl__button">
            <Link>
              <span>XEM TẤT CẢ TIN RAO MỚI NHẤT</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProminentListings;
