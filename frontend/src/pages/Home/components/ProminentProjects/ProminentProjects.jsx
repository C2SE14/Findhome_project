import React from "react";
import { Container } from "react-bootstrap";
import Heading from "../../../../components/Heading/Heading";
import "./ProminentProjects.scss";
import Carousel from "../../../../components/Carousel/Carousel";
import { Link } from "react-router-dom";
import fetchData from "../../../../components/Common/fetchData";

const ProminentProjects = () => {
  return (
    <div className="pp" id="prominentProjects">
      <Container>
        <div className="pp__container">
          <Heading
            text={"DỰ ÁN NỔI BẬT"}
            desc={
              "Tổng hợp danh sách các dự án Bất động sản nổi bật mới nhất. Thông tin chi tiết về giá bán, vị trí, chính sách ưu đãi sẽ được cập nhật liên tục tại House Viet."
            }
          />
          <Carousel items={fetchData} />
          <div className="pp__button">
            <Link to="/du-an">Xem tất cả dự án</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProminentProjects;
