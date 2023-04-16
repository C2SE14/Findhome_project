import React from "react";
import { Link } from "react-router-dom";

//
import { hinhbds1 } from "../../../assets/images";
import "./AuctionRoom.scss";

const AuctionRoom = () => {
  return (
    <div className="auctionRoom">
      <div className="auctionRoom_container">
        <div className="auctionroom__content">
          <h3>Đấu giá bất động sản tại quận 3 tp Đà Nẵng</h3>
          <div class="container">
            <div class="left">
              <img src={hinhbds1} alt="Banner" className="banner__img" />
            </div>
            <div className="right">
                <h4>Bất động sản đấu giá đầy đủ giấy tờ</h4>
                <div class="container_right">
                    <div class="row">
                        <div class="col">
                        <p>đấu giá viên</p>
                        <p>Chủ bất động sản</p>
                        <p>Thời gian bắt đầu cuộc đấu giá</p>
                        <p>Thời gian điểm danh người tham gia</p>
                        <p>Kết thúc dự kiến</p>
                        <p>Giá khởi điểm</p>
                        <p>Bước giá</p>
                        <p>Chi phí tham gia đấu giá</p>
                        <p>Tiền đặt trước</p>
                        </div>
                        <div class="col">
                        <p>Họ và tên</p>
                        <p>Họ và tên chủ bất động sản</p>
                        <p>datetime bắt đầu</p>
                        <p>datetime điểm danh</p>
                        <p>datetime kết thúc dự kiến</p>
                        <p>price khởi điểm</p>
                        <p>price-step</p>
                        <p>price tham gia đấu giá</p>
                        <p>tiền đặt trước</p>
                        </div>
                    </div>
                    <p className="maxprice">Giá cao nhất tính tới thời điểm hiện tại</p>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom_left">
                    <p> thoi gian dem nguoc</p>
                </div>
                <div className="bottom_right">
                    <i class="bi bi-dash"></i>
                    <input type="text"></input>
                    <i class="bi bi-plus"></i>
                    <button type="button" class="btn btn-primary">Trả giá</button>
                </div>
                <div className="auction_history">
                    <button type="button" class="btn btn-primary">Lịch sử đấu giá</button>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Người đấu giá</th>
                            <th scope="col">Giá trả(VND)</th>
                            <th scope="col">Thời điểm trả giá</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>PU_01</td>
                            <td>300.000.000</td>
                            <td>19:02:59 14/04/2023</td>
                            </tr>
                            <tr>
                            <td>PU_02</td>
                            <td>400.000.000</td>
                            <td>22:20:42 14/04/2023</td>
                            </tr>
                            <tr>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionRoom;
