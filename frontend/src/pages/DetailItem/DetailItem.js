import React from "react";
import { Outlet } from "react-router-dom";

//
import ActionsHeader from "./componetns/ActionsHeader/ActionsHeader";

const DetailItem = () => {
  return (
    <>
      <ActionsHeader />
      <>
        <Outlet />
      </>
    </>
  );
};

export default DetailItem;
