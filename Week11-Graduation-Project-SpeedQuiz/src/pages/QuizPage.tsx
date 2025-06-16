import { useState } from 'react'
import { questions } from '../data/questions'
import FirstQuestion from '../components/FirstQuestion'
import OptionButton from '../components/OptionButton'
import '../styles/quiz-page.css'

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1)
  }

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <div className="quiz-page">
      {currentQuestionIndex === 0 ? (
        <FirstQuestion
          question={currentQuestion}
          onNext={handleNextQuestion}
        />
      ) : (
        <div className="question-container">
          {/* Soru başlığı */}
          <h2>{currentQuestion.question}</h2>

          {/* Görsel */}
          <img
            src={`/${currentQuestion.media}`}
            alt="question visual"
            className="question-image"
          />

          {/* Butonlar (OptionButton) */}
          <div className="option-container">
            {currentQuestion.options.map((option: string, i: number) => (
              <OptionButton
                key={i}
                text={option}
                onClick={handleNextQuestion}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default QuizPage
