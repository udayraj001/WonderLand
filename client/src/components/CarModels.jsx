import React from 'react';

const CarModels = () => {
  // Example data for car models
  const cars = [
    { id: 1, name: 'Fortuner', image: 'https://i.pinimg.com/736x/5c/56/06/5c56063843366ee4ba52e3d15b33a01f.jpg' },
    { id: 2, name: 'Defender', image: 'https://i.pinimg.com/564x/5f/ba/7a/5fba7a3b245ced917793295d7d0486e0.jpg' },
    { id: 3, name: 'Polo', image: 'https://i.pinimg.com/736x/f9/f7/b8/f9f7b8f440c8d5ded16c088ad77d1bf4.jpg' },
    { id: 4, name: 'Mustang GT', image: 'https://i.pinimg.com/564x/f2/7a/6d/f27a6d83e0a37e4022bb12912c532a0f.jpg' },
    { id: 5, name: 'Truck', image: 'https://i.pinimg.com/564x/e5/e1/b3/e5e1b35ebe410c6b573797d2d516e31b.jpg' },
    { id: 6, name: 'Coupe', image: 'https://i.pinimg.com/564x/8f/ce/68/8fce6828c5362f85f31059f7a5851a6b.jpg' },
  ];

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="mt-10 mb-5 ml-3 font-thin text-xl">Choose Your Car</h1>
      </div>
      
      {/* Grid layout for images */}
      <div className="grid grid-cols-2 gap-5">
        {cars.map((car) => (
          <div key={car.id} className="relative group">
            <img 
              src={car.image} 
              alt={car.name} 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            {/* Text overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">{`> ${car.name}`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarModels;
