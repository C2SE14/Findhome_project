import React from "react";
import { Container } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
//
import { logo } from "../../../assets/images";

import "./Header.scss";
import { menuItems } from "../../Common/menuItems";
import MenuItems from "../../MenuItems/MenuItems";
import { path } from "../../../utils/constant";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/actions";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.logout());
    navigate("/dang-nhap");
  };
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__top">
          <Container>
            <div className="header__top-container">
              <div className="header__top-left">
                <ul>
                  <li>
                    <i className="bi bi-telephone"></i>
                    <span>(84-236) 3812 175</span>
                  </li>
                  <li>
                    <i className="bi bi-geo-alt"></i>
                    <span>254 Nguyễn Văn Linh,Thanh Khê,Đà Nẵng</span>
                  </li>
                  <li>
                    <i className="bi bi-envelope"></i>
                    <span>contact@findhome.vn</span>
                  </li>
                </ul>
              </div>
              {!isLoggedIn ? (
                <div className="header__top-right">
                  <i className="bi bi-person-circle"></i>
                  <Link to={path.LOGIN}>ĐĂNG NHẬP/ĐĂNG KÍ </Link>
                </div>
              ) : (
                <div className="header__user">
                  <>
                    <img
                      src="https://cdn.houseviet.vn/images/icons/user-avatar.png"
                      alt=""
                    />
                    <span>
                      NGUYỄN VĂN HẢI <i className="bi bi-caret-down-fill"></i>
                    </span>
                  </>
                  <div className="header__user-sub">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="bi bi-card-checklist"></i>Danh sách tin
                          đăng
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="bi bi-buildings"></i>
                          Danh sách đăng kí đấu giá bất động sản
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="bi bi-person-circle"></i>Thông tin cá
                          nhân
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="bi bi-pencil-square"></i>
                          Đăng tin
                        </Link>
                      </li>
                      <li>
                        <Link to="#" onClick={handleLogout}>
                          <i className="bi bi-box-arrow-right"></i>
                          Đăng xuất
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </Container>
        </div>
        <div className="header__bot">
          <Container>
            <div className="header__bot-container">
              <div className="header-flex">
                <a href="/" className="logo">
                  <img src={logo} alt="" />
                </a>

                <nav className="header__nav">
                  <ul className="menu">
                    {menuItems.map((menu, index) => {
                      return <MenuItems menu={menu} key={index} />;
                    })}
                  </ul>
                </nav>
              </div>
              <div className="header__btn">
                <div className="header__btn-favorite">
                  <i className="bi bi-heart"></i>
                </div>
                <NavLink to={path.POST_NEWS} className="header__btn-post">
                  <i className="bi bi-pencil-square"></i>
                  Đăng tin
                </NavLink>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Header;
