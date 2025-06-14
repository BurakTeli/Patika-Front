import React from "react";
import "../styles/GameHistory.css";

type HistoryItem = {
  player: number;
  computer: number;
  result: string;
};

type GameHistoryProps = {
  history: HistoryItem[];
};

const GameHistory: React.FC<GameHistoryProps> = ({ history }) => {
  return (
    <div className="game-history">
      <h2>Game History</h2>
      {history.length === 0 ? (
        <p>No rolls yet.</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              🎲 You: {item.player} | 🤖 Computer: {item.computer} → <strong>{item.result}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GameHistory;
