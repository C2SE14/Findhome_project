import React from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import AreaEstate from "./components/AreaEstate/AreaEstate";
import Banner from "./components/Banner/Banner";
import BusinessPartners from "./components/BusinessPartners/BusinessPartners";
import Customer from "./components/Customer/Customer";
import Evaluation from "./components/Evaluation/Evaluation";
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
      <Evaluation />
      <BusinessPartners />
    </div>
  );
};

export default Home;
