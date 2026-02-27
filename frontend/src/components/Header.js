import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiMenu, FiX, FiUser, FiLogOut, FiSearch } from 'react-icons/fi';
import '../styles/Header.css';

const Header = ({ isLoggedIn, setIsLoggedIn, userRole }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <span className="logo-icon">🛋️</span>
          <span className="logo-text">FurniShop</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <Link to="/" className="nav-link">Trang Chủ</Link>
          <Link to="/products" className="nav-link">Sản Phẩm</Link>
          <Link to="/blogs" className="nav-link">Blog</Link>
          <a href="#" className="nav-link">Liên Hệ</a>
        </nav>

        {/* Search Bar */}
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-btn">
            <FiSearch />
          </button>
        </form>

        {/* Right Actions */}
        <div className="header-actions">
          <Link to="/cart" className="cart-icon">
            <FiShoppingCart />
            <span className="cart-badge">3</span>
          </Link>

          {isLoggedIn ? (
            <div className="user-menu">
              <div className="user-icon">
                <FiUser /><span>Tài Khoản</span>
              </div>
              <div className="dropdown">
                <Link to="/account" className="dropdown-item">Trang Cá Nhân</Link>
                <Link to="/account" className="dropdown-item">Đơn Hàng</Link>
                {(userRole === 'ADMIN' || userRole === 'STAFF') && (
                  <Link to="/admin" className="dropdown-item">Quản Lý</Link>
                )}
                <button className="dropdown-item logout-btn" onClick={handleLogout}>
                  <FiLogOut /> Đăng Xuất
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="login-btn">Đăng Nhập</Link>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="nav-mobile">
          <Link to="/" className="nav-link-mobile">Trang Chủ</Link>
          <Link to="/products" className="nav-link-mobile">Sản Phẩm</Link>
          <Link to="/blogs" className="nav-link-mobile">Blog</Link>
          <a href="#" className="nav-link-mobile">Liên Hệ</a>
          {!isLoggedIn && <Link to="/login" className="nav-link-mobile">Đăng Nhập</Link>}
        </nav>
      )}
    </header>
  );
};

export default Header;
