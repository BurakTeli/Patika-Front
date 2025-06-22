import React, { useEffect, useState } from "react";
import "../../styles/components/ScoreDisplay.css";

interface ScoreDisplayProps {
  score: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score }) => {
  const [animate, setAnimate] = useState(false);

  // ✨ Trigger animation on score change
  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 600);
    return () => clearTimeout(timeout);
  }, [score]);

  return (
    <div className={`score-box ${animate ? "score-animate" : ""}`}>
      Score: {score}
    </div>
  );
};

export default ScoreDisplay;
