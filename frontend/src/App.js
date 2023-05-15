// import library
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { ToastContainer } from "react-toastify";
// import structure
import "./App.scss";
import LayoutDefault from "./components/Layout/LayoutDefault";
import Login from "./pages/Auth/Login/Login";
import Home from "./pages/Home/Home";
import LayoutSystem from "./components/Layout/LayoutSystem";
import { path } from "./utils/constant";
import LayoutDetails from "./components/Layout/LayoutDetails";
import RealEstateForSale from "./pages/RealEstateForSale/RealEstateForSale";
import RealEstateForRent from "./pages/RealEstateForRent/RealEstateForRent";
import DetailProduct from "./pages/DetaiProduct/DetailProduct";
import LayoutDetail from "./components/Layout/LayoutDetail";
import Profile from "./pages/Profile/Profile";
import PostNew from "./pages/PostNew/PostNew";
import ListNews from "./pages/ListNews/ListNews";
import Auction from "./pages/Auction/Auction";
import DetailAction from "./pages/Auction/components/DetailAction";
import ListAction from "./pages/Auction/components/ListAuction";
import AuctionResults from "./pages/Auction/components/AuctionResults";
import { useSelector } from "react-redux";
import LayoutAdmin from "./AdminPage/components/LayoutAdmin/LayoutAdmin";
import AdminRouter from "./AdminPage/AdminRouter";

function App() {
  const { userData } = useSelector((state) => state.user);
  const isAdmin = userData.roles && userData?.roles[0]?.id === 2;
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
          {isAdmin ? (
            <Route path="/" element={<LayoutAdmin />}>
              <Route index element={<Navigate to="admin" />} />
              {/* <Route path="*" element={<AdminRouter />} /> */}
            </Route>
          ) : (
            <>
              <Route element={<LayoutDefault />}>
                <Route path={path.HOME} element={<Home />} />
                <Route path={path.LOGIN} element={<Login />} />
                <Route path={path.SIGNUP} element={<Login />} />
                <Route
                  path={path.KET_QUA_DAU_GIA}
                  element={<AuctionResults />}
                />
              </Route>

              <Route element={<LayoutDetails />}>
                <Route path={path.AUCTION} element={<Auction />} />
                <Route path={path.AUCTION_DETAIL} element={<DetailAction />} />

                <Route
                  path={path.REAL_ESTATE_FOR_SALE}
                  element={<RealEstateForSale />}
                />
                <Route
                  path={path.BAN_CAN_HO_CHUNG_CU}
                  element={<RealEstateForSale categoryId={1} />}
                />
                <Route
                  path={path.BAN_NHA_RIENG_NHA_MAT_PHO}
                  element={<RealEstateForSale categoryId={2} />}
                />

                <Route
                  path={path.BAN_BIET_THU_NHA_LIEN_KE}
                  element={<RealEstateForSale categoryId={3} />}
                />
                <Route
                  path={path.BAN_DAT_NEN}
                  element={<RealEstateForSale categoryId={4} />}
                />

                <Route
                  path={path.BAN_DAT_THO_CU}
                  element={<RealEstateForSale categoryId={5} />}
                />

                <Route
                  path={path.BAN_TOA_NHA_VAN_PHONG}
                  element={<RealEstateForSale categoryId={6} />}
                />

                <Route
                  path={path.BAN_CAN_HO_CONDOTEL}
                  element={<RealEstateForSale categoryId={7} />}
                />

                <Route
                  path={path.BAN_CAN_HO_OFFICETEL}
                  element={<RealEstateForSale categoryId={8} />}
                />

                <Route
                  path={path.BAN_DAT_TRANG_TRAI_NGHI_DUONG}
                  element={<RealEstateForSale categoryId={9} />}
                />
                <Route
                  path={path.BAN_KHO_NHA_XUONG_KIOT}
                  element={<RealEstateForSale categoryId={10} />}
                />
                <Route
                  path={path.BAN_DAT_NHA_KHAC}
                  element={<RealEstateForSale categoryId={11} />}
                />
                {/*  */}

                <Route
                  path={path.REAL_ESTATE_FOR_RENT}
                  element={<RealEstateForRent />}
                />

                <Route
                  path={path.CHO_THUE_CAN_HO_CHUNG_CU}
                  element={<RealEstateForRent categoryId={12} />}
                />
                <Route
                  path={path.CHO_THUE_PHONG_TRO_NHA_TRO}
                  element={<RealEstateForRent categoryId={13} />}
                />
                <Route
                  path={path.CHO_THUE_VAN_PHONG}
                  element={<RealEstateForRent categoryId={14} />}
                />
                <Route
                  path={path.CHO_THUE_NHA_RIENG_NHA_MAT_PHO}
                  element={<RealEstateForRent categoryId={15} />}
                />
                <Route
                  path={path.CHO_THUE_CAN_HO_CONDOTEL}
                  element={<RealEstateForRent categoryId={16} />}
                />
                <Route
                  path={path.CHO_THUE_cAN_HO_OFFICETEL}
                  element={<RealEstateForRent categoryId={17} />}
                />
                <Route
                  path={path.CHO_THUE_NHA_KHO_NHA_XUONG}
                  element={<RealEstateForRent categoryId={18} />}
                />
                <Route
                  path={path.CHO_THUE_NHA_DAT_KHAC}
                  element={<RealEstateForRent categoryId={18} />}
                />
              </Route>
              <Route element={<LayoutDetail />}>
                <Route
                  path={path.REAL_ESTATE_DETAIL}
                  element={<DetailProduct />}
                />
              </Route>

              <Route element={<LayoutSystem />}>
                <Route path={path.PROFILE} element={<Profile />} />
                <Route path={path.POST_NEWS} element={<PostNew />} />
                <Route path={path.LIST_NEWS} element={<ListNews />} />
                <Route path={path.LIST_AUCTION} element={<ListAction />} />
              </Route>
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
