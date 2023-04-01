import React, { useState } from "react";
import Dropdown from "react-dropdown";
import { NavLink } from "react-router-dom";
import "./Details.scss";

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
];

const Details = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="details">
      <div className="details__container">
        <div className="details__links">
          <ul>
            <li>
              <NavLink>Findhome</NavLink>
            </li>
            <li>
              <NavLink>Mua bán nhà đấy</NavLink>
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
                <div className="item" key={data.id}>
                  <img src={data.imageUrl} alt="" className="item__img" />
                  <div className="item__content">
                    <h3>{data.name}</h3>
                    <ul>
                      <li>
                        <p>{data.price}</p> <p>tỷ</p>{" "}
                      </li>
                      <li>
                        <p>{data.areas}</p> <p>m²</p>
                      </li>
                      <li>{data.description}</li>
                    </ul>
                    <p>{data.description}</p>
                    <div className="item__reviews">
                      <p>{data.createdAt}</p>
                      <p>{data.reviews} lượt xem</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="details__content-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Details;
