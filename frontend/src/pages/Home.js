import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Mock data - trong thực tế sẽ gọi API
    setCategories([
      { id: 1, name: 'Phòng Khách', slug: 'phong-khach', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300' },
      { id: 2, name: 'Phòng Ngủ', slug: 'phong-ngu', image: 'https://images.unsplash.com/photo-1540932207986-a6f41f0719ab?w=300' },
      { id: 3, name: 'Phòng Ăn & Bếp', slug: 'phong-an-bep', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=300' },
      { id: 4, name: 'Phòng Làm Việc', slug: 'phong-lam-viec', image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=300' },
    ]);

    setFeaturedProducts([
      {
        id: 1,
        name: 'Sofa Da Nâu Hiện Đại',
        price: 15000000,
        salePrice: 12000000,
        discount: '20%',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300',
        rating: 5,
        reviews: 24,
      },
      {
        id: 2,
        name: 'Giường Gỗ Sồi Cao Cấp',
        price: 25000000,
        salePrice: 20000000,
        discount: '20%',
        image: 'https://images.unsplash.com/photo-1540932207986-a6f41f0719ab?w=300',
        rating: 5,
        reviews: 18,
      },
      {
        id: 3,
        name: 'Bàn Ăn Gỗ Óc Chó',
        price: 8000000,
        salePrice: 6400000,
        discount: '20%',
        image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=300',
        rating: 4,
        reviews: 12,
      },
      {
        id: 4,
        name: 'Bàn Làm Việc Scandinavian',
        price: 5000000,
        salePrice: 4000000,
        discount: '20%',
        image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=300',
        rating: 5,
        reviews: 32,
      },
      {
        id: 5,
        name: 'Tủ Quần Áo Gỗ Walnut',
        price: 18000000,
        salePrice: 14400000,
        discount: '20%',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300',
        rating: 4,
        reviews: 15,
      },
      {
        id: 6,
        name: 'Ghế Văn Phòng Ergonomic',
        price: 3000000,
        image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300',
        rating: 5,
        reviews: 28,
      },
    ]);
  }, []);

  return (
    <div className="home-page">
      <HeroSlider />

      {/* Flash Sale Section */}
      <section className="flash-sale-section">
        <div className="container">
          <h2>⚡ Flash Sale Hôm Nay</h2>
          <p className="countdown">Kết thúc trong: 02:45:30</p>
          <div className="products-grid">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section-footer">
            <Link to="/products?sale=true" className="btn-secondary">Xem Tất Cả Khuyến Mãi</Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2>Danh Mục Sản Phẩm</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="container">
          <h2>Sản Phẩm Nổi Bật</h2>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🚚</span>
              <h3>Giao Hàng Miễn Phí</h3>
              <p>Cho đơn hàng trên 1 triệu đồng</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🔒</span>
              <h3>Thanh Toán An Toàn</h3>
              <p>Bảo mật giao dịch 100%</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🔄</span>
              <h3>Hoàn Trả 30 Ngày</h3>
              <p>Nếu không hài lòng sản phẩm</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">💬</span>
              <h3>Hỗ Trợ 24/7</h3>
              <p>Đội ngũ hỗ trợ luôn sẵn sàng</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <h2>Đừng Bỏ Lỡ Tin Khuyến Mãi</h2>
          <form className="newsletter-form">
            <input type="email" placeholder="Nhập email của bạn" required />
            <button type="submit">Đăng Ký</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
