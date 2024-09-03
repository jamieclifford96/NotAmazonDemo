import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, image, price, rating, description }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />
      <div className="card-content">
        <h2 className="product-name">{name}</h2>
        <p className="description">{description}</p>
        <p className="price">€{price}</p>
        <div className="rating">
          {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
