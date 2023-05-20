import React from "react";

import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import formatNumber from "../../../components/Common/currencyFormat";
import Carousel from "../../../components/ThumbsGalleryCarousel/ThumbsGalleryCarousel";
import "../Auction.scss";

const AuctionDetalPopup = ({ showModal, handleCloseModal, auction }) => {
  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      dialogClassName="custom-modal-dialog"
    >
      <Modal.Header closeButton>
        <Modal.Title style={{ fontSize: "23px", fontWeight: "700" }}>
          THÔNG TIN CHI TIẾT
        </Modal.Title>
      </Modal.Header>
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
                        {auction?.description && <p>{auction?.description}</p>}
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
                            <span>Giá/m²:</span>
                            {auction?.price ? (
                              <p>{formatNumber(auction?.price)} /m²</p>
                            ) : (
                              <p> --- </p>
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
                          <h4>{auction?.nameEstate}</h4>
                          <div className="address">
                            <i className="bi bi-geo-alt"></i>
                            <span>{auction?.address}</span>
                          </div>
                          <div className="group__flex">
                            <div className="price">
                              <span>Giá bán: </span>
                              <span>{formatNumber(auction?.price)}</span>
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
                          <span style={{ marginLeft: "10px" }}>
                            {" "}
                            Link file:{" "}
                          </span>
                        </>
                        <a href={auction?.auctionParticipationProfile}>
                          {auction?.auctionParticipationProfile}
                        </a>
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
        <Button variant="secondary" onClick={handleCloseModal}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AuctionDetalPopup;
