import React from "react";
import { Link } from "react-router-dom";

//
import "./Information.scss";

const Information = () => {
  return (
    <div className="container">
      <div className="infomation__container">
      <table class="table">
        <thead>
          <tr>
            <center style={{ transform: "translateY(50%)" }}>
            <img src="https://daugiaviet.vn/taisan/4018/logo.jpg" class="img-thumbnail" alt=""></img>
            </center>
                  {/* <th scope="col"></th> */}
            <th scope="col">
            <table class="table">
        <thead>
          <tr>
          <th colspan="2">Gỗ cây keo lai rừng trồng, tổng diện tích 19,18 ha, rừng trồng năm 2018 với trữ lượng 2212,65m3</th>
          </tr>
          <tr>
            <th class="font" scope="col">Người có tài sản:</th>
            <th scope="col">Công ty TNHH MTV Lâm Nghiệp Bà Rịa Vũng Tàu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="font" scope="row">Ngày công bố:</th>
            <td>21/03/2023</td>
          </tr>
          <tr>
            <th class="font" scope="row">Hạn đăng ký từ:</th>
            <td>08:00:00 22/03/2023</td>
          </tr>
          <tr>
            <th class="font" scope="row">Hạn đăng ký đến:</th>
            <td>16:30:00 03/04/2023</td>
          </tr>
          <tr>
            <th class="font" scope="row">Thời gian bắt đầu cuộc đấu giá:</th>
            <td>09:00:00 06/04/2023</td>
          </tr>
          <tr>
            <th class="font" scope="row">Thời gian kết thúc cuộc đấu giá:</th>
            <td>Theo quy chế cuộc đấu giá</td>
          </tr>
          <tr>
            <th class="font" scope="row">Giá khởi điểm:</th>
            <td>1.832.297.472 VNĐ</td>
          </tr>
          <tr>
            <th class="font" scope="row">Bước giá:</th>
            <td>20.000.000 VNĐ</td>
          </tr>
          <tr>
            <th class="font" scope="row">Chi phí tham gia đấu giá:</th>
            <td>500.000 VNĐ</td>
          </tr>
          <tr>
            <th class="font" scope="row">Tiền đặt trước:</th>
            <td>366.459.000 VNĐ</td>
          </tr>
          <tr>
            <th scope="row"><button type="button" class="btn btn-danger">Cuộc đấu giá đã kết thúc</button></th>
            <td></td>
          </tr>
        
        </tbody>
      </table>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>

          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Information;
