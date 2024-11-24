import React from "react";
import { FaKey, FaLock, FaWallet, FaStar } from "react-icons/fa"; // Icons

const data = [
  {
    title: "Check'ins",
    value: "12",
    icon: <FaKey className="text-green-500" />,
  },
  {
    title: "Check'outs",
    value: "32",
    icon: <FaLock className="text-green-500" />,
  },
  {
    title: "Earnings",
    value: "$4,923.68",
    icon: <FaWallet className="text-green-500" />,
  },
  {
    title: "Reviews",
    value: "4.5",
    subtext: "(1400)",
    icon: <FaStar className="text-green-500" />,
  },
];

const Keys = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 bg-white dark:bg-gray-900">
      {data.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-5 flex items-center justify-between"
        >
          <div>
            <h3 className="text-gray-600 dark:text-gray-400">{item.title}</h3>
            <div className="text-2xl font-bold dark:text-white">
              {item.value}{" "}
              {item.subtext && (
                <span className="text-gray-500 text-sm">{item.subtext}</span>
              )}
            </div>
          </div>
          <div className="text-3xl">{item.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default Keys;
