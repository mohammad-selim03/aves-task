import React from "react";
import userImg from "../../assets/men.jpeg";

const Overview = ({ properties = [] }) => {
  return (
    <div className="py-20 px-3 md:px-20">
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center gap-5">
          <p>
            <img
              src={userImg} // Replace with a valid image URL if required
              alt="User"
              className="h-14 w-14 rounded-full object-cover"
            />
          </p>
          <div className="flex flex-col items-start gap-1">
            <h3 className="text-4xl font-semibold">Good morning!</h3>
            <p className="text-gray-400 text-sm">
              Here's an overview of your properties
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {properties.map((property, index) => (
        <div
          key={index}
          className="border rounded-xl p-4 shadow hover:shadow-md"
        >
          <h4 className="text-lg font-semibold">{property.name}</h4>
          <p className="text-sm text-gray-600">{property.location}</p>
          <p className="text-sm text-gray-500">
            ${property.price} | {property.type}
          </p>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
