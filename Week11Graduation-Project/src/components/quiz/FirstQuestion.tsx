import React from "react";
import "../../styles/components/FirstQuestion.css";

interface FirstQuestionProps {
  question: string;
  options: string[];
  media: string;
  onAnswer: (selected: string) => void;
  showOptions: boolean;
}

const FirstQuestion: React.FC<FirstQuestionProps> = ({
  question,
  options,
  media,
  onAnswer,
  showOptions,
}) => {
  return (
    <div className="first-question-container">
      {/* 📝 Question Text */}
      <h2 className="question-text">{question}</h2>

      {/* 🖼️ Optional media image */}
      {media && (
        <img
          src={`/assets/images/${media}`}
          alt="question visual"
          className="question-image"
        />
      )}

      {/* 🎯 Answer Options */}
      <div className={`options-container ${showOptions ? "show" : "hide"}`}>
        {options.map((option) => (
          <button
            key={option}
            className="option-button"
            onClick={() => onAnswer(option)}
            disabled={!showOptions}
          >
            {option}
          </button>
        ))}
      </div>

      {/* ⏳ Message when options are hidden */}
      {!showOptions && (
        <p className="waiting-text">Answer options will appear shortly...</p>
      )}
    </div>
  );
};

export default FirstQuestion;
