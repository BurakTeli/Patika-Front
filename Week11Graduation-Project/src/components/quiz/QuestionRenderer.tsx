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
  // Eğer ilk soruysa özel FirstQuestion bileşeni render edilir
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

  // Diğer tüm sorular için QuestionCard bileşeni kullanılır
  return (
    <QuestionCard
      question={question.question}
      options={question.options}
      media={question.media}
      onAnswer={onAnswer}
      showOptions={showOptions}
      correctAnswer={question.answer} // ✅ Eksik olan prop burada eklendi
      eliminatedOptions={eliminatedOptions}
    />
  );
};

export default QuestionRenderer;
