import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/pages/ResultPage.css"; // sadece görünüm için, dokunulmaz

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
  } = location.state || {};

  const score = Math.round((correctCount / total) * 100);

  const handleRetry = () => {
    navigate("/"); // Testi yeniden başlat
  };

  return (
    <div className="result-container">
      <h1 className="result-title">Quiz Completed!</h1>
      <p className="result-message">
        You answered <strong>{correctCount}</strong> out of{" "}
        <strong>{total}</strong> questions correctly.
      </p>
      <p className="result-score">
        Your score: <strong>{score}%</strong>
      </p>

      <hr />

      <h2 style={{ marginTop: 40 }}>Your Answers:</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {userAnswers.map((answer: AnswerRecord, index: number) => (
          <li key={index} style={{ marginBottom: 20 }}>
            <strong>Q{index + 1}:</strong> {answer.question}
            <br />
            <span>
              ✅ Correct Answer: <strong>{answer.correctAnswer}</strong>
            </span>
            <br />
            <span>
              🟡 Your Answer:{" "}
              <strong style={{ color: answer.isCorrect ? "green" : "red" }}>
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
