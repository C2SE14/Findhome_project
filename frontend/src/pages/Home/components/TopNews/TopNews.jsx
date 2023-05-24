import React from "react";
import "./TopNews.scss";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../../../../components/Heading/Heading";

const dataNews = [
  {
    image:
      "https://cdn.houseviet.vn/images/news/05052023/can-ho-dang-e-nhung-moi-gioi-van-ke-chenh-600-trieu-dong-rao-ban-cho-khach-m.jpg",
    title:
      "Căn hộ đang “ế” nhưng môi giới vẫn kê chênh 600 triệu đồng rao bán cho khách",
    createDate: "25/05/2023 - 09:13",
  },
  {
    image:
      "https://cdn.houseviet.vn/images/news/04052023/gioi-dai-gia-bat-dong-san-am-tham-san-hang-m.jpg",
    title: "Giới đại gia bất động sản âm thầm “săn hàng",
    createDate: "24/05/2023 - 09:13",
  },
  {
    image:
      "https://cdn.houseviet.vn/images/news/27042023/toan-canh-gia-nha-va-mot-so-loai-bat-dong-san-quy-1-2023.jpg",
    title: "Bình Tân - 'miền đất hứa' của bất động sản giá trị thật",
    desc: "Giá nhà ở và một số loại BĐS trong quý 1/2023 đều có xu hưởng giảm nhẹ từ 3.5 - 9%, riêng BĐS công nghiệp tăng khoảng 8 - 10%.",
    createDate: "24/05/2023 - 09:13",
  },
  {
    image:
      "https://cdn.houseviet.vn/images/news/03042023/nha-dat-chua-co-so-do-co-vay-the-chap-ngan-hang-duoc-khong-m.jpg",
    title: "Bình Tân - 'miền đất hứa' của bất động sản giá trị thật",
    createDate: "23/05/2023 - 09:13",
  },
  {
    image:
      "https://cdn.houseviet.vn/images/news/27042023/toan-canh-gia-nha-va-mot-so-loai-bat-dong-san-quy-1-2023.jpg",
    title: "Bình Tân - 'miền đất hứa' của bất động sản giá trị thật",
    createDate: "25/04/2023 - 09:13",
  },
  {
    image:
      "https://cdn.houseviet.vn/images/news/24032023/nhieu-diem-moi-trong-du-thao-luat-kinh-doanh-bat-dong-san-sua-doi-m.jpg",
    title: "Bình Tân - 'miền đất hứa' của bất động sản giá trị thật",
    createDate: "25/05/2023 - 09:13",
  },
  {
    image:
      "https://cdn.houseviet.vn/images/news/15032023/chi-tiet-nghi-quyet-so-33-nq-cp-cua-chinh-phu-thuc-day-thao-go-kho-khan-thi-truong-bat-dong-san-m.jpg",
    title: "Bình Tân - 'miền đất hứa' của bất động sản giá trị thật",
    createDate: "22/04/2023 - 09:13",
  },
  {
    image:
      "https://cdn.houseviet.vn/images/news/08032023/cach-ban-bat-dong-san-nhanh-nhat-hieu-qua-m.jpg",
    title:
      "Chi tiết Nghị quyết số 33/NQ-CP của Chính phủ thúc đẩy, tháo gỡ khó khăn thị ...",
    createDate: "24/05/2023 - 09:13",
  },
];

const TopNews = () => {
  return (
    <div className="tn">
      <Container>
        <div className="tn__container">
          <Heading
            text={"Tin tức nổi bật"}
            desc={
              "Tổng hợp tin tức thị trường bất động sản, thông tin luật thay đổi, cập nhật liên quan tới thị trường nhà đất."
            }
          />
          <Row>
            <Col md={3}>
              {dataNews.slice(0, 2).map((data, index) => (
                <div
                  key={index}
                  style={{
                    background: "#f4f2f0",
                    marginBottom: "10px",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                >
                  <img
                    src={data.image}
                    alt={data.title}
                    style={{
                      width: "100%",
                      height: "160px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ padding: "8px" }}>
                    <h3
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "1.5",
                      }}
                    >
                      {data.title}
                    </h3>
                    <p style={{ fontSize: "16px", fontWeight: "400" }}>
                      <i
                        style={{ marginRight: "10px" }}
                        className="bi bi-clock"
                      ></i>
                      {data.createDate}
                    </p>
                  </div>
                </div>
              ))}
            </Col>
            <Col md={6}>
              {dataNews.slice(2, 3).map((data, index) => (
                <div
                  key={index}
                  style={{
                    background: "#f4f2f0",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                >
                  <img
                    style={{
                      height: "352px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={data.image}
                    alt={data.title}
                  />
                  <div style={{ padding: "16px" }}>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {data.title}
                    </h3>
                    <p style={{ marginBottom: "8px" }}>
                      <i
                        style={{ marginRight: "10px" }}
                        className="bi bi-clock"
                      ></i>
                      {data.createDate}
                    </p>
                    <p>{data.desc}</p>
                  </div>
                </div>
              ))}
            </Col>
            <Col md={3}>
              {dataNews.slice(3, 8).map((data, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    gap: "5px",
                    background: "#f4f2f0",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    marginBottom: "15px",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "80px",
                      objectFit: "cover",
                    }}
                    src={data.image}
                    alt={data.title}
                  />
                  <h3 style={{ fontSize: "14px", fontWeight: "500" }}>
                    {data.title}
                  </h3>
                </div>
              ))}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default TopNews;
