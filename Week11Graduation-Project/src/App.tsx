import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import FunnyPage from "./pages/FunnyPage";
import RaceStartSection from "./components/RaceStartSection/RaceStartSection"; // Burada RaceStartSection eklenmiş
import NextPage from "./pages/NextPage"; // NextPage sayfasını import ettik

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/funny" element={<FunnyPage />} />
        <Route path="/race" element={<RaceStartSection />} />
        <Route path="/sonraki-sayfa" element={<NextPage />} /> {/* Yeni sayfa yönlendirmesi */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
