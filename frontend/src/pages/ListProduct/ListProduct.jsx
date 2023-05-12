import React from "react";
import { Link } from "react-router-dom";
import { convertToSlug } from "../../components/Common/convertToSlug";
import formatNumber from "../../components/Common/currencyFormat";

const ListProduct = ({ data }) => {
  return (
    <>
      <li className="refs__product-item" key={data.id}>
        <Link
          to={`/${convertToSlug(data.nameEstate)}`}
          className="refs__product-link"
          state={{ id: data.id }}
        >
          <img
            src={
              data.imageModelList > 0
                ? data.imageModelList[0].image
                : "https://cdn.houseviet.vn/images/no-image.jpg"
            }
            alt=""
          />
          <div className="content">
            <div className="detail">
              <h3>{data.nameEstate}</h3>
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <span>{data.address}</span>
              </div>
              <div className="price">
                <span>{data.area} m²</span>
                <span className="divider-dot"></span>
                <p> {formatNumber(data.price)}</p>
              </div>
              <div className="time">
                <i className="bi bi-clock-fill"></i>
                <span> 2 ngày trước</span>
              </div>
              <div className="info">
                <div className="frontage">
                  <div>
                    <i className="bi bi-arrows-fullscreen"></i>
                    <span>Mặt tiền: </span>
                  </div>
                  {data.frontispiece ? (
                    <p>{data.frontispiece}</p>
                  ) : (
                    <p> --- </p>
                  )}
                </div>

                <div className="depth">
                  <div>
                    <i className="bi bi-arrows-expand"></i>
                    <span>Chiều sâu: </span>
                  </div>
                  {data.depth ? <p>{data.depth}</p> : <p> --- </p>}
                </div>

                <div className="direction">
                  <div>
                    <i className="bi bi-compass"></i>
                    <span>Hướng: </span>
                  </div>
                  {data.directionOfHouse ? (
                    <p>{data.directionOfHouse}</p>
                  ) : (
                    <p> --- </p>
                  )}
                </div>
              </div>
            </div>
            <div className="contact">
              <div className="avatar">
                <img
                  src="https://cdn.houseviet.vn/images/icons/user-avatar.png"
                  alt=""
                />
              </div>
              <div>
                <h3>Văn Hải</h3>
                <h4>Chính chủ</h4>
              </div>
              <span>
                <i className="bi bi-telephone-plus-fill"></i>
                <p>0867405503</p>
              </span>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
};

export default ListProduct;
