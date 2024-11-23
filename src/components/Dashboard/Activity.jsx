import React from "react";

const Activity = ({ properties }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-5">
        Properties
        <span className="bg-green-600 px-2 text-white rounded-full">
          {properties.length}
        </span>
      </h3>
      {properties.length > 0 ? (
        <div className="space-y-4">
          {properties.map((property, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-xl px-5 py-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <p>Avatar</p>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-semibold">{property.name}</p>
                    <div className="flex items-center gap-3">
                      <p className="text-xs text-gray-400">{property.location}</p>
                    </div>
                    <p className="text-purple-500 bg-purple-200 px-2 rounded-xl w-20">
                      Property
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p>${property.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No new properties added yet.</p>
      )}
    </div>
  );
};

export default Activity;
