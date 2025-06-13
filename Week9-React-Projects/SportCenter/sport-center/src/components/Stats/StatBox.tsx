import React from "react";

interface StatBoxProps {
  value: string;
  label: string;
}

const StatBox: React.FC<StatBoxProps> = ({ value, label }) => {
  return (
    <div className="stat-box">
      <h2>{value}</h2>
      <p>{label}</p>
    </div>
  );
};

export default StatBox;
