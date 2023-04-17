import React from "react";
import "./rightRegister.scss";
import { Link } from "react-router-dom";

const RightRegister = () => {
  return (
    <>
      <form className="right-register">
        <label>
          Tên đăng nhập
          <input
            name="email"
            type="email"
            className="form-style-register"
            placeholder=" Tên tài khoản"
          />
        </label>
        <label>
          Họ
          <input
            name="firstname"
            type="email"
            className="form-style-register"
            placeholder=" Họ của bạn"
          />
        </label>
        <label>
          Tên
          <input
            name="lastname"
            type="email"
            className="form-style-register"
            placeholder=" Tên của bạn"
          />
        </label>
        <label>
          Email
          <input
            name="lastname"
            type="email"
            className="form-style-register"
            placeholder=" Nhập email"
          />
        </label>
        <label>
          Số điện thoại
          <input
            name="role"
            type=""
            className="form-style-register"
            placeholder="Nhập Số điện thoại"
          />
        </label>
        <label>
          Mật khẩu
          <input
            name="password"
            type="password"
            className="form-style-register"
            placeholder=" SĐT chính hoặc email"
          />
        </label>
        <label>
          Nhập lại mật khẩu
          <input
            name="password"
            type="password"
            className="form-style-register"
            placeholder=" SĐT chính hoặc email"
          />
        </label>
        <Link to="#" className="button-login">
          Đăng Ký
        </Link>
      </form>
    </>
  );
};

export default RightRegister;
