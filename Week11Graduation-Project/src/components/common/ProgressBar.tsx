// src/components/common/ProgressBar.tsx
import React from "react";
import "../../styles/components/ProgressBar.css";

interface ProgressBarProps {
  current: number; // Current question index
  total: number; // Total number of questions
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className="progress-container">
      <div className="progress-filled" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
