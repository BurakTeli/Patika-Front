import { useState } from 'react'
import { questions } from '../data/questions'
import FirstQuestion from '../components/FirstQuestion'
import '../styles/quiz-page.css'

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1)
  }

  return (
    <div className="quiz-page">
      {currentQuestionIndex === 0 ? (
        <FirstQuestion
          question={questions[0]}
          onNext={handleNextQuestion}
        />
      ) : (
        <div className="question-container">
          <h2>{questions[currentQuestionIndex].question}</h2>
          <div className="options">
            {questions[currentQuestionIndex].options.map((option: string, i: number) => (
              <button key={i} onClick={handleNextQuestion}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default QuizPage
