import React, { useState } from "react";
import { FaBed } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";
import { properties } from "../Data/Properties";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const FlatForRent = () => {
  const [showAll, setShowAll] = useState(false);

  const handleViewAllClick = () => {
    setShowAll(!showAll);
  };

  const propertiesToShow = showAll ? properties : properties.slice(0, 3);
  return (
    <div>
      <div
        className=" mt-32 md:mt-0 pl-10 pt-[100px] relative"
        id="flatforrent "
      >
        <h1 className="font-bold text-2xl text-black text-left ">
          Flat and House For Rent
        </h1>
        <button
          className="bg-[#4b60a1] rounded text-white w-24 h-9 absolute right-5 top-24 "
          onClick={handleViewAllClick}
        >
          View all
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  px-5 py-3 ">
        {propertiesToShow.map((property, index) => (
          <div
            key={index}
            className="relative shadow-custom-all w-80 h-[350px] pb-5 flex flex-col pt-5  mb-5 mx-auto"
          >
            <img
              className="relative backdrop-filter w-80 h-40 "
              src={property.image}
              alt={property.title}
            />
            {/* <div className="bg-blue-800 absolute top-5 left-24 h-40 w-72 opacity-25 m-auto"></div> */}
            <div className="ml-5">
              <div className="">{property.title}</div>
              <p className="text-l font-light">{property.location}</p>
              <p className="text-l font-bold text-blue-400">
                Rs.{property.price}
              </p>
              <div className="flex mt-2">
                {/* <FaBed className="mr-2" />
                <TbToolsKitchen3 /> */}
              </div>
              <p className="text-gray-400 text-extra-light">{property.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlatForRent;
