import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import FunnyPage from "./pages/FunnyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/funny" element={<FunnyPage />} />
        {/* Diğer routelar buraya gelecek */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
