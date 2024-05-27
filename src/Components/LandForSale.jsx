import React, { useState } from "react";
import { FaBed } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";
import { landforsaleData } from "../Data/LandForSaleData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const LandForSale = () => {
  const [showAll, setShowAll] = useState(false);

  const handleViewAllClick = () => {
    setShowAll(!showAll);
  };

  const propertiesToShow = showAll
    ? landforsaleData
    : landforsaleData.slice(0, 3);
  return (
    <div>
      <div
        className=" mt-32 md:mt-0 pl-10 pt-[100px] relative"
        id="landforsale"
      >
        <h1 className="font-bold text-2xl text-black text-left ">
          Land For Sale
        </h1>
        <button
          className="bg-[#4b60a1] rounded text-white w-24 h-9 absolute right-5 top-24 "
          onClick={handleViewAllClick}
        >
          View all
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5 py-3 ">
        {propertiesToShow.map((property, index) => (
          <div
            key={index}
            className="relative shadow-custom-all  w-80 h-[350px] pb-5 flex flex-col pt-5  mb-5 mx-auto"
          >
            <img
              className="relative backdrop-filter w-80 h-40 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxdv6CRGoKZOzMaBZjpQIYReVKBAIdie59ZRdDSoDHiA&s"
              alt={property.title}
            />
            <div className="ml-5 flex flex-col gap-1">
              <div className=" ">{property.title}</div>
              <p className="text-l font-light">{property.location}</p>
              <p className="text-l font-bold text-blue-400">
                Rs.{property.price}
              </p>
              <div className="flex mt-2">
                <FaBed className="mr-2" />
                <TbToolsKitchen3 />
              </div>
              <p className="text-gray-400 text-extra-light">{property.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandForSale;
