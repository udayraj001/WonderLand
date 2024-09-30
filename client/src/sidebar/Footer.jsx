import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16 bg-white text-gray-700 py-10 px-6 relative overflow-hidden md:mt-20 bg-gradient-to-r from-white to-[#fae3d9] ">
      {/* Left Section: Logo and Tagline */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:pl-36 
       md:flex md:flex-rows md:gap-4">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold text-indigo-900">WonderLand</h1>
          <p className="text-xs text-gray-500 mt-4">
            Book your trip in minutes, get full
          </p>
          <p className="text-xs text-gray-500 "> control for much longer.</p>
        </div>

        {/* Middle Sections: Links */}
        <div className="grid grid-cols-3 gap-4 md:pl-36">
          <div>
            <h2 className="font-bold text-gray-800 mb-3">Company</h2>
            <ul className="text-sm  space-y-2  text-[#5E6282] font-semibold">
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-gray-800 mb-3">Contact</h2>
            <ul className="text-sm space-y-2 text-[#5E6282] font-semibold">
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affiliates</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-gray-800 mb-3">More</h2>
            <ul className="text-sm space-y-2 text-[#5E6282] font-semibold">
              <li>Airlinefees</li>
              <li>Airline</li>
              <li>Low fare tips</li>
            </ul>
          </div>
        </div>

        {/* Right Section: Social Icons and App Store Links */}
        <div className="md:col-span-2 flex flex-col items-center md:items-end md:pl-28 ">
          <div className="flex space-x-4 text-gray-600 text-2xl">
            <FaFacebookF className="hover:text-indigo-600" />
            <FaInstagram className="hover:text-indigo-600" />
            <FaTwitter className="hover:text-indigo-600" />
          </div>
          <p className="text-sm mt-2 pr-2 text-[#5E6282] font-semibold">Find Me Here</p>
          
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-16 text-center text-[#5E6282] font-semibold text-xs">
        All rights reserved @wonderland.co
      </div>
    </footer>
  );
};

export default Footer;
