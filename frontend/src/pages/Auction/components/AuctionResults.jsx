import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllAuctionResult } from "../../../store/actions/auction";
import { formatDate } from "../../../components/Common/convertToSlug";
import { getAuctionRegisterOfUser } from "../../../store/actions/user";

const AuctionResults = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { listUserRegisterAuction } = useSelector((state) => state.user);
  const { auctionResult } = useSelector((state) => state.auctionReducer);

  useEffect(() => {
    dispatch(getAllAuctionResult());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAuctionRegisterOfUser(userId));
  }, [dispatch, userId]);

  const { isLoggedIn } = useSelector((state) => state.auth);
  if (!isLoggedIn) {
    window.location.href = "/dang-nhap";
  }

  console.log("Danh sach cua nguoi dung ", listUserRegisterAuction);
  console.log("Ket qua tra ve", auctionResult);

  return (
    <div className="actionResults">
      <Container>
        <div className="actionResults__container">
          <h2>KẾT QUẢ ĐẤU GIÁ</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Thời gian kết thúc</th>
                <th>Tên cuộc đấu giá</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {listUserRegisterAuction.length > 0 ? (
                listUserRegisterAuction.map((user) => {
                  return auctionResult?.map((item) =>
                    user.idUser === item.userId ? (
                      <tr key={item?.id}>
                        <td>{formatDate(item?.endTime)}</td>
                        <td>{item?.reason}</td>
                        <td>Thành công</td>
                      </tr>
                    ) : (
                      <tr key={item?.id}>
                        <td>{formatDate(item?.endTime)}</td>
                        <td>{item?.reason}</td>
                        <td>Thất bại</td>
                      </tr>
                    )
                  );
                })
              ) : (
                <div
                  style={{
                    margin: "20px",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  Bạn chưa có đăng kí sản phẩm đấu giá!
                </div>
              )}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default AuctionResults;
