import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Search from "./Components/Search";
import Footer from "./Components/Footer";
import Properties from "./Components/Properties";
import PropertiesbyArea from "./Components/PropertiesbyArea";
import mainphoto from "./img/mainphoto.png";

const App = () => {
  return (
    <Router>
      <div>
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
        <PropertiesbyArea />
        <Routes>
          <Route path="/properties" element={<Properties />} />
          <Route path="/home" element={<App />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
