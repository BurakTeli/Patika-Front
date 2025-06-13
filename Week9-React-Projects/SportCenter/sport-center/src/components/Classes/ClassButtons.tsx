import React from "react";

const ClassButtons: React.FC = () => {
  return (
    <div className="class-buttons">
      <button className="active">Yoga</button>
      <button>Group</button>
      <button>Solo</button>
      <button>Stretching</button>
    </div>
  );
};

export default ClassButtons;
