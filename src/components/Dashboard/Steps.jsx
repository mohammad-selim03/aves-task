import React from "react";
import { PiPulse, PiWarningCircleLight } from "react-icons/pi";
import DynamicCard from "../DynamicComponents/DynamicCard";

const stepsData = [
  {
    icon: <PiWarningCircleLight />,
    progress: "40",
    bg: "bg-red-100",
    textColor: "red-500",
    text: "Set up your calendar",
  },
  {
    icon: <PiPulse />,
    progress: "75",
    bg: "bg-green-100",
    textColor: "green-600",
    text: "Increase your bookings",
  },
];

const Steps = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-5">Your next steps</h3>
      <div className="grid grid-cols-2 gap-5">
        {stepsData.map((step, index) => (
          <DynamicCard
            key={index}
            icon={step.icon}
            progress={step.progress}
            bg={step.bg}
            textColor={step.textColor}
            text={step.text}
            isStep="isStep"
          />
        ))}
      </div>
    </div>
  );
};

export default Steps;
