import React from "react";
import "../styles/RollButton.css";

type RollButtonProps = {
  onRoll: () => void;
  disabled: boolean;
};

const RollButton: React.FC<RollButtonProps> = ({ onRoll, disabled }) => {
  return (
    <button className="roll-button" onClick={onRoll} disabled={disabled}>
      Roll Dice 🎲
    </button>
  );
};

export default RollButton;
