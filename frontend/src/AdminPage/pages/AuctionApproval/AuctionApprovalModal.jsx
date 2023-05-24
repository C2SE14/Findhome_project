import React, { useEffect, useState } from "react";

import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import Carousel from "../../../components/ThumbsGalleryCarousel/ThumbsGalleryCarousel";
import { useDispatch, useSelector } from "react-redux";
import {
  approvalAuction,
  getAuctionById,
} from "../../../store/actions/auction";
import { toast } from "react-toastify";

const AuctionApprovalModal = ({
  showModal,
  handleClose,
  selectedItemId,
  title,
}) => {
  const dispatch = useDispatch();
  const [auctionData, setAuctionData] = useState(null);
  const { auction } = useSelector((state) => state.auctionReducer);
  useEffect(() => {
    dispatch(getAuctionById(selectedItemId));
  }, [dispatch, selectedItemId]);
  useEffect(() => {
    if (auction) {
      setAuctionData(auction);
    }
  }, [auction]);
  const handleApproval = () => {
    if (auctionData) {
      dispatch(
        approvalAuction({
          ...auctionData,
          browseByAdmin: true,
        })
      );
      toast.success("Phê duyệt thành công", {
        autoClose: 3000,
        onClose: () => {
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        },
      });
    }
  };
  return (
    <>
      <Modal
        show={showModal}
        onHide={handleClose}
        dialogClassName="custom-modal-dialog"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "23px", fontWeight: "700" }}>
            {title}
          </Modal.Title>
        </Modal.Header>
        <h2
          style={{
            textAlign: "center",
            color: "#cfa267",
            fontSize: "22px",
            fontWeight: "600",
            padding: "10px 0 0 0",
            textTransform: "uppercase",
          }}
        >
          {auction.nameRealEstate}
        </h2>
        <Modal.Body>
          <div className="auctionDetaiPopup">
            <div className="deb">
              <Container>
                <div className="deb__container">
                  <Row>
                    <Col md={12}>
                      <div className="deb__left">
                        <div className="deb__img">
                          {auction?.imageModelList && (
                            <Carousel images={auction?.imageModelList} />
                          )}
                        </div>

                        <div className="deb__desc">
                          <h3>Thông tin mô tả:</h3>
                          {auction?.description && (
                            <p>{auction?.description}</p>
                          )}
                        </div>

                        <div className="deb__characteristic">
                          <h3>Đặc điểm nổi bậc</h3>
                          <div className="content">
                            <div className="address">
                              <span>Địa chỉ:</span>
                              {auction?.address ? (
                                <p>{auction?.address}</p>
                              ) : (
                                <p> --- </p>
                              )}
                            </div>

                            <div className="legaldocuments">
                              <span>Giấy tờ pháp lý:</span>
                              {auction?.legalDocument ? (
                                <p>{auction?.legalDocument}</p>
                              ) : (
                                <p> --- </p>
                              )}
                            </div>
                            <div className="area">
                              <span>Diện tích sử dụng:</span>
                              {auction?.usableArea ? (
                                <p>{auction?.usableArea} m²</p>
                              ) : (
                                <p> --- </p>
                              )}
                            </div>
                            <div className="price">
                              <span>Giá:</span>
                              {!auction?.startingPrice ? (
                                <p> --- </p>
                              ) : (
                                <p>
                                  {auction?.startingPrice &&
                                    auction?.startingPrice.toLocaleString()}{" "}
                                  VNĐ
                                </p>
                              )}
                            </div>
                            <div className="property">
                              <ul>
                                <li>
                                  <span>Mặt tiền:</span>
                                  {auction?.frontispiece ? (
                                    <p>{auction?.frontispiece}m</p>
                                  ) : (
                                    <p> --- </p>
                                  )}
                                </li>
                                <li>
                                  <span>Đường trước nhà/đất:</span>
                                  {auction?.streetHouse ? (
                                    <p>{auction?.streetHouse} m</p>
                                  ) : (
                                    <p> --- </p>
                                  )}
                                </li>
                                <li>
                                  <span>Chiều sâu:</span>
                                  {auction?.depth ? (
                                    <p>{auction?.depth}m</p>
                                  ) : (
                                    <p> --- </p>
                                  )}
                                </li>
                                <li>
                                  <span>Hướng nhà/đất</span>
                                  {auction?.directionOfHouse ? (
                                    <p>{auction?.directionOfHouse}</p>
                                  ) : (
                                    <p> --- </p>
                                  )}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="deb__otherInformation">
                          <h3>Thông tin khác</h3>
                          <div className="content">
                            <div className="property">
                              <ul>
                                <li>
                                  <span>Tổng số tầng:</span>
                                  {auction?.numberFloors ? (
                                    <p>{auction?.numberFloors}</p>
                                  ) : (
                                    <p> --- </p>
                                  )}
                                </li>
                                <li>
                                  <span>Vị trí tầng cho thuê:</span>
                                  {auction?.rentalFloorLocation ? (
                                    <p>{auction?.rentalFloorLocation} m</p>
                                  ) : (
                                    <p> --- </p>
                                  )}
                                </li>
                                <li>
                                  <span>Hướng ban công:</span>
                                  {auction?.balconyDirection ? (
                                    <p>{auction?.balconyDirection}</p>
                                  ) : (
                                    <p> --- </p>
                                  )}
                                </li>
                                <li>
                                  <span>Số phòng ngủ</span>
                                  {auction?.numberBedRooms ? (
                                    <p>{auction?.numberBedRooms} (phòng)</p>
                                  ) : (
                                    <p> --- </p>
                                  )}
                                </li>
                                <li>
                                  <span>Số phòng vệ sinh</span>
                                  {auction?.numberToilets ? (
                                    <p>{auction?.numberToilets} (phòng)</p>
                                  ) : (
                                    <p> --- </p>
                                  )}
                                </li>
                              </ul>
                            </div>
                            <div className="interior">
                              <span>Nội thất:</span>
                              {auction?.interior ? (
                                <p>{auction?.interior}</p>
                              ) : (
                                <p> --- </p>
                              )}
                            </div>
                            <div className="postInfo">
                              <ul>
                                <li>
                                  <span>Mã tin: </span>
                                  <p>{auction?.id}</p>
                                </li>
                                <li>
                                  <span>Loại tin: </span>
                                  {auction?.typeDetailModel && (
                                    <p>
                                      {auction?.typeDetailModel.typeDetailName}
                                    </p>
                                  )}
                                </li>
                                <li>
                                  <span>Ngày đăng: </span>
                                  {auction?.postDate && (
                                    <p>{auction?.postDate}</p>
                                  )}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="deb__right" style={{ marginTop: "10px" }}>
                        <div className="top">
                          <div className="info">
                            <div className="group__flex">
                              <div className="price">
                                <span>Giá khởi điểm: </span>
                                <span>
                                  {auction.startingPrice &&
                                    auction.startingPrice.toLocaleString()}{" "}
                                  vnđ
                                </span>
                              </div>
                              <div className="separator"></div>
                              <div className="area">
                                <span>Diện tích: </span>
                                <span>{auction?.area} m²</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="deb__right">
                        <div className="top">
                          <div style={{ marginBottom: "10px" }}>
                            <h4
                              style={{
                                fontSize: "17px",
                                fontWeight: "600",
                                textTransform: "uppercase",
                                color: "var(--primary-color)",
                                marginBottom: "8px",
                                background: "#f4f2f0",
                                padding: "4px 16px",
                                borderRadius: "4px",
                              }}
                            >
                              Hồ sơ tham gia đấu giá
                            </h4>
                            <>
                              <span
                                style={{
                                  marginLeft: "10px",
                                  marginBottom: "15px",
                                }}
                              >
                                {" "}
                                Link file:{" "}
                              </span>
                            </>
                            <a href={auction?.auctionParticipationProfile}>
                              {auction?.auctionParticipationProfile}
                            </a>
                          </div>

                          <div style={{ marginBottom: "10px" }}>
                            <h4
                              style={{
                                fontSize: "17px",
                                fontWeight: "600",
                                textTransform: "uppercase",
                                color: "var(--primary-color)",
                                marginBottom: "8px",
                                background: "#f4f2f0",
                                padding: "4px 16px",
                                borderRadius: "4px",
                              }}
                            >
                              Thông tin liên hệ
                            </h4>
                            <div
                              style={{
                                background: "#eee",
                                padding: "10px",
                                textAlign: "center",
                              }}
                            >
                              <div style={{ marginBottom: "20px" }}>
                                <img
                                  style={{
                                    margin: "0 auto",
                                    padding: "5px",
                                    borderRadius: "50%",
                                    background: "#fff",
                                    width: "138px",
                                    height: "138px",
                                  }}
                                  src={
                                    auction?.userModel?.avatar ||
                                    "https://cdn.houseviet.vn/images/icons/user-avatar.png"
                                  }
                                  alt="Avatar"
                                />
                                <span
                                  style={{
                                    fontWeight: "700",
                                    color: "var(--primary-color)",
                                  }}
                                >
                                  {auction?.userModel?.username}
                                </span>
                              </div>
                              <ul
                                style={{
                                  marginLeft: "10px",
                                  marginBottom: "15px",
                                  display: "grid",
                                  gridTemplateColumns: "1fr 1fr",
                                  gap: "10px 40px",
                                }}
                              >
                                <li
                                  style={{
                                    listStyle: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <span style={{ fontWeight: "600" }}>
                                    Người đăng
                                  </span>
                                  <span>{auction?.userModel?.fullName}</span>
                                </li>

                                <li
                                  style={{
                                    listStyle: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <span
                                    style={{
                                      fontWeight: "600",
                                    }}
                                  >
                                    Số điện thoại
                                  </span>
                                  <span>{auction?.userModel?.phoneNumber}</span>
                                </li>

                                <li
                                  style={{
                                    listStyle: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <span style={{ fontWeight: "600" }}>
                                    Email
                                  </span>
                                  <span>{auction?.userModel?.email}</span>
                                </li>
                              </ul>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  marginLeft: "42px",
                                }}
                              >
                                <span
                                  style={{
                                    fontWeight: "600",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  Địa chỉ
                                </span>
                                <span>{auction?.userModel?.address}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div style={{ flex: "1", textAlign: "center" }}>
            <span
              style={{
                display: "inline-block",
                color: "#fff",
                fontSize: "18px",
                textTransform: "uppercase",
                fontWeight: " 600",
                background: "green",
                padding: "10px 15px",
                borderRadius: "10px",
                letterSpacing: "0.5px",
                cursor: "pointer",
              }}
              onClick={handleApproval}
            >
              Phê duyệt
            </span>
          </div>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AuctionApprovalModal;
