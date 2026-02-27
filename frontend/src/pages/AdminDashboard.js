import React, { useState } from 'react';
import { FiBarChart2, FiBox, FiShoppingCart, FiUsers, FiTrendingUp, FiSettings } from 'react-icons/fi';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { label: 'Tổng Doanh Thu', value: '₫2.4B', change: '+12%', icon: FiTrendingUp, color: 'green' },
    { label: 'Đơn Hàng Hôm Nay', value: '24', change: '+5%', icon: FiShoppingCart, color: 'blue' },
    { label: 'Sản Phẩm Bán Chạy', value: '156', change: '+8%', icon: FiBox, color: 'orange' },
    { label: 'Khách Hàng Mới', value: '42', change: '+3%', icon: FiUsers, color: 'purple' },
  ];

  const recentOrders = [
    { id: 'FS-001', customer: 'Nguyễn Văn A', amount: 42290000, status: 'DELIVERED', date: '2024-01-15' },
    { id: 'FS-002', customer: 'Trần Thị B', amount: 32000000, status: 'SHIPPED', date: '2024-01-14' },
    { id: 'FS-003', customer: 'Phạm Văn C', amount: 18500000, status: 'PROCESSING', date: '2024-01-14' },
    { id: 'FS-004', customer: 'Lý Văn D', amount: 25000000, status: 'PENDING', date: '2024-01-13' },
  ];

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <div className="admin-header">
        <h1>🎛️ Bảng Điều Khiển Quản Lý</h1>
        <div className="admin-actions">
          <input type="text" placeholder="Tìm kiếm..." className="search-input" />
          <button className="notification-btn">🔔</button>
          <button className="settings-btn"><FiSettings /></button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="admin-tabs">
        <button
          className={`tab ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          📊 Dashboard
        </button>
        <button
          className={`tab ${activeTab === 'orders' ? 'active' : ''}`}
          onClick={() => setActiveTab('orders')}
        >
          📦 Đơn Hàng
        </button>
        <button
          className={`tab ${activeTab === 'products' ? 'active' : ''}`}
          onClick={() => setActiveTab('products')}
        >
          🛍️ Sản Phẩm
        </button>
        <button
          className={`tab ${activeTab === 'customers' ? 'active' : ''}`}
          onClick={() => setActiveTab('customers')}
        >
          👥 Khách Hàng
        </button>
        <button
          className={`tab ${activeTab === 'analytics' ? 'active' : ''}`}
          onClick={() => setActiveTab('analytics')}
        >
          📈 Thống Kê
        </button>
      </div>

      <div className="admin-container">
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="dashboardsection">
            {/* Stats Cards */}
            <div className="stats-grid">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className={`stat-card stat-${stat.color}`}>
                    <div className="stat-icon">
                      <Icon />
                    </div>
                    <div className="stat-content">
                      <p className="stat-label">{stat.label}</p>
                      <h3 className="stat-value">{stat.value}</h3>
                      <span className="stat-change">{stat.change}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Charts & Recent Orders */}
            <div className="dashboard-row">
              <div className="chart-section">
                <h3>Doanh Thu 7 Ngày Gần Đây</h3>
                <div className="chart-placeholder">
                  <svg viewBox="0 0 400 200" className="simple-chart">
                    <polyline
                      points="10,150 60,100 110,120 160,80 210,90 260,50 310,70 360,40"
                      fill="none"
                      stroke="#4CAF50"
                      strokeWidth="2"
                    />
                    <circle cx="60" cy="100" r="4" fill="#4CAF50" />
                    <circle cx="160" cy="80" r="4" fill="#4CAF50" />
                    <circle cx="360" cy="40" r="4" fill="#4CAF50" />
                  </svg>
                </div>
              </div>

              <div className="recent-orders-section">
                <h3>Đơn Hàng Gần Đây</h3>
                <table className="orders-table">
                  <thead>
                    <tr>
                      <th>Mã ĐH</th>
                      <th>Khách Hàng</th>
                      <th>Số Tiền</th>
                      <th>Trạng Thái</th>
                      <th>Ngày</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id}>
                        <td className="order-id">{order.id}</td>
                        <td>{order.customer}</td>
                        <td className="order-amount">{order.amount.toLocaleString('vi-VN')} ₫</td>
                        <td>
                          <span className={`badge badge-${order.status.toLowerCase()}`}>
                            {order.status === 'DELIVERED' ? '✓ Đã giao' :
                             order.status === 'SHIPPED' ? '📦 Đang giao' :
                             order.status === 'PROCESSING' ? '⏳ Đang xử lý' :
                             '⏸️ Chờ xử lý'}
                          </span>
                        </td>
                        <td>{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="tab-content">
            <h2>Quản Lý Đơn Hàng</h2>
            <div className="orders-controls">
              <button className="btn-primary">+ Đơn Hàng Mới</button>
              <input type="text" placeholder="Tìm theo mã đơn..." className="search-input" />
              <select className="filter-select">
                <option>Trạng Thái</option>
                <option>Chờ Xử Lý</option>
                <option>Đang Xử Lý</option>
                <option>Đã Giao</option>
              </select>
            </div>
            <div className="orders-grid">
              {recentOrders.map((order) => (
                <div key={order.id} className="order-detail-card">
                  <div className="order-header">
                    <h4>{order.id}</h4>
                    <span className={`badge badge-${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </div>
                  <p>Khách: {order.customer}</p>
                  <p>Số tiền: {order.amount.toLocaleString('vi-VN')} ₫</p>
                  <p>Ngày: {order.date}</p>
                  <button className="btn-secondary">Chi Tiết</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="tab-content">
            <h2>Quản Lý Sản Phẩm</h2>
            <div className="products-controls">
              <button className="btn-primary">+ Sản Phẩm Mới</button>
              <input type="text" placeholder="Tìm sản phẩm..." className="search-input" />
              <select className="filter-select">
                <option>Danh Mục</option>
                <option>Phòng Khách</option>
                <option>Phòng Ngủ</option>
                <option>Phòng Ăn</option>
              </select>
            </div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Tên Sản Phẩm</th>
                  <th>Danh Mục</th>
                  <th>Giá</th>
                  <th>Tồn Kho</th>
                  <th>Trạng Thái</th>
                  <th>Hành Động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sofa Da Nâu</td>
                  <td>Phòng Khách</td>
                  <td>12.000.000 ₫</td>
                  <td>45</td>
                  <td><span className="badge badge-active">Hạ Sàn</span></td>
                  <td>
                    <button className="btn-small">Sửa</button>
                    <button className="btn-small danger">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>Giường Gỗ Sồi</td>
                  <td>Phòng Ngủ</td>
                  <td>20.000.000 ₫</td>
                  <td>12</td>
                  <td><span className="badge badge-warning">Ít Hàng</span></td>
                  <td>
                    <button className="btn-small">Sửa</button>
                    <button className="btn-small danger">Xóa</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Customers Tab */}
        {activeTab === 'customers' && (
          <div className="tab-content">
            <h2>Quản Lý Khách Hàng</h2>
            <input type="text" placeholder="Tìm khách hàng..." className="search-input" />
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Tên</th>
                  <th>Email</th>
                  <th>Điện Thoại</th>
                  <th>Đơn Hàng</th>
                  <th>Tổng Chi Tiêu</th>
                  <th>Hành Động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nguyễn Văn A</td>
                  <td>nguyenvana@gmail.com</td>
                  <td>0123456789</td>
                  <td>5</td>
                  <td>120.000.000 ₫</td>
                  <td><button className="btn-small">Chi Tiết</button></td>
                </tr>
                <tr>
                  <td>Trần Thị B</td>
                  <td>tranthib@gmail.com</td>
                  <td>0987654321</td>
                  <td>3</td>
                  <td>75.000.000 ₫</td>
                  <td><button className="btn-small">Chi Tiết</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="tab-content">
            <h2>Thống Kê & Báo Cáo</h2>
            <div className="analytics-grid">
              <div className="analytics-card">
                <h4>Sản Phẩm Bán Chạy</h4>
                <ol>
                  <li>Sofa Da Nâu - 245 bán</li>
                  <li>Giường Gỗ Sồi - 189 bán</li>
                  <li>Bàn Ăn - 156 bán</li>
                </ol>
              </div>
              <div className="analytics-card">
                <h4>Danh Mục Phổ Biến</h4>
                <ol>
                  <li>Phòng Khách - 35%</li>
                  <li>Phòng Ngủ - 28%</li>
                  <li>Phòng Ăn - 25%</li>
                </ol>
              </div>
              <div className="analytics-card">
                <h4>Phương Thức Thanh Toán Phổ Biến</h4>
                <ol>
                  <li>COD - 45%</li>
                  <li>VNPay - 30%</li>
                  <li>Chuyển Khoản - 25%</li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
