import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu
  const [activeButton, setActiveButton] = useState(""); // State to track active section
  const navigate = useNavigate(); // For navigation

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle button click
  const handleClick = (section) => {
    setActiveButton(section); // Set active section
    navigate(`/${section.toLowerCase()}`); // Navigate to the selected page
  };

  return (
    <div className="md:hidden">
      {/* Mobile View */}
      <div className="w-full  flex items-center justify-between p-2 relative">
        <div className="ml-1">
          <h2 className="text-3xl font-mono">
            <span className="font-bold">Wounder</span>
            <span className="font-normal">Land</span>
          </h2>
        </div>

        <div onClick={toggleMenu}>
          {/* Hamburger Button */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-12 right-0 w-48 bg-gray-200/30 rounded-lg shadow-lg z-50 p-4 backdrop-blur-lg bg-[url('https://path-to-rainy-background-image.jpg')] bg-cover bg-center">
            <button
              onClick={() => handleClick("Company")}
              className={`block w-full text-left p-2 rounded ${
                activeButton === "Company"
                  ? "text-red-500"
                  : "hover:bg-gray-200"
              }`}
            >
              Company
            </button>
            
            <button
              onClick={() => handleClick("Journey")}
              className={`block w-full text-left p-2 rounded ${
                activeButton === "Journey"
                  ? "text-red-500"
                  : "hover:bg-gray-200"
              }`}
            >
              Journey
            </button>
            <button
              onClick={() => handleClick("Services")}
              className={`block w-full text-left p-2 rounded ${
                activeButton === "Services"
                  ? "text-red-500"
                  : "hover:bg-gray-200"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleClick("Contact Us")}
              className={`block w-full text-left p-2 rounded ${
                activeButton === "Setting"
                  ? "text-red-500"
                  : "hover:bg-gray-200"
              }`}
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mobile;
