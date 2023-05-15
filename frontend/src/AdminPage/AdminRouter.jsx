import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import HotelList from "./pages/HotelList/HotelList";
import PlaceList from "./pages/PlaceList/PlaceList";
import TourList from "./pages/TourList/TourList";
import UserList from "./pages/UserList/UserList";

const AdminRouter = () => {
  return (
    <div className="admin__router">
      <Routes>
        <Route path="admin" element={<Outlet />}>
          <Route path="users" element={<UserList />} />

          {/*  */}
          <Route path="places" element={<PlaceList />} />

          {/*  */}
          <Route path="hotels" element={<HotelList />} />

          {/*  */}
          <Route path="tours" element={<TourList />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AdminRouter;
