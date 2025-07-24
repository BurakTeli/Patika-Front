import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import PublisherPage from "./pages/PublisherPage";

// Global layout component

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="app-container">
        <Routes>
          {/* <Route path="/" element={<WelcomePage />} /> */}
          <Route path="/publishers" element={<PublisherPage />} />
          {/* <Route path="/categories" element={<CategoryPage />} />
          <Route path="/books" element={<BookPage />} />
          <Route path="/authors" element={<AuthorPage />} />
          <Route path="/borrows" element={<BorrowPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
