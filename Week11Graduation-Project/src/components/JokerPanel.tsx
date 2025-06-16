import React from "react";
import { useJokers } from "../hooks/useJokers";

interface JokerPanelProps {
  onSkip: () => void;
  onEliminate: () => void;
}

const JokerPanel: React.FC<JokerPanelProps> = ({ onSkip, onEliminate }) => {
  const { usedJokers, useJoker } = useJokers();

  const handleClick = (type: "search" | "skip" | "eliminate") => {
    switch (type) {
      case "search":
        useJoker(type, () => {
          alert("🔍 Arama jokeri ileride aktif edilecek.");
        });
        break;
      case "skip":
        useJoker(type, () => {
          alert("⏭️ Soru geçiliyor...");
          onSkip();
        });
        break;
      case "eliminate":
        useJoker(type, () => {
          alert("🚫 İki yanlış şık devre dışı bırakılıyor...");
          onEliminate();
        });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h3>🎴 Jokerler</h3>
      <button
        onClick={() => handleClick("search")}
        disabled={usedJokers.search}
      >
        🔍 Arama Jokeri
      </button>
      <button onClick={() => handleClick("skip")} disabled={usedJokers.skip}>
        ⏭️ Soru Geç
      </button>
      <button
        onClick={() => handleClick("eliminate")}
        disabled={usedJokers.eliminate}
      >
        🚫 Yanlış Şıkları Ele
      </button>
    </div>
  );
};

export default JokerPanel;
