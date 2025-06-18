// src/components/RaceStartSection/RaceStartSection.tsx
import React from "react";
import HeaderSection from "./HeaderSection";
import CarSelection from "./CarSelection";
import "../../styles/components/RaceStartSection.css"; // Doğru yolu kullanıyoruz

const RaceStartSection: React.FC = () => {
  return (
    <div className="race-start-section">
      <HeaderSection />
      <CarSelection />
    </div>
  );
};

export default RaceStartSection;
