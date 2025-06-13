import React from "react";
import ClassText from "./ClassText";
import yogaImg from "../../assets/images/yoga.jpg";

const ClassContent: React.FC = () => {
  return (
    <div className="class-content">
      <ClassText />
      <div className="class-image">
        <img src={yogaImg} alt="Yoga" />
      </div>
    </div>
  );
};

export default ClassContent;
