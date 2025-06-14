import React from "react";
import "../styles/ResultMessage.css";

type ResultMessageProps = {
  playerRoll: number;
  computerRoll: number;
};

const ResultMessage: React.FC<ResultMessageProps> = ({ playerRoll, computerRoll }) => {
  let message = "";

  if (playerRoll > computerRoll) {
    message = "You Win! 🎉";
  } else if (playerRoll < computerRoll) {
    message = "You Lose! 😢";
  } else {
    message = "It's a Draw! 🤝";
  }

  return <div className="result-message">{message}</div>;
};

export default ResultMessage;
