import React from "react";
import { Link } from "react-router-dom";

//
import "./Aution.scss";

const Aution = () => {
  return (
    <div className="container">
      <div className="aution__container">
      <table class="table caption-top">
        <caption class="table table-color3">DANH SÁCH TIN</caption>
        <caption class="table table-color4">Tin đăng &emsp;&emsp;Tin dự án &emsp;&emsp;Tin sắp hết hạn</caption>
        <thead class="table table-color">
          <tr>
            <th className="col-1" scope="col">STT</th>
            <th className="col-5" scope="col">Tiêu đề tin</th>
            <th className="col-1.5" scope="col">Loại tin</th>
            <th className="col-2.5" scope="col">Thời hạn tin</th>
            <th className="col-2" scope="col">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table table-color2">
            <th scope="row">01</th>
            <td>Nhận đăng ký mua nhà ở xã hội - đất nền tái định cư sổ hồng riêng - chiết khấu 100 triệu</td>
            <td>Tin thường</td>
            <td>Từ: 06/10/2015 00:00 <br/> Đến: 31/10/2027 00:00</td>
            <td>Hết hạn</td>
          </tr>
          <tr class="table table-color2">
            <th scope="row">02</th>
            <td>Chiết Khấu Lên Tới 15,5% - Căn 3PN và Duplex Căn Hộ Cao Cấp The Zei Số 8 Lê Đức Thọ Mỹ Đình</td>
            <td>Tin Vip</td>
            <td>Từ: 06/10/2015 00:00 <br/> Đến: 31/10/2027 00:00</td>
            <td>Hết hạn</td>
          </tr>
          <tr class="table table-color2">
            <th scope="row">03</th>
            <td>Bán đất chính chủ giá chỉ 590 triệu, hỗ trợ ngân hàng 50%</td>
            <td>Tin thường</td>
            <td>Từ: 06/10/2015 00:00 <br/> Đến: 31/10/2027 00:00</td>
            <td>Hết hạn</td>
          </tr>
          <tr class="table table-color2">
            <th scope="row">04</th>
            <td>Hot - Bung sỉ 20 lô Lộc Ninh sổ sẵn có thổ cư giá đầu tư</td>
            <td>Tin Vip</td>
            <td>Từ: 06/10/2015 00:00 <br/> Đến: 31/10/2027 00:00</td>
            <td class="con-hang">Còn hạn</td>
          </tr>
          <tr class="table table-color2">
            <th scope="row">05</th>
            <td>Bán đất thổ cư Vincom Chơn Thành - Bình Phước, mặt tiền đường DT756 và QL14, ngân hàng hỗ trợ 70%</td>
            <td>Tin thường</td>
            <td>Từ: 06/10/2015 00:00 <br/> Đến: 31/10/2027 00:00</td>
            <td class="con-hang">Còn hạn</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Aution;
