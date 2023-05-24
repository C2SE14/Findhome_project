import React, { useEffect, useState } from "react";
import "../../ListNews/Listnews.scss";
import { Badge, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAuctionPostOfUser } from "../../../store/actions/user";
import { formatDate } from "../../../components/Common/convertToSlug";
const AuctionList = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { listUserPostAuction, loading } = useSelector((state) => state.user);
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  useEffect(() => {
    dispatch(getAuctionPostOfUser(userId));
  }, [dispatch, userId]);
  const hanldeClickShowRoom = (e, roomId) => {
    e.preventDefault();
    setSelectedRoomId(roomId);
  };
  useEffect(() => {
    if (selectedRoomId) {
      window.location.href = `/phong-dau-gia/${selectedRoomId}`;
    }
  }, [selectedRoomId]);

  return (
    <>
      <div className="listnews">
        <div className="listnews__container">
          <div className="listnews__header">
            <h2>DANH SÁCH ĐĂNG SẢN PHẨM ĐẤU GIÁ</h2>
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
                {listUserPostAuction.map((item) => (
                  <>
                    <tr
                      key={item.id}
                      onClick={
                        item.browseByAdmin
                          ? (e) => hanldeClickShowRoom(e, item.id)
                          : null
                      }
                      style={item.browseByAdmin ? { cursor: "pointer" } : null}
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
                            item.imageModelList[0] &&
                            item.imageModelList[0].image
                          }
                          style={{
                            width: "70px",
                            height: "50px",
                            objectFit: "cover",
                          }}
                          alt=""
                        />
                        {item.nameRealEstate}
                      </td>
                      <td>{formatDate(item.auctionStartDate)}</td>
                      <td>{formatDate(item.auctionEndDate)}</td>
                      <td>
                        {item.browseByAdmin ? (
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
                    {/* <tr>
                      <td colSpan="5" style={{ textAlign: "right" }}>
                        <div
                          className={`actions ${
                            item.browseByAdmin ? "disable" : null
                          }`}
                        >
                          <div className="edit">
                            <i className="bi bi-pencil-square"></i>
                            <span>Sửa</span>
                          </div>
                          <div className="delete">
                            {loading ? (
                              <span>Loading...</span>
                            ) : (
                              <>
                                <i className="bi bi-trash"></i>
                                <span>Xoá</span>
                              </>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr> */}
                  </>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuctionList;
