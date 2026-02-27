import React from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiShoppingCart, FiHeart } from 'react-icons/fi';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image || '/placeholder.jpg'} alt={product.name} />
        {product.salePrice && (
          <span className="sale-badge">{product.discount || '20%'}</span>
        )}
        <button className="wishlist-btn">
          <FiHeart />
        </button>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                className={i < product.rating ? 'filled' : ''}
              />
            ))}
          </div>
          <span className="review-count">({product.reviews || 0})</span>
        </div>

        <div className="product-price">
          {product.salePrice ? (
            <>
              <span className="sale-price">{product.salePrice.toLocaleString('vi-VN')}₫</span>
              <span className="original-price">{product.price.toLocaleString('vi-VN')}₫</span>
            </>
          ) : (
            <span className="price">{product.price.toLocaleString('vi-VN')}₫</span>
          )}
        </div>

        <div className="product-actions">
          <Link to={`/products/${product.id}`} className="btn-primary">
            Xem Chi Tiết
          </Link>
          <button className="btn-cart">
            <FiShoppingCart /> Thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
