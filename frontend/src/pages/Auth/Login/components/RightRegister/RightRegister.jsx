import React, { useState } from "react";
import "./rightRegister.scss";
import InputField from "../../../../../components/InputField/InputField";
import Button from "../../../../../components/Button/Button";
import * as actions from "../../../../../store/actions";
import { useDispatch } from "react-redux";

const RightRegister = () => {
  const dispatch = useDispatch();

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
    if (payload.password !== payload.confirmPassword) {
      setInvalidFields([
        ...invalidFields,
        { name: "confirmPassword", message: "Mật khẩu không trùng khớp" },
      ]);
    }
    let invalids = validate(payload);
    if (invalids === 0) {
      dispatch(actions.register(payload));
    }
  };

  const validate = (payload) => {
    let invalids = 0;
    let fields = Object.entries(payload);
    console.log(fields);
    fields.forEach((item) => {
      console.log(item);
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
          placeholder={"Nhập lại mật khẩu"}
          required
          className={"form-style-register"}
          value={payload.confirmPassword}
          setValue={setPayload}
          invalidFields={invalidFields}
          setInvalidFields={setInvalidFields}
        />

        <Button
          text={"Đăng ký"}
          className={"button-login"}
          type={"submit"}
          onClick={handleSubmitRegister}
        />
      </form>
    </>
  );
};

export default RightRegister;
