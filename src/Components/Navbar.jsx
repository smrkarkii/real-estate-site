import React, { useState } from "react";
import { AiFillHome, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-router-dom";

import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(true);

  function handleNav() {
    setNav(!nav);
  }
  return (
    <>
      <div className="text-white flex max-w-[1240px] mx-auto items-center h-24 ">
        <h1 className="text-4xl font-bold text-[white] fixed">
          {/* <AiFillHome className="inline pt-[-10]" /> */}
          NeProp
        </h1>
        <ul className=" hidden md:flex mx-auto ">
          <li className="p-12">
            {" "}
            <Link to="/home">Home</Link>
          </li>
          <li className="p-12">About Us</li>
          <li className="p-12">Our Agents</li>
          <li className="p-12">
            {" "}
            <ScrollLink to="properties">Properties</ScrollLink>
          </li>
          <li className="p-12">
            {" "}
            <ScrollLink to="footer">Contact Us</ScrollLink>
          </li>
        </ul>
        <div className="fixed right-2 md:hidden" onClick={handleNav}>
          {!nav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <div
          className={
            !nav
              ? "fixed top-0  w-[60%] border-r border-[#e9e9f511] h-full bg-[#232323] ease-in-out duration-200"
              : "fixed left-[-100%]"
          }
        >
          <ul className="pt-24">
            <li className="p-2 border-b border-gray-300">
              {" "}
              <Link to="/home">Home</Link>
            </li>
            <li className="p-2 border-b border-gray-300">About Us</li>
            <li className="p-2 border-b border-gray-300">Our Agents</li>
            <li className="p-2 border-b border-gray-300">
              {" "}
              <ScrollLink to="properties">Properties</ScrollLink>
            </li>
            <li className="p-2 border-b border-gray-300">
              {" "}
              <ScrollLink to="footer">Contact Us</ScrollLink>
            </li>
          </ul>
        </div>
        <button className="text-white w-32 rounded p-2 border-[3px] border-white fixed right-8">
          Add Listing
        </button>
      </div>
    </>
  );
};

export default Navbar;
