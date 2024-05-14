import React from "react";

const Search = () => {
  return (
    <div className="bg-white w-[700px] mt-[-30px] mx-auto rounded pl-10 pt-5 flex flex-col md:flex-row justify-left gap-5 h-24 border-[#4b60a1]">
      <div className="flex flex-col">
        <h1 className="text-[#4b60a1] font-bold">Locations</h1>
        <input
          name="location"
          className="pt-3 font-extralight text-gray-400 w-40  focus:outline-none"
          value="Select Location "
          type="options"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-[#4b60a1] font-bold">Property Type</h1>
        <input
          name="location"
          className="pt-3 font-extralight text-gray-400 w-40  focus:outline-none"
          value="Select Property Type "
          type="options"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-[#4b60a1] font-bold">Rent Range</h1>
        <input
          name="location"
          className="pt-3 font-extralight text-gray-400 w-40  focus:outline-none"
          value="Select Rent Range "
          type="options"
        />
      </div>
      <button className="bg-[#4b60a1] rounded text-white w-24 h-9 mt-5 ">
        Search
      </button>
    </div>
  );
};

export default Search;
