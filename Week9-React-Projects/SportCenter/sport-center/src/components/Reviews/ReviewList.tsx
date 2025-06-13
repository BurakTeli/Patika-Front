import React from "react";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    img: "/assets/images/client1.jpg",
    name: "Diet Expert",
    title: "CFO",
    text: "Thanks to the motivation I received, I’ve transformed my lifestyle.",
  },
  {
    img: "/assets/images/client2.jpg",
    name: "Cardio Trainer",
    title: "CEO",
    text: "The energy here is unmatched! Highly recommended for all levels.",
  },
];

const ReviewList: React.FC = () => {
  return (
    <div className="review-cards">
      {reviews.map((item, index) => (
        <ReviewCard key={index} {...item} />
      ))}
    </div>
  );
};

export default ReviewList;
