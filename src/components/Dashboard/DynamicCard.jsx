import React from "react";

const DynamicCard = ({ stepsProps, icon, bg, textColor }) => {
  return (
    <div>
      {stepsProps ? (
        <div className="border-2 border-gray-200 rounded-xl px-5 py-5">
          <div className="flex flex-col gap-5">
            <div className="w-10">
              <p
                className={`${bg} ${textColor} font-bold p-2 rounded-full flex items-center justify-center`}
              >
                {icon}
              </p>
            </div>{" "}
            <div>
              <p>Set up your calender</p>

              <div class="w-full bg-gray-50 rounded-full h-2.5 dark:bg-gray-200">
                <div
                  className={`bg-${textColor} h-2.5 rounded-full`}
                  style={{width: "75%"}}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="border-2 border-gray-200 rounded-xl px-5 py-5">
          <div>
            <div className="flex items-center justify-between">
              <p className="text-gray-600">Check'ins</p>
              <p>icon</p>
            </div>
            <div>
              {" "}
              <h3 className="text-xl font-semibold mt-3">12</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicCard;
