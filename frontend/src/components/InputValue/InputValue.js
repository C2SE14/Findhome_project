import React from "react";

function InputValue({
  classParent,
  label,
  inputvalue,
  placeholder,
  name,
  type,
  value,
  setValue,
  invalidFields,
  setInvalidFields,
  rows,
  className,
  required,
  onlyNumber,
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setValue((prev) => ({ ...prev, [name]: prev[name] + " \n " }));
    }
  };

  const handleBlur = (e) => {
    setValue((prev) => ({ ...prev, [name]: prev[name] + " \n " }));
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
      <label className={className} htmlFor="">
        {label}
      </label>
      {inputvalue !== "" && rows === undefined ? (
        <div className="input-value">
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            placeholder={placeholder}
            required={required ? true : false}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, [name]: e.target.value }))
            }
            onKeyPress={handleKeyPress}
          />
          <p>{inputvalue}</p>
        </div>
      ) : rows === undefined ? (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required ? true : false}
          onChange={(e) =>
            setValue((prev) => ({ ...prev, [name]: e.target.value }))
          }
          onKeyPress={handleKeyPress}
        />
      ) : (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          required={required ? true : false}
          onChange={(e) =>
            setValue((prev) => ({ ...prev, [name]: e.target.value }))
          }
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          rows="5"
        />
      )}
    </div>
  );
}

export default InputValue;
