import React, { useEffect } from "react";
import "../Auction.scss";
import { Badge, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAuctionRegisterOfUser } from "../../../store/actions/user";
import { formatDate } from "../../../components/Common/convertToSlug";
import LoadingComp from "../../../components/Loading/Loading";

const ListRegisterAuction = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);

  const { loading, listUserRegisterAuction } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    dispatch(getAuctionRegisterOfUser(userId));
  }, [dispatch, userId]);

  const currentTime = new Date().getTime();

  const handleClick = (item) => {
    const startTime = new Date(item.auctionModel.auctionStartDate).getTime();
    const endTime = new Date(item.auctionModel.auctionEndDate).getTime();

    if (currentTime <= startTime) {
      toast.error("Chưa đến thời gian bắt đầu đấu giá");
    } else if (currentTime > endTime) {
      toast.error("Thời gian đấu giá đã kết thúc");
    } else if (item.payFees === false) {
      toast.error("Mục đang chờ phê duyệt");
    } else {
      window.location.href = `/phong-dau-gia/${item?.auctionModel?.id}`;
    }
  };

  return (
    <div className="listAuctionRegister">
      {loading ? (
        <LoadingComp type="spin" color="#b53c12" width="50px" height="50px" />
      ) : null}
      <div className="listnews">
        <div className="listnews__container">
          <div className="listnews__header">
            <h2>DANH SÁCH ĐÃ ĐĂNG KÍ ĐẤU GIÁ VÀ ĐANG CHỜ PHÊ DUYỆT</h2>
            <div className="history">
              <i className="bi bi-chat-left-text"></i>
              <span>*Lịch sử duyệt tin</span>
            </div>
          </div>
          <div className="listnews__body">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Mã tin</th>
                  <th>Tiêu đề</th>
                  <th>Thời gian bắt đầu</th>
                  <th>Thời gian kết thúc</th>
                  <th>Phê duyệt</th>
                </tr>
              </thead>
              <tbody>
                {listUserRegisterAuction.map((item) => {
                  const endTime = new Date(
                    item.auctionModel.auctionEndDate
                  ).getTime();

                  return (
                    <tr
                      key={item.id}
                      onClick={() => handleClick(item)}
                      style={{ cursor: "pointer" }}
                      className={currentTime > endTime ? "disabled" : ""}
                    >
                      <td>{item.id}</td>
                      <td
                        style={{
                          display: "flex",
                          gap: "5px",
                          fontWeight: "700",
                        }}
                      >
                        <img
                          src={
                            item.auctionModel.imageModelList[0] &&
                            item.auctionModel.imageModelList[0].image
                          }
                          style={{
                            width: "70px",
                            height: "50px",
                            objectFit: "cover",
                          }}
                          alt=""
                        />
                        {item.auctionModel.nameRealEstate}
                      </td>
                      <td>{formatDate(item.auctionModel.auctionStartDate)}</td>
                      <td>{formatDate(item.auctionModel.auctionEndDate)}</td>
                      <td>
                        {item.payFees === true ? (
                          <Badge
                            bg="success"
                            text="light"
                            style={{ padding: "5px", fontSize: "13px" }}
                          >
                            Đã phê duyệt
                          </Badge>
                        ) : (
                          <Badge
                            bg="warning"
                            text="dark"
                            style={{ padding: "5px", fontSize: "13px" }}
                          >
                            Đang phê duyệt
                          </Badge>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListRegisterAuction;
