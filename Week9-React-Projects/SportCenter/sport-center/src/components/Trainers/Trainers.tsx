import React from "react";
import "../../styles/trainers.css";
import TrainerList from "./TrainerList";

const Trainers: React.FC = () => {
  return (
    <section id="trainers">
      <div className="trainers-container">
        <h2 className="section-title">OUR BEST TRAINERS</h2>
        <p className="section-subtitle">Meet our experienced professionals.</p>
        <TrainerList />
      </div>
    </section>
  );
};

export default Trainers;
