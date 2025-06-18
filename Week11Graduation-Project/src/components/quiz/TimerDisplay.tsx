import React from "react";
import "../../styles/components/TimerDisplay.css";

interface TimerDisplayProps {
  timeLeft: number;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ timeLeft }) => {
  const isCritical = timeLeft <= 10;

  return (
    <div className="timer-display">
      <span className={`timer-text ${isCritical ? "critical" : ""}`}>
        {timeLeft}
      </span>
    </div>
  );
};

export default TimerDisplay;
