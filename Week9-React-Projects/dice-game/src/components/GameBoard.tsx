import React, { useState } from "react";
import Dice from "./Dice";
import PlayerName from "./PlayerName";
import RollButton from "./RollButton";
import ResultMessage from "./ResultMessage";
import GameHistory from "./GameHistory";
import "../styles/GameBoard.css";

type HistoryItem = {
  player: number;
  computer: number;
  result: string;
};

const GameBoard: React.FC = () => {
  const [playerName, setPlayerName] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [playerRoll, setPlayerRoll] = useState(1);
  const [computerRoll, setComputerRoll] = useState(1);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const handleLockName = () => {
    if (playerName.trim() === "") {
      alert("Lütfen önce bir isim giriniz.");
      return;
    }
    setIsLocked(true);
  };

  const handleRollDice = () => {
    // 🎬 Zar animasyonu
    const diceImages = document.querySelectorAll(".dice-image");
    diceImages.forEach((el) => {
      el.classList.add("animate-shake");
      setTimeout(() => {
        el.classList.remove("animate-shake");
      }, 600);
    });

    // 🎲 Gerçek zar sonuçları
    const newPlayerRoll = Math.floor(Math.random() * 6) + 1;
    const newComputerRoll = Math.floor(Math.random() * 6) + 1;
    setPlayerRoll(newPlayerRoll);
    setComputerRoll(newComputerRoll);

    // 🧠 Sonuç hesapla
    let resultText = "";
    if (newPlayerRoll > newComputerRoll) resultText = "You Win! 🎉";
    else if (newPlayerRoll < newComputerRoll) resultText = "You Lose! 😢";
    else resultText = "It's a Draw! 🤝";

    // 📜 Geçmişe ekle
    setHistory((prev) => [
      ...prev,
      {
        player: newPlayerRoll,
        computer: newComputerRoll,
        result: resultText,
      },
    ]);
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
      <GameHistory history={history} />
    </div>
  );
};

export default GameBoard;
