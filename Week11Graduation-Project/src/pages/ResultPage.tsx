import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/pages/ResultPage.css";

const ResultPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { correctCount, total } = location.state || { correctCount: 0, total: 0 };

  const handleRetry = () => {
    navigate("/"); // ✅ Ana sayfaya yönlendir, quiz baştan başlar
  };

  const score = Math.round((correctCount / total) * 100);

  return (
    <div className="result-container">
      <h1 className="result-title">Quiz Completed!</h1>
      <p className="result-message">You answered <strong>{correctCount}</strong> out of <strong>{total}</strong> questions correctly.</p>
      <p className="result-score">Your score: <strong>{score}%</strong></p>
      <button className="result-button" onClick={handleRetry}>
        Retry Quiz
      </button>
    </div>
  );
};

export default ResultPage;
