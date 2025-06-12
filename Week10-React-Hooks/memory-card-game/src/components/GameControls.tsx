import React from "react";
import { useDispatch } from "react-redux";
import { initGameThunk } from "../redux/gameActions";
import { AppDispatch } from "../redux/store"; 
import "../styles/controls.css";

const GameControls: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); 

  const handleRestart = () => {
    dispatch(initGameThunk());
  };

  return (
    <div className="controls-container">
      <button onClick={handleRestart}>🔄 New Game</button>
    </div>
  );
};

export default GameControls;
