import React, { useState, useEffect } from 'react';
import { questions } from '../utils/questions';
import FirstQuestion from '../components/quiz/FirstQuestion';
import QuestionCard from '../components/quiz/QuestionCard';
import ProgressBar from '../components/common/ProgressBar';

const QuizPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showOptions, setShowOptions] = useState(false);

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    setShowOptions(false);
    setTimeLeft(30);

    const hideTimer = setTimeout(() => {
      setShowOptions(true);
    }, 4000);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          clearTimeout(hideTimer);
          goNextQuestion();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(hideTimer);
    };
  }, [currentIndex]);

  const goNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log('Test tamamlandı');
    }
  };

  const handleAnswer = (selected: string) => {
    if (!showOptions) return;

    console.log('Seçilen cevap:', selected);
    goNextQuestion();
  };

  return (
    <>
      <ProgressBar current={currentIndex} total={questions.length} />
      {currentQuestion.isFirst ? (
        <FirstQuestion
          question={currentQuestion.question}
          options={currentQuestion.options}
          media={currentQuestion.media}
          onAnswer={handleAnswer}
          showOptions={showOptions}
        />
      ) : (
        <QuestionCard
          question={currentQuestion.question}
          options={currentQuestion.options}
          media={currentQuestion.media}
          onAnswer={handleAnswer}
          showOptions={showOptions}
        />
      )}
      <div style={{ marginTop: 20, textAlign: 'center' }}>
        <strong>Kalan Süre: {timeLeft} sn</strong>
      </div>
    </>
  );
};

export default QuizPage;
