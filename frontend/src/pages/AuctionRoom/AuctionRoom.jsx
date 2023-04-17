import React, { useState, useEffect } from "react";
import "./auctionroom.scss";
import { aboutus } from "../../assets/images";
import { Link } from "react-router-dom";
const AuctionRoom = () => {
     const [days, setDays] = useState(0);
     const [hours, setHours] = useState(0);
     const [minutes, setMinutes] = useState(0);
     const [seconds, setSeconds] = useState(0);

     useEffect(() => {
          const countDownDate = new Date("April 30, 2023 23:59:59").getTime();

          const interval = setInterval(() => {
               const now = new Date().getTime();
               const distance = countDownDate - now;

               setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
               setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
               setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
               setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
          }, 1000);

          return () => clearInterval(interval);
     }, []);

     return (
          <div className="auction-room">
               <div className="container">
                    <p className="heading-title">Đấu giá nhà ở đường Bàu Năng 1</p>
                    <div className="content">
                         <div className="left">
                              <img src={aboutus} alt="" />
                         </div>
                         <div className="right">
                              <div className="row">
                                   <div className="col name-title">
                                        <p>Đấu giá viên</p>
                                        <p>Chủ bất động sản</p>
                                        <p>Thời gian bắt đầu cuộc đấu giá</p>
                                        <p>Thời gian điểm danh người tham gia</p>
                                        <p>Kết thúc dự kiến</p>
                                        <p>Giá khởi điểm</p>
                                        <p>Bước giá</p>
                                        <p>Chi phí tham gia đấu giá</p>
                                        <p>Tiền đặt trước</p>
                                   </div>
                                   <div className="col value-tille">
                                        <p>Trần Thị Thu Minh</p>
                                        <p>Nguyễn Thượng Nguyễn</p>
                                        <p>14:23:57 14/04/2020</p>
                                        <p>14:23:57 15/04/2020</p>
                                        <p>đến 15/04/2020 15:30:00 </p>
                                        <p>300.000.000 VNĐ</p>
                                        <p>1.000.000 VNĐ</p>
                                        <p>200.000 VNĐ</p>
                                        <p>30.000.000 VNĐ</p>
                                   </div>
                              </div>
                              <div className="maxprice">
                                   <p>Giá cao nhất hiện tại :316.000.000 VNĐ</p>
                              </div>
                         </div>
                    </div>
                    <div className="content-1">
                         <div className="left">
                              <div className="countdown">
                                   <label>
                                        <input type="text" value={days} />
                                        <p>Ngày </p>
                                   </label>
                                   <label>
                                        <input type="text" value={hours} />
                                        <p>Giờ </p>
                                   </label>
                                   <label>
                                        <input type="text" value={minutes} />
                                        <p>Phút </p>
                                   </label>
                                   <label>
                                        <input type="text" value={seconds} />
                                        <p>Giây </p>
                                   </label>
                              </div>
                              <Link className="button-auction">lịch sử trả giá</Link>
                         </div>
                         <div className="right">
                              <div className="haggle">
                                   <label htmlFor="">
                                        <i className="bi bi-dash down"></i>
                                        <input type="text" placeholder="...." />
                                        <p>VNĐ</p>
                                        <i className="bi bi-plus-lg up"></i>
                                   </label>
                                   <Link className="button-bargain">Trả giá</Link>
                              </div>
                              <Link className="button-auction">Thông tin chi tiết </Link>
                         </div>
                    </div>
                    <div className="content">
                         <table className="table">
                              <thead>
                                   <tr>
                                        <th scope="col" className="col-4">
                                             Người đấu giá
                                        </th>
                                        <th scope="col" className="col-4">
                                             Giá trị (VNĐ)
                                        </th>
                                        <th scope="col" className="col-4">
                                             Thời điểm trả giá
                                        </th>
                                   </tr>
                              </thead>
                              <tbody>
                                   <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                   </tr>
                                   <tr>
                                        <th scope="row">2</th>

                                        <td>Thornton</td>
                                        <td>@fat</td>
                                   </tr>
                              </tbody>
                         </table>
                    </div>
               </div>
          </div>
     );
};

export default AuctionRoom;
