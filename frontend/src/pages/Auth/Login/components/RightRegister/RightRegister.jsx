import React, { useState } from "react";
import "./rightRegister.scss";
import InputField from "../../../../../components/InputField/InputField";
import Button from "../../../../../components/Button/Button";
import * as actions from "../../../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import LoadingComp from "../../../../../components/Loading/Loading";

const RightRegister = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);
  const [payload, setPayload] = useState({
    username: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [invalidFields, setInvalidFields] = useState([]);
  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    let invalids = validate(payload);
    if (invalids === 0) {
      dispatch(actions.register(payload));
      setTimeout(function () {
        window.location.href = "/dang-nhap";
      }, 3000);
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

        case "confirmPassword":
          if (item[1] !== payload.password) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: "Mật khẩu không trùng khớp",
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
        case "phoneNumber":
          const phoneNumberRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
          if (!phoneNumberRegex.test(item[1])) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: "Số điện thoại không hợp lệ.",
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
      <form className="right-register">
        <InputField
          label={"Tên đăng nhập"}
          name={"username"}
          type={"username"}
          keyPayload={"username"}
          placeholder={"Tên đăng nhập của bạn"}
          className={"form-style-register"}
          required
          value={payload.username}
          setValue={setPayload}
          invalidFields={invalidFields}
          setInvalidFields={setInvalidFields}
        />
        <InputField
          label={"Họ và tên"}
          name={"fullName"}
          type={"fullName"}
          keyPayload={"fullName"}
          placeholder={"Họ và tên của bạn"}
          className={"form-style-register"}
          required
          value={payload.fullName}
          setValue={setPayload}
          invalidFields={invalidFields}
          setInvalidFields={setInvalidFields}
        />
        <InputField
          label={"Email"}
          name={"email"}
          type={"email"}
          keyPayload={"email"}
          placeholder={"Địa chỉ email"}
          required
          className={"form-style-register"}
          value={payload.email}
          setValue={setPayload}
          invalidFields={invalidFields}
          setInvalidFields={setInvalidFields}
        />

        <InputField
          label={"Điện thoại"}
          name={"phone"}
          type={"phoneNumber"}
          keyPayload={"phoneNumber"}
          placeholder={"Số điện thoại của bạn"}
          required
          className={"form-style-register"}
          value={payload.phoneNumber}
          setValue={setPayload}
          invalidFields={invalidFields}
          setInvalidFields={setInvalidFields}
        />

        <InputField
          label={"Mật khẩu"}
          name={"password"}
          keyPayload={"password"}
          type={"password"}
          placeholder={"Nhập mật khẩu"}
          required
          className={"form-style-register"}
          value={payload.password}
          setValue={setPayload}
          invalidFields={invalidFields}
          setInvalidFields={setInvalidFields}
        />

        <InputField
          label={"Nhập lại mật khẩu"}
          name={"confirmPassword"}
          type={"confirmPassword"}
          keyPayload={"confirmPassword"}
          placeholder={"Nhập lại mật khẩu"}
          required
          className={"form-style-register"}
          value={payload.confirmPassword}
          setValue={setPayload}
          invalidFields={invalidFields}
          setInvalidFields={setInvalidFields}
        />
        {loading ? (
          <LoadingComp type="spin" color="#b53c12" width="20px" height="20px" />
        ) : (
          <Button
            text={"Đăng ký"}
            className={"button-login"}
            type={"submit"}
            onClick={handleSubmitRegister}
          />
        )}
      </form>
    </>
  );
};

export default RightRegister;
