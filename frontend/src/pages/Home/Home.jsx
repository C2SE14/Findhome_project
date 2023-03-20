import React from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import AreaEstate from "./components/AreaEstate/AreaEstate";
import Banner from "./components/Banner/Banner";
import Customer from "./components/Customer/Customer";
import NewsBulletin from "./components/NewsBulletin/NewsBulletin";
import PostNews from "./components/PostNews/PostNews";
import Searching from "./components/Searching/Searching";
import TopNews from "./components/TopNews/TopNews";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <AboutUs />
      <NewsBulletin />
      <AreaEstate />
      <PostNews />
      <Customer />
      <Searching />
      <TopNews />
    </div>
  );
};

export default Home;
