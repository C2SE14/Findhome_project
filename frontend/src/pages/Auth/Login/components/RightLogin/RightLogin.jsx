import React, { useEffect, useState } from "react";
import "./rightLogin.scss";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../../../../components/InputField/InputField";
import Button from "../../../../../components/Button/Button";
import * as actions from "../../../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import LoadingComp from "../../../../../components/Loading/Loading";

const RightLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, loading } = useSelector((state) => state.auth);
  const [invalidFields, setInvalidFields] = useState([]);

  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn, navigate]);

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
          const passwordRegex =
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()])([0-9a-zA-Z!@#$%^&*()]){8,}$/;
          if (!passwordRegex.test(item[1])) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message:
                  "Mật khẩu tối thiểu 8 kí tự, gồm ít nhất một chữ hoa, một chữ thường và một chữ số, một ký tự đặc biệt",
              },
            ]);
            invalids++;
          } else {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: "",
              },
            ]);
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
      {loading ? (
        <div className="loading__login">
          <LoadingComp type="spin" color="#b53c12" width="50px" height="50px" />
        </div>
      ) : null}

      <form className="right-login">
        <InputField
          icons={"bi bi-person input-icon"}
          placeholder={"Email đăng nhập"}
          type={"email"}
          keyPayload={"email"}
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
          keyPayload={"password"}
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
