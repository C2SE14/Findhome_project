import React from "react";
import { Container } from "react-bootstrap";
import "./NewRealEstateListing.scss";
import Heading from "../../../../components/Heading/Heading";
import Carousel from "../../../../components/Carousel/Carousel";
import fetchData from "../../../../components/Common/fetchData";

const NewRealEstateListing = () => {
  return (
    <div className="nrel">
      <Container>
        <div className="nrel__container">
          <Heading text={"TIN RAO NHÀ ĐẤT MỚI"} text_left />
          <Carousel items={fetchData} noimage />
        </div>
      </Container>
    </div>
  );
};

export default NewRealEstateListing;
