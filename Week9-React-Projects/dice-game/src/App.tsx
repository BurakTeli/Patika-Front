import React, { useState } from "react";
import "./styles/main.css";
import Dice from "./components/Dice";
import PlayerName from "./components/PlayerName";

function App() {
  const [playerName, setPlayerName] = useState("");
  const [isLocked, setIsLocked] = useState(false);

  const handleLockName = () => {
    if (playerName.trim() === "") {
      alert("Lütfen önce bir isim giriniz.");
      return;
    }
    setIsLocked(true);
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
        <Dice value={3} player={playerName || "Player 1"} />
        <Dice value={5} player="Computer" />
      </div>
    </div>
  );
}

export default App;
