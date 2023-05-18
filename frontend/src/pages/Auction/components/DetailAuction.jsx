import React, { useEffect, useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AuctionRegistrationPopup from "./AuctionRegistrationPopup";
import { useLocation } from "react-router-dom";
import { getAuctionById } from "../../../store/actions/auction";
import LoadingComp from "../../../components/Loading/Loading";
import { formatDate } from "../../../components/Common/convertToSlug";

const DetailAuction = () => {
  const location = useLocation();
  const id = location.state ? location.state.id : null;
  const dispatch = useDispatch();
  const { auction, loading } = useSelector((state) => state.auctionReducer);
  useEffect(() => {
    dispatch(getAuctionById(id));
  }, [dispatch, id]);

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
    if (!userData.frontOfTheIdentityCard) {
      return false;
    }
    if (!userData.backOfTheIdentityCard) {
      return false;
    }
    return true;
  };

  return (
    <>
      {loading ? (
        <div className="loading__login">
          <LoadingComp type="spin" color="#b53c12" width="50px" height="50px" />
        </div>
      ) : null}
      <div className="detailAction">
        <Container>
          <div className="detailAction__container">
            <div className="detailAction__head">
              <h2>{auction.nameRealEstate}</h2>
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
                        src={
                          auction.imageModelList &&
                          auction.imageModelList[0].image
                        }
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h2>XEM CHI TIẾT TẠI THÔNG BÁO ĐẤU GIÁ TÀI SẢN</h2>
                      <ul>
                        <li>
                          <span>Người có tài sản:</span>
                          <p>
                            {" "}
                            {auction.userModel && auction.userModel.fullName}
                          </p>
                        </li>
                        <li>
                          <span> Ngày công bố:</span>
                          <p>{formatDate(auction.dateOfPublication)}</p>
                        </li>
                        <li>
                          <span>Hạn đăng kí từ:</span>
                          <p>{formatDate(auction.registrationDateStart)}</p>
                        </li>
                        <li>
                          <span>Hạn đăng kí đến:</span>
                          <p>{formatDate(auction.registrationDateEnd)}</p>
                        </li>
                        <li>
                          <span>Thời gian bắt đầu cuộc đấu giá:</span>
                          <p>{formatDate(auction.auctionStartDate)}</p>
                        </li>
                        <li>
                          <span>Thời gian kết thúc cuộc đấu giá:</span>
                          <p>{formatDate(auction.auctionEndDate)}</p>
                        </li>
                        <li>
                          <span>Giá khởi điểm:</span>
                          <p>
                            {auction.startingPrice &&
                              auction.startingPrice.toLocaleString()}{" "}
                            VNĐ
                          </p>
                        </li>
                        <li>
                          <span>Bước giá:</span>
                          <p>
                            {auction.priceStep &&
                              auction.priceStep.toLocaleString()}{" "}
                            VNĐ
                          </p>
                        </li>
                        <li>
                          <span>Chi phí tham gia đấu giá:</span>
                          <p>
                            {auction.auctionParticipationFee &&
                              auction.auctionParticipationFee.toLocaleString()}{" "}
                            VNĐ
                          </p>
                        </li>
                        <li>
                          <span>Tiền đặt trước:</span>
                          <p>
                            {auction.downPayment &&
                              auction.downPayment.toLocaleString()}{" "}
                            VNĐ
                          </p>
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
                      href={auction.auctionParticipationProfile}
                      alt={auction.auctionParticipationProfile}
                    >
                      {auction.auctionParticipationProfile}
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
          auction={auction}
        />
      </div>
    </>
  );
};

export default DetailAuction;
