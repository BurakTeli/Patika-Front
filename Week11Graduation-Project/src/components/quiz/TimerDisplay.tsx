import React from "react";

interface TimerDisplayProps {
  timeLeft: number;
  showOptions: boolean;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ timeLeft, showOptions }) => {
  return (
    <div className="timer-display">
      <strong>
        {showOptions
          ? `Time Left: ${timeLeft}s`
          : "Answer options will appear in 4 seconds..."}
      </strong>
    </div>
  );
};

export default TimerDisplay;
