import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineShare } from "react-icons/md";

const OfficeCard = () => {
  return (
    <div className="space-y-2 md:flex md:space-x-2">
    <div className="max-w-sm mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold">Ahmedabad</h2>
          <p className="text-green-600 font-semibold">OPEN</p>
        </div>
        <div className="flex items-center space-x-2">
          <MdOutlineShare className="text-gray-500 cursor-pointer" size={24} />
          <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">
            Sales Office
          </span>
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-2">
        4, Anam 1, Commercial Co. Op. Service Society Ltd, Opp. Parimal Garden,
        Ambawadi, Ahmedabad 380006 Gujarat
      </p>

      <div className="flex items-center mt-3">
        <FiPhoneCall className="text-green-600" size={18} />
        <a
          href="tel:+918879977200"
          className="ml-2 text-blue-600 font-bold text-sm"
        >
          +91 8459686970
        </a>
        <span className="ml-2 text-sm text-gray-600">FOREX Available</span>
      </div>

      <div className="flex mt-4 space-x-2">
        <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md">
          Directions
        </button>
        <button className="flex-1 bg-yellow-500 text-white py-2 px-4 rounded-md">
          Office Details
        </button>
      </div>
    </div>

<div className="max-w-sm mx-auto p-4 bg-white shadow-md rounded-lg">
<div className="flex justify-between items-start">
  <div>
    <h2 className="text-xl font-bold">Pune</h2>
    <p className="text-green-600 font-semibold">OPEN</p>
  </div>
  <div className="flex items-center space-x-2">
    <MdOutlineShare className="text-gray-500 cursor-pointer" size={24} />
    <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">
      Sales Office
    </span>
  </div>
</div>

<p className="text-sm text-gray-600 mt-2">
  1, Hill 1, Commercial Co.  Beside. Social Garden,
  Ambawadi, Vishrantwadi 380006 Pune
</p>

<div className="flex items-center mt-3">
  <FiPhoneCall className="text-green-600" size={18} />
  <a
    href="tel:+918879977200"
    className="ml-2 text-blue-600 font-bold text-sm"
  >
    +91 5055565788
  </a>
  <span className="ml-2 text-sm text-gray-600">FOREX Available</span>
</div>

<div className="flex mt-4 space-x-2">
  <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md">
    Directions
  </button>
  <button className="flex-1 bg-yellow-500 text-white py-2 px-4 rounded-md">
    Office Details
  </button>
</div>
</div>


</div>
  );
};

export default OfficeCard;
