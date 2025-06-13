import React from "react";
import "../../styles/products.css";
import ProductList from "./ProductList";

const Products: React.FC = () => {
  return (
    <section id="products">
      <div className="products-container">
        <h2 className="section-title">PURCHASE FROM US</h2>
        <p className="section-subtitle">
          Premium quality fitness gear available for purchase.
        </p>
        <ProductList />
      </div>
    </section>
  );
};

export default Products;
