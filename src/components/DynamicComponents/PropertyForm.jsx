import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { SelectDropdown } from "./Select";

export const AvailableData = ["All", "Available", "Rented"];
export const TypeData = ["All", "Apartment", "House", "Commercial"];

const PropertyForm = ({ addProperty }) => {
  const [property, setProperty] = useState({
    name: "",
    location: "",
    price: "",
    size: "",
    description: "",
    type: "Apartment", // Default value for property type
    rentalStatus: "Available", // Default value for rental status
  });

  const [popoverOpen, setPopoverOpen] = useState(false); // State to control popover visibility

  const handleChange = (field) => (e) => {
    const value = e.target ? e.target.value : e; // Handle both input and dropdown changes
    setProperty((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProperty(property); // Call parent's `addProperty` function
    toast.success("Property saved successfully!");
    setProperty({
      name: "",
      location: "",
      price: "",
      size: "",
      description: "",
      type: "Apartment", // Reset to default
      rentalStatus: "Available", // Reset to default
    });
    setPopoverOpen(false); // Close the popover after saving
  };

  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          onClick={() => setPopoverOpen(true)}
          className="py-3 bg-green-600 text-white rounded-3xl"
        >
          Add Property
        </Button>
      </PopoverTrigger>
      {popoverOpen && (
        <PopoverContent className="w-96 p-4 fixed -top-80 md:top-1/2 left-0 md:-left-80 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-green-100 shadow-lg dark:shadow-md rounded-lg z-50">
          <h4 className="font-medium leading-none mb-4 text-xl">
            Add Property
          </h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              {
                id: "name",
                label: "Property Name",
                type: "text",
                placeholder: "Enter property name",
              },
              {
                id: "location",
                label: "Location",
                type: "text",
                placeholder: "Enter location",
              },
              {
                id: "price",
                label: "Price",
                type: "number",
                placeholder: "Enter price",
              },
              {
                id: "size",
                label: "Size (sq. ft.)",
                type: "number",
                placeholder: "Enter size",
              },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id} className="grid gap-2">
                <Label htmlFor={id}>{label}</Label>
                <Input
                  id={id}
                  name={id}
                  type={type}
                  value={property[id]} // Bind the value correctly
                  onChange={handleChange(id)} // Pass the field name
                  placeholder={placeholder}
                  required
                />
              </div>
            ))}
            <div className="grid gap-2">
              <Label htmlFor="type">Property Type</Label>
              <SelectDropdown
                placeholder={"Select Property Type"}
                item={TypeData}
                value={property.type} // Correctly bind the value
                onChange={handleChange("type")} // Pass the correct field name
                className="w-full"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="rentalStatus">Rental Status</Label>
              <SelectDropdown
                placeholder={"Select Rental Status"}
                item={AvailableData}
                value={property.rentalStatus} // Correctly bind the value
                onChange={handleChange("rentalStatus")} // Pass the correct field name
                className="w-full"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                name="description"
                value={property.description} // Bind the value correctly
                onChange={handleChange("description")} // Pass the correct field name
                className="border rounded px-3 py-2 w-full dark:bg-black dark:text-white"
                placeholder="Enter description"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <Button
                type="submit"
                variant="default"
                className="px-5 rounded-xl bg-green-600 text-white"
              >
                Add
              </Button>
            </div>
          </form>
        </PopoverContent>
      )}
    </Popover>
  );
};

export default PropertyForm;
