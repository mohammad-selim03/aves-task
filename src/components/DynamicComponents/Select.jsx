import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "../../lib/utils";

export function SelectDropdown({ placeholder, item, value, onChange, className }) {
  return (
    <Select value={value} onValueChange={onChange}> {/* Use onValueChange for handling select */}
      <SelectTrigger className={cn("w-[120px] rounded-3xl", className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="rounded-md">
        <SelectGroup>
          {item?.map((data, index) => (
            <SelectItem key={index} value={data} className="capitalize">
              {data}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
