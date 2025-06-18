import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../utils/questions";

interface AnswerRecord {
  question: string;
  selected: string;
  correctAnswer: string;
  isCorrect: boolean;
}

export const useQuizLogic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [correctCount, setCorrectCount] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerRecord[]>([]);

  const eliminatedOptionsRef = useRef<string[]>([]);
  const timerRef = useRef<number | null>(null);
  const countdownRef = useRef<number | null>(null);

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
            if (countdownRef.current) clearInterval(countdownRef.current);
            triggerNextQuestion(null);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }, 4000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (countdownRef.current) clearInterval(countdownRef.current);
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

    const isCorrect = selected === currentQuestion.answer;
    if (isCorrect && currentIndex > 0) {
      setCorrectCount((prev) => prev + 1);
      setScore((prev) => prev + 10);
    }

    const updatedUserAnswers = [...userAnswers, record];
    setUserAnswers(updatedUserAnswers);

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        const wrongCount = updatedUserAnswers.filter((r) => !r.isCorrect).length;
        const averageTime =
          Math.round(
            ((questions.length * 30 - timeLeft) / questions.length) * 10
          ) / 10;

        navigate("/result", {
          state: {
            score,
            correctAnswers: correctCount + (isCorrect ? 1 : 0),
            wrongAnswers: wrongCount,
            averageTime,
            totalQuestions: questions.length,
          },
        });
      }
    }, 300);
  };

  const handleAnswer = (selected: string) => {
    if (!showOptions) return;
    if (countdownRef.current) clearInterval(countdownRef.current);
    triggerNextQuestion(selected);
  };

  const handleSkip = () => {
    if (countdownRef.current) clearInterval(countdownRef.current);
    triggerNextQuestion(null);
  };

  const handleEliminate = () => {
    const options = currentQuestion.options;
    const correct = currentQuestion.answer;
    const wrongs = options.filter((opt) => opt !== correct);
    eliminatedOptionsRef.current = wrongs.slice(0, 2);
    console.log("❌ Elenen Şıklar:", eliminatedOptionsRef.current);
  };

  return {
    currentQuestion,
    currentIndex,
    showOptions,
    timeLeft,
    score,
    handleAnswer,
    handleSkip,
    handleEliminate,
    eliminatedOptions: eliminatedOptionsRef.current,
  };
};
