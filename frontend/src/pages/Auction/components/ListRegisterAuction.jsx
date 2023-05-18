import React, { useEffect } from "react";
import "../Auction.scss";
import { Badge, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAuctionRegisterOfUser } from "../../../store/actions/user";

const ListRegisterAuction = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { loading, listUserRegisterAuction } = useSelector(
    (state) => state.user
  );
  console.log(listUserRegisterAuction);

  const payFees = false;

  useEffect(() => {
    dispatch(getAuctionRegisterOfUser(userId));
  }, [dispatch, userId]);

  const startTime = new Date("2023-05-20T12:00:00").getTime();
  const currentTime = new Date().getTime();
  const handleClick = () => {
    if (currentTime > startTime) {
      //Chổ này đang để lớn hơn để test, đúng ra là bé hơn, một cái ở dưới cũng tương tự
      toast.error("Chưa đến thời gian bắt đầu đấu giá");
    } else {
      // Chuyển hướng đến trang phòng đấu giá
      window.location.href = "/phong-dau-gia/223323";
    }
  };

  return (
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
              {listUserRegisterAuction.map((item) => (
                <tr
                  key={item.id}
                  onClick={handleClick}
                  style={{ cursor: "pointer" }}
                  className={currentTime > startTime ? "disabled" : ""}
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
                        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1"
                      }
                      style={{
                        width: "70px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                      alt=""
                    />
                    Công Ty TNHH Bất Động Sản Thái Bình
                  </td>
                  <td>12/3/2023</td>
                  <td>17/5/2024</td>
                  <td>
                    {payFees ? (
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
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ListRegisterAuction;
