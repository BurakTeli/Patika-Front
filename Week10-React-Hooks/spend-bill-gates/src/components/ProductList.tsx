// src/components/ProductList.tsx
import React from "react";
import ProductCard from "./ProductCard";
import type { Product } from "../data/products";
import type { Basket, Action } from "../hooks/useBalanceReducer";

interface ProductListProps {
  products: Product[];
  basket: Basket;
  balance: number;
  dispatch: React.Dispatch<Action>;
  onIcardiClick: () => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  basket,
  balance,
  dispatch,
  onIcardiClick
}) => {
  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          name={p.name}
          price={p.price}
          image={p.image}
          quantity={basket[p.id] || 0}
          canBuy={
            (p.id === 21 || p.id === 3)
              ? (basket[p.id] || 0) < 1 && balance >= p.price
              : balance >= p.price
          }
          canSell={(basket[p.id] || 0) > 0}
          onBuy={() => dispatch({ type: "BUY", payload: { product: p } })}
          onSell={() => dispatch({ type: "SELL", payload: { product: p } })}
          isIcardi={p.id === 1}
          onIcardiClick={onIcardiClick}
        />
      ))}
    </div>
  );
};

export default ProductList;
