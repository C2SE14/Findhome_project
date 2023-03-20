import React from "react";
import { Container } from "react-bootstrap";
//
import Heading from "../../../../components/Heading/Heading";
import "./AreaEstate.scss";
import {
  area_hochiminh,
  area_danang,
  area_hanoi,
  area_dongnai,
  area_haiphong,
  area_vungtau,
} from "../../../../assets/images";

const AreaEstate = () => {
  return (
    <div className="are">
      <Container>
        <div className="are__container">
          <Heading heading="DỄ DÀNG TÌM KIẾM" title="THEO KHU VỰC" />
          <div className="are__main">
            <ul>
              <li>
                <div className="are__group">
                  <img
                    src={area_hochiminh}
                    alt="area_hochiminh"
                    className="are__img"
                  />
                  <div className="are__content">
                    <h2>TP. Hồ Chí Minh</h2>
                    <p>4000 tin đăng</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="are__group">
                  <img src={area_danang} alt="" className="are__img" />
                  <div className="are__content">
                    <h2>Đà Nẵng</h2>
                    <p>3000 tin đăng</p>
                  </div>
                </div>
                <div className="are__group">
                  <img src={area_haiphong} alt="" className="are__img" />
                  <div className="are__content">
                    <h2>Hải phòng</h2>
                    <p>2000 tin đăng</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="are__group">
                  <img src={area_hanoi} alt="are_hanoi" className="are__img" />
                  <div className="are__content">
                    <h2>Hà Nội</h2>
                    <p>3000 tin đăng</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="are__group">
                  <img src={area_dongnai} alt="" className="are__img" />
                  <div className="are__content">
                    <h2>Đồng Nai</h2>
                    <p>3000 tin đăng</p>
                  </div>
                </div>
                <div className="are__group">
                  <img src={area_vungtau} alt="" className="are__img" />
                  <div className="are__content">
                    <h2>Vũng Tàu</h2>
                    <p>2000 tin đăng</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AreaEstate;
