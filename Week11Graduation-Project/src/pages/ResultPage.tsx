import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/pages/ResultPage.css";

const ResultPage: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const {
    score = 0,
    correctAnswers = 0,
    wrongAnswers = 0,
    averageTime = 0,
    totalQuestions = 0,
  } = state || {};

  const handleRestart = () => {
    navigate("/quiz");
  };

  return (
    <div className="result-page">
      <h1 className="result-title">🎉 Tebrikler!</h1>

      <div className="score-box-animated">⭐ Toplam Puan: {score}</div>

      <div className="stats-grid">
        <div className="stat-card">✅ Doğru: {correctAnswers}</div>
        <div className="stat-card">❌ Yanlış: {wrongAnswers}</div>
        <div className="stat-card">🕒 Ortalama Süre: {averageTime}s</div>
        <div className="stat-card">📋 Toplam Soru: {totalQuestions}</div>
      </div>

      <button className="restart-button" onClick={handleRestart}>
        🔁 Tekrar Oyna
      </button>
    </div>
  );
};

export default ResultPage;
