import React from 'react';
import '../../styles/components/QuestionCard.css';

interface QuestionCardProps {
  question: string;
  options: string[];
  media: string;
  onAnswer: (selected: string) => void;
  showOptions: boolean; // Bu prop eklenmeli
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  options,
  media,
  onAnswer,
  showOptions,
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
      <div className={`options-container ${showOptions ? 'show' : 'hide'}`}>
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswer(option)}
            disabled={!showOptions} // showOptions false ise tıklanamaz
          >
            {option}
          </button>
        ))}
      </div>
      {!showOptions && <p className="waiting-text">Cevap seçenekleri birazdan görünecek...</p>}
    </div>
  );
};

export default QuestionCard;
