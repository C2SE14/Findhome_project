import React from "react";
import { Container } from "react-bootstrap";
import "./NewRealEstateListing.scss";
import Heading from "../../../../components/Heading/Heading";
import Carousel from "../../../../components/Carousel/Carousel";

const NewRealEstateListing = ({ posts }) => {
  return (
    <div className="nrel">
      <Container>
        <div className="nrel__container">
          <Heading text={"TIN RAO NHÀ ĐẤT MỚI"} text_left />
          <Carousel items={posts} noimage />
        </div>
      </Container>
    </div>
  );
};

export default NewRealEstateListing;
