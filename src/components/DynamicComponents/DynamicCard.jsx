import React from "react";

const DynamicCard = ({ isStep, icon, bg, textColor, text, progress }) => {
  const progressWidth = progress ? `${progress}%` : "0%"; // Default to 0% if no progress is provided

  return (
    <div className="border-2 border-gray-200 rounded-xl px-5 py-5">
      {isStep ? (
        <div className="flex flex-col gap-5">
          <div className="w-10">
            <p
              className={`${bg} text-${textColor} font-bold p-2 rounded-full flex items-center justify-center`}
            >
              {icon}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p>{text}</p>
            <div className="flex items-center gap-3 w-1/2">
              <div className="w-full bg-gray-100 rounded-full h-2.5 dark:bg-gray-200">
                <div
                  className={`bg-${textColor.split("-")[0]}-${textColor.split("-")[1]} h-2.5 rounded-full`}
                  style={{ width: progressWidth }}
                ></div>
              </div>
              <span>{progress}/100</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Check-ins</p>
          <p>{icon}</p>
        </div>
      )}
    </div>
  );
};

export default DynamicCard;
