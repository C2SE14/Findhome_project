import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "../../../../components/Carousel/Carousel";
//
import "./Evaluation.scss";

const Evaluation = () => {
  const reviews = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/dulkwgwws/image/upload/v1672937983/avatar/e7pm2f7jgbpxdcfxnfkp.png",
      comment:
        "Findhome là một kênh quảng cáo đa dạng với chi phí hợp lý. Tôi cho rằng đây là kênh truyền thông bất động sản đem lại hiệu quả tốt.",
      name: "Chị Lê Thị Thanh Xuân",
      position: "Giám đốc kinh doanh Sàn giao dịch Bất động sản Lam Kinh",
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/dulkwgwws/image/upload/v1672937983/avatar/e7pm2f7jgbpxdcfxnfkp.png",
      comment:
        "Findhome là một kênh quảng cáo đa dạng với chi phí hợp lý. Tôi cho rằng đây là kênh truyền thông bất động sản đem lại hiệu quả tốt.Findhome là một kênh quảng cáo đa dạng với chi phí hợp lý. Tôi cho rằng đây là kênh truyền thông bất động sản đem lại hiệu quả tốt.",
      name: "Chị Lê Thị Thanh Xuân",
      position: "Giám đốc kinh doanh Sàn giao dịch Bất động sản Lam Kinh",
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/dulkwgwws/image/upload/v1672937983/avatar/e7pm2f7jgbpxdcfxnfkp.png",
      comment:
        "Findhome là một kênh quảng cáo đa dạng với chi phí hợp lý. Tôi cho rằng đây là kênh truyền thông bất động sản đem lại hiệu quả tốt.",
      name: "Chị Lê Thị Thanh Xuân",
      position: "Giám đốc kinh doanh Sàn giao dịch Bất động sản Lam Kinh",
    },
  ];
  return (
    <div className="ev">
      <Container>
        <div className="ev__container">
          <h2 className="ev__heading">ĐÁNH GIÁ</h2>
          <div className="ev__content">
            <div className="ev__title">
              <h2>KHÁCH HÀNG NÓI GÌ VỀ FINDHOME</h2>
              <p>Lorem dolor sit amet, disse suscipit sagittis leo sitea.</p>
            </div>
            <div className="ev__right">
              <Carousel reviews={reviews} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Evaluation;
