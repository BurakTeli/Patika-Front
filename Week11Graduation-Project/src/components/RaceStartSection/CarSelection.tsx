import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/components/CarSelection.css";

const imageSources = [
  {
    src: "/assets/images/Furkan_Teacher.png",
    label:
      "Bu arabanın sadece egzozunu gördüler, kendisini hâlâ gören yok. Caddenin yıldızı biziz, hız limitleriyle aramız açık.",
    sound: "/audio/1.mp3",
  },
  {
    src: "/assets/images/Furkan_Teacher2.png",
    label:
      "Drift atarken lastikler değil, zaman kayıyor. Biz virajı direksiyonla değil, ruhla alırız.",
    sound: "/audio/2.mp3",
  },
  {
    src: "/assets/images/Furkan_Teacher3.png",
    label:
      "Furkan Hoca bu arabaya bindi mi, trafik ışıkları bile yeşil kalmak ister.",
    sound: "/audio/3.mp3",
  },
];

const CarSelection: React.FC = () => {
  const [visibleDetailIndex, setVisibleDetailIndex] = useState<number | null>(null);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();

  const playSound = (src: string) => {
    // Stop previous audio if exists
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }

    // Create new audio
    const newAudio = new Audio(src);
    currentAudioRef.current = newAudio;
    newAudio.play();
  };

  const toggleDetails = (index: number) => {
    setVisibleDetailIndex(prev => (prev === index ? null : index));
    playSound(imageSources[index].sound);
  };

  const goToHome = () => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    navigate("/");
  };

  return (
    <div className="car-selection-container">
      {imageSources.map((item, index) => (
        <div key={index} className="car-box">
          <div className="image-wrapper" onClick={() => toggleDetails(index)}>
            <img src={item.src} alt={`Araba ${index + 1}`} className="car-image" />
            <div className={`overlay ${visibleDetailIndex === index ? "show" : ""}`}>
              <span className="overlay-text">{item.label}</span>
            </div>
          </div>

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

      <div className="go-home-button-container">
        <button className="go-home-button" onClick={goToHome}>
          Ana Sayfaya Dön
        </button>
      </div>
    </div>
  );
};

export default CarSelection;
