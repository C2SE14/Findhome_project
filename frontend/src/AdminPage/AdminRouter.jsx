import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import RealEstatedSaleList from "./pages/RealEstatedSaleList/RealEstateSaleList";
import RealEstateRentList from "./pages/RealEstateRentList/RealEstateRentList";
import ApprovingAuctionRegistration from "./pages/ApprovingAuctionRegistration/ApprovingAuctionRegistration";
import AuctionApproval from "./pages/AuctionApproval/AuctionApproval";

const AdminRouter = () => {
  return (
    <div className="admin__router">
      <Routes>
        <Route path="admin" element={<Outlet />}>
          <Route path="users" element={<UserList />} />
          <Route path="realestatesale" element={<RealEstatedSaleList />} />
          <Route path="realestaterent" element={<RealEstateRentList />} />
          <Route
            path="approving-auction-register"
            element={<ApprovingAuctionRegistration />}
          />
          <Route path="auction-approval" element={<AuctionApproval />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AdminRouter;
