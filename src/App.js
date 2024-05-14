import React from "react";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Search from "./Components/Search";
import Footer from "./Components/Footer";
import Properties from "./Components/Properties";
import PropertiesbyArea from "./Components/PropertiesbyArea";
import mainphoto from "./img/mainphoto.png";

const App = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${mainphoto})`,
          backgroundSize: "cover",
        }}
      >
        >
        <Navbar />
        <Intro />
      </div>
      <Search />
      <PropertiesbyArea />
      <Properties />
      <Footer />
    </div>
  );
};

export default App;
