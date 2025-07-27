// src/App.tsx

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import AuthorsPage from "./pages/Authors/AuthorsPage";
import BooksPage from './pages/Books/BooksPage';
import CategoriesPage from './pages/Categories/CategoriesPage';
import PublishersPage from "./pages/Publishers/PublishersPage";
import BorrowBookPage from './pages/BorrowBook/BorrowBookPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="authors" element={<AuthorsPage />} />
        <Route path="books" element={<BooksPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="publishers" element={<PublishersPage />} />
        <Route path="borrows" element={<BorrowBookPage />} />
      </Route>
    </Routes>
  );
}

export default App;
