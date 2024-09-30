import React from 'react';

const TopDestinations = () => {
  return (
    <div className="bg-gradient-to-br from-[#f3f4f6] to-[#ffffff] py-16">
      <div className="text-center mb-10">
        <h3 className="text-lg text-gray-600 font-medium">Top Selling</h3>
        <h1 className="text-4xl font-bold text-gray-800">Top Destinations</h1>
      </div>
      
      <div className=" md:flex md:justify-center space-x-8  ">
        {/* Card 1: Rome, Italy */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64 ml-8">
          <img
            className="w-full h-60 object-cover"
            src="https://i.pinimg.com/474x/d2/67/9a/d2679acde0ca6b3e08be5e4fecf69dec.jpg"
            alt="Rome, Italy"
          />
          <div className="p-5">
            <h2 className="text-md font-semibold text-[#5E6282]">Rome, Italy</h2>
            <p className="text-gray-600 mt-1">$5.42k</p>
            <p className="text-sm text-gray-500 mt-3 flex items-center">
              <span className="material-icons text-sm"></span> 10 Days Trip
            </p>
          </div>
        </div>

        {/* Card 2: London, UK */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64">
          <img
            className="w-full h-60 object-cover"
            src="https://i.pinimg.com/474x/71/9f/e6/719fe65137cc459bf00924f486cb0c1a.jpg"
            alt="London, UK"
          />
          <div className="p-5">
            <h2 className="text-md font-semibold text-[#5E6282]">London, UK</h2>
            <p className="text-gray-600 mt-1">$4.2k</p>
            <p className="text-sm text-gray-500 mt-3 flex items-center">
              <span className="material-icons text-sm"></span> 12 Days Trip
            </p>
          </div>
        </div>

        {/* Card 3: Full Europe */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64">
          <img
            className="w-full h-60 object-cover"
            src="https://i.pinimg.com/474x/17/48/34/17483424206f5b8f1b2380de59033395.jpg"
            alt="Full Europe"
          />
          <div className="p-5">
            <h2 className="text-md font-semibold text-[#5E6282]">Full Europe</h2>
            <p className="text-gray-600 mt-1">$15k</p>
            <p className="text-sm text-gray-500 mt-3 flex items-center">
              <span className="material-icons text-sm"></span> 28 Days Trip
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDestinations;
