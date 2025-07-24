import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthorsPage from "../pages/AuthorsPage";
import PublishersPage from "../pages/PublishersPage";
import CategoriesPage from "../pages/CategoriesPage";
import BooksPage from "../pages/BooksPage";
import BorrowsPage from "../pages/BorrowsPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authors" element={<AuthorsPage />} />
        <Route path="/publishers" element={<PublishersPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/borrows" element={<BorrowsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
