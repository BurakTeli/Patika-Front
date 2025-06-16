import React from "react";
import "../../styles/components/QuestionCard.css";

interface QuestionCardProps {
  question: string;
  options: string[];
  media: string;
  onAnswer: (selected: string) => void;
  showOptions: boolean;
  eliminatedOptions?: string[]; // ✅ eklendi
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  options,
  media,
  onAnswer,
  showOptions,
  eliminatedOptions = [],
}) => {
  return (
    <div className="question-card-container">
      <h2 className="question-text">{question}</h2>

      {media && (
        <img
          src={`/assets/images/${media}`}
          alt="question visual"
          className="question-image"
        />
      )}

      <div className={`options-container ${showOptions ? "show" : "hide"}`}>
        {options.map((option) => {
          const isEliminated = eliminatedOptions.includes(option);

          return (
            <button
              key={option}
              onClick={() => onAnswer(option)}
              disabled={!showOptions || isEliminated}
              className={`option-button ${isEliminated ? "eliminated" : ""}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {!showOptions && (
        <p className="waiting-text">Cevap seçenekleri birazdan görünecek...</p>
      )}
    </div>
  );
};

export default QuestionCard;
