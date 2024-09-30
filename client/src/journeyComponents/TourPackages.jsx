import React from 'react';
import Slider from 'react-slick';

const TourPackages = () => {
  const packages = [
    {
      id: 1,
      image: 'https://i.pinimg.com/474x/11/75/3a/11753a282bbfc8e8e9283294e3a2dae2.jpg',
      price: '₹1,03,000',
      days: '4 Days',
      departure: '18 Sept.',
      title: 'Best of Singapore',
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/474x/15/25/02/152502b64f520bdca0f57deaa9273f98.jpg',
      price: '₹1,16,000',
      days: '8 Days',
      departure: '11 Sept.',
      title: 'Bangkok Pattaya Phuket',
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/474x/a9/61/06/a961064851850c62d712bfcdfcf4ef4d.jpg',
      price: '₹1,25,000',
      days: '7 Days',
      departure: '10 Sept.',
      title: 'Best of Bali',
    },
    {
      id: 4,
      image: 'https://i.pinimg.com/564x/bc/e5/c5/bce5c5f47f734a87ea48ed435fa54a8b.jpg',
      price: '₹1,03,000',
      days: '4 Days',
      departure: '18 Sept.',
      title: 'Best of IceLand',
    },
    {
      id: 5,
      image: 'https://i.pinimg.com/474x/fa/95/98/fa95986f2c408098531ca7cc78aee3a4.jpg',
      price: '₹1,16,000',
      days: '8 Days',
      departure: '11 Sept.',
      title: 'Bangkok Pattaya Phuket',
    },
    {
      id: 6,
      image: 'https://i.pinimg.com/474x/93/9d/97/939d97a7eca437d265ea0d4a23348b86.jpg',
      price: '₹1,25,000',
      days: '7 Days',
      departure: '10 Sept.',
      title: 'Nepal',
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-8 md:pl-28 md:pr-28">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-600">
        Explore Our Tour Packages
      </h1>
      <Slider {...settings}>
        {packages.map((pkg) => (
          <div key={pkg.id} className="px-2">
            <div className="bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-2 left-2 bg-white text-black font-semibold px-2 py-1 rounded">
                  {pkg.price}
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">{pkg.days} | {pkg.departure}</p>
                <h3 className="text-md font-semibold mt-2">{pkg.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TourPackages;
