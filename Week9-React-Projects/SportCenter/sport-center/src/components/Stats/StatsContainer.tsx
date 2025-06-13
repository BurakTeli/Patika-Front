import React from "react";
import StatBox from "./StatBox";

const statsData = [
  { value: "325", label: "Course" },
  { value: "405", label: "Work Out" },
  { value: "305", label: "Working Hour" },
  { value: "705", label: "Happy Client" },
];

const StatsContainer: React.FC = () => {
  return (
    <div className="stats-container">
      {statsData.map((item, index) => (
        <StatBox key={index} value={item.value} label={item.label} />
      ))}
    </div>
  );
};

export default StatsContainer;
