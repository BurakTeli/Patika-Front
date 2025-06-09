import React from "react";

export interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <div className="product-card">
      <img
        src={new URL(`../assets/${image}`, import.meta.url).href}
        alt={name}
        className="product-image"
      />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">${price.toLocaleString()}</p>
      <div className="product-controls">
        <button className="btn-sell" disabled>
          Sell
        </button>
        <span className="product-quantity">0</span>
        <button className="btn-buy" disabled>
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
