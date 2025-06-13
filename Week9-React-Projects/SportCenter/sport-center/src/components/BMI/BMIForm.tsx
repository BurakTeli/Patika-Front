import React, { useState } from "react";

const BMIForm: React.FC = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    if (height > 0 && weight > 0) {
      const bmiValue = weight / ((height / 100) ** 2);
      setBmi(parseFloat(bmiValue.toFixed(2)));
    }
  };

  return (
    <div className="bmi-form">
      <input
        type="number"
        placeholder="Your Height (cm)"
        value={height}
        onChange={(e) => setHeight(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Your Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(Number(e.target.value))}
      />
      <button onClick={calculateBMI}>Calculate BMI</button>
    </div>
  );
};

export default BMIForm;
