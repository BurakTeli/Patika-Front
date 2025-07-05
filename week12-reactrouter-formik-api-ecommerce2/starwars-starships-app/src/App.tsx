// Main App container: Includes routing configuration
import React from "react";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  // The root component, only responsible for rendering routes
  return (
    <div>
      <AppRoutes />
    </div>
  );
};

export default App;
