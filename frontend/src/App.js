// import library
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import structure
import "./App.scss";
import LayoutDefault from "./components/Layout/LayoutDefault";
import Login from "./pages/Auth/Login/Login";
import Home from "./pages/Home/Home";
<<<<<<< HEAD
<<<<<<< HEAD
import AuctionRoom from "./pages/Auction/AuctionRoom/AuctionRoom";

function App() {
     return (
          <BrowserRouter>
               <div className="app">
                    <Routes>
                         <Route element={<LayoutHome />}>
                              <Route path="/" element={<Home />} />
                              <Route path="/auction-room" element={<AuctionRoom />} />
                         </Route>
                         <Route element={<LayoutDefault />}>
                              <Route path="/chi-tiet" element={<DetailItem />}>
                                   <Route index element={<Details />} />
                              </Route>
                              <Route path="/login" element={<Login />} />
                         </Route>
                    </Routes>
               </div>
          </BrowserRouter>
     );
=======
import Detail from "./pages/DetailItem/componetns/Detail/Detail";
=======
import LayoutSystem from "./components/Layout/LayoutSystem";
import PostNew from "./pages/PostNew/PostNew";
import ListNew from "./pages/ListNew/ListNew";
// import RegisterParticipate from "./pages/RegisterParticipate/RegisterParticipate";
// import AuctionRoom from "./pages/AuctionRoom/AuctionRoom";
import { path } from "./utils/constant";
import ScrollToTop from "react-scroll-to-top";
import { ToastContainer } from "react-toastify";
import LayoutDetails from "./components/Layout/LayoutDetails";
import RealEstateForSale from "./pages/RealEstateForSale/RealEstateForSale";
import RealEstateForRent from "./pages/RealEstateForRent/RealEstateForRent";
import DetailProduct from "./pages/DetaiProduct/DetailProduct";
import LayoutDetail from "./components/Layout/LayoutDetail";
>>>>>>> e6473f2760239137393205d740d782a850fb7a06

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <ScrollToTop
          smooth
          color="#b53c12"
          className="d-flex align-items-center justify-content-center"
        />
        <ToastContainer
          containerId="an id"
          draggable={false}
          pauseOnHover={false}
        />
        <Routes>
          <Route element={<LayoutDefault />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.LOGIN} element={<Login />} />
            <Route path={path.SIGNUP} element={<Login />} />
          </Route>

          <Route element={<LayoutDetails />}>
            <Route
              path={path.REAL_ESTATE_FOR_SALE}
              element={<RealEstateForSale />}
            />
            <Route
              path={path.REAL_ESTATE_FOR_RENT}
              element={<RealEstateForRent />}
            />
          </Route>
          <Route element={<LayoutDetail />}>
            <Route path={path.REAL_ESTATE_DETAIL} element={<DetailProduct />} />
          </Route>

          <Route element={<LayoutSystem />}>
            <Route path={path.POST_NEWS} element={<PostNew />} />
            <Route path={path.LIST_NEWS} element={<ListNew />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
>>>>>>> dfdfc60489ce212c7d22367da749696e0ca2fbe5
}

export default App;
