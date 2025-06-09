import React from "react";

export interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  quantity: number;
  canBuy: boolean;
  canSell: boolean;
  onBuy: () => void;
  onSell: () => void;
  isIcardi?: boolean;
  onIcardiClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  image,
  quantity,
  canBuy,
  canSell,
  onBuy,
  onSell,
  isIcardi,
  onIcardiClick,
}) => {
  return (
    <div className="product-card">
      <img
        src={new URL(`../assets/${image}`, import.meta.url).href}
        alt={name}
        className="product-image"
      />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">${price.toLocaleString()}</p>
      
      {/* İcardi ise özel buton, değilse normal alış/satış kontrolleri */}
      {isIcardi ? (
        <button className="icardi-btn" onClick={onIcardiClick}>
          <span>Özel Video</span>
        </button>
      ) : (
        <div className="product-controls">
          <button className="btn-sell" onClick={onSell} disabled={!canSell}>
            Sell
          </button>
          <span className="product-quantity">{quantity}</span>
          <button className="btn-buy" onClick={onBuy} disabled={!canBuy}>
            Buy
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
