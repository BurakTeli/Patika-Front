import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { initGameThunk } from "./redux/gameActions";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import "./styles/app.css";
import RestartButton from "./components/RestartButton";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(initGameThunk()); // sayfa açılınca oyun başlasın
  }, [dispatch]);

  return (
    <div className="app">
      <h1>Memory Card Game</h1>
      <ScoreBoard />
      <Board />
      <RestartButton />
    </div>
  );
};

export default App;
