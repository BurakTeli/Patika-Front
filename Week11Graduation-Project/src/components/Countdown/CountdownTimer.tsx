import React, { useEffect, useState } from "react";
import "../../styles/components/CountdownTimer.css";

interface CountdownTimerProps {
  duration: number;
  onTimeout: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ duration, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeout();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onTimeout]);

  return (
    <div className="countdown-wrapper">
      <p className={`countdown-timer ${timeLeft <= 10 ? "danger" : ""}`}>
        {timeLeft}
      </p>
    </div>
  );
};

export default CountdownTimer;
