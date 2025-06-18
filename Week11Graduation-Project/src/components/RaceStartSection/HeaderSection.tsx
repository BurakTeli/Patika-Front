// src/components/RaceStartSection/HeaderSection.tsx
import React from "react";
import "../../styles/components/HeaderSection.css"; // Doğru yolu kullanıyoruz

const HeaderSection: React.FC = () => {
  return (
    <div className="header-container">
      <h1 className="header-title">Arabanı Seç</h1>
      <p className="header-subtitle">Star Wars temalı arabalar seni bekliyor!</p>
    </div>
  );
};

export default HeaderSection;
