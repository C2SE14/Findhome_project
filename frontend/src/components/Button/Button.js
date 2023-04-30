import React, { memo } from "react";

const Button = ({ text, className, onClick, type }) => {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default memo(Button);
