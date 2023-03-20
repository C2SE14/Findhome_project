import React from "react";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
//
import logo from "../../../assets/images/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__top">
          <Container>
            <div className="header__top-right">
              <ul>
                <li>
                  <i className="bi bi-telephone"></i>
                  <span>(84-236) 3812 175</span>
                </li>
                <li>
                  <i className="bi bi-geo-alt"></i>
                  <span className="cus__li">
                    Số 02 Quang Trung, Thạch Thang, Hải Châu ,Đà Nẵng
                  </span>
                </li>
                <li>
                  <i className="bi bi-envelope"></i>
                  <span>contact@findhome.vn</span>
                </li>
              </ul>
            </div>
            <div className="header__top-left">
              <i className="bi bi-person-circle"></i>
              <Link to="/#">ĐĂNG NHẬP/ĐĂNG KÍ </Link>
            </div>
          </Container>
        </div>
        <div className="header__bot">
          <Container>
            <div className="header__logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="header__nav">
              <ul>
                <li>
                  <NavLink to="/">Trang chủ</NavLink>
                </li>
                <li>
                  <NavLink to="/">Dự án</NavLink>
                </li>
                <li>
                  <NavLink to="/">Mua nhà</NavLink>
                </li>
                <li>
                  <NavLink to="/">Cho thuê</NavLink>
                </li>
                <li>
                  <NavLink to="/">Bản giá dịch vụ</NavLink>
                </li>
                <li>
                  <NavLink to="/">Liên hệ</NavLink>
                </li>
              </ul>
            </div>
            <div className="header__btn">
              <NavLink to="#" className="button button__primary">
                Đăng tin
              </NavLink>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Header;
