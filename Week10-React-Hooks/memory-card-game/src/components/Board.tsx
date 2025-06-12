import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Card from "./Card";
import "../styles/board.css";

const Board: React.FC = () => {
  const cards = useSelector((state: RootState) => state.game.cards);

  return (
    <div className="card-grid">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          image={card.image}
          isFlipped={card.isFlipped}
          isMatched={card.isMatched}
        />
      ))}
    </div>
  );
};

export default Board;
