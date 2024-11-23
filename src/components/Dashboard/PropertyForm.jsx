import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";

const PropertyForm = ({ addProperty }) => {
  const [property, setProperty] = useState({
    name: "",
    location: "",
    price: "",
    size: "",
    description: "",
  });

  const [popoverOpen, setPopoverOpen] = useState(false); // State to control popover visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prev) => ({ ...prev, [name]: value }));
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
    });
    setPopoverOpen(false); // Close the popover after saving
  };

  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" onClick={() => setPopoverOpen(true)}>
          Add Property
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-4">
        <h4 className="font-medium leading-none mb-4 text-xl">Add Property</h4>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { id: "name", label: "Property Name", type: "text", placeholder: "Enter property name" },
            { id: "location", label: "Location", type: "text", placeholder: "Enter location" },
            { id: "price", label: "Price", type: "number", placeholder: "Enter price" },
            { id: "size", label: "Size (sq. ft.)", type: "number", placeholder: "Enter size" },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id} className="grid gap-2">
              <Label htmlFor={id}>{label}</Label>
              <Input
                id={id}
                name={id}
                type={type}
                value={property[id]}
                onChange={handleChange}
                placeholder={placeholder}
                required
              />
            </div>
          ))}
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              name="description"
              value={property.description}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              placeholder="Enter description"
              required
            ></textarea>
          </div>
          <Button type="submit" variant="default">
            Save Property
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default PropertyForm;
