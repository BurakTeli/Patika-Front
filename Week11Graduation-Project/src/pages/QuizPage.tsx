import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../utils/questions";
import FirstQuestion from "../components/quiz/FirstQuestion";
import QuestionCard from "../components/quiz/QuestionCard";
import ProgressBar from "../components/common/ProgressBar";

interface AnswerRecord {
  question: string;
  selected: string;
  correctAnswer: string;
  isCorrect: boolean;
}

const QuizPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [correctCount, setCorrectCount] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerRecord[]>([]); // ✅ kullanıcı cevaplarını saklıyoruz

  const timerRef = useRef<number | null>(null);
  const countdownRef = useRef<number | null>(null);
  const navigate = useNavigate();

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    setShowOptions(false);
    setTimeLeft(30);

    timerRef.current = window.setTimeout(() => {
      setShowOptions(true);

      countdownRef.current = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            if (countdownRef.current) window.clearInterval(countdownRef.current);
            triggerNextQuestion(null); // Süre bitince cevap vermediyse boş geç
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }, 4000);

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      if (countdownRef.current) window.clearInterval(countdownRef.current);
    };
  }, [currentIndex]);

  const triggerNextQuestion = (selected: string | null) => {
    setShowOptions(false);

    // Cevap kaydını oluştur
    const record: AnswerRecord = {
      question: currentQuestion.question,
      selected: selected ?? "No Answer",
      correctAnswer: currentQuestion.answer,
      isCorrect: selected === currentQuestion.answer,
    };

    // Listeye ekle
    setUserAnswers((prev) => [...prev, record]);

    // Doğruysa sayaç artır
    if (selected === currentQuestion.answer) {
      setCorrectCount((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        // Test bittiğinde doğru sayısı ve kullanıcı cevaplarını gönder
        navigate("/result", {
          state: {
            correctCount,
            total: questions.length,
            userAnswers: [...userAnswers, record], // güncel son cevabı da dahil et
          },
        });
      }
    }, 300);
  };

  const handleAnswer = (selected: string) => {
    if (!showOptions) return;

    if (countdownRef.current) window.clearInterval(countdownRef.current);
    triggerNextQuestion(selected);
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
      <div style={{ marginTop: 20, textAlign: "center" }}>
        <strong>
          {showOptions
            ? `Time Left: ${timeLeft}s`
            : "Answer options will appear in 4 seconds..."}
        </strong>
      </div>
    </>
  );
};

export default QuizPage;
