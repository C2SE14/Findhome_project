// import library
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import structure
import "./App.scss";
import LayoutDefault from "./components/Layout/LayoutDefault";
import LayoutHome from "./components/Layout/LayoutHome";
import Login from "./pages/Auth/Login/Login";
import Details from "./pages/DetailItem/componetns/Details/Details";
import DetailItem from "./pages/DetailItem/DetailItem";
import Home from "./pages/Home/Home";
import Detail from "./pages/DetailItem/componetns/Detail/Detail";
import LayoutSystem from "./components/Layout/LayoutSystem";
import PostNew from "./pages/PostNew/PostNew";
import ListNew from "./pages/ListNew/ListNew";
import RegisterParticipate from "./pages/RegisterParticipate/RegisterParticipate";
import AuctionRoom from "./pages/AuctionRoom/AuctionRoom";
import { path } from "./utils/constant";
import ScrollToTop from "react-scroll-to-top";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <ScrollToTop
          smooth
          color="#b53c12"
          className="d-flex align-items-center justify-content-center"
        />
        <Routes>
          <Route element={<LayoutHome />}>
            <Route path={path.HOME} element={<Home />} />
          </Route>
          <Route element={<LayoutDefault />}>
            <Route path={path.AUCTION} element={<AuctionRoom />} />
            <Route path={path.REAL_ESTATE_FOR_SALE} element={<DetailItem />}>
              <Route index element={<Details />} />
              <Route path="/nha-dat-ban/:slug" element={<Detail />} />
            </Route>
            <Route path={path.REAL_ESTATE_FOR_RENT} element={<DetailItem />}>
              <Route index element={<Details />} />
              <Route path="/nha-dat-cho-thue/:slug" element={<Detail />} />
            </Route>
            <Route path={path.LOGIN} element={<Login />} />
            <Route path={path.SIGNUP} element={<Login />} />
            <Route
              path={path.REGISTER_PARTICIPAE}
              element={<RegisterParticipate />}
            />
          </Route>
          <Route element={<LayoutSystem />}>
            <Route path={path.POST_NEWS} element={<PostNew />} />
            <Route path={path.LIST_NEWS} element={<ListNew />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
