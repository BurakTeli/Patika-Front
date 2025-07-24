import React from "react";
import { ToastContainer } from "react-toastify";
import "./styles/global.css";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div className="app-container">
      <AppRouter />
      <ToastContainer />
    </div>
  );
};

export default App;
