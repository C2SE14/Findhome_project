import React, { useEffect, useState } from "react";
import "./Listnews.scss";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getRealEstateByUserId,
  deleteRealEstateByUserId,
} from "../../store/actions/user";
import { toast } from "react-toastify";
import UpdatePost from "../../components/UpdatePost/UpdatePost";
const ListNews = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { listUserPostNew, loading } = useSelector((state) => state.user);
  const [isEdit, setIsEdit] = useState(false);
  const [dataEdit, setDateEdit] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const updateDataEdit = (newData) => {
    setDateEdit(newData);
  };
  useEffect(() => {
    dispatch(getRealEstateByUserId(userId));
  }, [dispatch, userId]);

  const handleDelete = (realEstateId, userId) => {
    dispatch(deleteRealEstateByUserId(realEstateId, userId));
    toast.success("Xóa tin đăng thành công", {
      autoClose: 2000,
      onClose: () => {
        // Tắt toast và tải lại trang sau 1 giây
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      },
    });
  };

  return (
    <>
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
                {listUserPostNew.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <tr>
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
                    <tr>
                      <td colSpan="4" style={{ textAlign: "right" }}>
                        <div className="actions">
                          <div
                            className="edit"
                            onClick={() => {
                              setDateEdit(item);
                              setIsEdit(true);
                              setShow(true);
                            }}
                          >
                            <i className="bi bi-pencil-square"></i>
                            <span>Sửa</span>
                          </div>
                          <div
                            className="delete"
                            onClick={() => handleDelete(item.id, userId)}
                          >
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
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      {isEdit && (
        <UpdatePost
          dataEdit={dataEdit}
          updateDataEdit={updateDataEdit}
          setIsEdit={setIsEdit}
          show={true}
          onHide={() => setIsEdit(false)}
        />
      )}
    </>
  );
};

export default ListNews;
