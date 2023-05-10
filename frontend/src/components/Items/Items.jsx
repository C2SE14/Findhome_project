import React from "react";
import "./Items.scss";
import { Link } from "react-router-dom";
import { convertToSlug } from "../Common/convertToSlug";
import formatNumber from "../Common/currencyFormat";

const Items = (props) => {
  const { post } = props;
  return (
    <Link
      to={`${convertToSlug(post.nameEstate)}`}
      state={{ id: post.id }}
      className="pl__item"
    >
      {post.imageModelList.length > 0 ? (
        <img src={post.imageModelList[0].image} alt="" />
      ) : (
        <img src="https://cdn.houseviet.vn/images/no-image.jpg" alt="" />
      )}
      <div className="pl__content">
        <div className="pl__body">
          <h2>{post.nameEstate}</h2>
          <div className="pl__info">
            <span>{post.area} m²</span>
            <span className="divider-dot"></span>
            <span>{formatNumber(post.price)} </span>
          </div>
          <div className="pl__address">
            <i className="bi bi-geo-alt"></i>
            <span>{post.address}</span>
          </div>
        </div>
        <div className="pl__time">
          <div>
            <i className="bi bi-clock"></i>
            {post.postDate ? <span>{post.postDate}</span> : <span></span>}
          </div>
          <div>
            <i className="bi bi-heart"></i>
            <span>Lưu tin</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Items;
