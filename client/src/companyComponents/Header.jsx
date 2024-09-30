import React from "react";
import { useNavigate } from "react-router-dom";
import traveller from "../assets/Traveller.png";
import plane from "../assets/plane.png";

const Header = () => {
    const navigate = useNavigate();
  return (
    <section className="w-full bg-gradient-to-r from-white to-[#fae3d9] flex items-center justify-between px-8 py-14 md:pl-40 md:pr-40">
      {/* Left Text Section */}
      <div className="w-full">
        <h4 className="text-orange-500 text-sm font-semibold mb-4">
          BEST DESTINATIONS AROUND THE WORLD
        </h4>
        <h1 className="text-5xl font-bold text-[#181E4B] leading-tight mb-6 font-Volkhov">
          Travel, enjoy
          <br />
          and live a new
          <br />
          <span className="relative inline-block">
            and full life
            <span className="absolute inset-x-0 bottom-0 h-2 bg-orange-500 -z-10"></span>
          </span>
        </h1>
        <p className="text-gray-500 mb-8">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-yellow-500 text-white font-semibold py-3 px-6 rounded" onClick={()=> navigate('/journey')}>
            Book Now
          </button>
          <button className="flex items-center gap-2 text-gray-500 font-semibold">
            <span className="bg-red-500 text-white rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-5.197-2.878c-.689-.383-1.555.084-1.555.89v5.756c0 .806.866 1.273 1.555.89l5.197-2.878a1 1 0 000-1.78z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 19.938A7.938 7.938 0 1012 4.062a7.938 7.938 0 000 15.876z"
                />
              </svg>
            </span>
            Play Demo
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative hidden md:block">
        <img
          src={traveller} // Replace with the actual image URL
          alt="Traveler"
          className="h-auto max-w-md"
        />
        {/* Small planes flying */}
        <img
          src={plane} // Replace with the plane image URL
          alt="Plane"
          className="absolute top-0 right-20 w-12 animate-bounce"
        />
      </div>
    </section>
  );
};

export default Header;
