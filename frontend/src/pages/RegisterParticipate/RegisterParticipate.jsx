import React, { useState } from "react";
import "./registerparticipate.scss";
import { Link } from "react-router-dom";
const RegisterParticipate = () => {
     const [isOpen, setIsOpen] = useState(false);

     return (
          <div>
               <button onClick={() => setIsOpen(true)}>Mở form</button>
               <div className={`overlay ${isOpen ? "open" : ""}`}>
                    <div className="form-container">
                         <form>
                              <div className="heading-form">
                                   <p>đăng ký tham gia đấu giá</p>
                                   <button
                                        className="close-button"
                                        onClick={() => setIsOpen(false)}
                                   >
                                        <i className="bi bi-x-lg"></i>
                                   </button>
                              </div>

                              <span>số tiền cần phải nộp</span>
                              <div className="content">
                                   <div className="row">
                                        <p className="title-name col-5">Chi phí tham gia đấu giá</p>
                                        <input type="text" className="col-7" />
                                   </div>
                                   <div className="row">
                                        <p className="title-name col-5">Số tiền đặt trước</p>
                                        <input type="text" className="col-7" />
                                   </div>
                                   <div className="row">
                                        <p className="title-name col-5">Tổng tiền</p>
                                        <input type="text" className="col-7" />
                                   </div>
                                   <div className="row">
                                        <p className="title-name col-5">Bằng Chữ</p>
                                        <input type="text" className="col-7" />
                                   </div>
                              </div>
                              <span>thông tin nhận lại tiền đặt cược</span>
                              <div className="content">
                                   <div className="row">
                                        <p className="title-name col-5">Số tài khoản</p>
                                        <input type="text" className="col-7" />
                                   </div>
                                   <div className="row">
                                        <p className="title-name col-5">Ngân hàng</p>
                                        <input type="text" className="col-7" />
                                   </div>
                                   <div className="row">
                                        <p className="title-name col-5">Chủ ngân hàng</p>
                                        <input type="text" className="col-7" />
                                   </div>
                              </div>

                              <label className="check-regis">
                                   <input type="radio" name="" id="" />
                                   <p>Đăng ký đi xem hiện trạng tài sản đấu giá</p>
                              </label>
                              <label className="check-regis">
                                   <input type="radio" name="" id="" />
                                   <p>
                                        Không đăng ký đi xem hiện trạng tài sản đấu giá và cảm kết
                                        không khiếu nại về hiện trạng tài sản
                                   </p>
                              </label>
                              <label className="check-regis">
                                   <input type="checkbox" name="" id="" />
                                   <p>
                                        Tôi đã đọc và nghiên cứu đầy đủ các thông tin của hồ sơ tham
                                        dự đấu giá. Tôi cam kết xác thực hiện đúng các quy trình
                                        trong hồ sơ và quy định pháp luật liên quan
                                   </p>
                              </label>

                              <Link className="btn-register">đăng ký tham gia đấu giá</Link>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default RegisterParticipate;
