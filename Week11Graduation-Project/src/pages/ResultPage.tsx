import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/pages/ResultPage.css";

const ResultPage: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // 🎯 Destructure quiz result data from navigation state
  const {
    score = 0,
    correctAnswers = 0,
    wrongAnswers = 0,
    averageTime = 0,
    totalQuestions = 0,
    userAnswers = [],
  } = state || {};

  // 🟡 Count unanswered questions (marked as "Boş" or left undefined/null)
  const emptyAnswers = userAnswers.filter(
    (ans: string | undefined | null) => !ans || ans === "Boş"
  ).length;

  // 🔁 Restart the quiz
  const handleRestart = () => {
    navigate("/quiz");
  };

  return (
    <div className="result-page">
      {/* 🎉 Title */}
      <h1 className="result-title">🎉 Congratulations!</h1>

      {/* ⭐ Final score box with animation */}
      <div className="score-box-animated">⭐ Total Score: {score}</div>

      {/* 📊 Statistics summary */}
      <div className="stats-grid">
        <div className="stat-card">✅ Correct: {correctAnswers}</div>
        <div className="stat-card">❌ Incorrect: {wrongAnswers}</div>
        <div className="stat-card">🕒 Avg. Time: {averageTime}s</div>
        <div className="stat-card">📋 Total Questions: {totalQuestions}</div>

        {/* ⚠️ New stat: Number of unanswered questions */}
        <div className="stat-card">⚠️ Unanswered: {emptyAnswers}</div>
      </div>

      {/* 🔁 Restart button */}
      <button className="restart-button" onClick={handleRestart}>
        🔁 Play Again
      </button>
    </div>
  );
};

export default ResultPage;
