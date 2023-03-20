import React from "react";
//
import "./Heading.scss";

const Heading = (props) => {
  const { heading, title, text_white } = props;
  return (
    <div className="compHead">
      <div
        className={
          !text_white
            ? "compHead__container"
            : "compHead__container text__white"
        }
      >
        <h3>{heading}</h3>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Heading;
