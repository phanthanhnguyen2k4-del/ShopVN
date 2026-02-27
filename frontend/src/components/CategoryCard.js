import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CategoryCard.css';

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/products?category=${category.slug}`} className="category-card">
      <div className="category-image">
        <img src={category.image || '/placeholder.jpg'} alt={category.name} />
        <div className="category-overlay">
          <h3>{category.name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
