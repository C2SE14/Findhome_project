import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//
import { getRealEstateById } from "../../store/actions/postRealEstate";
import "./DetailProduct.scss";
import LoadingComp from "../../components/Loading/Loading";
import { convertToSlug } from "../../components/Common/convertToSlug";
import ThumbsGalleyCarousel from "../../components/ThumbsGalleryCarousel/ThumbsGalleryCarousel";
import formatNumber from "../../components/Common/currencyFormat";
import Carousel from "../../components/Carousel/Carousel";

const DetailProduct = () => {
  const { id } = useLocation().state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRealEstateById(id));
  }, [dispatch, id]);

  const { post, loading } = useSelector((state) => state.postRealEstate);

  return (
    <>
      {loading ? (
        <div className="loading__login">
          <LoadingComp type="spin" color="#b53c12" width="50px" height="50px" />
        </div>
      ) : (
        <div className="deb">
          <Container>
            <div className="deb__container">
              <div className="deb__nav">
                <ul>
                  <li>
                    {post.businessTypeModel &&
                    post.businessTypeModel.id === 1 ? (
                      <Link to="/nha-dat-ban">MUA BÁN NHÀ ĐẤT / </Link>
                    ) : (
                      <Link to="/nha-dat-cho-thue">CHO THUÊ NHÀ ĐẤT / </Link>
                    )}
                  </li>
                  <li>
                    {post.typeDetailModel && (
                      <Link
                        to={`/${convertToSlug(
                          post.typeDetailModel.typeDetailName
                        )}`}
                      >
                        {post.typeDetailModel.typeDetailName} /
                      </Link>
                    )}
                  </li>
                  <span style={{ fontSize: "13px" }}>{post.nameEstate}</span>
                </ul>
              </div>
              <Row>
                <Col md={8}>
                  <div className="deb__left">
                    <div className="deb__img">
                      {post.imageModelList && (
                        <ThumbsGalleyCarousel images={post.imageModelList} />
                      )}
                    </div>
                    <div className="deb__savenews">
                      <>
                        <i className="bi bi-heart"></i>
                        <span>Lưu tin yêu thích</span>
                      </>{" "}
                      |<p>Thông tin </p>
                    </div>
                    <div className="deb__desc">
                      <h3>Thông tin mô tả:</h3>
                      {post.description ? <p>{post.description}</p> : null}
                    </div>

                    <div className="deb__characteristic">
                      <h3>Đặc điểm nổi bậc</h3>
                      <div className="content">
                        <div className="address">
                          <span>Địa chỉ:</span>
                          {post.address ? <p>{post.address}</p> : <p> --- </p>}
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
                                <p>{post.frontispiece}</p>
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
                              {post.depth ? <p>{post.depth}</p> : <p> --- </p>}
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
                      Cảm ơn quý khách đã tin tưởng và lựa chọn hệ thống thương
                      mại điện tử bất động sản Findhome. Quý khách đang xem nội
                      dung tin rao{" "}
                      {post.typeDetailModel && (
                        <span>{post.typeDetailModel.typeDetailName}</span>
                      )}{" "}
                      - Mã tin <span>{post.id}</span>. Tất cả thông tin, nội
                      dung liên quan tới tin rao này là do người đăng tin đăng
                      tải và chịu trách nhiệm. Bằng tinh thần cầu thị, hướng đến
                      sự minh bạch trong giao dịch bất động sản, Findhome luôn
                      cố gắng để các thông tin niêm yết tại hệ thống được chính
                      xác nhất đến quý khách. Tuy nhiên Findhome không đảm bảo
                      và không chịu trách nhiệm pháp lý về bất kỳ thông tin, nội
                      dung nào liên quan tới tin rao này. Trường hợp phát hiện
                      nội dung tin đăng không chính xác, Quý khách hãy sử dụng
                      chức năng Báo vi phạm hoặc liên hệ và cung cấp thông tin
                      cho Ban quản trị Houseviet.vn theo Hotline 1800 6015 để
                      được hỗ trợ ngay lập tức.
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
                          <span>VĂN HẢI</span>
                          <p>Chính chủ</p>
                        </div>
                      </div>
                      <div className="phone">
                        <i className="bi bi-telephone"></i>
                        0867405503
                      </div>
                    </div>
                    <div className="content">
                      {post.typeDetailModel && (
                        <h2>
                          MỘT SỐ LOẠI {post.typeDetailModel.typeDetailName} KHÁC
                        </h2>
                      )}
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="deb__propose">
                {post.businessTypeModel && post.businessTypeModel.id === 1 ? (
                  <h2 className="title">MỘT SỐ NHÀ ĐẤT ĐANG ĐƯỢC RAO BÁN </h2>
                ) : (
                  <h2 className="title"> MỘT SỐ NHÀ ĐẤT ĐANG ĐƯỢC CHO THUÊ </h2>
                )}
                {/* <Carousel /> */}
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default DetailProduct;
