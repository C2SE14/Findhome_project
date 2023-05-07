import React, { useState } from "react";

const InputField = ({
  label,
  placeholder,
  icons,
  type,
  name,
  className,
  passField,
  required,
  value,
  setValue,
  invalidFields,
  setInvalidFields,
  keyPayload,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input__group">
      {label ? <label htmlFor={name}>{label}</label> : null}
      {icons ? (
        <>
          <i className={icons}></i>
          <input
            type={!showPassword ? type : null || "text"}
            name={name}
            id={name}
            placeholder={placeholder}
            className={className}
            required={required ? true : false}
            value={value}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [keyPayload]: e.target.value }))
            }
            onFocus={() => setInvalidFields([])}
          />
          {passField ? (
            <>
              <i
                onClick={togglePasswordVisibility}
                className={
                  showPassword ? "bi bi-eye eye" : "bi bi-eye eye eye-close"
                }
              ></i>
              <i
                onClick={togglePasswordVisibility}
                className={
                  showPassword ? " bi bi-eye-slash eye" : "bi bi-eye eye"
                }
              ></i>
            </>
          ) : null}
        </>
      ) : (
        <input
          type={
            name === "password" || name === "confirmPassword"
              ? "password"
              : "text"
          }
          name={name}
          id={name}
          placeholder={placeholder}
          className={className}
          required={required ? true : false}
          value={value}
          onChange={(e) =>
            setValue((prev) => ({ ...prev, [type]: e.target.value }))
          }
          onFocus={() => setInvalidFields([])}
        />
      )}
      {invalidFields.length > 0 &&
        invalidFields.some((i) => i.name === type) && (
          <small className="text__error">
            {invalidFields.find((i) => i.name === type)?.message}
          </small>
        )}
    </div>
  );
};

export default InputField;
