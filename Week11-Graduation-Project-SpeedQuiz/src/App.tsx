import { Routes, Route } from 'react-router-dom'
import StartPage from './pages/StartPage'
import QuizPage from './pages/QuizPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  )
}

export default App
