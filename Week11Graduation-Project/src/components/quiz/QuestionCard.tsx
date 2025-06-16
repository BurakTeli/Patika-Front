import React from "react";
import "../../styles/components/QuestionCard.css";

interface QuestionCardProps {
  question: string;
  options: string[];
  media: string;
  onAnswer: (selected: string) => void;
  showOptions: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  options,
  media,
  onAnswer,
}) => {
  return (
    <div className="question-card-container">
      <h2>{question}</h2>
      {media && (
        <img
          src={`/assets/images/${media}`}
          alt="question visual"
          className="question-image"
        />
      )}
      <div className="options-container">
        {options.map((option) => (
          <button key={option} onClick={() => onAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
