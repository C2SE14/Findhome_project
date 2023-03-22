import React from "react";
import { Container } from "react-bootstrap";
//
import Heading from "../../../../components/Heading/Heading";
import { topnews1, topnews2, topnews3 } from "../../../../assets/images";
import { Link } from "react-router-dom";
import "./TopNews.scss";

const TopNews = () => {
  return (
    <div className="tn">
      <Container>
        <div className="tn__container">
          <Heading heading="TIN TỨC" title="TIN TỨC TIÊU ĐIỂM" />
          <div className="tn__main">
            <div className="tn__content">
              <div className="tn__left">
                <img src={topnews1} alt="topnews1" />
                <h4>
                  10 Năm Thăng Trầm Của Thị Trường Bất Động Sản Quận Thủ Đức
                </h4>
              </div>
              <div className="tn__right">
                <div className="tn__img">
                  <img src={topnews2} alt="topnews2" />
                  <h4>
                    (Cập Nhật] Lãi Suất Vay Mua Nhà Tháng 12/2022 Tăng Cao, Vay
                    Vốn Khó Khăn
                  </h4>
                </div>

                <div className="tn__img">
                  <img src={topnews3} alt="topnews3" />
                  <h4>
                    Bộ Xây dựng thanh tra hoạt động kinh doanh bất động sản tại
                    10 tỉnh, thành
                  </h4>
                </div>
              </div>
            </div>
            <div className="tn__update">
              <ul>
                <li>
                  <Link to="#">
                    [Cập Nhật] Lãi Suất Vay Mua Nhà Tháng 12/2022 Tăng Cao, Vay
                    Vốn Khó Khăn
                  </Link>
                </li>

                <li>
                  <Link to="#">
                    [Cập Nhật] Lãi Suất Vay Mua Nhà Tháng 12/2022 Tăng Cao, Vay
                    Vốn Khó Khăn
                  </Link>
                </li>

                <li>
                  <Link to="#">
                    [Cập Nhật] Lãi Suất Vay Mua Nhà Tháng 12/2022 Tăng Cao, Vay
                    Vốn Khó Khăn
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    [Cập Nhật] Lãi Suất Vay Mua Nhà Tháng 12/2022 Tăng Cao, Vay
                    Vốn Khó Khăn
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    [Cập Nhật] Lãi Suất Vay Mua Nhà Tháng 12/2022 Tăng Cao, Vay
                    Vốn Khó Khăn
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    [Cập Nhật] Lãi Suất Vay Mua Nhà Tháng 12/2022 Tăng Cao, Vay
                    Vốn Khó Khăn
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    [Cập Nhật] Lãi Suất Vay Mua Nhà Tháng 12/2022 Tăng Cao, Vay
                    Vốn Khó Khăn
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    [Cập Nhật] Lãi Suất Vay Mua Nhà Tháng 12/2022 Tăng Cao, Vay
                    Vốn Khó Khăn
                  </Link>
                </li>
              </ul>
              <Link to="#">Xem thêm</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopNews;
