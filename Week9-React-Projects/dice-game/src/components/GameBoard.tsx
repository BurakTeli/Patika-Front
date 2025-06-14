import React, { useState } from "react";
import Dice from "./Dice";
import PlayerName from "./PlayerName";
import RollButton from "./RollButton";
import ResultMessage from "./ResultMessage";
import "../styles/GameBoard.css";

const GameBoard: React.FC = () => {
  const [playerName, setPlayerName] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [playerRoll, setPlayerRoll] = useState(1);
  const [computerRoll, setComputerRoll] = useState(1);

  const handleLockName = () => {
    if (playerName.trim() === "") {
      alert("Lütfen önce bir isim giriniz.");
      return;
    }
    setIsLocked(true);
  };

  const handleRollDice = () => {
    const newPlayerRoll = Math.floor(Math.random() * 6) + 1;
    const newComputerRoll = Math.floor(Math.random() * 6) + 1;
    setPlayerRoll(newPlayerRoll);
    setComputerRoll(newComputerRoll);
  };

  return (
    <div className="game-board">
      <h1>🎲 Dice Game</h1>
      <PlayerName
        name={playerName}
        onChange={setPlayerName}
        onLock={handleLockName}
        isLocked={isLocked}
      />
      <div className="dice-container">
        <Dice value={playerRoll} player={playerName || "Player 1"} />
        <Dice value={computerRoll} player="Computer" />
      </div>
      <ResultMessage playerRoll={playerRoll} computerRoll={computerRoll} />
      <RollButton onRoll={handleRollDice} disabled={!isLocked} />
    </div>
  );
};

export default GameBoard;
