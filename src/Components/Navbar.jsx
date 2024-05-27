import React, { useState } from "react";
import { AiFillHome, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="text-white flex max-w-[1240px] mx-auto items-center h-24">
      <Link to="/" className="text-4xl font-bold text-white fixed">
        NeProp
      </Link>
      <ul className="hidden md:flex mx-auto">
        <li className="p-12">
          <Link to="/">Home</Link>
        </li>
        <li className="p-12">
          <Link to="/about">About Us</Link>
        </li>
        {/* <li className="p-12">
          <Link to="/create-listing">List your property</Link>
        </li> */}
        <li
          className="p-12 relative"
          onMouseEnter={handleDropdown}
          onMouseLeave={handleDropdown}
        >
          <Link to="/create-listing">List your property</Link>
          {dropdown && (
            <ul className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg z-10">
              <li className="p-2 border-b border-gray-300 hover:bg-gray-200">
                <Link to="/create-listing">House & Flat</Link>
              </li>
              <li className="p-2 hover:bg-gray-200">
                <Link to="/create-listing/land">Land</Link>
              </li>
            </ul>
          )}
        </li>

        <li className="p-12">
          <Link to="/properties">Properties</Link>
        </li>
        <li className="p-12">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <div className="fixed right-2 md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 ${
          nav ? "left-[-100%]" : "left-0"
        } w-[60%] border-r border-[#e9e9f511] h-full bg-[#232323] ease-in-out duration-200`}
      >
        <ul className="pt-24">
          <li className="p-2 border-b border-gray-300">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 border-b border-gray-300">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-2 border-b border-gray-300">
            <Link to="/agent">Our Agents</Link>
          </li>
          <li className="p-2 border-b border-gray-300">
            <Link to="/properties">Properties</Link>
          </li>
          <li className="p-2 border-b border-gray-300">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
