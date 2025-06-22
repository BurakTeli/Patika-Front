import React from "react";
import FirstQuestion from "./FirstQuestion";
import QuestionCard from "./QuestionCard";

interface QuestionRendererProps {
  question: {
    isFirst?: boolean;
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
  // 🟡 If this is the first question, render the special FirstQuestion component
  if (question.isFirst) {
    return (
      <FirstQuestion
        question={question.question}
        options={question.options}
        media={question.media}
        onAnswer={onAnswer}
        showOptions={showOptions}
      />
    );
  }

  // 🔵 For all other questions, render the standard QuestionCard component
  return (
    <QuestionCard
      question={question.question}
      options={question.options}
      media={question.media}
      onAnswer={onAnswer}
      showOptions={showOptions}
      correctAnswer={question.answer}            // ✅ Required for flashing animation logic
      eliminatedOptions={eliminatedOptions}
    />
  );
};

export default QuestionRenderer;
