// src/components/PurchasedList.tsx
import React from "react";
import "../styles/purchased-list.css";

import type { Basket } from "../hooks/useBalanceReducer";
import type { Product } from "../data/products";

interface PurchasedListProps {
  products: Product[];
  basket: Basket;
}

const PurchasedList: React.FC<PurchasedListProps> = ({ products, basket }) => {
  // Sepette en az 1 adet olan ürünleri bul
  const purchased = products.filter((p) => (basket[p.id] || 0) > 0);

  if (purchased.length === 0) return null; // Hiç ürün yoksa boş dön

  // Toplam harcama
  const total = purchased.reduce(
    (sum, p) => sum + (basket[p.id] || 0) * p.price,
    0
  );

  return (
    <div className="purchased-list">
      <h3>Purchased Items</h3>
      <ul>
        {purchased.map((p) => (
          <li key={p.id}>
            {p.name} × {basket[p.id]} — $
            {(basket[p.id] * p.price).toLocaleString()}
          </li>
        ))}
      </ul>
      <hr />
      <b>Total: ${total.toLocaleString()}</b>
    </div>
  );
};

export default PurchasedList;
