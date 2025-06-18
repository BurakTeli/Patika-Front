// src/components/RaceStartSection/CarSelection.tsx
import React, { useState } from "react";
import "../../styles/components/CarSelection.css"; // Doğru yolu kullanıyoruz

const imageSources = [
  "/images/starwars_car1.png",
  "/images/starwars_car2.png",
  "/images/starwars_car3.png"
];

const CarSelection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="car-selection-container">
      {imageSources.map((src, index) => (
        <div
          key={index}
          className={`car-box ${activeIndex === index ? "active" : ""}`}
          onClick={() => handleClick(index)}
        >
          <img src={src} alt={`Car ${index + 1}`} className="car-image" />
        </div>
      ))}
    </div>
  );
};

export default CarSelection;
