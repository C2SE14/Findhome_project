import React, { useEffect } from "react";
import "./Auction.scss";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../../components/Heading/Heading";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllAuction } from "../../store/actions/auction";
import { convertToSlug } from "../../components/Common/convertToSlug";
import { iconKhongcosanpham } from "../../assets/images";

const Auction = () => {
  const { auctions } = useSelector((state) => state.auctionReducer);
  const { userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAuction());
  }, [dispatch]);

  const filteredAuctions = auctions.filter(
    (auction) =>
      auction.browseByAdmin === true &&
      new Date(auction.registrationDateEnd) > new Date() &&
      auction.userModel.id !== userId
  );

  return (
    <div className="auction">
      <Container>
        <div className="auction__container">
          <div className="auction__head">
            <Heading
              text={"DANH SÁCH ĐẤU GIÁ"}
              desc={
                "Tổng hợp danh sách đấu giá mới nhất. Thông tin chi tiết về giá bán, vị trí, chính sách ưu đãi sẽ được cập nhật liên tục tại Findhome."
              }
            />
          </div>
          <div className="auction__body">
            <Row>
              {filteredAuctions.length > 0 ? (
                filteredAuctions.map((auction) => (
                  <Col key={auction.id} md={4} className="mb-4">
                    <Link
                      to={`/dau-gia/${convertToSlug(auction.nameRealEstate)}`}
                      className="auction__card"
                      state={{ id: auction.id }}
                    >
                      <div className="image">
                        <img
                          src={
                            auction.imageModelList[0] &&
                            auction.imageModelList[0].image
                          }
                          alt=""
                        />
                      </div>
                      <div className="body">
                        <div className="title">{auction.nameRealEstate}</div>
                        <div className="content">
                          <div className="left">
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/4440/4440467.png"
                              alt=""
                            />
                          </div>
                          <div className="right">
                            <div className="starting-price">
                              <span>Giá khởi điểm:</span>
                              <p>
                                {auction.startingPrice &&
                                  auction.startingPrice.toLocaleString()}{" "}
                                VNĐ
                              </p>
                            </div>
                            <div className="price-step">
                              <span>Bước giá:</span>
                              <p>
                                {auction.priceStep &&
                                  auction.priceStep.toLocaleString()}{" "}
                                VNĐ
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                ))
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <img
                    src={iconKhongcosanpham}
                    alt=""
                    style={{
                      width: "150px",
                      height: "150px",
                    }}
                  />
                  <span style={{ fontSize: "18px", fontWeight: "600" }}>
                    Không có sản phẩm đấu giá!
                  </span>
                </div>
              )}
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Auction;
