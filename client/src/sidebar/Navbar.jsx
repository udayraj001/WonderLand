import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Mobile from "./Mobile";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(""); // To track the active link
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  // Handle setting active link
  const handleNavigation = (link) => {
    setActiveLink(link);
  };

  const handleLogout = () =>{
    navigate('/login');
  }
  return (
    <>
      <div className="hidden md:block ">
        <nav className="w-full text-[#212832] p-4 flex items-center justify-between">
          {/* Brand Name */}
          <div className="text-3xl font-bold font-mono text-[#212832] pl-10">
            <span >Wounder</span>
            <span className="font-light">Land</span>
          </div>

          {/* Navigation Links */}
          <ul className="w-full flex space-x-6 text-sm font-semibold items-center justify-center gap-5 md:text-[#212832] pl-16">
            <li>
              <Link
                to="/"
                onClick={() => handleNavigation("Company")}
                className={`cursor-pointer ${
                  activeLink === "Company"
                    ? 'text-gray-500'
                    : "hover:text-red-500"
                }`}
              >
                Company
              </Link>
            </li>
            {/* <li>
              <Link
                to="/customer"
                onClick={() => handleNavigation("Customer")}
                className={`cursor-pointer ${
                  activeLink === "Customer"
                    ? "text-gray-500"
                    : "hover:text-red-500"
                }`}
              >
                Customer
              </Link>
            </li> */}
            <li>
              <Link
                to="/journey"
                onClick={() => handleNavigation("Journey")}
                className={`cursor-pointer ${
                  activeLink === "Journey"
                    ? "text-gray-500"
                    : "hover:text-red-500"
                }`}
              >
                Journey
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => handleNavigation("Services")}
                className={`cursor-pointer ${
                  activeLink === "Services"
                    ? "text-gray-500"
                    : "hover:text-red-500"
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact_us"
                onClick={() => handleNavigation("ContactUs")}
                className={`cursor-pointer ${
                  activeLink === "Setting"
                    ? "text-gray-500"
                    : "hover:text-red-500"
                }`}
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                onClick={() => 
                  handleNavigation("Login")}
                className={`cursor-pointer ${
                  activeLink === "Setting"
                    ? "text-gray-500"
                    : "hover:text-red-500"
                }`}
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/logout"
                onClick={() => handleNavigation("Logout")}
                className='hover:text-red-500 border border-gray-600 rounded p-2 px-5'
              >
                Sign up
              </Link>
            </li>
          </ul>

   
        </nav>
      </div>
      <div>
        <Mobile />
      </div>
    </>
  );
};

export default Navbar;
