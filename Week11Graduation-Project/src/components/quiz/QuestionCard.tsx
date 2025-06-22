import React, { useState, useEffect } from "react";
import "../../styles/components/QuestionCard.css";

interface QuestionCardProps {
  question: string;
  options: string[];
  media: string;
  onAnswer: (selected: string) => void;
  showOptions: boolean;
  correctAnswer: string;
  eliminatedOptions?: string[];
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  options,
  media,
  onAnswer,
  showOptions,
  correctAnswer,
  eliminatedOptions = [],
}) => {
  const colorClasses = ["option-red", "option-blue", "option-yellow", "option-green"];

  const [flashingOption, setFlashingOption] = useState<string | null>(null);
  const [flashType, setFlashType] = useState<"correct" | "wrong" | null>(null);
  const [countdown, setCountdown] = useState(4);

  // ⏳ Countdown animation when options are hidden
  useEffect(() => {
    if (!showOptions) {
      setCountdown(4);
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [showOptions]);

  // ✅ Handles answer selection and triggers visual feedback
  const handleAnswer = (option: string) => {
    const isCorrect = option === correctAnswer;
    setFlashingOption(option);
    setFlashType(isCorrect ? "correct" : "wrong");

    setTimeout(() => {
      setFlashingOption(null);
      setFlashType(null);
    }, 800);

    onAnswer(option);
  };

  return (
    <div className="question-card-container">
      {/* 📄 Question text */}
      <h2 className="question-text">{question}</h2>

      {/* 🖼️ Image if available */}
      {media && (
        <div className="image-wrapper">
          <img
            src={`/assets/images/${media}`}
            alt="question visual"
            className="question-image"
          />
        </div>
      )}

      {/* ⏳ Countdown badge shown before options */}
      {!showOptions && countdown > 0 && (
        <div className="countdown-badge">{countdown}</div>
      )}

      {/* 🎯 Answer options */}
      <div className={`options-container ${showOptions ? "show" : "hide"}`}>
        {options.map((option, index) => {
          const isEliminated = eliminatedOptions.includes(option);
          const colorClass = colorClasses[index % colorClasses.length];
          const isFlashing = flashingOption === option;
          const flashClass = isFlashing
            ? flashType === "correct"
              ? "flash-correct"
              : "flash-wrong"
            : "";

          return (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={!showOptions || isEliminated}
              className={`option-button ${colorClass} ${
                isEliminated ? "eliminated" : ""
              } ${flashClass}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {/* ℹ️ Waiting text shown while options are hidden */}
      {!showOptions && (
        <p className="waiting-text">Answer options will appear shortly...</p>
      )}
    </div>
  );
};

export default QuestionCard;
