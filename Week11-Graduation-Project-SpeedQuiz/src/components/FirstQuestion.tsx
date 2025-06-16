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
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option: string, i: number) => (
          <OptionButton key={i} text={option} onClick={onNext} />
        ))}
      </div>
    </div>
  )
}

export default FirstQuestion
