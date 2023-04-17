import React from "react";
import "./Items.scss";
import { Link } from "react-router-dom";
import { convertToSlug } from "../Common/convertToSlug";

const Items = (props) => {
  const { data } = props;
  return (
    <div className="item" key={data.id}>
      <Link to="" className="item__img">
        <img src={data.imageUrl} alt="" />
      </Link>
      <div className="item__content">
        <Link to={`/nha-dat-ban/${convertToSlug(data.name)}`}>{data.name}</Link>
        <ul>
          <li>
            <p>{data.price}</p> <p>tỷ</p>
          </li>
          <li>
            <p>{data.areas}</p> <p>m²</p>
          </li>
          <li className="item__address">{data.address}</li>
        </ul>
        <p>{data.description}</p>
        <div className="item__reviews">
          <div>
            <i className="bi bi-alarm"></i>
            <p>{data.createdAt}</p>
          </div>
          <div>
            <i className="bi bi-eye"></i>
            <p>{data.reviews}</p>
            <p>lượt xem</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
