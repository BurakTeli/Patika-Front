import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import "../styles/scoreboard.css";

const ScoreBoard: React.FC = () => {
  const score = useSelector((state: RootState) => state.game.score);

  return (
    <div className="score-board">
      <h2>Score: {score}</h2>
    </div>
  );
};

export default ScoreBoard;
