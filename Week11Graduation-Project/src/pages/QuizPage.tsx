import React, { useState } from "react";
import { questions } from "../utils/questions";
import FirstQuestion from "../components/quiz/FirstQuestion";
import QuestionCard from "../components/quiz/QuestionCard.tsx"; // genel soru component

const QuizPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAnswer = (selected: string) => {
    console.log("Seçilen cevap:", selected);
    // Sonraki soruya geçiş vs.
    setCurrentIndex((prev) => prev + 1);
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div>
      {currentQuestion.isFirst ? (
        <FirstQuestion
          question={currentQuestion.question}
          options={currentQuestion.options}
          media={currentQuestion.media}
          onAnswer={handleAnswer}
        />
      ) : (
        <QuestionCard
          question={currentQuestion.question}
          options={currentQuestion.options}
          media={currentQuestion.media}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default QuizPage;
