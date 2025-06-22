// src/components/Joker/JokerPanel.tsx

import React, { useState } from "react";
import JokerConfirmDialog from "./JokerConfirmDialog";
import { useJokers } from "../../hooks/useJokers";
import "../../styles/components/Joker.css";

interface JokerPanelProps {
  onSkip: () => void;
  onEliminate: () => void;
}

const JokerPanel: React.FC<JokerPanelProps> = ({ onSkip, onEliminate }) => {
  // Custom hook to manage which jokers have been used
  const { usedJokers, useJoker } = useJokers();

  // Track the currently selected joker type (or null)
  const [selectedJoker, setSelectedJoker] = useState<
    "search" | "skip" | "eliminate" | null
  >(null);

  // Function to handle final joker confirmation
  const handleUse = () => {
    if (!selectedJoker) return;

    switch (selectedJoker) {
      case "search":
        // Currently not active; shows alert
        useJoker(selectedJoker, () => {
          alert("🔍 Search joker will be enabled in future versions.");
        });
        break;

      case "skip":
        // Skip current question
        useJoker(selectedJoker, () => {
          onSkip();
        });
        break;

      case "eliminate":
        // Eliminate two wrong options
        useJoker(selectedJoker, () => {
          onEliminate();
        });
        break;
    }

    // Reset selected joker after use
    setSelectedJoker(null);
  };

  // Handle clicking a joker card
  const handleCardClick = (type: "search" | "skip" | "eliminate") => {
    if (usedJokers[type]) return; // Prevent reuse
    setSelectedJoker(type);
  };

  return (
    <>
      {/* 🃏 Joker selection panel */}
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

      {/* ⚠️ Joker confirmation dialog */}
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
