import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import Banner from "./components/Banner/Banner";
import ProminentProjects from "./components/ProminentProjects/ProminentProjects";
import ProminentListings from "./components/ProminentListings/ProminentListings";
import NewRealEstateListing from "./components/NewRealEstateListing/NewRealEstateListing";
import ExploreProminentRealEstateAreas from "./components/ExploreProminentRealEstateAreas/ExploreProminentRealEstateAreas";
import TopNews from "./components/TopNews/TopNews";
import { getAllPostRealEstate } from "../../store/actions/postRealEstate";
import MyInfo from "./components/MyInfo/MyInfo";

const Home = () => {
  const { posts } = useSelector((state) => state.postRealEstate);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPostRealEstate());
  }, [dispatch]);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div className="home">
      <Banner />
      <main>
        <ProminentProjects posts={posts} />
        <ProminentListings posts={posts} />
        <NewRealEstateListing posts={posts} />
        <ExploreProminentRealEstateAreas posts={posts} />
        <TopNews />
        <MyInfo />
      </main>
    </div>
  );
};

export default Home;
