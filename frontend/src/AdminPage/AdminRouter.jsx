import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import RealEstatedSaleList from "./pages/RealEstatedSaleList/RealEstateSaleList";
import RealEstateRentList from "./pages/RealEstateRentList/RealEstateRentList";
import AuctionApproval from "./pages/AuctionApproval/AuctionApproval";
import RegisterAuctionApproval from "./pages/RegisterAuctionApproval/RegisterAuctionApproval";

const AdminRouter = () => {
  return (
    <div className="admin__router">
      <Routes>
        <Route element={<Outlet />}>
          <Route path="users" element={<UserList />} />
          <Route path="realestatesale" element={<RealEstatedSaleList />} />
          <Route path="realestaterent" element={<RealEstateRentList />} />
          <Route
            path="approving-auction-register"
            element={<RegisterAuctionApproval />}
          />
          <Route path="auction-approval" element={<AuctionApproval />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AdminRouter;
