import React from "react";
import DynamicCard from "./DynamicCard";
import { IoIosArrowDown } from "react-icons/io";
import userImg from "../../assets/men.jpeg";

const Overview = () => {
  return (
    <div className="py-20 px-20">
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center gap-5">
          <p>
            {" "}
            <span>
              <img
                src={userImg}
                alt="user img"
                className="h-14 w-14 rounded-full object-cover"
              />
            </span>
          </p>
          <div className="flex flex-col items-start gap-1">
            <h3 className="text-4xl font-semibold">Good morning!</h3>
            <p className="text-gray-400 text-sm">
              Here's an overview of your properties
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <button className="bg-white border border-gray-400 rounded-3xl px-3 py-1.5 flex items-center gap-2 font-semibold text-gray-800">
            Last month <IoIosArrowDown />
          </button>
          <button className="bg-green-600 px-3 py-1.5 rounded-3xl w-32 font-semibold text-white">
            Analytics
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5">
        <DynamicCard />
        <DynamicCard />
        <DynamicCard />
        <DynamicCard />
      </div>
    </div>
  );
};

export default Overview;
