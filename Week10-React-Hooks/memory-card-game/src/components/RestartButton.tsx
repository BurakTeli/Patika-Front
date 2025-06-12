import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { initGameThunk } from "../redux/gameActions";
import "../styles/restart.css";

const RestartButton: React.FC = () => {
  const isGameFinished = useSelector((state: RootState) => state.game.isGameFinished);
  const dispatch = useDispatch<AppDispatch>();

  const handleRestart = () => {
    dispatch(initGameThunk());
  };

  if (!isGameFinished) return null;

  return (
    <div className="restart-container">
      <button className="restart-button" onClick={handleRestart}>
        🔁 Play Again
      </button>
    </div>
  );
};

export default RestartButton;
