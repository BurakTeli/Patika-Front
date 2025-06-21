// src/components/RaceStartSection/HeaderSection.tsx
import React from "react";
import "../../styles/components/HeaderSection.css";

const HeaderSection: React.FC = () => {
  return (
    <div className="header-container">
      <h1 className="header-title">Arabanı Seç</h1>
      <p className="header-subtitle">Varsa Bizden İyisi o da bizden birisi</p>
    </div>
  );
};

export default HeaderSection;
