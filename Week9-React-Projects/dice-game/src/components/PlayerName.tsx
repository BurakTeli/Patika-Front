import React from "react";
import "../styles/PlayerName.css";

type PlayerNameProps = {
  name: string;
  onChange: (newName: string) => void;
  onLock: () => void;
  isLocked: boolean;
};

const PlayerName: React.FC<PlayerNameProps> = ({ name, onChange, onLock, isLocked }) => {
  return (
    <div className="player-name">
      <label htmlFor="player-input">Player 1:</label>
      <input
        id="player-input"
        type="text"
        value={name}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your name"
        disabled={isLocked}
      />
      <button onClick={onLock} disabled={isLocked} className="lock-button">
        {isLocked ? "Locked 🔒" : "Lock Name"}
      </button>
    </div>
  );
};

export default PlayerName;
