import React from "react";
import "./MyInfo.scss";
import { Container } from "react-bootstrap";
import Carousel from "../../../../components/Carousel/Carousel";

const dataMyInfo = [
  {
    title:
      "FindHome chính thức giới thiệu tính năng bản đồ quy hoạch và “mở Data” bất động sản ",
    desc: "Đây là một công cụ hỗ trợ vô cùng đắc lực dành riêng cho các môi giới bất động sản khi triển khai dự án. Được ấp ủ và xây dựng trong một thời gian dài cùng quá trình kiểm thử chất lượng Data một cách rất nghiêm ngặt",
  },
  {
    title:
      " Đăng là bán - Tìm là thấy - Trải nghiệm mới cùng hệ thống TMĐT bất động sản Houseviet.vn ",
    desc: "Lượng tìm kiếm tăng đột biến, số lượng người dùng đăng ký mới và sử dụng nền tảng Houseviet.vn để mua bán bất động sản không ngừng tăng trưởng mỗi ngày. Đó chính là những gì đã và đang diễn ra kể từ khi hệ thống thương mại điện tử bất động sản House Viet được công bố ra thị trường",
  },
  {
    title:
      "Tăng trải nghiệm mua bán BĐS nhờ tính năng đặt lịch hẹn trên Houseviet",
    desc: "Trải nghiệm là tiêu chí quan trọng nhất trên hệ thống thương mại điện tử bất động sản Houseviet.vn. Đây là kim chỉ nam cho mọi hành động để sau mỗi lần cập nhật, hệ thống có thể mang đến những tính năng chất lượng, giúp người dùng thao tác mượt mà hơn.",
  },
];

const MyInfo = () => {
  return (
    <div className="myinfo">
      <Container>
        <div className="myinfo__container">
          <div className="myinfo__heading">
            <span></span>
            <h2>FINDHOME</h2>
            <span></span>
          </div>
          <Carousel items={dataMyInfo} info />
        </div>
      </Container>
    </div>
  );
};

export default MyInfo;
