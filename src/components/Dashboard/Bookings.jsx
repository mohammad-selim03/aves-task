import React from "react";
import furnitureImg from "../../assets/furnitures.jpg";

const Bookings = () => {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold">New Bookings <span className="bg-green-600 px-2 text-white rounded-full">3</span></h3>
      <div className="border-2 border-gray-300 px-5 py-3 rounded-xl mt-3 text-gray-900">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-5">
            <p>
              <img
                src={furnitureImg}
                alt="furnitureImg"
                className="w-10 h-10 rounded-full object-cover"
              />
            </p>
            <p>196 kansas Aven...</p>
            <p>24.08-1.09</p>
            <p>7 Days</p>
            <p>$2178.78</p>
          </div>
          <div className="flex items-center justify-between gap-5">
            <p>
              <img
                src={furnitureImg}
                alt="furnitureImg"
                className="w-10 h-10 rounded-full object-cover"
              />
            </p>
            <p>196 kansas Aven...</p>
            <p>24.08-1.09</p>
            <p>7 Days</p>
            <p>$2178.78</p>
          </div>
          <div className="flex items-center justify-between gap-5">
            <p>
              <img
                src={furnitureImg}
                alt="furnitureImg"
                className="w-10 h-10 rounded-full object-cover"
              />
            </p>
            <p>196 kansas Aven...</p>
            <p>24.08-1.09</p>
            <p>7 Days</p>
            <p>$2178.78</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
