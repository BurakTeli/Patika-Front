import React from "react";
import TrainerCard from "./TrainerCard";

const trainerData = [
  { img: "/assets/images/trainer1.jpg", name: "", title: "" },
  { img: "/assets/images/trainer2.jpg", name: "", title: "" },
  { img: "/assets/images/trainer3.jpg", name: "Jane Doe", title: "Cardio Trainer" },
];

const TrainerList: React.FC = () => {
  return (
    <div className="trainer-cards">
      {trainerData.map((trainer, index) => (
        <TrainerCard
          key={index}
          img={trainer.img}
          name={trainer.name}
          title={trainer.title}
          showInfo={index === 2}
        />
      ))}
    </div>
  );
};

export default TrainerList;
