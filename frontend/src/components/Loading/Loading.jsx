import React from "react";
import ReactLoading from "react-loading";

const LoadingComp = ({ type, color, width, height }) => (
  <ReactLoading
    className="loading__comp"
    type={type}
    color={color}
    height={width}
    width={height}
  />
);

export default LoadingComp;
