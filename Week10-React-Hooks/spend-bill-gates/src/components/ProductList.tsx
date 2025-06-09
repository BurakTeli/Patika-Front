// src/components/ProductList.tsx
import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

const ProductList: React.FC = () => {
  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          name={p.name}
          price={p.price}
          image={p.image}
        />
      ))}
    </div>
  );
};

export default ProductList;
