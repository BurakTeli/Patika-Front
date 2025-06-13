import React from "react";

interface ReviewCardProps {
  img: string;
  name: string;
  title: string;
  text: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ img, name, title, text }) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <img src={img} alt={name} />
        <div className="review-info">
          <strong>{name}</strong>
          <span>{title}</span>
        </div>
      </div>
      <div className="review-box">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
