import React from "react";

interface ProductCardProps {
  img: string;
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ img, title, price }) => {
  return (
    <div className="product-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
      <button>Add To Cart</button>
    </div>
  );
};

export default ProductCard;
