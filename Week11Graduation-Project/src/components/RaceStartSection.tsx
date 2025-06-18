import React, { useState } from "react";
import "../styles/components/RaceStartSection.css";

const imageSources = [
  "/images/race1.png",
  "/images/race2.png",
  "/images/race3.png"
];

const RaceStartSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="race-container">
      <h1 className="race-title">Hadi yarışalım</h1>
      <div className="race-images">
        {imageSources.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Race option ${index + 1}`}
            className={`race-image ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RaceStartSection;
