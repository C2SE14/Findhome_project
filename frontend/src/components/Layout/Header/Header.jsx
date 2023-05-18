import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
//
import { logo } from "../../../assets/images";

import "./Header.scss";
import { menuItems } from "../../Common/menuItems";
import MenuItems from "../../MenuItems/MenuItems";
import { path } from "../../../utils/constant";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/actions";
import { getUserById } from "../../../store/actions/user";
import { convertToSlug } from "../../Common/convertToSlug";
import {
  removeAllFavorites,
  removeFromFavorites,
} from "../../../store/actions/favorites";

const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, userId } = useSelector((state) => state.auth);
  const { userData } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [dispatch, userId]);

  const favorites = useSelector((state) => state.favoritesReducer);
  const date = new Date(favorites.saveDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Lưu ý: Tháng bắt đầu từ 0 (0 - 11)
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleDeleteSave = (productId) => {
    dispatch(removeFromFavorites(productId));
    setIsPopupOpen(false);
  };

  const handleGetRealEstate = () => {
    setIsPopupOpen((prevState) => !prevState);
  };
  const handleDeleteAllSave = () => {
    dispatch(removeAllFavorites());
    setIsPopupOpen(false);
  };
  //
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
                  <a href={path.LOGIN}>ĐĂNG NHẬP/ĐĂNG KÍ </a>
                </div>
              ) : (
                <div className="header__user">
                  <>
                    {userData.avatar ? (
                      <img src={userData.avatar} alt="" />
                    ) : (
                      <img
                        src="https://cdn.houseviet.vn/images/icons/user-avatar.png"
                        alt=""
                      />
                    )}
                    <span>
                      {userData.username}
                      <i className="bi bi-caret-down-fill"></i>
                    </span>
                  </>

                  <div className="header__user-sub">
                    <ul>
                      <li>
                        <a href={path.LIST_NEWS}>
                          <i className="bi bi-card-checklist"></i>Danh sách tin
                          đăng
                        </a>
                      </li>
                      <li>
                        <a href={path.LIST_AUCTION}>
                          <i className="bi bi-buildings"></i>
                          Danh sách đăng kí đấu giá bất động sản
                        </a>
                      </li>
                      <li>
                        <a href={path.PROFILE}>
                          <i className="bi bi-person-circle"></i>Thông tin cá
                          nhân
                        </a>
                      </li>

                      <li>
                        <a href={path.POST_NEWS}>
                          <i className="bi bi-pencil-square"></i>
                          Đăng tin
                        </a>
                      </li>
                      <li>
                        <a
                          href={path.LOGIN}
                          onClick={() => dispatch(actions.logout())}
                        >
                          <i className="bi bi-box-arrow-right"></i>
                          Đăng xuất
                        </a>
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
                <div
                  className="header__btn-favorite"
                  onClick={handleGetRealEstate}
                >
                  <>
                    <i className="bi bi-heart"></i>
                    {favorites.count > 0 && (
                      <span className="count">{favorites.count}</span>
                    )}
                  </>
                  {isPopupOpen ? (
                    <div className="favorite">
                      {favorites.count > 0 ? (
                        <div className="favorite__container">
                          <div className="group__flex">
                            <h2>TIN ĐÃ LƯU</h2>
                            <div onClick={handleDeleteAllSave}>Xoá tất cả</div>
                          </div>
                          <ul className="content">
                            {favorites.favorites.length > 0 &&
                              favorites.favorites.map((item, index) => (
                                <li key={index}>
                                  <Link
                                    state={{ id: item.id }}
                                    to={`/${convertToSlug(item.nameEstate)}`}
                                  >
                                    <img
                                      src={item.imageModelList[0].image}
                                      alt=""
                                    />
                                    <div className="text">
                                      <h6>{item.nameEstate}</h6>
                                      <div>Đã lưu: {formattedDate}</div>
                                    </div>
                                  </Link>
                                  <span
                                    onClick={() => handleDeleteSave(item.id)}
                                    className="delete"
                                  >
                                    x
                                  </span>
                                </li>
                              ))}
                          </ul>
                        </div>
                      ) : (
                        <div className="favorite__container">
                          <div className="group__flex">
                            <h2>TIN ĐÃ LƯU</h2>
                          </div>
                          <div className="content">
                            <div className="no-favorite">
                              Bạn chưa lưu tin nào, vui lòng bấm{" "}
                              <i className="bi bi-heart"></i> để lưu tin
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
                <NavLink
                  to={isLoggedIn ? path.POST_AUCTION : path.LOGIN}
                  className="header__btn-post"
                >
                  <i className="bi bi-bar-chart-line"></i>
                  Đăng đấu giá
                </NavLink>
                <a
                  href={isLoggedIn ? path.POST_NEWS : path.LOGIN}
                  className="header__btn-post"
                >
                  <i className="bi bi-pencil-square"></i>
                  Đăng tin
                </a>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Header;
