import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut, FiEdit2, FiMapPin, FiHeart, FiSettings } from 'react-icons/fi';
import '../styles/Account.css';

const Account = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    fullName: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phone: '0123456789',
    avatar: 'https://ui-avatars.com/api/?name=Nguyễn+Văn+A',
  });

  const [userOrders] = useState([
    {
      id: 'FS-20240115-00001',
      date: '2024-01-15',
      items: 3,
      total: 42290000,
      status: 'DELIVERED',
      statusText: 'Đã giao',
    },
    {
      id: 'FS-20240110-00002',
      date: '2024-01-10',
      items: 2,
      total: 32000000,
      status: 'PROCESSING',
      statusText: 'Đang xử lý',
    },
    {
      id: 'FS-20240105-00003',
      date: '2024-01-05',
      items: 1,
      total: 12000000,
      status: 'DELIVERED',
      statusText: 'Đã giao',
    },
  ]);

  const [addresses] = useState([
    {
      id: 1,
      fullName: 'Nguyễn Văn A',
      phone: '0123456789',
      address: '123 Nguyễn Huệ, Q.1, TP.HCM',
      isDefault: true,
    },
    {
      id: 2,
      fullName: 'Nguyễn Văn A',
      phone: '0123456789',
      address: '456 Lê Lợi, Q.2, TP.HCM',
      isDefault: false,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!isLoggedIn) {
    return (
      <div className="account-page login-required">
        <div className="container">
          <div className="login-prompt">
            <h1>Vui Lòng Đăng Nhập</h1>
            <p>Bạn cần đăng nhập để xem thông tin tài khoản</p>
            <button className="btn-primary" onClick={() => navigate('/login')}>
              Đăng Nhập
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="account-page">
      <div className="container">
        <div className="account-content">
          {/* Sidebar */}
          <aside className="account-sidebar">
            <div className="profile-card">
              <img src={formData.avatar} alt={formData.fullName} className="avatar" />
              <h3>{formData.fullName}</h3>
              <p>{formData.email}</p>
            </div>

            <nav className="account-nav">
              <button
                className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                <FiEdit2 /> Thông Tin Cá Nhân
              </button>
              <button
                className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
                onClick={() => setActiveTab('orders')}
              >
                📦 Đơn Hàng
              </button>
              <button
                className={`nav-item ${activeTab === 'addresses' ? 'active' : ''}`}
                onClick={() => setActiveTab('addresses')}
              >
                <FiMapPin /> Địa Chỉ
              </button>
              <button
                className={`nav-item ${activeTab === 'wishlist' ? 'active' : ''}`}
                onClick={() => setActiveTab('wishlist')}
              >
                <FiHeart /> Yêu Thích
              </button>
              <button
                className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                <FiSettings /> Cài Đặt
              </button>
              <button className="nav-item logout-btn" onClick={handleLogout}>
                <FiLogOut /> Đăng Xuất
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="account-main">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="tab-content">
                <h2>Thông Tin Cá Nhân</h2>
                <form className="profile-form">
                  <div className="form-group">
                    <label>Họ và Tên</label>
                    <input type="text" value={formData.fullName} readOnly />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" value={formData.email} readOnly />
                  </div>
                  <div className="form-group">
                    <label>Điện Thoại</label>
                    <input type="tel" value={formData.phone} readOnly />
                  </div>
                  <button type="button" className="btn-primary">
                    <FiEdit2 /> Chỉnh Sửa
                  </button>
                </form>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="tab-content">
                <h2>Đơn Hàng Của Tôi</h2>
                <div className="orders-list">
                  {userOrders.length > 0 ? (
                    userOrders.map((order) => (
                      <div key={order.id} className="order-item">
                        <div className="order-header">
                          <span className="order-id">Mã: {order.id}</span>
                          <span className="order-date">{order.date}</span>
                          <span className={`order-status status-${order.status}`}>
                            {order.statusText}
                          </span>
                        </div>
                        <div className="order-details">
                          <p>Số sản phẩm: {order.items}</p>
                          <p className="order-total">
                            {order.total.toLocaleString('vi-VN')} VND
                          </p>
                        </div>
                        <button className="btn-secondary">Chi Tiết</button>
                      </div>
                    ))
                  ) : (
                    <p className="empty-message">Bạn chưa có đơn hàng nào</p>
                  )}
                </div>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="tab-content">
                <h2>Địa Chỉ Của Tôi</h2>
                <div className="addresses-list">
                  {addresses.map((addr) => (
                    <div key={addr.id} className="address-item">
                      <div className="address-info">
                        <h4>{addr.fullName}</h4>
                        <p>{addr.phone}</p>
                        <p>{addr.address}</p>
                        {addr.isDefault && <span className="default-badge">Mặc định</span>}
                      </div>
                      <div className="address-actions">
                        <button className="btn-secondary">Chỉnh Sửa</button>
                        <button className="btn-danger">Xóa</button>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="btn-primary">+ Thêm Địa Chỉ</button>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div className="tab-content">
                <h2>Danh Sách Yêu Thích</h2>
                <p className="empty-message">Danh sách yêu thích của bạn còn trống</p>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="tab-content">
                <h2>Cài Đặt</h2>
                <div className="settings-group">
                  <h3>Thông Báo</h3>
                  <label>
                    <input type="checkbox" defaultChecked />
                    Nhận email về đơn hàng
                  </label>
                  <label>
                    <input type="checkbox" defaultChecked />
                    Nhận email về khuyến mãi
                  </label>
                </div>
                <div className="settings-group">
                  <h3>Bảo Mật</h3>
                  <button className="btn-secondary">Đổi Mật Khẩu</button>
                  <button className="btn-secondary">Quản Lý Thiết Bị Đăng Nhập</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
