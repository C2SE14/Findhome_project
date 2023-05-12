import React from "react";
import { Link } from "react-router-dom";
import { convertToSlug } from "../Common/convertToSlug";
import "./Others.scss";

const Others = ({ datas, title, setCss }) => {
  return (
    <div className={`${setCss && "setCss"} others`}>
      <div className="others__container">
        <div className="heading">{title}</div>
        <div className="content">
          <ul>
            {datas &&
              datas.length > 0 &&
              datas.map((data) => (
                <li key={data.id}>
                  <Link
                    to={`/${convertToSlug(data.nameEstate)}`}
                    state={{ id: data.id }}
                  >
                    {data.imageModeList ? (
                      <img src={data.imageModeList[0].image} alt="" />
                    ) : (
                      <img
                        alt=""
                        src="https://cdn.houseviet.vn/images/no-image.jpg"
                      />
                    )}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h2>{data.nameEstate}</h2>
                      <span>
                        {" "}
                        <i className="bi bi-geo-alt"></i>
                        {data.address}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Others;
