import React from "react";
import userImg from "../../assets/men.jpeg";
import Keys from "../DynamicComponents/Keys";

// PropertyCard Component to Render Each Property Item
const PropertyCard = ({ name, location, price, type }) => {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-md">
      <h4 className="text-lg font-semibold">{name}</h4>
      <p className="text-sm text-gray-600">{location}</p>
      <p className="text-sm text-gray-500">${price} | {type}</p>
    </div>
  );
};

// Overview Component
const Overview = ({ properties = [] }) => {
  return (
    <div className="py-20 px-3 md:px-20">
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center gap-5">
          <img
            src={userImg} // Replace with a valid image URL if required
            alt="User"
            className="h-14 w-14 rounded-full object-cover"
          />
          <div className="flex flex-col items-start gap-1">
            <h3 className="text-4xl font-semibold">Good morning!</h3>
            <p className="text-gray-400 text-sm">
              Here's an overview of your properties
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <Keys />
        {/* {properties.map((property, index) => (
          <PropertyCard
            key={index}
            name={property.name}
            location={property.location}
            price={property.price}
            type={property.type}
          />
        ))} */}
      </div>
    </div>
  );
};

export default Overview;
