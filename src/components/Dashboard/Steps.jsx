import React from "react";
import { PiPulse, PiWarningCircleLight } from "react-icons/pi";
import DynamicCard from "../DynamicComponents/DynamicCard";

const Steps = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-5">Your next steps</h3>
      <div className="grid grid-cols-2 gap-5">
        <DynamicCard
          stepsProps={"stepsProps"}
          icon={<PiWarningCircleLight />}
          progress="40"
          bg="bg-red-100"
          textColor="red-500"
          text="Set up your calender"
         
        />
        <DynamicCard
          stepsProps={"stepsProps"}
          icon={<PiPulse />}
          progress="75"
          bg="bg-green-100"
          textColor="green-600"
          text="Increase your bookings"

        />
      </div>
    </div>
  );
};

export default Steps;
