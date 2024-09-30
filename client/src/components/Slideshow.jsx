import React, { useState, useEffect } from "react";

const Slideshow = () => {
  const images = [
    {
      src: "https://i.pinimg.com/564x/4f/fe/c9/4ffec9aa1238427834953489fa5c5c48.jpg",
      text: "> You Cant Hide What You Are",
    },
    {
      src: "https://i.pinimg.com/564x/4b/4a/ce/4b4acefcae0136ab94020db3c62e232c.jpg",
      text: "> Fly like Last Ride",
    },
    {
      src: "https://speckyboy.com/wp-content/uploads/2020/11/high-resolution-4k-desktop-wallpaper-13.jpg",
      text: "> Be your own traveller",
    },
    {
      src: "https://i.pinimg.com/originals/e4/68/69/e468699dcf8c238f38f92e2d4fe95372.jpg",
      text: "> Be your own traveller",
    },
    {
      src: "https://64.media.tumblr.com/cf8e807e2653b6d752de8d29bff2efe4/c47f732917abe603-a4/s1280x1920/6f10edaaf5ae08868b49aab727258c0065a517af.jpg",
      text: "> Be your own traveller",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-96">
      {/* Image Display */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Text on Image (Bottom Left) */}
          <div className="absolute bottom-4 left-4">
            <h1 className="text-2xl text-white font-bold pb-2">{image.text}</h1>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-red-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
