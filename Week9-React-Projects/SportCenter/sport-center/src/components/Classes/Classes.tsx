import React from "react";
import "../../styles/classes.css";
import ClassButtons from "./ClassButtons";
import ClassContent from "./ClassContent";

const Classes: React.FC = () => {
  return (
    <section id="classes">
      <div className="classes-container">
        <h2 className="section-title">OUR CLASSES</h2>
        <p className="section-subtitle">
          Discover a wide variety of classes that suit your fitness goals.
        </p>
        <ClassButtons />
        <ClassContent />
      </div>
    </section>
  );
};

export default Classes;
