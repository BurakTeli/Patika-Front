import React, { useState } from "react";
import JokerConfirmDialog from "./JokerConfirmDialog";
import { useJokers } from "../../hooks/useJokers";
import "../../styles/components/Joker.css";

interface JokerPanelProps {
  onSkip: () => void;
  onEliminate: () => void;
}

const JokerPanel: React.FC<JokerPanelProps> = ({ onSkip, onEliminate }) => {
  const { usedJokers, useJoker } = useJokers();
  const [selectedJoker, setSelectedJoker] = useState<
    "search" | "skip" | "eliminate" | null
  >(null);

  const handleUse = () => {
    if (!selectedJoker) return;

    switch (selectedJoker) {
      case "search":
        useJoker(selectedJoker, () => {
          alert("🔍 Arama jokeri ileride aktif edilecek.");
        });
        break;
      case "skip":
        useJoker(selectedJoker, () => {
          onSkip();
        });
        break;
      case "eliminate":
        useJoker(selectedJoker, () => {
          onEliminate();
        });
        break;
    }

    setSelectedJoker(null);
  };

  const handleCardClick = (type: "search" | "skip" | "eliminate") => {
    if (usedJokers[type]) return;
    setSelectedJoker(type);
  };

  return (
    <>
      <div className="joker-panel">
        <img
          src="/assets/images/KartBlue.png"
          alt="Search Joker"
          className={`joker-card ${usedJokers.search ? "disabled" : ""}`}
          onClick={() => handleCardClick("search")}
        />
        <img
          src="/assets/images/KartRed.png"
          alt="Eliminate Joker"
          className={`joker-card ${usedJokers.eliminate ? "disabled" : ""}`}
          onClick={() => handleCardClick("eliminate")}
        />
        <img
          src="/assets/images/KartBlack.png"
          alt="Skip Joker"
          className={`joker-card ${usedJokers.skip ? "disabled" : ""}`}
          onClick={() => handleCardClick("skip")}
        />
      </div>

      {selectedJoker && (
        <JokerConfirmDialog
          onConfirm={handleUse}
          onCancel={() => setSelectedJoker(null)}
        />
      )}
    </>
  );
};

export default JokerPanel;
