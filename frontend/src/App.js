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
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route element={<LayoutHome />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<LayoutDefault />}>
            <Route path="/phong-dau-gia" element={<AuctionRoom />} />
            <Route path="/nha-dat-ban" element={<DetailItem />}>
              <Route index element={<Details />} />
              <Route path="/nha-dat-ban/:slug" element={<Detail />} />
            </Route>
            <Route path="/nha-dat-cho-thue" element={<DetailItem />}>
              <Route index element={<Details />} />
              <Route path="/nha-dat-cho-thue/:slug" element={<Detail />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route
              path="/register-participate"
              element={<RegisterParticipate />}
            />
          </Route>
          <Route element={<LayoutSystem />}>
            <Route path="/dang-tin" element={<PostNew />} />
            <Route path="/danh-sach-tin" element={<ListNew />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
