import React from "react";
import { Link } from "react-router-dom";

const Propose = ({ title }) => {
  return (
    <div className="propose">
      <div className="propose__container">
        <div className="outstanding">
          <h2>{title}</h2>
          <div className="outstanding__content">
            <li>
              <Link to="#"></Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Propose;
