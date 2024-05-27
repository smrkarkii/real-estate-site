import React from "react";
import Navbar from "../Components/Navbar";
import Intro from "../Components/Intro";
import Search from "../Components/Search";
import Footer from "../Components/Footer";
import mainphoto from "../img/mainphoto.png";
import FlatForRent from "../Components/FlatForRent";
import HouseForSale from "../Components/HouseForSale";
import LandForSale from "../Components/LandForSale";

const Home = () => {
  return (
    <div className="absolute top-0">
      <div
        style={{
          backgroundImage: `url(${mainphoto})`,
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <Intro />
      </div>

      <Search />
      <FlatForRent />
      <HouseForSale />
      <LandForSale />
      <Footer />
    </div>
  );
};

export default Home;
