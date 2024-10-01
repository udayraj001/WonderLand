import React, { useEffect, useState } from "react";
import axios from "axios";
import { companyUrl, route } from "../constant/apiUrl";

const CompanyCard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch company data from the backend
    axios
      .get(`${companyUrl}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#f3f4f6] to-[#ffffff] py-10 px-5 md:pl-48 md:pr-48">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-500">
        Who Are We{" "}
      </h2>
      <div className="flex flex-col lg:flex-row w-full ">
        <div>
          {data ? (
            data.map((item, index) => (
              <div
                key={index}
                className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-6"
              >
                <div className="p-6">
                  
                  <p className="text-lg font-medium text-gray-600">
                    Name: {item.cName}
                  </p>
                  <h3 className="text-lg text-gray-600">
                    Email: {item.emailAddress}
                  </h3>
                  <p className="text-lg text-gray-600">Phone: {item.phone}</p>
                  <p className="text-lg text-gray-600">
                    Address: {item.address}
                  </p>
                  <p className="text-lg text-gray-600">GST No: {item.gst_no}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full flex items-center justify-center">
              <p className="text-3xl text-gray-500">Loading...</p>
            </div>
          )}
        </div>

        <div className="bg-white lg:w-2/3 p-8 text-gray-500">
         
          <p>
            Our vision is to expand our services globally and become a leader in
            the travel industry. By 2025, we aim to operate in over 50
            countries, offering personalized tour packages and experiences to
            travelers worldwide.
          </p>
          <p className="mt-4">
            We are committed to sustainable tourism and plan to launch
            eco-friendly travel options in the coming years. Join us on this
            journey as we redefine travel!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
