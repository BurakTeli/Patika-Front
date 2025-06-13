import React from "react";
import ProductCard from "./ProductCard";

const productData = [
  { img: "/assets/images/purchase1.jpg", title: "Kettlebell / 5kg", price: "89.99$ / 59.99$" },
  { img: "/assets/images/purchase2.jpg", title: "Treadmill", price: "899.99$ / 599.99$" },
  { img: "/assets/images/purchase3.jpg", title: "Adjustable Dumbbell", price: "89.99$ / 59.99$" },
  { img: "/assets/images/purchase4.jpg", title: "Kettlebell / 3kg", price: "89.99$ / 59.99$" },
];

const ProductList: React.FC = () => {
  return (
    <div className="product-cards">
      {productData.map((product, index) => (
        <ProductCard key={index} img={product.img} title={product.title} price={product.price} />
      ))}
    </div>
  );
};

export default ProductList;
