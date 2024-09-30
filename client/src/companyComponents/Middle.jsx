import React from "react";
import weather from "../assets/m1.png";
import flight from "../assets/m2.png";
import mic from "../assets/m3.png";
import ring from "../assets/m4.png";

const Middle = () => {
  return (
    <section className="bg-gradient-to-r from-white to-[#f8f7fc] py-20 px-6 md:pl-40 md:pr-40">
      <div className="text-center mb-12">
        <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">
          Category
        </h4>
        <h2 className="text-4xl font-bold text-[#181E4B] font-serif">
          We Offer Best Services
        </h2>
      </div>

      {/* Grid for services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Service 1 */}
        <div className="text-center p-6 bg-white shadow-md rounded-lg">
          <img
            src={weather} // Replace with the actual image link
            alt="Weather Icon"
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-[#181E4B]">
            Calculated Weather
          </h3>
          <p className="text-gray-500 mt-2">
            Built Wicket longer admire do barton vanity itself do in it.
          </p>
        </div>

        {/* Service 2 */}
        <div className="text-center  bg-white shadow-md rounded-lg">
          <img
            src={flight} // Replace with the actual image link
            alt="Flight Icon"
            className="mx-auto "
          />
          <h3 className="text-xl font-semibold text-[#181E4B]">Best Flights</h3>
          <p className="text-gray-500  p-4">
            Engrossed listening. Park gate sell they west hard for the.
          </p>
        </div>

        {/* Service 3 */}
        <div className="text-center p-6 bg-white shadow-md rounded-lg">
          <img
            src={mic} // Replace with the actual image link
            alt="Event Icon"
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-[#181E4B]">Local Events</h3>
          <p className="text-gray-500 mt-2">
            Barton vanity itself do in it. Prefer to men it engrossed listening.
          </p>
        </div>

        {/* Service 4 */}
        <div className="text-center p-6 bg-white shadow-md rounded-lg">
          <img
            src={ring} // Replace with the actual image link
            alt="Customization Icon"
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-[#181E4B]">
            Customization
          </h3>
          <p className="text-gray-500 mt-2">
            We deliver outsourced aviation services for military customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Middle;
