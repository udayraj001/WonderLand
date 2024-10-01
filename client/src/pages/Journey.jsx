import React, { useState } from "react";
import { useQuery } from "react-query";
import Navbar from "../sidebar/Navbar";
import TourPackages from "../journeyComponents/TourPackages";
import CityPackages from "../journeyComponents/CityPackages";
import NextTour from "../journeyComponents/NextTour";
import Slider from "react-slick";
import { route } from "../constant/apiUrl";

const fetchJourney = async () => {
  const result = await fetch(`${route}/Car/Journey/`);
  return result.json();
};

const Journey = () => {
  const [newJourney, setNewJourney] = useState({
    fromCity: "",
    toCity: "",
    peoples: "",
    s_time: "",
    e_time: "",
    cost: "",
    vehicleType: "",
    travelPurpose: "",
    additionalNotes: "",
  });

  const { data, status } = useQuery("Journey", fetchJourney);

  const handleInputChange = (event) => {
    setNewJourney({
      ...newJourney,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/Car/Journey/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newJourney),
    });

    if (!response.ok) {
      console.log("Error Creating Journey", response.statusText);
      return;
    }

    alert("Journey Created Successfully");
    setNewJourney({
      fromCity: "",
      toCity: "",
      peoples: "",
      s_time: "",
      e_time: "",
      cost: "",
      vehicleType: "",
      travelPurpose: "",
      additionalNotes: "",
    });
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error loading journey data...</div>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  
  return (
    <div className="">
      <div className="w-full md:pl-32 md:pr-32">
        <Navbar />
        <div className="flex flex-wrap mt-12 bg-gradient-to-l">
          {/* Left side: Input form */}
          <div className="w-full pl-10 pr-10 md:w-1/2 p-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Book Today!
            </h2>
            <p className="text-thin text-[12px] tracking-wider">
              Wonderland advisor will contact you soon to assist with your tour
              booking. We're here to make your travel plans simpler and
              hassle-free
            </p>
            <form onSubmit={handleSubmit} className="space-y-8 font-thin mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(newJourney).map(([key, value]) => (
                  <div key={key}>
                    <input
                      type={
                        key === "peoples" || key === "cost" ? "number" : "text"
                      }
                      name={key}
                      placeholder={`${key.replace(/([A-Z])/g, " $1")}*`}
                      value={value}
                      onChange={handleInputChange}
                      className="border border-black rounded w-full p-2 transition-transform duration-300 ease-in-out focus:scale-105"
                    />
                  </div>
                ))}
              </div>
              <div className="w-full flex items-center justify-center">
                <button
                  type="submit"
                  className="w-1/3 bg-yellow-500 text-white font-semibold p-2 rounded flex items-center justify-center transition-all duration-300 hover:bg-yellow-600"
                >
                  Submit Details
                </button>
              </div>
            </form>
          </div>

          {/* Right side: Display fetched journey data */}
          <div className="w-full md:w-1/2 p-4">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <h3 className="text-md font-semibold mb-2 text-gray-800">
                  Happy Guests
                </h3>
                <p className="text-lg font-bold text-gray-600">1000+</p>
              </div>
              <div className="text-center">
                <h3 className="text-md font-semibold text-gray-700">
                  Tours Completed
                </h3>
                <p className="text-lg font-bold text-gray-600">120</p>
              </div>
              <div className="text-center">
                <h3 className="text-md font-semibold text-gray-700">
                  Tour Destinations
                </h3>
                <p className="text-lg font-bold text-gray-600">100</p>
              </div>
            </div>

            <h2 className="text-md text-gray-600 font-semibold mb-4">
              Why travel with Wonderland?
            </h2>

            <Slider {...sliderSettings}>
              {data.map((journey, index) => (
                <div
                  key={journey.id}
                  className="border p-4 rounded shadow flex flex-col md:flex-row items-start transition-transform duration-300 hover:scale-105"
                >
                  <div className="w-full md:w-2/3">
                    <strong>From City:</strong> {journey.fromCity}
                    <br />
                    <strong>To City:</strong> {journey.toCity}
                    <br />
                    <strong>Peoples:</strong> {journey.peoples}
                    <br />
                    <strong>Start Time:</strong> {journey.s_time}
                    <br />
                    <strong>End Time:</strong> {journey.e_time}
                    <br />
                    <strong>Cost:</strong> {journey.cost}
                  </div>
                  
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="mt-16">
          <TourPackages />
          <CityPackages />
          <NextTour />
        </div>
      </div>
    </div>
  );
};

export default Journey;
