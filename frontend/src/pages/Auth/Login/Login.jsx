import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { logo, logologin } from "../../../assets/images";
import { Link } from "react-router-dom";
import RightLogin from "./components/RightLogin/RightLogin";
import RightRegister from "./components/RightRegister/RightRegister";

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLoin] = useState(true);
  const handlerClick = () => {
    setIsLoin(!isLogin);
    if (!isLogin) {
      navigate("/dang-nhap");
    } else {
      navigate("/dang-ki");
    }
  };

  return (
    <div className="login">
      <div
        className="container"
        style={{ height: isLogin ? "647px" : "1170px" }}
      >
        <div className="left">
          <img src={logo} alt="" className="logo" />
          <img
            src={logologin}
            alt=""
            className="logologin"
            style={{ top: isLogin ? "150px" : "400px" }}
          />
          <p className="context">
            Để mỗi lựa chọn của bạn tốt hơn nhờ FINDHOME
          </p>
        </div>
        <div className="right">
          <div className="login-header">
            <button
              onClick={handlerClick}
              className={
                isLogin ? "isActive btn-header-login" : "btn-header-login"
              }
            >
              Đăng Nhập
            </button>
            <button
              onClick={handlerClick}
              className={
                isLogin ? "btn-header-login" : "isActive btn-header-login"
              }
            >
              Đăng Ký
            </button>
          </div>

          <p className="context-1">Xin chào bạn</p>
          <p className="context-2">
            {isLogin ? "Đăng nhập để tiếp tục" : "Đăng kí tài khoản mới"}
          </p>
          {isLogin ? <RightLogin /> : <RightRegister />}
          <div className="action-login">
            <div className="line"></div>
            <p>Hoặc</p>
            <div className="line"></div>
          </div>

          <div className="action-login">
            <Link to="#" className="button-login-fb">
              <i className="bi bi-facebook"> </i>
              Facebook
            </Link>
            <Link to="#" className="button-login-gg">
              <i className="bi bi-google"></i>
              Google
            </Link>
          </div>
          {!isLogin ? (
            <>
              <p className="context-4">
                Bằng việc tiếp tục, bạn đồng ý với
                <Link className="rules"> Điều khoản sử dụng </Link> của chúng
                tôi
              </p>
              <p className="context-3">
                Bạn đã là thành viên?
                <Link onClick={handlerClick} className="change-register">
                  {" "}
                  Đăng Nhập{" "}
                </Link>
                tại đây
              </p>
            </>
          ) : (
            <>
              <p className="context-3">
                Chưa là thành viên?
                <Link onClick={handlerClick} className="change-register">
                  {" "}
                  Đăng ký{" "}
                </Link>
                tại đây
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
