import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/pages/ResultPage.css";

interface AnswerRecord {
  question: string;
  selected: string;
  correctAnswer: string;
  isCorrect: boolean;
}

const ResultPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    correctCount = 0,
    total = 0,
    userAnswers = [],
    score = 0,
  } = location.state || {};

  const handleRetry = () => {
    navigate("/");
  };

  // 🔥 Geri bildirim mesajı
  const feedbackMessage =
    score >= 80
      ? "🎉 Harika iş çıkardın!"
      : score >= 50
      ? "👏 Fena değil, daha da iyi olabilirsin!"
      : "📚 Bir dahaki sefere daha iyi olacak!";

  return (
    <div className="result-container">
      <h1 className="result-title">Quiz Completed!</h1>

      <div className="result-summary">
        <p>
          You answered <strong>{correctCount}</strong> out of{" "}
          <strong>{total}</strong> questions correctly.
        </p>

        <p className="result-score">
          Percentage Score: <strong>{Math.round((correctCount / total) * 100)}%</strong>
        </p>

        <p className="result-score">
          Final Score: <strong>{score} points</strong>
        </p>

        <p className="result-feedback">{feedbackMessage}</p>
      </div>

      <hr className="result-divider" />

      <h2 className="result-subtitle">Your Answers:</h2>
      <ul className="result-answer-list">
        {userAnswers.map((answer: AnswerRecord, index: number) => (
          <li key={index} className="result-answer-item">
            <strong>Q{index + 1}:</strong> {answer.question}
            <br />
            <span>✅ Correct Answer: <strong>{answer.correctAnswer}</strong></span>
            <br />
            <span>
              🟡 Your Answer:{" "}
              <strong className={answer.isCorrect ? "answer-correct" : "answer-wrong"}>
                {answer.selected}
              </strong>
            </span>
          </li>
        ))}
      </ul>

      <button className="result-button" onClick={handleRetry}>
        Retry Quiz
      </button>
    </div>
  );
};

export default ResultPage;
