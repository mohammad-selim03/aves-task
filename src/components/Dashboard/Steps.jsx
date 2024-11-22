import React from "react";
import DynamicCard from "./DynamicCard";
import { PiPulse, PiWarningCircleLight } from "react-icons/pi";

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
          textColor="red-600"
        />
        <DynamicCard
          stepsProps={"stepsProps"}
          icon={<PiPulse />}
          progress="75"
          bg="bg-green-100"
          textColor="green-600"

        />
      </div>
    </div>
  );
};

export default Steps;
