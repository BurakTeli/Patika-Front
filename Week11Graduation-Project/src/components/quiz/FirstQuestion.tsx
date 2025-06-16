import React, { useEffect, useState } from 'react';
import '../../styles/components/FirstQuestion.css';


interface FirstQuestionProps {
  question: string;
  options: string[];
  media: string;
  onAnswer: (selected: string) => void;
}

const FirstQuestion: React.FC<FirstQuestionProps> = ({ question, options, media, onAnswer }) => {
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOptions(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="first-question-container">
      <h2>{question}</h2>
      {media && <img src={`/assets/images/${media}`} alt="question visual" />}
      <div className={showOptions ? 'show' : 'hide'}>
        {options.map((option) => (
          <button key={option} onClick={() => onAnswer(option)} disabled={!showOptions}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FirstQuestion;
