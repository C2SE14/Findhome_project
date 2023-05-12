import React, { useEffect } from "react";
import "./Listnews.scss";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getRealEstateByUserId } from "../../store/actions/user";

const ListNews = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { listUserPostNew } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getRealEstateByUserId(1));
  }, [dispatch, userId]);
  return (
    <div className="listnews">
      <div className="listnews__container">
        <div className="listnews__header">
          <h2>QUẢN LÝ TIN RAO</h2>
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
                <th>Địa chỉ</th>
                <th>Ngày đăng</th>
              </tr>
            </thead>
            <tbody>
              {listUserPostNew.map((item) => (
                <tr key={item.id}>
                  <td style={{ width: "70px" }}>{item.id}</td>
                  <td
                    style={{
                      maxWidth: "500px",
                      display: "flex",
                      gap: "5px",
                      fontWeight: "700",
                    }}
                  >
                    {item?.imageModelList[0] && (
                      <img
                        src={item?.imageModelList[0].image}
                        style={{
                          width: "70px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                        alt=""
                      />
                    )}
                    {item.nameEstate}
                  </td>

                  <td>{item.address}</td>
                  <td style={{ width: "100px" }}>{item.postDate}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ListNews;
