import React, { useState } from "react";
import Dropdown from "react-dropdown";
import { NavLink } from "react-router-dom";
import "./Details.scss";
import Items from "../../../../components/Items/Items";
import { Container } from "react-bootstrap";

const options = [
  { value: "Chọn loại BĐS" },
  { value: "Quận 7" },
  { value: "green" },
  { value: "blue" },
  { value: "yellow" },
];

const datas = [
  {
    id: 1,
    imageUrl:
      "https://tophinhanhdep.com/wp-content/uploads/2021/10/4K-Quality-Wallpapers.jpg",
    name: "LAVELA GARDEN NHÀ PHỐ THƯƠNG MẠI TÂM ĐIỂM ĐẦU TƯ",
    price: 20.9,
    areas: 60,
    address: "Đường Bình Chuẩn 69, Phường Bình Chuẩn, Thuận An, Bình Dương",
    description:
      "+ Khu nhà phố thương mại Lavela Garden khơi nguồn cuộc sống xanh.Tọa lạc ngay trên đường bình Chuẩn 69, TP Thuận An, Bình Dương. LAVELA Garden tạo ấn tượng mạnh đến với quý khách hàng với quý mô thiết kế hiện đại mang tiêu chuẩn chuẩn sống xanh giữa lòng TP Thuận An.",
    createdAt: "2022-12-29T03:26:26.730+00:00",
    reviews: 1500,
  },
  {
    id: 2,
    imageUrl:
      "https://tophinhanhdep.com/wp-content/uploads/2021/10/4K-Quality-Wallpapers.jpg",
    name: "LAVELA GARDEN NHÀ PHỐ THƯƠNG MẠI TÂM ĐIỂM ĐẦU TƯ",
    price: 20.9,
    areas: 60,
    address: "Đường Bình Chuẩn 69, Phường Bình Chuẩn, Thuận An, Bình Dương",
    description:
      "+ Khu nhà phố thương mại Lavela Garden khơi nguồn cuộc sống xanh.Tọa lạc ngay trên đường bình Chuẩn 69, TP Thuận An, Bình Dương. LAVELA Garden tạo ấn tượng mạnh đến với quý khách hàng với quý mô thiết kế hiện đại mang tiêu chuẩn chuẩn sống xanh giữa lòng TP Thuận An.",
    createdAt: "2022-12-29T03:26:26.730+00:00",
    reviews: 1500,
  },
  {
    id: 3,
    imageUrl:
      "https://tophinhanhdep.com/wp-content/uploads/2021/10/4K-Quality-Wallpapers.jpg",
    name: "LAVELA GARDEN NHÀ PHỐ THƯƠNG MẠI TÂM ĐIỂM ĐẦU TƯ",
    price: 20.9,
    areas: 60,
    address: "Đường Bình Chuẩn 69, Phường Bình Chuẩn, Thuận An, Bình Dương",
    description:
      "+ Khu nhà phố thương mại Lavela Garden khơi nguồn cuộc sống xanh.Tọa lạc ngay trên đường bình Chuẩn 69, TP Thuận An, Bình Dương. LAVELA Garden tạo ấn tượng mạnh đến với quý khách hàng với quý mô thiết kế hiện đại mang tiêu chuẩn chuẩn sống xanh giữa lòng TP Thuận An.",
    createdAt: "2022-12-29T03:26:26.730+00:00",
    reviews: 1500,
  },
  {
    id: 4,
    imageUrl:
      "https://tophinhanhdep.com/wp-content/uploads/2021/10/4K-Quality-Wallpapers.jpg",
    name: "LAVELA GARDEN NHÀ PHỐ THƯƠNG MẠI TÂM ĐIỂM ĐẦU TƯ",
    price: 20.9,
    areas: 60,
    address: "Đường Bình Chuẩn 69, Phường Bình Chuẩn, Thuận An, Bình Dương",
    description:
      "+ Khu nhà phố thương mại Lavela Garden khơi nguồn cuộc sống xanh.Tọa lạc ngay trên đường bình Chuẩn 69, TP Thuận An, Bình Dương. LAVELA Garden tạo ấn tượng mạnh đến với quý khách hàng với quý mô thiết kế hiện đại mang tiêu chuẩn chuẩn sống xanh giữa lòng TP Thuận An.",
    createdAt: "2022-12-29T03:26:26.730+00:00",
    reviews: 1500,
  },
  {
    id: 5,
    imageUrl:
      "https://tophinhanhdep.com/wp-content/uploads/2021/10/4K-Quality-Wallpapers.jpg",
    name: "LAVELA GARDEN NHÀ PHỐ THƯƠNG MẠI TÂM ĐIỂM ĐẦU TƯ",
    price: 20.9,
    areas: 60,
    address: "Đường Bình Chuẩn 69, Phường Bình Chuẩn, Thuận An, Bình Dương",
    description:
      "+ Khu nhà phố thương mại Lavela Garden khơi nguồn cuộc sống xanh.Tọa lạc ngay trên đường bình Chuẩn 69, TP Thuận An, Bình Dương. LAVELA Garden tạo ấn tượng mạnh đến với quý khách hàng với quý mô thiết kế hiện đại mang tiêu chuẩn chuẩn sống xanh giữa lòng TP Thuận An.",
    createdAt: "2022-12-29T03:26:26.730+00:00",
    reviews: 1500,
  },
];

