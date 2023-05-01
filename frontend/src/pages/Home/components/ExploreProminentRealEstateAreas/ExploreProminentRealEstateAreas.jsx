import React from "react";
import "./ExploreProminentRealEstateAreas.scss";
import { Container } from "react-bootstrap";
import Heading from "../../../../components/Heading/Heading";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";

const ExploreProminentRealEstateAreas = () => {
  const DataProvide = [
    {
      district: "Quận 2",
      estate_total: "21.223",
      image:
        "https://cdn.houseviet.vn/images/location/quan-2.jpg?v=637733640492814302",
    },
    {
      district: "Quận 7",
      estate_total: "21.223",
      image:
        "https://cdn.houseviet.vn/images/location/quan-7.jpg?v=637733644431659209",
    },
    {
      district: "Quận 9",
      estate_total: "21.223",
      image:
        "https://cdn.houseviet.vn/images/location/quan-7.jpg?v=637733644431659209",
    },
    {
      district: "Quận Tân Bình",
      estate_total: "21.223",
      image:
        "https://cdn.houseviet.vn/images/location/tan-binh.jpg?v=637733644931170997",
    },
    {
      district: "Thành phố Thủ Đức",
      estate_total: "21.223",
      image:
        "https://cdn.houseviet.vn/images/location/thu-duc.jpg?v=637832033737631702",
    },
    {
      district: "Huyện Bình Chánh",
      estate_total: "21.223",
      image:
        "https://cdn.houseviet.vn/images/location/binh-chanh.jpg?v=637733645114553263",
    },
  ];
  return (
    <div className="eprea">
      <Container>
        <div className="eprea__container">
          <Heading
            text={"KHÁM PHÁ BẤT ĐỘNG SẢN CÁC KHU VỰC NỔI BẬT"}
            text_left
          />
          <Tabs>
            <TabList>
              <Tab>
                <h4>Hồ Chí Minh</h4>
                <span>21.223 bất động sản</span>
              </Tab>
              <Tab>
                <h4>Hà Nội</h4>
                <span>21.223 bất động sản</span>
              </Tab>
              <Tab>
                <h4>Bình Dương</h4>
                <span>21.223 bất động sản</span>
              </Tab>
              <Tab>
                <h4>Đồng Nai</h4>
                <span>21.223 bất động sản</span>
              </Tab>

              <Tab>
                <h4>Bà Rịa Vũng Tàu</h4>
                <span>21.223 bất động sản</span>
              </Tab>
              <Tab>
                <h4>Đà Nẵng</h4>
                <span>21.223 bất động sản</span>
              </Tab>
              <Tab>
                <h4>Long An</h4>
                <span>21.223 bất động sản</span>
              </Tab>
              <Tab>
                <h4>Quảng Ninh</h4>
                <span>21.223 bất động sản</span>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="eprea__tabs">
                {DataProvide.map((data, index) => (
                  <div className="eprea__tabs-item" key={index}>
                    <img src={data.image} alt="" />
                    <h3>{data.district}</h3>
                    <div className="estate__pending">
                      <span>{data.estate_total}</span>
                      <span>bất động sản đang bán</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="eprea__btn">
                <Link to="#">
                  Xem thêm 123443 tin Mua bán nhà đất tại Hồ Chí Minh
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Đây là Hà Nội</h2>
            </TabPanel>
            <TabPanel>
              <h2>Đây là Bình Dương</h2>
            </TabPanel>
            <TabPanel>
              <h2>Đây là Đồng Nai</h2>
            </TabPanel>
            <TabPanel>
              <h2>Đây là bà rịa vũng tàu</h2>
            </TabPanel>
            <TabPanel>
              <h2>Đây là Đà Nẵng</h2>
            </TabPanel>
            <TabPanel>
              <h2>Đây là Long An</h2>
            </TabPanel>
            <TabPanel>
              <h2>Đây là Quảng Ninh</h2>
            </TabPanel>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default ExploreProminentRealEstateAreas;
