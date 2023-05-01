import React from "react";

import Banner from "./components/Banner/Banner";

import ProminentProjects from "./components/ProminentProjects/ProminentProjects";
import ProminentListings from "./components/ProminentListings/ProminentListings";
import NewRealEstateListing from "./components/NewRealEstateListing/NewRealEstateListing";
import ExploreProminentRealEstateAreas from "./components/ExploreProminentRealEstateAreas/ExploreProminentRealEstateAreas";
import TopNews from "./components/TopNews/TopNews";
import MyInfo from "./components/MyInfo/MyInfo";

const Home = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="home">
      <Banner />
      <main>
        <ProminentProjects />
        <ProminentListings />
        <NewRealEstateListing />
        <ExploreProminentRealEstateAreas />
        <TopNews />
        <MyInfo />
      </main>
    </div>
  );
};

export default Home;
