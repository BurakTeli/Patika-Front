import React from "react";
import "../styles/ResetButton.css";

type ResetButtonProps = {
  onReset: () => void;
};

const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => {
  return (
    <button className="reset-button" onClick={onReset}>
      Reset Game 🔄
    </button>
  );
};

export default ResetButton;
