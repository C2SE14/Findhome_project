import React from "react";
import { Container } from "react-bootstrap";
//
import Heading from "../../../../components/Heading/Heading";
import "./Customer.scss";
import { customer } from "../../../../assets/images";
import { Link } from "react-router-dom";
import { path } from "../../../../utils/constant";

const Customer = () => {
  return (
    <div className="customer">
      <Container>
        <div className="customer__container">
          <Heading heading="KHÁCH HÀNG" title="DỄ DÀNG TÌM KIẾM VÀ QUẢN LÝ" />
          <div className="customer__main">
            <div className="customer__img">
              <img src={customer} alt="customer" />
            </div>
            <div className="customer__content">
              <ul>
                <li>
                  <i className="bi bi-journal-check"></i>
                  <p>
                    Khách hàng từ tin đăng và các dịch vụ truyền thông được đồng
                    bộ tự động vào Findhome
                  </p>
                </li>
                <li>
                  <i className="bi bi-megaphone"></i>
                  <p>Nhận thông báo khi sử dụng dịch vụ của chúng tôi</p>
                </li>

                <li>
                  <i className="bi bi-chat-dots"></i>
                  <p>
                    Dễ dàng thêm khách hàng, cập nhật tình trạng và đặt lịch hẹn
                    với khách
                  </p>
                </li>
              </ul>
              <Link
                to={path.REAL_ESTATE_FOR_RENT}
                className="button button__thirdary"
              >
                Khám phá
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Customer;
