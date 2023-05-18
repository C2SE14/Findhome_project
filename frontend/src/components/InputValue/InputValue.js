import React, { useState, useEffect } from "react";

function InputValue({
  classParent,
  label,
  inputvalue,
  placeholder,
  name,
  type,
  value,
  setValue,
  rows,
  className,
  required,
  readOnly,
  onlyNumber,
  date,
  setDate,
}) {
  const [isRequired, setIsRequired] = useState(required);
  useEffect(() => {
    if (required && typeof value === "string" && value.trim() === "") {
      setIsRequired(true);
    } else {
      setIsRequired(false);
    }
  }, [value]);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setValue((prev) => ({ ...prev, [name]: prev[name] + "\n " }));
    }
  };

  const handleBlur = (e) => {
    setValue((prev) => ({ ...prev, [name]: prev[name] + "\n " }));
  };
  const [inputErrors, setInputErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    let isValid = true;

    if (type === "datetime-local") {
      const inputDate = new Date(value);
      const currentDate = new Date();

      if (name === "dateOfPublication" && inputDate <= currentDate) {
        setInputErrors((prevErrors) => ({
          ...prevErrors,
          dateOfPublication: "Ngày công bố phải lớn hơn ngày hiện tại.",
        }));
        isValid = false;
      } else if (name === "registrationDateStart") {
        const dateOfPublication = new Date(date.dateOfPublication);
        if (inputDate <= dateOfPublication) {
          setInputErrors((prevErrors) => ({
            ...prevErrors,
            registrationDateStart:
              "Ngày bắt đầu đăng ký phải lớn hơn ngày công bố.",
          }));
          isValid = false;
        }
      } else if (name === "registrationDateEnd") {
        const registrationDateStart = new Date(date.registrationDateStart);
        if (inputDate <= registrationDateStart) {
          setInputErrors((prevErrors) => ({
            ...prevErrors,
            registrationDateEnd:
              "Ngày kết thúc đăng ký phải lớn hơn ngày bắt đầu đăng ký.",
          }));
          isValid = false;
        }
      } else if (name === "auctionStartDate") {
        const registrationDateEnd = new Date(date.registrationDateEnd);
        if (inputDate <= registrationDateEnd) {
          setInputErrors((prevErrors) => ({
            ...prevErrors,
            auctionStartDate:
              "Ngày bắt đầu phiên đấu giá phải lớn hơn ngày kết thúc đăng ký.",
          }));
          isValid = false;
        }
      } else if (name === "auctionEndDate") {
        const auctionStartDate = new Date(date.auctionStartDate);
        if (inputDate <= auctionStartDate) {
          setInputErrors((prevErrors) => ({
            ...prevErrors,
            auctionEndDate:
              "Ngày kết thúc phiên đấu giá phải lớn hơn ngày bắt đầu phiên đấu giá.",
          }));
          isValid = false;
        }
      } else {
        setInputErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "", // Xóa thông báo lỗi của trường đang nhập liệu
        }));
      }
      if (isValid) {
        setDate((prevDate) => ({ ...prevDate, [name]: value }));
        setInputErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));
      }
    }

    if (
      name === "phoneNumber" ||
      name === "email" ||
      name === "fullName" ||
      name === "addressUser"
    ) {
      setValue((prev) => ({
        ...prev,
        userModel: {
          ...prev.userModel,
          [name === "addressUser" ? "address" : name]: value,
        },
      }));
    } else {
      setValue((prev) => ({ ...prev, [name]: value }));
    }

    setIsRequired(required && !value);
  };

  const handleKeyPress = (event) => {
    if (onlyNumber) {
      const pattern = /^[0-9\b]+$/;
      const inputChar = String.fromCharCode(event.charCode);
      if (!pattern.test(inputChar)) {
        event.preventDefault();
      }
    }
  };

  return (
    <div className={classParent}>
      <label className={className} htmlFor={name}>
        {label}
      </label>
      {inputvalue !== "" && rows === undefined ? (
        <div
          className={`input-value ${
            isRequired || inputErrors[name] ? "is_required" : ""
          }`}
        >
          {readOnly ? (
            <input type={type} id={name} name={name} defaultValue={value} />
          ) : (
            <input
              type={type}
              id={name}
              name={name}
              value={value}
              placeholder={placeholder}
              required={isRequired}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
          )}

          <p>{inputvalue}</p>
          {isRequired && !value && (
            <small style={{ color: "red", textTransform: "lowercase" }}>
              không được để trống
            </small>
          )}

          {inputErrors[name] && (
            <small style={{ color: "red", textTransform: "lowercase" }}>
              {inputErrors[name]}
            </small>
          )}
        </div>
      ) : rows === undefined ? (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          required={isRequired}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      ) : (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          required={isRequired}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          rows="5"
        />
      )}
    </div>
  );
}

export default InputValue;
