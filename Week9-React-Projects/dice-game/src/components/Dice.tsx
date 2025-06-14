import React from "react";
import "../styles/Dice.css";

type DiceProps = {
  value: number;
  player: string;
};

const Dice: React.FC<DiceProps> = ({ value, player }) => {
  return (
    <div className="dice">
      <p className="player-label">{player}</p>
      <img
        src={`./assets/dice${value}.png`}
        alt={`dice ${value}`}
        className="dice-image"
      />
    </div>
  );
};

export default Dice;
