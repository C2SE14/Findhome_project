import React from "react";
import { no_image } from "../../assets/images";

const Preview = ({ payload }) => {
  return (
    <div className="refs__product">
      <ul className="refs__product-list">
        <li className="refs__product-item">
          <div className="refs__product-link">
            <img
              src={
                payload.imageModelList && payload.imageModelList.length !== 0
                  ? payload.imageModelList[0].image
                  : no_image
              }
              alt=""
            />
            <div className="content">
              <div className="detail">
                <h3>
                  {payload.nameEstate ? payload.nameEstate : "Tiêu đề bài đăng"}
                </h3>
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <span>{payload.address ? payload.address : "địa chỉ"}</span>
                </div>
                <div className="price">
                  <span>{payload.area ? `${payload.area}m2` : " "}</span>
                  <span className="divider-dot"></span>
                  <span>{payload.price ? `${payload.price} VNĐ` : ""}</span>
                </div>
                <div className="time">
                  <i className="bi bi-clock-fill"></i>
                  <span>vừa đăng</span>
                </div>
                <div className="info">
                  <div className="frontage">
                    <div>
                      <i className="bi bi-arrows-fullscreen"></i>
                      <span>Mặt tiền: </span>
                    </div>
                    <p>
                      {payload.frontispiece ? `${payload.frontispiece} m` : ""}
                    </p>
                  </div>

                  <div className="depth">
                    <div>
                      <i className="bi bi-arrows-expand"></i>
                      <span>Chiều sâu: </span>
                    </div>
                    <p> {payload.depth ? `${payload.depth}m` : ""}</p>
                  </div>

                  <div className="direction">
                    <div>
                      <i className="bi bi-compass"></i>
                      <span>Hướng: </span>
                    </div>
                    <p>
                      {payload.directionOfHouse ? payload.directionOfHouse : ""}
                    </p>
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
                  <h3 className="preview__name">
                    {payload.userModel.fullName}
                  </h3>
                  <h4>
                    {payload.brokerModel.broker ? "Chính chủ" : "Môi giới"}
                  </h4>
                </div>
                <span>
                  <i className="bi bi-telephone-plus-fill"></i>
                  <p>{payload.userModel.phoneNumber}</p>
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Preview;
