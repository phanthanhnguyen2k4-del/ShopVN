import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Content */}
        <div className="footer-content">
          <div className="footer-section">
            <h3>Về FurniShop</h3>
            <ul>
              <li><Link to="/">Trang Chủ</Link></li>
              <li><Link to="/products">Sản Phẩm</Link></li>
              <li><Link to="/blogs">Blog</Link></li>
              <li><a href="#">Về Chúng Tôi</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Chính Sách</h3>
            <ul>
              <li><a href="#">Điều Khoản Dịch Vụ</a></li>
              <li><a href="#">Chính Sách Bảo Mật</a></li>
              <li><a href="#">Chính Sách Hoàn Trả</a></li>
              <li><a href="#">Hướng Dẫn Mua Hàng</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Liên Hệ</h3>
            <ul>
              <li className="contact-item">
                <FiMapPin /> 123 Nguyễn Huệ, Q.1, TP.HCM
              </li>
              <li className="contact-item">
                <FiPhone /> 1800-1234
              </li>
              <li className="contact-item">
                <FiMail /> contact@furnishop.vn
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Theo Dõi</h3>
            <div className="social-links">
              <a href="#" className="social-link"><FiFacebook /></a>
              <a href="#" className="social-link"><FiInstagram /></a>
              <a href="#" className="social-link"><FiTwitter /></a>
            </div>
            <div className="newsletter">
              <h4>Đăng Ký Nhận Tin</h4>
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email của bạn" required />
                <button type="submit">Đăng Ký</button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2024 FurniShop. All rights reserved.</p>
          <div className="payment-methods">
            <span>💳</span>
            <span>🏦</span>
            <span>💰</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
