import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

//
import ActionsHeader from "./componetns/ActionsHeader/ActionsHeader";

const DetailItem = () => {
  return (
    <>
      <ActionsHeader />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default DetailItem;
