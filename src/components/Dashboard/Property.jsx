import React, { useState } from "react";
import { SelectDropdown } from "../DynamicComponents/Select";
import PropertyForm from "../DynamicComponents/PropertyForm";

export const AvailableData = ["All", "Available", "Rented"];
export const TypeData = ["All", "Apartment", "House", "Commercial"];

const Property = ({ properties, addProperty }) => {
  // Set default filter values to "All"
  const [filters, setFilters] = useState({
    type: "All", // Default to show all property types
    rentalStatus: "All", // Default to show all rental statuses
  });

  // Handle filter change
  const handleFilterChange = (name) => (value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Apply filters to the properties array
  const filteredProperties = properties.filter((property) => {
    const matchesType =
      filters.type === "All" || property.type === filters.type;
    const matchesStatus =
      filters.rentalStatus === "All" ||
      property.rentalStatus === filters.rentalStatus;
    return matchesType && matchesStatus;
  });

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
        <h3 className="text-xl font-semibold mb-5 flex items-center gap-1">
          Properties
          <span className="bg-green-600 px-2 text-white rounded-full ml-2 flex items-center">
            {filteredProperties.length}
          </span>
        </h3>
        <div className="flex flex-col-reverse sm:flex-row items-center gap-5 mb-4">
          {/* Type filter dropdown */}
          <div className="flex items-center gap-3">
            <SelectDropdown
              placeholder={"Select Type"}
              item={TypeData}
              value={filters.type}
              onChange={handleFilterChange("type")}
            />
          </div>
          {/* Rental status filter dropdown */}
          <div className="flex items-center gap-3">
            <SelectDropdown
              placeholder={"Select Rental Status"}
              item={AvailableData}
              value={filters.rentalStatus}
              onChange={handleFilterChange("rentalStatus")}
            />
          </div>
          <PropertyForm addProperty={addProperty} />
        </div>
      </div>
      {filteredProperties.length > 0 ? (
        <div className="space-y-4">
          <div className="border-2 border-gray-200 rounded-xl px-5 py-4 mb-20 flex flex-col gap-5 h-96 overflow-hidden overflow-y-scroll">
            {filteredProperties.map((property, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  {/* <p>Avatar</p> */}
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-semibold capitalize">
                      {property?.name}
                    </p>
                    <div className="flex items-center gap-2 text-gray-400 ">
                      <p className="text-xs capitalize">{property?.location}</p>{" "}
                      -
                      <p className="text-xs  capitalize">
                        {property?.rentalStatus}
                      </p>
                    </div>
                    <div className="text-purple-500 bg-purple-200 px-2 text-xs rounded-xl w-20 flex items-center justify-center">
                      <p>{property?.type}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p>${property?.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center lg:mt-10">
          <p className="text-gray-500">
            No properties match the selected filters.
          </p>
        </div>
      )}
    </div>
  );
};

export default Property;
