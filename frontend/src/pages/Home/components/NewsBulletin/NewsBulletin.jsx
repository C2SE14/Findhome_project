import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "../../../../components/Carousel/Carousel";
//
import "./NewsBulletin.scss";

const NewsBulletin = () => {
  const items = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/dulkwgwws/image/upload/v1679131486/CAPTONSE2/Anhdemo_d0nnvh.png",
      title: "CHUNG CƯ GOLDMARK",
      address: "Hà Nội",
      bedroom: "2",
      area: "87",
      price: "Thoả thuận",
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/dulkwgwws/image/upload/v1679131486/CAPTONSE2/Anhdemo_d0nnvh.png",
      title: "CHUNG CƯ GOLDMARK",
      address: "Hà Nội",
      bedroom: "2",
      area: "87",
      price: "Thoả thuận",
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/dulkwgwws/image/upload/v1679131486/CAPTONSE2/Anhdemo_d0nnvh.png",
      title: "CHUNG CƯ GOLDMARK",
      address: "Hà Nội",
      bedroom: "2",
      area: "87",
      price: "Thoả thuận",
    },
    {
      id: 4,
      imageUrl:
        "https://res.cloudinary.com/dulkwgwws/image/upload/v1679131486/CAPTONSE2/Anhdemo_d0nnvh.png",
      title: "CHUNG CƯ GOLDMARK",
      address: "Hà Nội",
      bedroom: "2",
      area: "87",
      price: "Thoả thuận",
    },
  ];
  return (
    <div className="nb">
      <Container>
        <div className="nb__container">
          <h2 className="nb__heading">BẢNG TIN</h2>
          <div className="nb__content">
            <div className="nb__title">
              <h2>BẢNG TIN BĐS LUÔN MỚI</h2>
              <p>Lorem dolor sit amet, disse suscipit sagittis leo sitea.</p>
            </div>
            <div className="nb__right">
              <Carousel items={items} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsBulletin;
