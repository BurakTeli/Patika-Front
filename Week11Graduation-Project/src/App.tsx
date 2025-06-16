import './styles/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Diğer routelar buraya gelecek */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