const Details = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="details">
      <Container>
        <div className="details__container">
          <div className="details__links">
            <ul>
              <li>
                <NavLink>Findhome</NavLink>
              </li>
              <li>
                <NavLink>Nhà đất bán</NavLink>
              </li>
              <li>
                <NavLink>Bình Dương</NavLink>
              </li>
              <li>
                <NavLink>Thuận An</NavLink>
              </li>
            </ul>
          </div>
          <h2>BÁN NHÀ THUẬN AN</h2>
          <div className="details__content">
            <div className="details__content-left">
              <div className="details__head">
                <p>
                  Hiện có <span>146,031 </span> bất động sản.
                </p>
                <div className="left">
                  <span>Sắp xếp</span>
                  <Dropdown
                    options={options}
                    onChange={handleSelect}
                    value={selectedOption}
                    placeholder="Phù hợp nhất"
                  />
                  <Dropdown
                    options={options}
                    onChange={handleSelect}
                    value={selectedOption}
                    placeholder="Theo giá"
                  />
                </div>
              </div>
              <div className="details__list">
                {datas.map((data) => (
                  <Items key={data.id} data={data} />
                ))}
              </div>
            </div>
            <div className="details__content-right">
              <div className="filter__price">
                <h3>Lọc theo bảng giá</h3>
                <ul>
                  <li>Thoả thuận</li>
                  <li>Dưới 500 triệu</li>
                  <li>800 triệu - 1 tỷ</li>
                  <li>1 - 2 tỷ</li>
                  <li>3 - 5 tỷ</li>
                  <li>5 - 7 tỷ</li>
                  <li>7 - 10 tỷ</li>
                  <li>10 - 20 tỷ</li>
                  <li>20 - 30 tỷ</li>
                  <li>30 - 40 tỷ</li>
                  <li>40 - 60 tỷ</li>
                  <li>Trên 60 tỷ</li>
                </ul>
              </div>

              <div className="filter__area">
                <h3>Lọc theo diện tích</h3>
                <ul>
                  <li>Dưới 30 m²</li>
                  <li>30 - 50 m²</li>
                  <li>50 -80 m²</li>
                  <li>80 - 100 m²</li>
                  <li>100 - 150 m²</li>
                  <li>150 - 200 m²</li>
                  <li>200 - 250 m²</li>
                  <li>250 - 300 m²</li>
                  <li>300 - 500 m²</li>
                  <li>Trên 500 m²</li>
                </ul>
              </div>

              <div className="filter__hot">
                <h3>BĐS TÂM ĐIỂM</h3>
                <ul>
                  <li>Bán căn hộ Thuận An</li>
                  <li>Bán căn hộ Thuận An</li>
                  <li>Bán căn hộ Thuận An</li>
                  <li>Bán căn hộ Thuận An</li>
                  <li>Bán căn hộ Thuận An</li>
                  <li>Bán căn hộ Thuận An</li>
                  <li>Bán căn hộ Thuận An</li>
                  <li>Bán căn hộ Thuận An</li>
                  <li>Bán căn hộ Thuận An</li>
                  <li>Bán căn hộ Thuận An</li>
                  <li>Bán căn hộ Thuận An</li>
                  <li>Bán căn hộ Thuận An</li>
                  <li>Bán căn hộ Thuận An</li>
                  <li>Bán căn hộ Thuận An</li>
                </ul>
              </div>
              <div className="filter__utility">
                <h3>TIỆN ÍCH</h3>
                <ul>
                  <li>Tư vấn phong thuỷ</li>
                  <li>Tư vấn phong thuỷ</li>
                  <li>Tư vấn phong thuỷ</li>
                  <li>Tư vấn phong thuỷ</li>
                  <li>Tư vấn phong thuỷ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Details;
