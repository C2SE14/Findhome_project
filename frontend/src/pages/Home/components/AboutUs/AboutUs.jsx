import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
//
import "./AboutUs.scss";
import {
  aboutus,
  customer_icon,
  medal_icon,
  branch_icon,
} from "../../../../assets/images";

const AboutUs = () => {
  return (
    <div className="abu">
      <Container>
        <div className="abu__container">
          <div className="abu__top">
            <div className="abu__title">
              <h3>CHÚNG TÔI LÀ AI</h3>
              <h2>nền tảng kết nối bất động sản số 1 tại việt nam</h2>
              <img src={aboutus} alt="Chúng tôi là ai" />
            </div>
            <div className="abu__desc">
              <p>
                Findhome là nền tảng kết nối bất động sản số 1 tại Việt Nam dựa
                trên 3 yếu tố then chốt: Công nghệ, Bất động sản và Marketing.
                Tại đây, Findhome tạo ra sự kết nối giữa những người có nhu cầu
                mua và bán bất động sản, giữa người dùng và các chuyên gia nhằm
                giúp mọi người tìm kiếm, chia sẻ và xây dựng một không gian sống
                hoàn hảo.
              </p>
              <Link to="#">Tìm hiểu thêm</Link>
              <div className="abu__desc-content">
                <h2>
                  THÀNH TỰU LỚN NHẤT CỦA CHÚNG TÔI LÀ PHÁT TRIỂN CỘNG ĐỒNG THỊNH
                  VƯỢNG
                </h2>
                <ul>
                  <li>
                    <span>50k</span>
                    <b>Tài khoản đăng kí</b>
                  </li>
                  <li>
                    <span>30k</span>
                    <b>Lượt truy cập hàng ngày</b>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="abu__bot">
            <ul>
              <li>
                <div>
                  <img src={customer_icon} alt="" />
                </div>
                <p>
                  Quản lý, chăm sóc khách hàng ngay trên nền tảng với FindHome
                </p>
              </li>
              <li>
                <div>
                  <img src={medal_icon} alt="" />
                </div>
                <p>Gia tăng kiến thức và xây dựng thương hiệu cá nhân</p>
              </li>

              <li>
                <div>
                  <img src={branch_icon} alt="" />
                </div>
                <p>
                  Tiếp cận 1.000.000+ KH tiềm năng với các dịch vụ truyền thông
                  đa dạng
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
