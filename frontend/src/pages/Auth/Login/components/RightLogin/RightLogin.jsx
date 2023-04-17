import React, { useState } from "react";
import "./rightLogin.scss";
import { Link } from "react-router-dom";

const RightLogin = () => {
  const [openPassword, setOpenPassword] = useState(false);
  const handlerOpenPassword = () => {
    setOpenPassword(!openPassword);
  };
  return (
    <>
      <form className="right-login">
        <label>
          <input
            name="email"
            type="email"
            className="form-style-login"
            placeholder="Email đăng nhập"
          />
          <i className="bi bi-person input-icon"></i>
        </label>
        <label>
          <input
            name="password"
            type={openPassword ? "text" : "password"}
            className="form-style-login"
            placeholder=" Mật khẩu"
          />
          <i className="bi bi-shield-lock input-icon"></i>
          <i
            onClick={handlerOpenPassword}
            className={
              openPassword ? "bi bi-eye eye" : "bi bi-eye eye eye-close"
            }
          ></i>
          <i
            onClick={handlerOpenPassword}
            className={openPassword ? " bi bi-eye-slash eye" : "bi bi-eye eye"}
          ></i>
        </label>
        <Link to="#" className="button-login">
          Đăng Nhập
        </Link>
      </form>
      <div className="action-login">
        <label className="save-account">
          <input type="checkbox" name="" id="" />
          Nhớ tài khoản
        </label>
        <Link to="#" className="forgot-password">
          Quên mật khẩu ?
        </Link>
      </div>
    </>
  );
};

export default RightLogin;
