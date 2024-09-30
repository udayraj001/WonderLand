import React from "react";
import OfficeCard from "./OfficeCard";

const FindNearest = () => {
  return (
    <div className="w-full  p-8 ">
      <div className="max-w-4xl mx-auto">
        {/* Search Header */}
        <h2 className="text-2xl font-bold mb-4">
          Find the nearest Veena World
        </h2>

        {/* Search Input */}
        <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Search by country, city or pincode"
            className="p-3 w-full border border-gray-300 rounded-l-lg focus:outline-none"
          />
          <button className="bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.415l4.242 4.243-1.414 1.414-4.243-4.242zM8 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Location Filters */}
        <div className="  grid grid-cols-3 gap-4 mb-6">
          {[
            "Mumbai",
            "Pune",
            "Kolkata",
            "Bengaluru",
            "Dubai",
            "Goa",
            "Gujarat",
            "Delhi",
            "Thane",
            "Mumbai",
          ].map((city) => (
            <button
              key={city}
              className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 text-gray-700 text-sm flex items-center justify-center"
            >
              {city}
            </button>
          ))}
          <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 text-gray-700 text-sm">
            +135 more...
          </button>
        </div>

        {/* Office Listings */}
        <OfficeCard/>
      </div>
    </div>
  );
};

export default FindNearest;
