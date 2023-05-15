import React, { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";
import AuctionRegistrationPopup from "./AuctionRegistrationPopup";

const DetailAction = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { userData } = useSelector((state) => state.user);
  const [showPopup, setShowPopup] = useState(false);

  const renderButtonContent = () => {
    if (isLoggedIn) {
      // Kiểm tra thông tin người dùng đã đầy đủ hay chưa
      const isProfileComplete = checkProfileCompletion();

      if (isProfileComplete) {
        return (
          <button onClick={() => setShowPopup(true)}>Đăng ký đấu giá</button>
        );
      } else {
        return (
          <button onClick={redirectToProfile}>
            Vui lòng hoàn thiện thông tin cá nhân để đăng ký đấu giá
          </button>
        );
      }
    } else {
      return (
        <button onClick={showLoginMessage}>
          Vui lòng đăng nhập tài khoản để đấu giá
        </button>
      );
    }
  };

  const redirectToProfile = () => {
    window.location.href = "/thong-tin-ca-nhan";
  };

  const showLoginMessage = () => {
    window.location.href = "/dang-ki";
  };

  const checkProfileCompletion = () => {
    if (!userData.dateOfBirth) {
      return false;
    }
    if (!userData.address) {
      return false;
    }
    if (!userData.identityCard) {
      return false;
    }
    if (!userData.identityCardDate) {
      return false;
    }
    if (!userData.avatar) {
      return false;
    }
    if (!userData.frontOfTheIdentityCard) {
      return false;
    }
    if (!userData.backOfTheIdentityCard) {
      return false;
    }
    return true;
  };

  return (
    <div className="detailAction">
      <Container>
        <div className="detailAction__container">
          <div className="detailAction__head">
            <h2>
              Công ty Đấu giá Hợp danh Vạn Thành An thông báo đấu giá 01 xe ô tô
              nhãn hiệu Mitsubishi đã qua sử dụng. Biển kiểm soát: 20A-561.59
            </h2>
          </div>
          <div className="detailAction__body">
            <Tabs
              defaultActiveKey="home"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab
                eventKey="home"
                title="Thông tin chi tiết cuộc đấu giá"
                className="detailAction__tab"
              >
                <div className="info">
                  <div className="image">
                    <img
                      src="https://daugiaviet.vn/taisan/4279/logo%20V%E1%BA%A1n%20th%C3%A0nh%20An.jpg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h2>XEM CHI TIẾT TẠI THÔNG BÁO ĐẤU GIÁ TÀI SẢN</h2>
                    <ul>
                      <li>
                        <span>Người có tài sản:</span>
                        <p>Ngân hàng TMCP Việt Nam Thịnh Vượng - VPBank</p>
                      </li>
                      <li>
                        <span> Ngày công bố:</span>
                        <p>25/04/2023</p>
                      </li>
                      <li>
                        <span>Hạn đăng kí từ:</span>
                        <p>08:00:00 22/04/2023</p>
                      </li>
                      <li>
                        <span>Hạn đăng kí đến:</span>
                        <p>08:00:00 22/04/2023</p>
                      </li>
                      <li>
                        <span>Thời gian bắt đầu cuộc đấu giá:</span>
                        <p>13:30:00 15/05/2023</p>
                      </li>
                      <li>
                        <span>Thời gian kết thúc cuộc đấu giá:</span>
                        <p>Theo quy chế cuộc đấu giá</p>
                      </li>
                      <li>
                        <span>Giá khởi điểm:</span>
                        <p>374.000.000 VNĐ</p>
                      </li>
                      <li>
                        <span>Bước giá:</span>
                        <p>2.000.000 VNĐ</p>
                      </li>
                      <li>
                        <span>Chi phí tham gia đấu giá:</span>
                        <p>200.000 VNĐ</p>
                      </li>
                      <li>
                        <span>Tiền đặt trước:</span>
                        <p>74.800.000 VNĐ</p>
                      </li>
                    </ul>
                    <div className="detailAction__button">
                      {renderButtonContent()}
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="profile"
                title="Chi tiết sản phẩm"
                className="detailAction__tab"
              >
                Chi tiết sản phẩm đấu giá được xem ở cuộc đấu giá tài sản
              </Tab>
              <Tab
                eventKey="contact"
                title="Hồ sơ tham gia đấu giá"
                className="detailAction__tab"
              >
                <div className="file">
                  <span>File được tải lên:</span>
                  <a
                    href="https://daugiaviet.vn/VanBanPhapLy/Files/V%E1%BA%A1n%20Th%C3%A0nh%20An%20-%20chi%20nh%C3%A1nh%20H%C3%A0%20N%E1%BB%99i%2FNew%20folder%2F20A-561.59%20phi%C3%AAn%201%202104_compressed.pdf"
                    alt
                  >
                    https://daugiaviet.vn/VanBanPhapLy/Files/V%E1%BA%A1n%20Th%C3%A0nh%20An%20-%20chi%20nh%C3%A1nh%20H%C3%A0%20N%E1%BB%99i%2FNew%20folder%2F20A-561.59%20phi%C3%AAn%201%202104_compressed.pdf
                  </a>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </Container>
      <AuctionRegistrationPopup
        showPopup={showPopup}
        handleClose={() => setShowPopup(false)}
        frontOfTheIdentityCard={userData.frontOfTheIdentityCard}
      />
    </div>
  );
};

export default DetailAction;
