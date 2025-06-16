import React, { useState, useEffect, useRef } from "react";
import { questions } from "../utils/questions";
import FirstQuestion from "../components/quiz/FirstQuestion";
import QuestionCard from "../components/quiz/QuestionCard";
import ProgressBar from "../components/common/ProgressBar";

const QuizPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const timerRef = useRef<number | null>(null);
  const countdownRef = useRef<number | null>(null);

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    setShowOptions(false);
    setTimeLeft(30);

    // 4 saniye sonra şıkları göster
    timerRef.current = window.setTimeout(() => {
      setShowOptions(true);

      // Sayaç başlat (30 saniye)
      countdownRef.current = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            if (countdownRef.current) {
              window.clearInterval(countdownRef.current);
            }
            triggerNextQuestion();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }, 4000);

    // Cleanup
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
      if (countdownRef.current) {
        window.clearInterval(countdownRef.current);
      }
    };
  }, [currentIndex]);

  const triggerNextQuestion = () => {
    setShowOptions(false); // önce seçenekleri gizle (animasyon için)

    // Animasyonun bitmesini bekle (örneğin 300ms sonra geçiş)
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        console.log("Test tamamlandı");
        // Sonuç sayfası yönlendirmesi burada olabilir
      }
    }, 300); // bu süre CSS animasyon süresiyle uyumlu olmalı
  };

  const handleAnswer = (selected: string) => {
    if (!showOptions) return;

    console.log("Seçilen cevap:", selected);
    if (countdownRef.current) {
      window.clearInterval(countdownRef.current);
    }
    triggerNextQuestion();
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
            ? `Kalan Süre: ${timeLeft} sn`
            : "Cevap seçenekleri 4 saniye sonra görünecek..."}
        </strong>
      </div>
    </>
  );
};

export default QuizPage;
