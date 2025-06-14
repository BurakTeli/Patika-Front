import React, { useState } from "react";
import Dice from "./Dice";
import PlayerName from "./PlayerName";
import RollButton from "./RollButton";
import ResultMessage from "./ResultMessage";
import GameHistory from "./GameHistory";
import ResetButton from "./ResetButton";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import "../styles/GameBoard.css";

const GameBoard: React.FC = () => {
  const [playerName, setPlayerName] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [playerRoll, setPlayerRoll] = useState(1);
  const [computerRoll, setComputerRoll] = useState(1);
  const [history, setHistory] = useState<{
    player: number;
    computer: number;
    result: string;
  }[]>([]);

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

    let resultMessage = "";
    if (newPlayerRoll > newComputerRoll) {
      resultMessage = "You Win!";
    } else if (newPlayerRoll < newComputerRoll) {
      resultMessage = "You Lose!";
    } else {
      resultMessage = "It's a Draw!";
    }

    setHistory([
      ...history,
      {
        player: newPlayerRoll,
        computer: newComputerRoll,
        result: resultMessage,
      },
    ]);
  };

  const handleReset = () => {
    setPlayerName("");
    setIsLocked(false);
    setPlayerRoll(1);
    setComputerRoll(1);
    setHistory([]);
  };

  return (
    <div className="game-board">
      <div className="top-bar">
        <ThemeToggle />
        <LanguageToggle />
      </div>
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
      <GameHistory history={history} />
      <ResetButton onReset={handleReset} />
    </div>
  );
};

export default GameBoard;
