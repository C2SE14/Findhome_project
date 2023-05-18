import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import VNnum2words from "vn-num2words";
import AuctionDetalPopup from "./AuctionDetailPopup";
const AuctionRoom = () => {
  // Đếm thời gian
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    const endTime = new Date("2023-05-20T12:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance <= 0) {
        clearInterval(interval);
        setCountdown(null);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  //Nhập tiền vào
  const [bargainPrice, setBargainPrice] = useState(null);

  const handleBargainChange = (event) => {
    setBargainPrice(event.target.value);
  };

  const increaseBargainPrice = () => {
    setBargainPrice((prev) => (prev !== null ? prev + 1 : null));
  };

  const decreaseBargainPrice = () => {
    setBargainPrice((prev) => (prev !== null ? prev - 1 : null));
  };
  /////
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="aur">
      <Container>
        <div className="aur__container">
          <div className="aur__title">
            <h2>Công Ty Cổ Phần Đầu Tư & Kinh Doanh Bất Động Sản TGSGROUP</h2>
          </div>
          <div className="aur__body">
            <div className="aur__content">
              <div className="aur__left">
                <div className="aur__image">
                  <img
                    src="https://thuanhunggroup.com/wp-content/uploads/2021/09/THG-hi%CC%80nh-ne%CC%82%CC%80n229-scaled.jpeg"
                    alt=""
                  />
                </div>
              </div>
              <div className="aur__right">
                <div className="name">
                  <span>Tài sản đấu giá: </span>
                  Đấu giá Chí Thông
                </div>
                <ul>
                  <li>
                    <h5>Đấu giá viên</h5>
                    <span>Nguyễn Văn Hải</span>
                  </li>
                  <li>
                    <h5>Người có tài sản</h5>
                    <span>Nguyễn Văn Hải</span>
                  </li>
                  <li>
                    <h5>Ngày công bố</h5>
                    <span>16/5/2023</span>
                  </li>
                  <li>
                    <h5>Thời gian bắt đầu cuộc đấu giá</h5>
                    <span>16/5/2023</span>
                  </li>
                  <li>
                    <h5>Thời gian điểm danh người tham gia đấu giá</h5>
                    <span>16/5/2023</span>
                  </li>
                  <li>
                    <h5>Kết thúc dự kiến</h5>
                    <span>16/5/2023</span>
                  </li>
                  <li>
                    <h5>Giá khởi điểm</h5>
                    <span>3222222222222</span>
                  </li>
                  <li>
                    <h5>Bước giá</h5>
                    <span>3222222222222</span>
                  </li>
                  <li>
                    <h5>Chi phí đấu giá</h5>
                    <span>3222222222222</span>
                  </li>
                  <li>
                    <h5>Tiền đặt trước</h5>
                    <span>3222222222222</span>
                  </li>
                </ul>
                <div className="priceMax">
                  Giá cao nhất thời điểm hiện tải : 350000000VNĐ
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "30px",
              gap: "50px",
            }}
          >
            <div className="aur__countdown">
              {countdown ? (
                <>
                  <div className="countdown-item">
                    <div className="countdown-value">
                      {formatTime(countdown.days)}
                    </div>
                    <div className="countdown-label">Ngày</div>
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-value">
                      {formatTime(countdown.hours)}
                    </div>
                    <div className="countdown-label">Giờ</div>
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-value">
                      {formatTime(countdown.minutes)}
                    </div>
                    <div className="countdown-label">Phút</div>
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-value">
                      {formatTime(countdown.seconds)}
                    </div>
                    <div className="countdown-label">Giây</div>
                  </div>
                </>
              ) : (
                <div className="countdown-expired">
                  Thời gian cuộc đấu giá kết thúc
                </div>
              )}
            </div>
            <div className="aur__bargain-section">
              <div className="aur__bargain-input">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="bargain-input-container">
                    <span
                      className="bargain-sign"
                      onClick={decreaseBargainPrice}
                    >
                      -
                    </span>

                    <input
                      type="number"
                      placeholder="Nhập giá"
                      value={bargainPrice !== null ? bargainPrice : ""}
                      onChange={handleBargainChange}
                    />
                    <span
                      className="bargain-sign"
                      onClick={increaseBargainPrice}
                    >
                      +
                    </span>
                  </div>
                  <button>Trả giá</button>
                </div>
                <div className="bargain-price">
                  {bargainPrice !== null
                    ? `${VNnum2words(bargainPrice)} đồng `
                    : ""}
                </div>
              </div>
            </div>
          </div>

          <div className="history">
            <div className="title">
              <h2>LỊCH SỬ TRẢ GIÁ</h2>
              <h2 onClick={handleShowModal}>THÔNG TIN CHI TIẾT</h2>
              <AuctionDetalPopup
                showModal={showModal}
                handleCloseModal={handleCloseModal}
              />
            </div>
            <div className="content">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Người đấu giá</th>
                    <th>Giá trả (VNĐ)</th>
                    <th>Thời điểm trả giá</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>TDWADAWDW</td>
                    <td>200.000.000.000</td>
                    <td>16/6/2023</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AuctionRoom;
