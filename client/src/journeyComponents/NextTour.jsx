import React from "react";
import y from "../assets/y.png";
import r from "../assets/r.png";
import g from "../assets/g.png";
import image from '../assets/right.png';

const NextTour = () => {
  return (
    <div className="w-full mt-7 pl-3 pr-3 md:flex md:flex-row md:pl-28 md:pr-28">
      {/* Left */}
      <div className="w-full flex flex-col items-center justify-center">
        {/* Up */}
        <div>
          <h1 className="font-serif text-3xl md:text-4xl ">Book Your Next Trip</h1>
          <h1 className="font-serif text-3xl flex items-center justify-center md:text-4xl">
            In 3 Easy Steps
          </h1>
        </div>
        {/* Down */}
        <div className="mt-10 space-y-6">
          {/* First */}
          <div className="w-full flex flex-row items-center justify-center gap-4 ">
            <div className="pl-5">
              <img src={y} />
            </div>
            <div className="w-full flex flex-col items-start justify-center">
              <h1 className="text-[#5E6282] text-sm font-semibold">
                Choose Destination
              </h1>
              <p className="text-xs">
                Discover breathtaking destinations for unforgettable adventures
                and enriching travel experiences
              </p>
            </div>
          </div>
          {/* Second */}
          <div className="w-full flex flex-row items-center justify-center gap-4 ">
            <div className="pl-5">
              <img src={r} />
            </div>
            <div className="w-full flex flex-col items-start justify-center">
              <h1 className="text-[#5E6282] text-sm font-semibold">
                Make A Payment
              </h1>
              <p className="text-xs">
                Finalize your payment securely, quickly, and with complete peace
                of mind.
              </p>
            </div>
          </div>
          {/* Third */}
          <div className="w-full flex flex-row items-center justify-center gap-4 ">
            <div className="pl-5">
              <img src={g} />
            </div>
            <div className="w-full flex flex-col items-start justify-center">
              <h1 className="text-[#5E6282] text-sm font-semibold">
                Reach Airport
              </h1>
              <p className="text-xs">
                Make sure to arrive at the airport early for a smooth travel
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right */}
 
        <div className=" w-full flex items-center justify-center">
        <img src={image} />
        </div>
      
    </div>
  );
};

export default NextTour;
