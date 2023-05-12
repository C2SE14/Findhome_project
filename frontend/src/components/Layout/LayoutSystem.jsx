import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Siderbar from "./Siderbar/Siderbar";
import { Col, Container, Row } from "react-bootstrap";

const LayoutSystem = () => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__content py-3" style={{ background: "#f4f2f0" }}>
        <Container>
          <Row>
            <Col md={3}>
              <Siderbar />
            </Col>
            <Col md={9}>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutSystem;
