import { useEffect, useState } from 'react'
import { questions } from '../data/questions'
import '../styles/quiz-page.css'

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [showOptions, setShowOptions] = useState(false)
  const [timer, setTimer] = useState(30)
  const [answerGiven, setAnswerGiven] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]

  // Zamanlayıcı ve şıkları gösterme
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(countdown)
          goToNextQuestion()
        }
        return prev - 1
      })
    }, 1000)

    const optionTimeout = setTimeout(() => {
      setShowOptions(true)
    }, 4000)

    return () => {
      clearInterval(countdown)
      clearTimeout(optionTimeout)
    }
  }, [currentQuestionIndex])

  const handleAnswerClick = (option: string) => {
    console.log('User selected:', option)
    setAnswerGiven(true)

    // 2 saniye sonra yeni soruya geç
    setTimeout(() => {
      goToNextQuestion()
    }, 2000)
  }

  const goToNextQuestion = () => {
    setCurrentQuestionIndex(prev => prev + 1)
    setTimer(30)
    setShowOptions(false)
    setAnswerGiven(false)
  }

  // 🔍 Görsel sınıfını belirle (ilk soruya özel davranışlar)
  const getImageClass = () => {
    if (currentQuestionIndex === 0) {
      if (!showOptions) {
        return 'hidden' // Şıklar gelmeden tamamen gizli
      } else if (!answerGiven) {
        return 'blurred small' // Şıklar geldi ama cevap yok: blur ve küçük
      } else {
        return 'visible large' // Cevap verildi: net ve büyük
      }
    } else {
      return 'visible' // Diğer sorularda her zaman net
    }
  }

  return (
    <div className="quiz-page">
      <div className="question-header">
        <p className="question-text">{currentQuestion.question}</p>
        <p className="timer">Time left: {timer}s</p>
      </div>

      <div className="question-image-wrapper">
        <img
          src={`/assets/images/${currentQuestion.media}`}
          alt="question"
          className={`question-image ${getImageClass()}`}
        />
      </div>

      {showOptions ? (
        <div className="options-grid">
          {currentQuestion.options.map((option: string, index: number) => (
            <button
              key={index}
              className={`option-button color-${index}`}
              onClick={() => handleAnswerClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <p className="waiting-text">Options will appear in 4 seconds...</p>
      )}
    </div>
  )
}

export default QuizPage
