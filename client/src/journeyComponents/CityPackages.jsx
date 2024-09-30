import React, { useState } from 'react';

const reviews = [
  {
    id: 1,
    title: "Women's Special Sri Lanka",
    content: "Hello WonderLand Namaste... Thanks for the lovely time...",
    name: "Riya",
    date: "Travelled in Sep, 2024",
    image: "https://i.pinimg.com/474x/36/f0/c6/36f0c69fccfd2113b617c371f0969dfe.jpg",
  },
  {
    id: 2,
    title: "Winter's Special USA",
    content: "Hello Wonderland and Namaste... thank you for this golden time...",
    name: "Vihan",
    date: "Travelled in MAR, 2023",
    image: "https://i.pinimg.com/474x/0c/6f/39/0c6f39dac4d7f30139a7d61ee28a2ef5.jpg",
  },
  {
    id: 3,
    title: "Women's Special Sri Lanka",
    content: "Hello Wonderland Namaste... Thanks a lot for this beautiful journey with you...",
    name: "Shiv",
    date: "Travelled in Sep, 2022",
    image: "https://i.pinimg.com/474x/7e/96/83/7e96833e2becc48ea62f41c1b63af465.jpg",
  },
];

const CityPackages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);

  const nextReview = () => {
    setIsZooming(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      setIsZooming(false);
    }, 300); // Match with transition duration
  };

  const prevReview = () => {
    setIsZooming(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
      );
      setIsZooming(false);
    }, 300); // Match with transition duration
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-600">
        WonderLand Tour Reviews
      </h1>
      <p className="text-lg text-center mb-12">
        What are you waiting for? Chalo Bag Bharo Nikal Padal!
      </p>

      <div className="relative flex justify-center items-center">
        <div
          className={`bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 ease-in-out transform ${
            isZooming ? 'scale-90' : 'scale-100'
          }`}
        >
          <h2 className="text-xl font-bold mb-4">{reviews[currentIndex].title}</h2>
          <p className="text-gray-700 mb-4">{reviews[currentIndex].content}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src={reviews[currentIndex].image}
                alt={reviews[currentIndex].name}
                className="w-12 h-12 rounded-full border-2 border-gray-300"
              />
              <p className="ml-2 font-semibold">{reviews[currentIndex].name}</p>
            </div>
            <p className="text-gray-500 italic">{reviews[currentIndex].date}</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute left-0 z-10 p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none transform transition-transform duration-200 ease-in-out hover:scale-110"
          onClick={prevReview}
        >
          &#8249;
        </button>
        <button
          className="absolute right-0 z-10 p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none transform transition-transform duration-200 ease-in-out hover:scale-110"
          onClick={nextReview}
        >
          &#8250;
        </button>
      </div>

      <div className="text-center mt-8">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
          Read More Reviews
        </button>
      </div>
    </div>
  );
};

export default CityPackages;
