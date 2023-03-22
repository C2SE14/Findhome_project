import React from "react";
import { Container } from "react-bootstrap";
import {
  bussiness1,
  bussiness2,
  bussiness3,
  bussiness4,
  bussiness5,
  bussiness6,
} from "../../../../assets/images";
import "./BusinessPartners.scss";

const BusinessPartners = () => {
  return (
    <div className="bp">
      <Container>
        <div className="bp__container">
          <ul>
            <li>
              <img src={bussiness1} alt="" />
            </li>
            <li>
              <img src={bussiness2} alt="" />
            </li>
            <li>
              <img src={bussiness3} alt="" />
            </li>
            <li>
              <img src={bussiness4} alt="" />
            </li>
            <li>
              <img src={bussiness5} alt="" />
            </li>
            <li>
              <img src={bussiness6} alt="" />
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default BusinessPartners;
