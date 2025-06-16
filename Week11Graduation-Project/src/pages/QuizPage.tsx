import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../utils/questions";
import FirstQuestion from "../components/quiz/FirstQuestion";
import QuestionCard from "../components/quiz/QuestionCard";
import ProgressBar from "../components/common/ProgressBar";
import JokerPanel from "../components/JokerPanel";

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
  const [userAnswers, setUserAnswers] = useState<AnswerRecord[]>([]);

  const timerRef = useRef<number | null>(null);
  const countdownRef = useRef<number | null>(null);
  const eliminatedOptionsRef = useRef<string[]>([]);

  const navigate = useNavigate();
  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    setShowOptions(false);
    setTimeLeft(30);
    eliminatedOptionsRef.current = [];

    timerRef.current = window.setTimeout(() => {
      setShowOptions(true);

      countdownRef.current = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            if (countdownRef.current) window.clearInterval(countdownRef.current);
            triggerNextQuestion(null);
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

    const record: AnswerRecord = {
      question: currentQuestion.question,
      selected: selected ?? "No Answer",
      correctAnswer: currentQuestion.answer,
      isCorrect: selected === currentQuestion.answer,
    };

    setUserAnswers((prev) => [...prev, record]);

    if (selected === currentQuestion.answer) {
      setCorrectCount((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        navigate("/result", {
          state: {
            correctCount,
            total: questions.length,
            userAnswers: [...userAnswers, record],
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

  const handleSkip = () => {
    if (countdownRef.current) window.clearInterval(countdownRef.current);
    triggerNextQuestion(null);
  };

  const handleEliminate = () => {
    const options = currentQuestion.options;
    const correct = currentQuestion.answer;
    const wrongs = options.filter((opt) => opt !== correct);
    eliminatedOptionsRef.current = wrongs.slice(0, 2);
    console.log("❌ Elenen Şıklar:", eliminatedOptionsRef.current);
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
          eliminatedOptions={eliminatedOptionsRef.current}
        />
      )}

      <div style={{ marginTop: 20, textAlign: "center" }}>
        <strong>
          {showOptions
            ? `Time Left: ${timeLeft}s`
            : "Answer options will appear in 4 seconds..."}
        </strong>
      </div>

      {/* 🎴 Jokerler sadece FirstQuestion değilse gösterilir */}
      {!currentQuestion.isFirst && (
        <div style={{ marginTop: 30 }}>
          <JokerPanel onSkip={handleSkip} onEliminate={handleEliminate} />
        </div>
      )}
    </>
  );
};

export default QuizPage;
