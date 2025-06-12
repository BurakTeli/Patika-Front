import React, { useState } from "react";
import "../styles/card.css";

type CardProps = {
  image: string;
};

const Card: React.FC<CardProps> = ({ image }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleClick}>
      <div className="card-inner">
        <div className="card-front">?</div>
        <div className="card-back">
          <img src={image} alt="Card" />
        </div>
      </div>
    </div>
  );
};

export default Card;
