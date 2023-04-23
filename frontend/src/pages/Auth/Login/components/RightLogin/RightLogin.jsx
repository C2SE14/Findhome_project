import React, { useEffect, useState } from "react";
import "./rightLogin.scss";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../../../../components/InputField/InputField";
import Button from "../../../../../components/Button/Button";
import * as actions from "../../../../../store/actions";
import { useDispatch, useSelector } from "react-redux";

const RightLogin = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [invalidFields, setInvalidFields] = useState([]);

  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn, navigate]);

  const dispatch = useDispatch();
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    let invalids = validate(payload);
    if (invalids === 0) {
      dispatch(actions.login(payload));
    }
  };
  const validate = (payload) => {
    let invalids = 0;
    let fields = Object.entries(payload);
    fields.forEach((item) => {
      if (item[1] === "") {
        setInvalidFields((prev) => [
          ...prev,
          {
            name: item[0],
            message: "Bạn không được bỏ trống trường này.",
          },
        ]);
        invalids++;
      }
    });
    fields.forEach((item) => {
      switch (item[0]) {
        case "password":
          if (item[1].length < 6) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: "Mật khẩu phải có tối thiểu 6 kí tự.",
              },
            ]);
            invalids++;
          }
          break;

        case "email":
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(item[1])) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: "Định dạng email không hợp lệ.",
              },
            ]);
            invalids++;
          }
          break;
        default:
          break;
      }
    });
    return invalids;
  };
  return (
    <>
      <form className="right-login">
        <InputField
          icons={"bi bi-person input-icon"}
          placeholder={"Email đăng nhập"}
          type={"email"}
          name={"email"}
          className={"form-style-login"}
          value={payload.email}
          setValue={setPayload}
          invalidFields={invalidFields}
          setInvalidFields={setInvalidFields}
        />
        <InputField
          icons={"bi bi-shield-lock input-icon"}
          placeholder={"Mật khẩu"}
          name={"password"}
          className={"form-style-login"}
          type={"password"}
          passField
          value={payload.password}
          setValue={setPayload}
          invalidFields={invalidFields}
          setInvalidFields={setInvalidFields}
        />
        <Button
          className={"button-login"}
          text={"Đăng nhập"}
          type={"submit"}
          onClick={handleSubmitLogin}
        />
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
