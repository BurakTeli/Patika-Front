// All app routes defined here using React Router v6
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import StarshipDetailPage from "../pages/StarshipDetailPage/StarshipDetailPage";

const AppRoutes = () => {
  // Centralized routing for the application
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/starship/:id" element={<StarshipDetailPage />} />
      {/* You can add a NotFound route later */}
    </Routes>
  );
};

export default AppRoutes;
