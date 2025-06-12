import React from "react";
import { useDispatch } from "react-redux";
import { flipCardThunk } from "../redux/gameActions";
import { AppDispatch } from "../redux/store"; // Thunk destekli dispatch
import "../styles/card.css";

type CardProps = {
  id: number;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
};

const Card: React.FC<CardProps> = ({ id, image, isFlipped, isMatched }) => {
  const dispatch = useDispatch<AppDispatch>(); // thunk fonksiyonlarını destekler

  const handleClick = () => {
    if (isFlipped || isMatched) return; // tekrar tıklamayı engelle
    dispatch(flipCardThunk(id)); // Thunk çağrısı
  };

  const cardClass = `card ${isFlipped || isMatched ? "flipped" : ""} ${
    isMatched ? "matched" : ""
  }`;

  return (
    <div className={cardClass} onClick={handleClick}>
      <div className="card-inner">
        <div className="card-front">?</div>
        <div className="card-back">
          <img src={`/assets/${image}.png`} alt={image} />
        </div>
      </div>
    </div>
  );
};

export default Card;
