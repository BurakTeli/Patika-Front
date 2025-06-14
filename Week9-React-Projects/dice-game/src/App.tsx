import React, { useState } from "react";
import "./styles/main.css";
import Dice from "./components/Dice";
import PlayerName from "./components/PlayerName";
import RollButton from "./components/RollButton";

function App() {
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
    <div className="App">
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
      <RollButton onRoll={handleRollDice} disabled={!isLocked} />
    </div>
  );
}

export default App;
