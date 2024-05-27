// src/Components/MainLayout.js

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import mainphoto from "../img/mainphoto.png";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${mainphoto})`,
          backgroundSize: "cover",
        }}
      >
        <Navbar />
      </div>

      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
