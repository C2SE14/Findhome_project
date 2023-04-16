import React, { useState } from "react";

//
import "./Detail.scss";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { matbang } from "../../../../assets/images";
import { map } from "../../../../assets/images";
import Carousel from "../../../../components/Carousel/Carousel";

const Detail = () => {
  // const params = useParams();
  // const { slug } = params;

  // window.scrollTo({
  //   top: 0,
  //   behavior: "smooth",
  // });
  const [showData, setShowData] = useState(false);

  const hanldeClickShow = () => {
    setShowData(!showData);
  };

  const data__newEstate = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/dulkwgwws/image/upload/v1679131486/CAPTONSE2/Anhdemo_d0nnvh.png",
      name: "Cityland Garden Hills - ThanhTuyền Cityland",
      address: "Đường Phan Văn Trị, Phường 5, Quận Gò Vấp, TP Hồ Chí Minh",
      area: "56m²",
      price: "24.9 tỷ",
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/dulkwgwws/image/upload/v1679131486/CAPTONSE2/Anhdemo_d0nnvh.png",
      name: "Cityland Garden Hills - ThanhTuyền Cityland",
      address: "Đường Phan Văn Trị, Phường 5, Quận Gò Vấp, TP Hồ Chí Minh",
      area: "56m²",
      price: "24.9 tỷ",
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/dulkwgwws/image/upload/v1679131486/CAPTONSE2/Anhdemo_d0nnvh.png",
      name: "Cityland Garden Hills - ThanhTuyền Cityland",
      address: "Đường Phan Văn Trị, Phường 5, Quận Gò Vấp, TP Hồ Chí Minh",
      area: "56m²",
      price: "24.9 tỷ",
    },
  ];

  const data_area = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/dulkwgwws/image/upload/v1679131486/CAPTONSE2/Anhdemo_d0nnvh.png",
      name: "Cityland Garden Hills - ThanhTuyền Cityland",
      address: "Đường Phan Văn Trị, Phường 5, Quận Gò Vấp, TP Hồ Chí Minh",
      area: "56m²",
      price: "24.9 tỷ",
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/dulkwgwws/image/upload/v1679131486/CAPTONSE2/Anhdemo_d0nnvh.png",
      name: "Cho thuê dự án Q7 Riverside-Nội thất full đầy đủ.",
      address: "Đường Đào Trí, Phường Phú Thuận, Quận 7, Hồ Chí Minh",
      area: "56m²",
      price: "24.9 tỷ",
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/dulkwgwws/image/upload/v1679131486/CAPTONSE2/Anhdemo_d0nnvh.png",
      name: "Dự án Điền Phúc Thành Q2",
      address: "Đường Mai Chí Thọ, Phường An Phú, Quận 2, Hồ Chí Minh.",
      area: "56m²",
      price: "24.9 tỷ",
    },

    {
      id: 4,
      imageUrl:
        "https://res.cloudinary.com/dulkwgwws/image/upload/v1679131486/CAPTONSE2/Anhdemo_d0nnvh.png",
      name: "Dự án Điền Phúc Thành Q2",
      address: "Đường Mai Chí Thọ, Phường An Phú, Quận 2, Hồ Chí Minh.",
      area: "56m²",
      price: "24.9 tỷ",
    },

    {
      id: 5,
      imageUrl:
        "https://res.cloudinary.com/dulkwgwws/image/upload/v1679131486/CAPTONSE2/Anhdemo_d0nnvh.png",
      name: "Dự án Điền Phúc Thành Q2",
      address: "Đường Mai Chí Thọ, Phường An Phú, Quận 2, Hồ Chí Minh.",
      area: "56m²",
      price: "24.9 tỷ",
    },
  ];

  const data_news_viewed = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/dulkwgwws/image/upload/v1679131486/CAPTONSE2/Anhdemo_d0nnvh.png",
      name: "Cityland Garden Hills - ThanhTuyền Cityland",
      address: "Đường Phan Văn Trị, Phường 5, Quận Gò Vấp, TP Hồ Chí Minh",
      area: "56m²",
      price: "24.9 tỷ",
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/dulkwgwws/image/upload/v1679131486/CAPTONSE2/Anhdemo_d0nnvh.png",
      name: "Cho thuê dự án Q7 Riverside-Nội thất full đầy đủ.",
      address: "Đường Đào Trí, Phường Phú Thuận, Quận 7, Hồ Chí Minh",
      area: "56m²",
      price: "24.9 tỷ",
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/dulkwgwws/image/upload/v1679131486/CAPTONSE2/Anhdemo_d0nnvh.png",
      name: "Dự án Điền Phúc Thành Q2",
      address: "Đường Mai Chí Thọ, Phường An Phú, Quận 2, Hồ Chí Minh.",
      area: "56m²",
      price: "24.9 tỷ",
    },

    {
      id: 4,
      imageUrl:
        "https://res.cloudinary.com/dulkwgwws/image/upload/v1679131486/CAPTONSE2/Anhdemo_d0nnvh.png",
      name: "Dự án Điền Phúc Thành Q2",
      address: "Đường Mai Chí Thọ, Phường An Phú, Quận 2, Hồ Chí Minh.",
      area: "56m²",
      price: "24.9 tỷ",
    },

    {
      id: 5,
      imageUrl:
        "https://res.cloudinary.com/dulkwgwws/image/upload/v1679131486/CAPTONSE2/Anhdemo_d0nnvh.png",
      name: "Dự án Điền Phúc Thành Q2",
      address: "Đường Mai Chí Thọ, Phường An Phú, Quận 2, Hồ Chí Minh.",
      area: "56m²",
      price: "24.9 tỷ",
    },
  ];

  return (
    <div className="detail">
      <div className="detail__container">
        <div style={{ background: "#fff" }}>
          <Container>
            <div className="detail__links">
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
                <li>
                  <NavLink>Nhà mặt phố</NavLink>
                </li>
              </ul>
            </div>
            <div className="detail__reviews">
              <div className="detail__btns">
                <div className="hot">Nổi bật</div>
                <div className="sell">Bán</div>
              </div>
              <div className="group">
                <i className="bi bi-alarm"></i>
                <p>2 ngày trước</p>
              </div>
              <div className="group">
                <i className="bi bi-eye"></i>
                <p>1500</p>
                <p>lượt xem</p>
              </div>
            </div>
            <div className="detail__content">
              <div className="head">
                <div className="d-flex align-items-center justify-content-between">
                  <h2 className="name">
                    LAVELA GARDEN NHÀ PHỐ THƯƠNG MẠI TÂM ĐIỂM ĐẦU TƯ
                  </h2>
                  <span>3 tỷ/66 m²</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-geo-alt-fill"></i>
                  <p>
                    Dự án Lavela Garden, Đường Bình Chuẩn 69, Phường Bình Chuẩn,
                    Thuận An, Bình Dương
                  </p>
                </div>
                <div className="detail__images">
                  <div className="detail__images-lages">
                    <img
                      src="https://tophinhanhdep.com/wp-content/uploads/2021/10/4K-Quality-Wallpapers.jpg"
                      alt=""
                    />
                  </div>
                  <div className="detail__images-group">
                    <img
                      src="https://tophinhanhdep.com/wp-content/uploads/2021/10/4K-Quality-Wallpapers.jpg"
                      alt=""
                    />
                    <img
                      src="https://tophinhanhdep.com/wp-content/uploads/2021/10/4K-Quality-Wallpapers.jpg"
                      alt=""
                    />
                    <img
                      src="https://tophinhanhdep.com/wp-content/uploads/2021/10/4K-Quality-Wallpapers.jpg"
                      alt=""
                    />
                    <img
                      src="https://tophinhanhdep.com/wp-content/uploads/2021/10/4K-Quality-Wallpapers.jpg"
                      alt=""
                    />
                    <img
                      src="https://tophinhanhdep.com/wp-content/uploads/2021/10/4K-Quality-Wallpapers.jpg"
                      alt=""
                    />
                    <img
                      src="https://tophinhanhdep.com/wp-content/uploads/2021/10/4K-Quality-Wallpapers.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div style={{ background: "#F2F2F2", padding: "100px 0" }}>
          <Container>
            <div className="d-flex" style={{ gap: "20px", overflow: "hidden" }}>
              <div style={{ flex: 0.7, overflow: "hidden" }}>
                <div className="detail__description">
                  <h2>Thông tin mô tả</h2>
                  <p>
                    Khu nhà phố thương mại Lavela Garden khơi nguồn cuộc sống
                    xanh.Tọa lạc ngay trên đường bình Chuẩn 69, TP Thuận An,
                    Bình Dương. LAVELA Garden tạo ấn tượng mạnh đến với quý
                    khách hàng với quý mô thiết kế hiện đại mang tiêu chuẩn
                    chuẩn sống xanh giữa lòng TP Thuận An.
                    <br /> Tổng khu với diện tích hơn 1,2 hả. Được xây dựng cơ
                    sở hạ tầng hoàn thiện, đường nhựa, vỉa hè, đèn đường, điện
                    âm, nước âm... Gồm 82 căn nhà phố thiết kế hiện đại sang
                    trọng từ 2 tầng đến 3 tầng tiện lợi cho nhu cầu quý khách.
                    <br /> Nội khu có công viên cây xanh mát, hoa nở quanh năm,
                    công viên nhiều tiện ích, có khu vực vui chơi trẻ em, có
                    đường chạy bộ, có khu tập yoga, có khu tập với máy thể dục,
                    có công viên ánh sáng, có BBQ ngoài trời, có chốt bảo vệ
                    cảnh gác.
                  </p>
                </div>
                <div className="detail__overview">
                  <h2>TỔNG QUAN</h2>
                  <ul>
                    <li>
                      <i className="bi bi-bounding-box-circles"></i>
                      <div>
                        <span>Diện tích</span>
                        <span>66 m²</span>
                      </div>
                    </li>

                    <li>
                      <i className="bi bi-cash-stack"></i>
                      <div>
                        <span>Mức giá</span>
                        <span>3 tỷ</span>
                      </div>
                    </li>

                    <li>
                      <i className="bi bi-signpost-fill"></i>
                      <div>
                        <span>Đường vào</span>
                        <span>22m</span>
                      </div>
                    </li>

                    <li>
                      <i className="bi bi-house-door"></i>
                      <div>
                        <span>Mặt tiền</span>
                        <span>9m</span>
                      </div>
                    </li>
                    <li>
                      <i className="bi bi-bar-chart-steps"></i>
                      <div>
                        <span>Số tầng</span>
                        <span>3</span>
                      </div>
                    </li>

                    <li>
                      <i className="bi bi-truck-flatbed"></i>
                      <div>
                        <span>Số phòng ngủ</span>
                        <span>5</span>
                      </div>
                    </li>

                    <li>
                      <i className="bi bi-badge-wc"></i>
                      <div>
                        <span>Số toilet</span>
                        <span>3</span>
                      </div>
                    </li>

                    <li>
                      <i className="bi bi-house-gear-fill"></i>
                      <div>
                        <span>Nội thất</span>
                        <span>Cao cấp</span>
                      </div>
                    </li>
                    <li>
                      <i className="bi bi-building"></i>
                      <div>
                        <span>Năm xây dựng</span>
                        <span>2020</span>
                      </div>
                    </li>

                    <li>
                      <i className="bi bi-file-earmark-text-fill"></i>
                      <div>
                        <span>Pháp lý</span>
                        <span>Có sổ đỏ</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="detail__address">
                  <h2>Địa chỉ</h2>
                  <ul>
                    <li>
                      <span>Đường/Thôn</span>
                      <span>08 Hà Văn Tính</span>
                    </li>
                    <li>
                      <span>Quận/Huyện</span>
                      <span>Liên Chiểu</span>
                    </li>
                    <li>
                      <span>Quốc gia</span>
                      <span>Việt Nam</span>
                    </li>

                    <li>
                      <span>Phường/Xã</span>
                      <span>Hoà Khánh Nam</span>
                    </li>
                    <li>
                      <span>Thành Phố/Tỉnh</span>
                      <span>Đà Nẵng</span>
                    </li>
                  </ul>
                </div>
                <div className="detail__ground">
                  <h2>MẶT BẰNG TỔNG THỂ</h2>
                  <ul>
                    <li onClick={hanldeClickShow}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>Tầng 1</span>
                        <i className="bi bi-chevron-down"></i>
                      </div>
                      {showData && <img src={matbang} alt="" />}
                    </li>
                    <li>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>Tầng 2</span>
                        <i className="bi bi-chevron-down"></i>
                      </div>
                    </li>
                    <li>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>Tầng 3</span>
                        <i className="bi bi-chevron-down"></i>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="detail__video">
                  <h2>VIDEO GIỚI THIỆU</h2>
                  <video
                    width="100%"
                    height="400"
                    controls
                    src="https://res.cloudinary.com/dulkwgwws/video/upload/v1671172287/Video/danang_lvport.mp4"
                  />
                </div>
                <div className="detail__map">
                  <h2>Bản đồ</h2>
                  <img src={map} alt="" />
                </div>
                <div className="detail__benefitsAround">
                  <h2>TIỆN ÍCH XUNG QUANH</h2>
                  <ul>
                    <li>
                      <i className="bi bi-houses"></i>
                      <div>
                        <h2>Trường học</h2>
                        <span>Cách 500m về hướng Đông</span>
                      </div>
                    </li>

                    <li>
                      <i className="bi bi-houses"></i>
                      <div>
                        <h2>Y tế</h2>
                        <span>Cách 500m về hướng Đông</span>
                      </div>
                    </li>

                    <li>
                      <i className="bi bi-train-freight-front"></i>
                      <div>
                        <h2>Bến tàu xe</h2>
                        <span>Cách 500m về hướng Đông</span>
                      </div>
                    </li>

                    <li>
                      <i className="bi bi-bank"></i>
                      <div>
                        <h2>Ngân hàng</h2>
                        <span>Cách 500m về hướng Đông</span>
                      </div>
                    </li>

                    <li>
                      <i className="bi bi-shop"></i>
                      <div>
                        <h2>Siêu thị</h2>
                        <span>Cách 500m về hướng Đông</span>
                      </div>
                    </li>
                    <li>
                      <i className="bi bi-shop"></i>
                      <div>
                        <h2>Phòng Gym</h2>
                        <span>Cách 500m về hướng Đông</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="detail__nearArea">
                  <h2>BẤT ĐỘNG SẢN GẦN KHU VỰC</h2>
                  <div>
                    <Carousel data_area={data_area} />
                  </div>
                </div>
              </div>
              <div
                style={{
                  flex: 0.3,
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  overflow: "hidden",
                }}
              >
                <div className="detail__hot">
                  <h2>BĐS NỔI BẬT</h2>
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
                    <li>Bán căn hộ Thuận An</li>
                    <li>Bán căn hộ Thuận An</li>
                    <li>Bán căn hộ Thuận An</li>
                    <li>Bán căn hộ Thuận An</li>
                    <li>Bán căn hộ Thuận An</li>
                    <li>Bán căn hộ Thuận An</li>
                    <li>Bán căn hộ Thuận An</li>
                  </ul>
                </div>
                <div className="detail__newEstate">
                  <h2>BĐS MỚI CẬP NHẬT</h2>
                  <div>
                    <Carousel data__newEstate={data__newEstate} />
                  </div>
                </div>
              </div>
            </div>
            <div className="detail__newsViewed">
              <h2>TIN ĐÃ XEM</h2>
              <Carousel data_news_viewed={data_news_viewed} />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Detail;
