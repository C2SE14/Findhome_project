import React, { useEffect, useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import VNnum2words from "vn-num2words";
import AuctionDetalPopup from "./AuctionDetailPopup";
import { useDispatch, useSelector } from "react-redux";
import {
  getAuctionById,
  getBargainAuctionById,
  postActionResult,
  postBargainAuction,
} from "../../../store/actions/auction";
import { useParams } from "react-router-dom";
import { formatDate } from "../../../components/Common/convertToSlug";
import { toast } from "react-toastify";
import getRandomName from "../../../components/Common/randomName";
import { formatTimeStamp } from "../../../components/Common/formatTimeStamp";
import LoadingComp from "../../../components/Loading/Loading";
const AuctionRoom = () => {
  // Lấy userId
  const { userId } = useSelector((state) => state.auth);

  // Show lỗi cảnh cáo khi chủ vô mà nhập
  const [showOwnerAlert, setShowOwnerAlert] = useState(false);

  // Lấy id của aucion
  const params = useParams();

  // Đếm thời gian
  const dispatch = useDispatch();
  const [countdown, setCountdown] = useState(null);
  const { auction, listBargain, loading } = useSelector(
    (state) => state.auctionReducer
  );

  useEffect(() => {
    if (auction) {
      dispatch(getBargainAuctionById(auction.id));
    }
  }, [auction, dispatch]);

  useEffect(() => {
    dispatch(getAuctionById(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    const endTime = new Date(auction?.auctionEndDate).getTime();

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
  }, [auction?.auctionEndDate]);

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const isAuctionEnded = countdown === null;

  const formatCurrencyy = (value) => {
    if (value !== null && value !== undefined) {
      return VNnum2words(value) + " đồng";
    }

    return ""; // Trả về chuỗi rỗng nếu value không hợp lệ
  };
  //
  const maxPricePaid = Math.max(...listBargain.map((item) => item?.pricePaid));
  const sortedData =
    listBargain && listBargain.sort((a, b) => b.pricePaid - a.pricePaid);
  const initialPrice =
    listBargain && listBargain.length > 0
      ? maxPricePaid && maxPricePaid
      : auction && auction.startingPrice;

  const [bargainPrice, setBargainPrice] = useState(
    initialPrice ? initialPrice : 0
  );
  useEffect(() => {
    if (auction && auction.startingPrice !== undefined) {
      setBargainPrice(initialPrice);
    }
  }, [auction, initialPrice]);

  const handleDecreasePrice = () => {
    const minPrice = auction?.startingPrice || 0;
    const newPrice = bargainPrice - (auction?.priceStep || 0);
    if (newPrice >= minPrice && newPrice !== maxPricePaid) {
      setBargainPrice(newPrice);
    }
  };

  const handleIncreasePrice = () => {
    const newPrice = bargainPrice + (auction?.priceStep || 0);
    setBargainPrice(newPrice);
  };

  // ? Đây là xử lí Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId === auction.userModel?.id) {
      setShowOwnerAlert(true);
    } else {
      // Xử lý gửi yêu cầu trả giá chỉ khi người dùng không phải là chủ sở hữu
      const randomName = getRandomName();
      const paymentTime = new Date();

      const bargainData = {
        pricePaid: bargainPrice,
        paymentTime: formatTimeStamp(paymentTime),
        randomName,
        userModel: {
          id: userId,
        },
        auctionModel: {
          id: auction.id,
        },
      };

      dispatch(postBargainAuction(bargainData))
        .then(() => {
          toast.success("Trả giá thành công!");
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        })
        .catch((error) => {
          toast.error("Đã xảy ra lỗi trong quá trình trả giá.");
        });
    }
  };
  const findMaxPricePaidUserId = (data) => {
    let maxPricePaid = 0;
    let userId = null;

    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item.pricePaid > maxPricePaid) {
        maxPricePaid = item.pricePaid;
        userId = item.userModel.id;
      }
    }

    return userId;
  };

  const maxPricePaidUserId = findMaxPricePaidUserId(listBargain);
  useEffect(() => {
    if (countdown === null) {
      const formData = {
        reason: auction?.nameRealEstate,
        completeStatus: true,
        endTime: auction?.auctionEndDate,
        userId: maxPricePaidUserId,
        auctionId: auction?.id,
      };

      dispatch(postActionResult(formData));
    }
  }, [countdown, auction, dispatch, maxPricePaidUserId]);

  return (
    <>
      {loading ? (
        <div className="loading__login">
          <LoadingComp type="spin" color="#b53c12" width="50px" height="50px" />
        </div>
      ) : null}
      <div className="aur">
        <Container>
          <div className="aur__container">
            <div className="aur__title">
              <h2>{auction.nameRealEstate}</h2>
            </div>
            <div className="aur__body">
              <div className="aur__content">
                <div className="aur__left">
                  <div className="aur__image">
                    <img
                      src={
                        auction?.imageModelList &&
                        auction?.imageModelList[0]?.image
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div className="aur__right">
                  <div className="name">
                    <span>Tài sản đấu giá: </span>
                    {auction.nameRealEstate}
                  </div>
                  <ul>
                    <li>
                      <h5>Người có tài sản</h5>
                      <span>{auction.userModel?.username}</span>
                    </li>
                    <li>
                      <h5>Ngày công bố</h5>
                      <span>{formatDate(auction?.dateOfPublication)}</span>
                    </li>
                    <li>
                      <h5>Thời gian bắt đầu cuộc đấu giá</h5>
                      <span>{formatDate(auction?.auctionStartDate)}</span>
                    </li>
                    <li>
                      <h5>Thời gian điểm danh người tham gia đấu giá</h5>
                      <span>{formatDate(auction?.registrationDateEnd)}</span>
                    </li>
                    <li>
                      <h5>Kết thúc dự kiến</h5>
                      <span>{formatDate(auction?.auctionEndDate)}</span>
                    </li>
                    <li>
                      <h5>Giá khởi điểm</h5>
                      <span>
                        {auction?.startingPrice?.toLocaleString()} VNĐ
                      </span>
                    </li>
                    <li>
                      <h5>Bước giá</h5>
                      <span>{auction?.priceStep?.toLocaleString()} VNĐ </span>
                    </li>
                    <li>
                      <h5>Chi phí đấu giá</h5>
                      <span>
                        {auction?.auctionParticipationFee?.toLocaleString()} VNĐ
                      </span>
                    </li>
                    <li>
                      <h5>Tiền đặt trước</h5>
                      <span>
                        {Number(auction?.downPayment).toLocaleString()} VNĐ
                      </span>
                    </li>
                  </ul>
                  <div className="priceMax">
                    Giá cao nhất thời điểm hiện tại :{" "}
                    {maxPricePaid && maxPricePaid.toLocaleString()} VNĐ
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
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
                  <div
                    className="countdown-expired"
                    style={{
                      padding: "5px 0",
                      color: "red",
                      fontWeight: "700",
                    }}
                  >
                    Thời gian cuộc đấu giá kết thúc !
                  </div>
                )}
              </div>
              <div className="aur__bargain-section">
                <div className="aur__bargain-input">
                  <Form
                    onSubmit={handleSubmit}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Button
                      variant="light"
                      className="cong"
                      onClick={handleDecreasePrice}
                      disabled={bargainPrice === maxPricePaid}
                    >
                      -
                    </Button>
                    <Form.Control
                      type="number"
                      value={bargainPrice}
                      onChange={(e) => setBargainPrice(Number(e.target.value))}
                    />

                    <Button
                      variant="light"
                      className="cong"
                      onClick={handleIncreasePrice}
                    >
                      +
                    </Button>
                    <Button
                      className="buttonTra"
                      type="submit"
                      disabled={isAuctionEnded || bargainPrice === maxPricePaid}
                    >
                      Trả giá
                    </Button>
                  </Form>
                </div>
                <small className="owner-alertt">
                  {formatCurrencyy(bargainPrice)}
                </small>
                {showOwnerAlert && (
                  <small className="owner-alert">
                    Lưu ý: Chủ sở hữu không được trả giá
                  </small>
                )}
              </div>
            </div>

            <div className="history">
              <div className="title">
                <h2>LỊCH SỬ TRẢ GIÁ</h2>
                <h2 onClick={handleShowModal}>THÔNG TIN CHI TIẾT</h2>
                <AuctionDetalPopup
                  showModal={showModal}
                  handleCloseModal={handleCloseModal}
                  auction={auction}
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
                    {sortedData.map((item) => (
                      <tr key={item.id}>
                        <td>{item.randomName}</td>
                        <td>{item.pricePaid.toLocaleString()}VNĐ</td>
                        <td>{formatDate(item.paymentTime)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AuctionRoom;
