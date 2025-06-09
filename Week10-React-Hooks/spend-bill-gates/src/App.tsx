import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <ProductList />
    </div>
  );
};

export default App;
