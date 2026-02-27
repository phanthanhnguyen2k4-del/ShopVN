import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../styles/Auth.css';

const Login = ({ setIsLoggedIn, setUserRole }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    // Mock login - in thực tế sẽ gọi API
    setIsLoggedIn(true);
    setUserRole('CUSTOMER');
    localStorage.setItem('token', 'mock-token-' + Date.now());
    toast.success('Đăng nhập thành công!');
    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <h1>Đăng Nhập</h1>
          <p className="auth-subtitle">Chào mừng quay lại FurniShop</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Nhập email của bạn"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mật Khẩu</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Nhập mật khẩu"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-options">
              <label>
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                Ghi nhớ tôi
              </label>
              <a href="#forgot">Quên mật khẩu?</a>
            </div>

            <button type="submit" className="btn-submit">
              Đăng Nhập
            </button>
          </form>

          <div className="auth-divider">
            <span>hoặc</span>
          </div>

          <div className="auth-social">
            <button className="social-btn google">
              <span>G</span> Google
            </button>
            <button className="social-btn facebook">
              <span>f</span> Facebook
            </button>
            <button className="social-btn zalo">
              <span>Z</span> Zalo
            </button>
          </div>

          <p className="auth-footer">
            Chưa có tài khoản? <a href="/register">Đăng ký ngay</a>
          </p>
        </div>

        <div className="auth-image">
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500"
            alt="Furniture"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
