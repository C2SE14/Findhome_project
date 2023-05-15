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
     invalidFields,
     setInvalidFields,
     rows,
     className,
     required,
     onlyNumber,
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
               setValue((prev) => ({ ...prev, [name]: prev[name] + " \n " }));
          }
     };

     const handleBlur = (e) => {
          setValue((prev) => ({ ...prev, [name]: prev[name] + " \n " }));
     };
     const handleInputChange = (e) => {
          const { name, value } = e.target;
          console.log(name);
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
                    <div className={`input-value ${isRequired ? "is_required" : ""}`}>
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
                         <p>{inputvalue}</p>
                         {isRequired && (
                              <small style={{ color: "red", textTransform: "lowercase" }}>
                                   không được để trống
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
