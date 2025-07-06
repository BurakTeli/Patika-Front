// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StarshipDetailPage from "./pages/StarshipDetailPage";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/starships/:id" element={<StarshipDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
