import React from "react";
import { Container } from "react-bootstrap";
//
import Heading from "../../../../components/Heading/Heading";
import {
  building_icon,
  house_icon,
  estate_icon,
  office_icon,
  realestate_icon,
} from "../../../../assets/images";
import "./Searching.scss";
const Searching = () => {
  return (
    <div className="sea">
      <Container>
        <div className="sea__container">
          <Heading
            heading="TÌM KIẾM"
            title="BẠN ĐANG TÌM KIẾM GÌ ?"
            text_white
          />
          <div className="sea__content">
            <ul>
              <li>
                <img src={building_icon} alt="building_icon" />
                <h2 className="sea__name">Căn hộ, chung cư</h2>
                <p>2000 tin đăng</p>
              </li>

              <li>
                <img src={house_icon} alt="house_icon" />
                <h2 className="sea__name">Nhà, Shophouse</h2>
                <p>2000 tin đăng</p>
              </li>

              <li>
                <img src={estate_icon} alt="estate_icon" />
                <h2 className="sea__name">Đất</h2>
                <p>2000 tin đăng</p>
              </li>

              <li>
                <img src={office_icon} alt="office_icon" />
                <h2 className="sea__name">Văn phòng</h2>
                <p>2000 tin đăng</p>
              </li>

              <li>
                <img src={realestate_icon} alt="realestate_icon" />
                <h2 className="sea__name">Dự án</h2>
                <p>2000 tin đăng</p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Searching;
