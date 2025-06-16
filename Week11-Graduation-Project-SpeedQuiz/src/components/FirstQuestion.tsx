import { useEffect } from 'react'
import type { QuestionType } from '../types'
import OptionButton from './OptionButton'

type FirstQuestionProps = {
  question: QuestionType
  onNext: () => void
}

const FirstQuestion = ({ question, onNext }: FirstQuestionProps) => {
  useEffect(() => {
    console.log("İlk soru gösteriliyor")
  }, [])

  return (
    <div className="first-question-container">
      {/* Soru Başlığı */}
      <h2>{question.question}</h2>


      <img
        src={`/${question.media}`} // Örn: teacher.png
        alt="question visual"
        className="question-image"
      />

      {/* Butonlar (2x2 grid ve sabit altta) */}
      <div className="option-container">
        {question.options.map((option, i) => (
          <OptionButton key={i} text={option} onClick={onNext} />
        ))}
      </div>
    </div>
  )
}

export default FirstQuestion 
