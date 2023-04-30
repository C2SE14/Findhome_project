import React from "react";
import "./TopNews.scss";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../../../../components/Heading/Heading";

const dataNews = [
  {
    image:
      "https://cdn.houseviet.vn/images/news/27042023/toan-canh-gia-nha-va-mot-so-loai-bat-dong-san-quy-1-2023.jpg",
    title: "Bình Tân - 'miền đất hứa' của bất động sản giá trị thật",
    createDate: "26/04/2023 - 09:13",
  },
  {
    image:
      "https://cdn.houseviet.vn/images/news/27042023/toan-canh-gia-nha-va-mot-so-loai-bat-dong-san-quy-1-2023.jpg",
    title: "Bình Tân - 'miền đất hứa' của bất động sản giá trị thật",
    createDate: "26/04/2023 - 09:13",
  },
  {
    image:
      "https://cdn.houseviet.vn/images/news/27042023/toan-canh-gia-nha-va-mot-so-loai-bat-dong-san-quy-1-2023.jpg",
    title: "Bình Tân - 'miền đất hứa' của bất động sản giá trị thật",
    desc: "Giá nhà ở và một số loại BĐS trong quý 1/2023 đều có xu hưởng giảm nhẹ từ 3.5 - 9%, riêng BĐS công nghiệp tăng khoảng 8 - 10%.",
    createDate: "26/04/2023 - 09:13",
  },
  {
    image:
      "https://cdn.houseviet.vn/images/news/27042023/toan-canh-gia-nha-va-mot-so-loai-bat-dong-san-quy-1-2023.jpg",
    title: "Bình Tân - 'miền đất hứa' của bất động sản giá trị thật",
    createDate: "26/04/2023 - 09:13",
  },
  {
    image:
      "https://cdn.houseviet.vn/images/news/27042023/toan-canh-gia-nha-va-mot-so-loai-bat-dong-san-quy-1-2023.jpg",
    title: "Bình Tân - 'miền đất hứa' của bất động sản giá trị thật",
    createDate: "26/04/2023 - 09:13",
  },
  {
    image:
      "https://cdn.houseviet.vn/images/news/27042023/toan-canh-gia-nha-va-mot-so-loai-bat-dong-san-quy-1-2023.jpg",
    title: "Bình Tân - 'miền đất hứa' của bất động sản giá trị thật",
    createDate: "26/04/2023 - 09:13",
  },
  {
    image:
      "https://cdn.houseviet.vn/images/news/27042023/toan-canh-gia-nha-va-mot-so-loai-bat-dong-san-quy-1-2023.jpg",
    title: "Bình Tân - 'miền đất hứa' của bất động sản giá trị thật",
    createDate: "26/04/2023 - 09:13",
  },
  {
    image:
      "https://cdn.houseviet.vn/images/news/27042023/toan-canh-gia-nha-va-mot-so-loai-bat-dong-san-quy-1-2023.jpg",
    title: "Bình Tân - 'miền đất hứa' của bất động sản giá trị thật",
    createDate: "26/04/2023 - 09:13",
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
