// src/components/RaceStartSection/HeaderSection.tsx

import React from "react";
import "../../styles/components/HeaderSection.css";

const HeaderSection: React.FC = () => {
  return (
    <div className="header-container">
      {/* 🏁 Main page title */}
      <h1 className="header-title">Arabanı Seç</h1>

      {/* 🗯️ Motivational subtitle */}
      <p className="header-subtitle">Varsa Bizden İyisi o da bizden birisi</p>

      {/* 🔊 Instructional subtitle */}
      <p className="header-subtitle">Araba Sesleri için Lütfen butonlara tıklayın</p>
    </div>
  );
};

export default HeaderSection;
