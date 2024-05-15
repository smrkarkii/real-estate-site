import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaBed } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";
import { properties } from "../Data/Properties";

const Properties = () => {
  return (
    <div>
      <div className=" h-64 mt-32 md:mt-0 pt-5" id="propertiesbyarea">
        <h1 className="font-bold text-2xl text-black text-center pt-[100px]">
          Properties by Area
        </h1>

        <p className="text-black font-extralight text-sm text-center w-[60%] mx-auto pt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          nostrum voluptatem minima laborum repudiandae, veniam corporis
          dignissimos obcaecati numquam, quia enim similique modi repellat quasi
          doloremque magni sit aperiam sunt!
        </p>
      </div>

      <Swiper
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {properties.map((property, index) => (
          <SwiperSlide key={index}>
            <div className="relative shadow-lg shadow-blue-400 w-96 h-80 flex flex-col pt-5 pl-5 mb-5 mx-auto ">
              <img
                className="relative backdrop-filter w-72 h-40"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxdv6CRGoKZOzMaBZjpQIYReVKBAIdie59ZRdDSoDHiA&s"
                alt=""
              />
              <div className="bg-blue-800 absolute top-5 left-5 h-40 w-72 opacity-25"></div>
              <div className="mt-5">{property.title}</div>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Properties;
