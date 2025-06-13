import React from "react";

interface TrainerCardProps {
  img: string;
  name: string;
  title: string;
  showInfo: boolean;
}

const TrainerCard: React.FC<TrainerCardProps> = ({ img, name, title, showInfo }) => {
  return (
    <div className={`trainer-card ${showInfo ? "hover-card" : ""}`}>
      <img src={img} alt={name || "Trainer"} />
      {showInfo && (
        <div className="trainer-info">
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
      )}
    </div>
  );
};

export default TrainerCard;
