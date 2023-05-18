import React, { useEffect } from "react";

import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import formatNumber from "../../../components/Common/currencyFormat";
import { getRealEstateById } from "../../../store/actions/postRealEstate";
import Carousel from "../../../components/ThumbsGalleryCarousel/ThumbsGalleryCarousel";
import "../Auction.scss";

const AuctionDetalPopup = (props) => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.postRealEstate);
  useEffect(() => {
    dispatch(getRealEstateById(1));
  }, [dispatch]);
  return (
    <Modal
      show={props.showModal}
      onHide={props.handleCloseModal}
      dialogClassName="custom-modal-dialog"
    >
      <Modal.Header closeButton>
        <Modal.Title>THÔNG TIN CHI TIẾT</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="auctionDetaiPopup">
          <div className="deb">
            <Container>
              <div className="deb__container">
                <Row>
                  <Col md={8}>
                    <div className="deb__left">
                      <div className="deb__img">
                        {post.imageModelList && (
                          <Carousel images={post.imageModelList} />
                        )}
                      </div>

                      <div className="deb__desc">
                        <h3>Thông tin mô tả:</h3>
                        {post.description && <p>{post.description}</p>}
                      </div>

                      <div className="deb__characteristic">
                        <h3>Đặc điểm nổi bậc</h3>
                        <div className="content">
                          <div className="address">
                            <span>Địa chỉ:</span>
                            {post.address ? (
                              <p>{post.address}</p>
                            ) : (
                              <p> --- </p>
                            )}
                          </div>

                          <div className="legaldocuments">
                            <span>Giấy tờ pháp lý:</span>
                            {post.legalDocument ? (
                              <p>{post.legalDocument}</p>
                            ) : (
                              <p> --- </p>
                            )}
                          </div>
                          <div className="area">
                            <span>Diện tích sử dụng:</span>
                            {post.usableArea ? (
                              <p>{post.usableArea} m²</p>
                            ) : (
                              <p> --- </p>
                            )}
                          </div>
                          <div className="price">
                            <span>Giá/m²:</span>
                            {post.price ? (
                              <p>{formatNumber(post.price)} /m²</p>
                            ) : (
                              <p> --- </p>
                            )}
                          </div>
                          <div className="property">
                            <ul>
                              <li>
                                <span>Mặt tiền:</span>
                                {post.frontispiece ? (
                                  <p>{post.frontispiece}m</p>
                                ) : (
                                  <p> --- </p>
                                )}
                              </li>
                              <li>
                                <span>Đường trước nhà/đất:</span>
                                {post.streetHouse ? (
                                  <p>{post.streetHouse} m</p>
                                ) : (
                                  <p> --- </p>
                                )}
                              </li>
                              <li>
                                <span>Chiều sâu:</span>
                                {post.depth ? (
                                  <p>{post.depth}m</p>
                                ) : (
                                  <p> --- </p>
                                )}
                              </li>
                              <li>
                                <span>Hướng nhà/đất</span>
                                {post.directionOfHouse ? (
                                  <p>{post.directionOfHouse}</p>
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
                                {post.numberFloors ? (
                                  <p>{post.numberFloors}</p>
                                ) : (
                                  <p> --- </p>
                                )}
                              </li>
                              <li>
                                <span>Vị trí tầng cho thuê:</span>
                                {post.rentalFloorLocation ? (
                                  <p>{post.rentalFloorLocation} m</p>
                                ) : (
                                  <p> --- </p>
                                )}
                              </li>
                              <li>
                                <span>Hướng ban công:</span>
                                {post.balconyDirection ? (
                                  <p>{post.balconyDirection}</p>
                                ) : (
                                  <p> --- </p>
                                )}
                              </li>
                              <li>
                                <span>Số phòng ngủ</span>
                                {post.numberBedRooms ? (
                                  <p>{post.numberBedRooms} (phòng)</p>
                                ) : (
                                  <p> --- </p>
                                )}
                              </li>
                              <li>
                                <span>Số phòng vệ sinh</span>
                                {post.numberToilets ? (
                                  <p>{post.numberToilets} (phòng)</p>
                                ) : (
                                  <p> --- </p>
                                )}
                              </li>
                            </ul>
                          </div>
                          <div className="interior">
                            <span>Nội thất:</span>
                            {post.interior ? (
                              <p>{post.interior}</p>
                            ) : (
                              <p> --- </p>
                            )}
                          </div>
                          <div className="postInfo">
                            <ul>
                              <li>
                                <span>Mã tin: </span>
                                <p>{post.id}</p>
                              </li>
                              <li>
                                <span>Loại tin: </span>
                                {post.typeDetailModel && (
                                  <p>{post.typeDetailModel.typeDetailName}</p>
                                )}
                              </li>
                              <li>
                                <span>Ngày đăng: </span>
                                {post.postDate && <p>{post.postDate}</p>}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="deb__attention">
                        *Lưu ý:
                        <br />
                        Cảm ơn quý khách đã tin tưởng và lựa chọn hệ thống
                        thương mại điện tử bất động sản Findhome. Quý khách đang
                        xem nội dung tin rao{" "}
                        {post.typeDetailModel && (
                          <span>{post.typeDetailModel.typeDetailName}</span>
                        )}{" "}
                        - Mã tin <span>{post.id}</span>. Tất cả thông tin, nội
                        dung liên quan tới tin rao này là do người đăng tin đăng
                        tải và chịu trách nhiệm. Bằng tinh thần cầu thị, hướng
                        đến sự minh bạch trong giao dịch bất động sản, Findhome
                        luôn cố gắng để các thông tin niêm yết tại hệ thống được
                        chính xác nhất đến quý khách. Tuy nhiên Findhome không
                        đảm bảo và không chịu trách nhiệm pháp lý về bất kỳ
                        thông tin, nội dung nào liên quan tới tin rao này.
                        Trường hợp phát hiện nội dung tin đăng không chính xác,
                        Quý khách hãy sử dụng chức năng Báo vi phạm hoặc liên hệ
                        và cung cấp thông tin cho Ban quản trị Houseviet.vn theo
                        Hotline 1800 6015 để được hỗ trợ ngay lập tức.
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="deb__right">
                      <div className="top">
                        <div className="info">
                          <h4>{post.nameEstate}</h4>
                          <div className="address">
                            <i className="bi bi-geo-alt"></i>
                            <span>{post.address}</span>
                          </div>
                          <div className="group__flex">
                            <div className="price">
                              <span>Giá bán: </span>
                              <span>{formatNumber(post.price)}</span>
                            </div>
                            <div className="separator"></div>
                            <div className="area">
                              <span>Diện tích: </span>
                              <span>{post.area} m²</span>
                            </div>
                          </div>
                        </div>
                        <div className="contact">
                          <div className="avatar">
                            <img
                              src="https://cdn.houseviet.vn/images/icons/user-avatar.png"
                              alt=""
                            />
                          </div>
                          <div className="info">
                            <span>
                              {post.brokerModel && post.brokerModel.name}
                            </span>
                            <p>{post.broker ? "Môi giới" : "Chính chủ"}</p>
                          </div>
                        </div>
                        <div className="phone">
                          <i className="bi bi-telephone"></i>
                          0867405503
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
        <Button variant="secondary" onClick={props.handleCloseModal}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AuctionDetalPopup;
