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

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route element={<LayoutHome />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<LayoutDefault />}>
            <Route path="/nha-dat-ban" element={<DetailItem />}>
              <Route index element={<Details />} />
              <Route path="/nha-dat-ban/:slug" element={<Detail />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
>>>>>>> dfdfc60489ce212c7d22367da749696e0ca2fbe5
}

export default App;
