import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../styles/Auth.css';

const Register = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    agree: false,
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

    // Validation
    if (!formData.fullName || !formData.email || !formData.password || !formData.phone) {
      toast.error('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Mật khẩu không trùng khớp!');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('Mật khẩu phải có ít nhất 6 ký tự!');
      return;
    }

    if (!formData.agree) {
      toast.error('Vui lòng đồng ý với điều khoản!');
      return;
    }

    // Mock register - in thực tế sẽ gọi API
    setIsLoggedIn(true);
    localStorage.setItem('token', 'mock-token-' + Date.now());
    toast.success('Đăng ký thành công!');
    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <h1>Đăng Ký</h1>
          <p className="auth-subtitle">Tạo tài khoản mới trên FurniShop</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="fullName">Họ và Tên</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Nhập họ và tên"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Nhập email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Số Điện Thoại</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Nhập số điện thoại"
                value={formData.phone}
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
                placeholder="Nhập mật khẩu (tối thiểu 6 ký tự)"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Xác Nhận Mật Khẩu</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Nhập lại mật khẩu"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-options">
              <label>
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  required
                />
                Tôi đồng ý với <a href="#">Điều khoản dịch vụ</a> và <a href="#">Chính sách bảo mật</a>
              </label>
            </div>

            <button type="submit" className="btn-submit">
              Đăng Ký
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
            Đã có tài khoản? <a href="/login">Đăng nhập tại đây</a>
          </p>
        </div>

        <div className="auth-image">
          <img
            src="https://images.unsplash.com/photo-1540932207986-a6f41f0719ab?w=500"
            alt="Furniture"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
