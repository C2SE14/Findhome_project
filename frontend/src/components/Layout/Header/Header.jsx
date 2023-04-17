import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
//
import { logo, logoblack } from "../../../assets/images";

import "./Header.scss";
import { menuItems } from "../../Common/menuItems";
import MenuItems from "../../MenuItems/MenuItems";

const Header = (props) => {
  const { setColor } = props;
  const [sticky, setSticky] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div className={sticky ? "header sticky" : "header"}>
      <div className="header__container">
        <div className={!setColor ? "header__top" : "header__top setColor"}>
          <Container>
            <div className="header__top-left">
              <ul>
                <li>
                  <i className="bi bi-telephone"></i>
                  <span>(84-236) 3812 175</span>
                </li>
                <li>
                  <i className="bi bi-geo-alt"></i>
                  <span className="cus__li">
                    254 Nguyễn Văn Linh,Thanh Khê,Đà Nẵng
                  </span>
                </li>
                <li>
                  <i className="bi bi-envelope"></i>
                  <span>contact@findhome.vn</span>
                </li>
              </ul>
            </div>
            <div className="header__top-right">
              <i className="bi bi-person-circle"></i>
              <Link to="/login">ĐĂNG NHẬP/ĐĂNG KÍ </Link>
            </div>
          </Container>
        </div>
        <div className={!setColor ? "header__bot" : "header__bot setColor"}>
          <Container>
            <div className="header__logo">
              <Link to="/">
                {setColor ? (
                  <img src={logoblack} alt="LogoBlack" />
                ) : (
                  <img src={logo} alt="Logo" />
                )}
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="menu">
                {menuItems.map((menu, index) => {
                  return <MenuItems menu={menu} key={index} />;
                })}
              </ul>
            </nav>
            <div className="header__btn">
              <NavLink to="/dang-tin" className="button button__primary">
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
