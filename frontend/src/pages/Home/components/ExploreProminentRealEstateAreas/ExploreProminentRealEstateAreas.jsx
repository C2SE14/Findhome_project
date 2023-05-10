import React from "react";
import "./ExploreProminentRealEstateAreas.scss";
import { Container } from "react-bootstrap";
import Heading from "../../../../components/Heading/Heading";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";

const ExploreProminentRealEstateAreas = ({ posts }) => {
  const locations = [];
  posts.forEach((realEstate) => {
    const { cityProvince, district } = realEstate;
    const location = locations.find((loc) => loc.cityProvince === cityProvince);
    if (location) {
      const subLocation = location.subLocations.find(
        (subLoc) => subLoc.district === district
      );
      if (subLocation) {
        subLocation.realEstates.push(realEstate);
      } else {
        const newSubLocation = {
          district: district,
          realEstates: [realEstate],
        };
        location.subLocations.push(newSubLocation);
      }
    } else {
      const newLocation = {
        cityProvince: cityProvince,
        subLocations: [
          {
            district: district,
            realEstates: [realEstate],
          },
        ],
      };
      locations.push(newLocation);
    }
  });

  locations.sort((a, b) => b.subLocations.length - a.subLocations.length);
  // Lấy ra 8 tỉnh đầu tiên
  const top8Tinh = locations.slice(0, 8);

  const getTotalRealEstates = (cityProvince) => {
    const location = locations.find((loc) => loc.cityProvince === cityProvince);
    let total = 0;
    if (location) {
      location.subLocations.forEach((subLocation) => {
        total += subLocation.realEstates.length;
      });
    }
    return total;
  };
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
              {top8Tinh.map((location, index) => (
                <Tab key={index}>
                  <h4>{location.cityProvince}</h4>
                  <span>{getTotalRealEstates(location.cityProvince)}</span>
                </Tab>
              ))}
            </TabList>

            {top8Tinh.map((location, index) => (
              <TabPanel key={index}>
                <div className="eprea__tabs">
                  {location.subLocations
                    .slice(0, 6)
                    .map((subLocation, index) => (
                      <div className="eprea__tabs-item" key={index}>
                        {
                          <img
                            src={
                              subLocation.realEstates[0].imageModelList[0].image
                            }
                            alt=""
                          />
                        }
                        <h3>{subLocation.district}</h3>
                        <div className="estate__pending">
                          <span>{subLocation.realEstates.length}</span>
                          <span>bất động sản đang bán</span>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="eprea__btn">
                  <Link to="#">
                    Xem thêm {location.subLocations.length} tin Mua bán nhà đất
                    tại {location.cityProvince}
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default ExploreProminentRealEstateAreas;
