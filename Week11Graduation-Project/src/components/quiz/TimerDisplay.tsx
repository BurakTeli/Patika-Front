import React from "react";
import "../../styles/components/TimerDisplay.css";

interface TimerDisplayProps {
  timeLeft: number;
  showOptions?: boolean; // optional, not used currently
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ timeLeft }) => {
  const isCritical = timeLeft <= 10; // 🔴 Critical state if time is 10s or less

  return (
    <div className="timer-display">
      {/* ⏳ Countdown number */}
      <span className={`timer-text ${isCritical ? "critical" : ""}`}>
        {timeLeft}
      </span>
    </div>
  );
};

export default TimerDisplay;
