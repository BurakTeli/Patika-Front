// src/components/RaceStartSection/CarSelection.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // for navigation
import "../../styles/components/CarSelection.css";

// List of images with captions
const imageSources = [
  {
    src: "/assets/images/Furkan_Teacher.png",
    label:
      "They only saw the exhaust, never the front. We rule the street, speed limits can’t keep up.",
  },
  {
    src: "/assets/images/Furkan_Teacher2.png",
    label:
      "When we drift, time slips—not tires. Corners are taken with soul, not steering.",
  },
  {
    src: "/assets/images/Furkan_Teacher3.png",
    label:
      "When Furkan Hoca drives this car, even the traffic lights turn green voluntarily.",
  },
];

const CarSelection: React.FC = () => {
  const [visibleDetailIndex, setVisibleDetailIndex] = useState<number | null>(null);
  const navigate = useNavigate(); // hook for routing

  // Toggle the grey overlay
  const toggleDetails = (index: number) => {
    setVisibleDetailIndex(prev => (prev === index ? null : index));
  };

  // Navigate to HomePage
  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="car-selection-container">
      {imageSources.map((item, index) => (
        <div key={index} className="car-box">
          {/* Clickable image with overlay */}
          <div className="image-wrapper" onClick={() => toggleDetails(index)}>
            <img src={item.src} alt={`Car ${index + 1}`} className="car-image" />
            <div className={`overlay ${visibleDetailIndex === index ? "show" : ""}`}>
              <span className="overlay-text">{item.label}</span>
            </div>
          </div>

          {/* Button under the image */}
          <div className="detail-button-container">
            <button
              className="detail-button"
              onClick={() => toggleDetails(index)}
            >
              Detaylar
            </button>
          </div>
        </div>
      ))}

      {/* Full-width bottom button to return home */}
      <div className="go-home-button-container">
        <button className="go-home-button" onClick={goToHome}>
          Ana Sayfaya Dön
        </button>
      </div>
    </div>
  );
};

export default CarSelection;
