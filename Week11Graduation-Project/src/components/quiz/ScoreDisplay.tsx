import React from "react";

interface ScoreDisplayProps {
  score: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score }) => {
  return (
    <div className="score-display">
      <h3>Puan: {score}</h3>
    </div>
  );
};

export default ScoreDisplay;
