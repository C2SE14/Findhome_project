import React from "react";
import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const AuctionResults = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  if (!isLoggedIn) {
    window.location.href = "/dang-nhap";
  }
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
              <tr>
                <td>
                  16:01:07 <br />
                  11/05/2023
                </td>
                <td>
                  Công ty đấu giá Hợp danh Tân Đại Phát Thông Báo Đấu giá: Tài
                  sản và công cụ dụng cụ khu vực Phía Bắc của công ty TNHH MV kỹ
                  thuật
                </td>
                <td>Thành Công</td>
              </tr>
              <tr>
                <td>
                  16:01:07 <br />
                  11/05/2023
                </td>
                <td>
                  Công ty đấu giá Hợp danh Tân Đại Phát Thông Báo Đấu giá: Tài
                  sản và công cụ dụng cụ khu vực Phía Bắc của công ty TNHH MV kỹ
                  thuật
                </td>
                <td>Thành Công</td>
              </tr>
              <tr>
                <td>
                  16:01:07 <br />
                  11/05/2023
                </td>
                <td>
                  Công ty đấu giá Hợp danh Tân Đại Phát Thông Báo Đấu giá: Tài
                  sản và công cụ dụng cụ khu vực Phía Bắc của công ty TNHH MV kỹ
                  thuật
                </td>
                <td>Thành Công</td>
              </tr>
              <tr>
                <td>
                  16:01:07 <br />
                  11/05/2023
                </td>
                <td>
                  Công ty đấu giá Hợp danh Tân Đại Phát Thông Báo Đấu giá: Tài
                  sản và công cụ dụng cụ khu vực Phía Bắc của công ty TNHH MV kỹ
                  thuật
                </td>
                <td>Thành Công</td>
              </tr>
              <tr>
                <td>
                  16:01:07 <br />
                  11/05/2023
                </td>
                <td>
                  Công ty đấu giá Hợp danh Tân Đại Phát Thông Báo Đấu giá: Tài
                  sản và công cụ dụng cụ khu vực Phía Bắc của công ty TNHH MV kỹ
                  thuật
                </td>
                <td>Thành Công</td>
              </tr>
              <tr>
                <td>
                  16:01:07 <br />
                  11/05/2023
                </td>
                <td>
                  Công ty đấu giá Hợp danh Tân Đại Phát Thông Báo Đấu giá: Tài
                  sản và công cụ dụng cụ khu vực Phía Bắc của công ty TNHH MV kỹ
                  thuật
                </td>
                <td>Thành Công</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default AuctionResults;
