import React from "react";
import { Col, Container, Row } from "react-bootstrap";
//
import { logoFooter } from "../../../assets/images";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="ft">
      <Container>
        <div className="ft__container">
          <Row>
            <Col md="3">
              <img src={logoFooter} alt="logo" />
              <ul>
                <li className="ft__title">
                  FINDHOME - Nền tảng kết nối bất động sản Việt Nam
                </li>
                <li
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <div>
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div className="fs-16-600">
                    Số 254 Nguyễn Văn Linh, Thanh Khê, Đà Nẵng
                  </div>
                </li>
                <li
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <div>
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div className="fs-16-600">(84-236) 3812 175</div>
                </li>
                <li className="fs-16-600">KẾT NỐI VỚI CHÚNG TÔI</li>
                <li
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <i
                    className="bi bi-facebook"
                    style={{
                      color: "blue",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                  ></i>
                  <i
                    className="bi bi-linkedin"
                    style={{
                      color: "blue",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                  ></i>
                  <i
                    className="bi bi-twitter"
                    style={{
                      color: "blue",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                  ></i>
                </li>
              </ul>
            </Col>
            <Col md="3">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "30px 0",
                }}
              >
                <i className="bi bi-telephone" style={{ fontSize: "25px" }}></i>
                <div className="d-flex flex-column ">
                  <p>Hotline</p>
                  <p>1900 1009</p>
                </div>
              </div>
              <ul className="mt-14">
                <li className="ft__title">VỀ FINDHOME</li>
                <li>Giới thiệu</li>
                <li>Findhome</li>
              </ul>
            </Col>
            <Col md="3">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "30px 0",
                }}
              >
                <i className="bi bi-headset" style={{ fontSize: "25px" }}></i>
                <div className="d-flex flex-column ">
                  <p>Hỗ trợ khách hàng</p>
                  <p>hotro@findhome.com.vn</p>
                </div>
              </div>
              <ul className="mt-14">
                <li className="ft__title">VỀ DỊCH VỤ</li>
                <li>Đăng tin mới</li>
                <li>Mua dịch vụ</li>
                <li>Tin tức</li>
                <li>Trợ giúp</li>
              </ul>
            </Col>
            <Col md="3">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "30px 0",
                }}
              >
                <i
                  className="bi bi-person-plus"
                  style={{ fontSize: "25px" }}
                ></i>
                <div className="d-flex flex-column ">
                  <p>Chăm sóc khách hàng :</p>
                  <p>trogiup@findhome.com.vn</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
