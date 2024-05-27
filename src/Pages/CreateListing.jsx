import React from "react";

const CreateListing = () => {
  return (
    <main className="p-3 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold  w-96 pb-10 ">
        Create a Listing for Rent
      </h1>
      <form
        action="
      "
        className="flex md:flex-row gap-4"
      >
        <div className="flex flex-col flex-1 gap-4">
          <input
            type="text"
            placeholder="Title"
            maxLength="62"
            required
            id="title"
            className="w-[250px]  border p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Location"
            id="location"
            required
            className="w-[250px] border p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Rent"
            id="name"
            className="w-[250px] p-3  rounded-lg border"
          />
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-row items-center gap-1">
              <input
                type="number"
                min="1"
                required
                placeholder=""
                id="bedroom"
                className="p-3 border border-gray-400 rounded-lg w-16"
              />
              <span>Beds</span>
            </div>
            <div className="flex flex-row items-center gap-1 ">
              <input
                type="number"
                min="1"
                required
                placeholder=""
                id="bedroom"
                className="p-3 border border-gray-400 rounded-lg w-16"
              />
              <span>Bathroom</span>
            </div>
            <div className="flex flex-row items-center gap-1 ">
              <input
                type="number"
                min="1"
                required
                placeholder=""
                id="living "
                className="p-3 border border-gray-400 rounded-lg w-16"
              />
              <span>Hall</span>
            </div>

            <div className="flex flex-row items-center gap-1 ">
              <input
                type="number"
                min="1"
                required
                placeholder=""
                id="bedroom"
                className="p-3 border border-gray-400 rounded-lg w-16"
              />
              <span>Kitchen</span>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div>
              <input
                type="checkbox"
                id="furnished"
                placeholder="Furnished"
                className="w-5 "
              />
              <span>Furnished </span>
            </div>
            <div>
              <input
                type="checkbox"
                id="rent"
                placeholder="Furnished"
                className="w-5 "
              />
              <span>Rent </span>
            </div>
            {/* <div>
              <input
                type="checkbox"
                id="sale"
                placeholder="Furnished"
                className="w-5 "
              />
              <span>Sale </span>
            </div> */}
            <div>
              <input
                type="checkbox"
                id="Flat"
                placeholder="Furnished"
                className="w-5 "
              />
              <span>Flat </span>
            </div>
            <div>
              <input
                type="checkbox"
                id="house"
                placeholder="Furnished"
                className="w-5 "
              />
              <span>House </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold">
            Upload images
            <span className="text-sm text-gray-600 ml-2">Maximum 6 photos</span>
          </p>
          <div className="flex gap-4">
            <input
              className="p-3 border border-blue-300 rounded w-full"
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button className="mt-3 p-3 text-blue-300 border border-gray-600 rounded-lg hover:shadow-lg disabled:opacity-80 ">
              Upload
            </button>
          </div>
          <button className="p-3 bg-blue-500  text-white rounded-lg hover:opacity-95 disabled:opacity-80">
            Create the listing
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateListing;
