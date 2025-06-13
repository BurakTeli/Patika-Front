import React from "react";

const BMIResult: React.FC = () => {
  const [bmi, setBmi] = React.useState<number | null>(null);

  return (
    <div className="bmi-result">
      <h3>Your BMI:</h3>
      <p>{bmi !== null ? bmi : "--"}</p>
    </div>
  );
};

export default BMIResult;
