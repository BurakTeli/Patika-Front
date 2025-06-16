import React, { useEffect, useState } from 'react';
import '../../styles/components/FirstQuestion.css';

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
            className="option-button"
            onClick={() => onAnswer(option)}
            disabled={!showOptions}
          >
            {option}
          </button>
        ))}
      </div>
      {!showOptions && <p className="waiting-text">Cevap seçenekleri birazdan görünecek...</p>}
    </div>
  );
};

export default FirstQuestion;
