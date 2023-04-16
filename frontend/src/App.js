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
import Aution from "./pages/Home/components/Autioninfo/Aution";
import Information from "./pages/Home/Details/Information";
import Product from "./pages/Home/Product/Product";

=======
import Detail from "./pages/DetailItem/componetns/Detail/Detail";
>>>>>>> dfdfc60489ce212c7d22367da749696e0ca2fbe5

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route element={<LayoutHome />}>
            <Route path="/" element={<Home />} />
          </Route>
<<<<<<< HEAD
          <Route path="/aution" element={<Aution />} />
          <Route path="/information" element={<Information />} />
          <Route path="/product" element={<Product />} />
=======
          <Route element={<LayoutDefault />}>
            <Route path="/nha-dat-ban" element={<DetailItem />}>
              <Route index element={<Details />} />
              <Route path="/nha-dat-ban/:slug" element={<Detail />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Route>
>>>>>>> dfdfc60489ce212c7d22367da749696e0ca2fbe5
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
