import React from "react";
import "./Heading.scss";

const Heading = ({ text, desc, text_left }) => {
  return (
    <div className="heading">
      <div className={`heading__container ${text_left && "text-start"}`}>
        <h2>{text}</h2>
        {desc ? <p>{desc}</p> : null}
      </div>
    </div>
  );
};

export default Heading;
