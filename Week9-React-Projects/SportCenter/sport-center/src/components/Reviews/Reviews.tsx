import React from "react";
import "../../styles/reviews.css";
import ReviewList from "./ReviewList";

const Reviews: React.FC = () => {
  return (
    <section id="reviews">
      <div className="reviews-container">
        <h2 className="section-title">CLIENT REVIEWS</h2>
        <p className="section-subtitle">Feedback from our community.</p>
        <ReviewList />
      </div>
    </section>
  );
};

export default Reviews;
