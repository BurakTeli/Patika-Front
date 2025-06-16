import React from "react";
import FirstQuestion from "./FirstQuestion";
import QuestionCard from "./QuestionCard";

interface QuestionRendererProps {
  question: {
    isFirst?: boolean; // ✅ Burada optional hale getiriyoruz
    question: string;
    options: string[];
    media: string;
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
  return question.isFirst ? (
    <FirstQuestion
      question={question.question}
      options={question.options}
      media={question.media}
      onAnswer={onAnswer}
      showOptions={showOptions}
    />
  ) : (
    <QuestionCard
      question={question.question}
      options={question.options}
      media={question.media}
      onAnswer={onAnswer}
      showOptions={showOptions}
      eliminatedOptions={eliminatedOptions}
    />
  );
};

export default QuestionRenderer;
