import React from "react";
import "../../styles/bmi.css";
import BMIText from "./BMIText";
import BMIForm from "./BMIForm";
import BMIResult from "./BMIResult";

const BMI: React.FC = () => {
  return (
    <section id="bmi">
      <div className="bmi-container">
        <div className="bmi-text-section">
          <BMIText />
          <BMIForm />
          <BMIResult />
        </div>
        <div className="bmi-image">
          <img src="/assets/images/bmi-index.jpg" alt="BMI Index" />
        </div>
      </div>
    </section>
  );
};

export default BMI;
