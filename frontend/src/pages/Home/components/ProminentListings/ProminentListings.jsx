import React from "react";
import "./ProminentListings.scss";
import { Container } from "react-bootstrap";
import Heading from "../../../../components/Heading/Heading";
import { Link } from "react-router-dom";
import Items from "../../../../components/Items/Items";

const ProminentListings = ({ posts }) => {
  return (
    <div className="pl">
      <Container>
        <div className="pl__container">
          <Heading text={"TIN RAO NHÀ ĐẤT NỔI BẬT"} text_left />
          <div className="pl__list">
            {posts.length > 0
              ? posts
                  .slice(0, 8)
                  .map((post) => <Items key={post.id} post={post} />)
              : null}
          </div>
          <div className="pl__button">
            <Link to={"/nha-dat-ban"}>
              <span>XEM TẤT CẢ TIN RAO MỚI NHẤT</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProminentListings;
