import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Search from "./Components/Search";
import Footer from "./Components/Footer";
import Properties from "./Components/Properties";
import FlatForRent from "./Components/FlatForRent";
import mainphoto from "./img/mainphoto.png";
import LandForSale from "./Components/LandForSale";
import HouseForSale from "./Components/HouseForSale";
import Error from "./Components/Error";
import Test from "./Components/Test";
import CreateListing from "./Pages/CreateListing";
const App = () => {
  return (
    <BrowserRouter>
      {/* <div> */}
      <div
        style={{
          backgroundImage: `url(${mainphoto})`,
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        {/* <Intro /> */}
        {/* </div> */}
        {/* <Search /> */}
        {/* <FlatForRent />

        <HouseForSale />
        <LandForSale />
        <Footer /> */}
      </div>
      <Routes>
        {/* <Route path="/Home" element={<Home />} /> */}
        <Route path="/properties" element={<Properties />} />
        <Route path="/FlatForRent" element={<FlatForRent />} />
        <Route path="/LandForSale" element={<LandForSale />} />
        <Route path="/HouseForSale" element={<HouseForSale />} />
        <Route path="/agent" element={<Intro />} />
        <Route path="/test" element={<Test />} />
        <Route path="/contact" element={<Footer />} />
        <Route path="/create-listing" element={<CreateListing />} />

        <Route path="/about" element={<Intro />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
