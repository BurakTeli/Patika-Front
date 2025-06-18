import React from "react";
import { useQuizLogic } from "../hooks/useQuizLogic";
import ProgressBar from "../components/common/ProgressBar";
import JokerPanel from "../components/Joker/JokerPanel";
import ScoreDisplay from "../components/quiz/ScoreDisplay";
import TimerDisplay from "../components/quiz/TimerDisplay";
import QuestionRenderer from "../components/quiz/QuestionRenderer";

const QuizPage: React.FC = () => {
  const {
    currentQuestion,
    currentIndex,
    showOptions,
    timeLeft,
    score,
    handleAnswer,
    handleSkip,
    handleEliminate,
    eliminatedOptions,
  } = useQuizLogic();

  return (
    <>
      <ProgressBar current={currentIndex} total={10} />
      <ScoreDisplay score={score} />
      <QuestionRenderer
        question={currentQuestion}
        onAnswer={handleAnswer}
        showOptions={showOptions}
        eliminatedOptions={eliminatedOptions}
      />
      <TimerDisplay timeLeft={timeLeft} showOptions={showOptions} />
      {!currentQuestion.isFirst && (
        <div className="joker-container" style={{ marginTop: 30 }}>
          <JokerPanel onSkip={handleSkip} onEliminate={handleEliminate} />
        </div>
      )}
    </>
  );
};

export default QuizPage;
