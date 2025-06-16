type OptionButtonProps = {
    text: string
    onClick: () => void
    disabled?: boolean
    isCorrect?: boolean
  }
  
  const OptionButton = ({ text, onClick, disabled = false }: OptionButtonProps) => {
    return (
      <button
        className="option-button"
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    )
  }
  
  export default OptionButton
  