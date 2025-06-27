import React from "react";
import QuestionCard from "./QuestionCard";

interface QuestionRendererProps {
  question: {
    question: string;
    options: string[];
    media: string;
    answer: string;
  };
  onAnswer: (selected: string) => void;
  showOptions: boolean;
  eliminatedOptions?: string[];
}

const QuestionRenderer: React.FC<QuestionRendererProps> = ({
  question,
  onAnswer,
  showOptions,
  eliminatedOptions = [],
}) => {
  return (
    <QuestionCard
      question={question.question}
      options={question.options}
      media={question.media}
      onAnswer={onAnswer}
      showOptions={showOptions}
      correctAnswer={question.answer}
      eliminatedOptions={eliminatedOptions}
    />
  );
};

export default QuestionRenderer;
