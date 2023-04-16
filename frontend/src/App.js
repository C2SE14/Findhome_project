// import library
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import structure
import "./App.scss";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Aution from "./pages/Home/components/Autioninfo/Aution";
import Information from "./pages/Home/Details/Information";
import Product from "./pages/Home/Product/Product";


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/aution" element={<Aution />} />
          <Route path="/information" element={<Information />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
