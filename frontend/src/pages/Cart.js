import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiTrash2, FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';
import '../styles/Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Sofa Da Nâu Hiện Đại',
      price: 12000000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=100',
      color: 'Nâu',
      size: '120x60x75',
    },
    {
      id: 2,
      name: 'Giường Gỗ Sồi Cao Cấp',
      price: 20000000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1540932207986-a6f41f0719ab?w=100',
      color: 'Vàng',
      size: '160x200',
    },
    {
      id: 3,
      name: 'Bàn Ăn Gỗ Óc Chó',
      price: 6400000,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=100',
      color: 'Nâu',
      size: '120x80',
    },
  ]);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = subtotal > 1000000 ? 0 : 50000;
  const tax = subtotal * 0.1;
  const total = subtotal + shippingFee + tax;

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setItems(items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
    toast.info('Đã xóa sản phẩm khỏi giỏ hàng');
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('Giỏ hàng còn trống!');
      return;
    }
    navigate('/checkout');
  };

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Giỏ Hàng Của Bạn</h1>
          <p className="item-count">{items.length} sản phẩm</p>
        </div>

        {items.length > 0 ? (
          <div className="cart-content">
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="item-image" />

                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-specs">
                      Màu: {item.color} | Kích thước: {item.size}
                    </p>
                    <p className="item-price">
                      {item.price.toLocaleString('vi-VN')}₫
                    </p>
                  </div>

                  <div className="item-quantity">
                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                    <input type="number" value={item.quantity} readOnly />
                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                  </div>

                  <div className="item-total">
                    <p className="total-price">
                      {(item.price * item.quantity).toLocaleString('vi-VN')}₫
                    </p>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveItem(item.id)}
                    title="Xóa"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Tóm Tắt Đơn Hàng</h3>

              <div className="summary-row">
                <span>Tạm Tính:</span>
                <span>{subtotal.toLocaleString('vi-VN')}₫</span>
              </div>

              <div className="summary-row">
                <span>Phí Vận Chuyển:</span>
                <span className={shippingFee === 0 ? 'free' : ''}>
                  {shippingFee === 0 ? 'Miễn phí' : shippingFee.toLocaleString('vi-VN') + '₫'}
                </span>
              </div>

              <div className="summary-row">
                <span>Thuế (10%):</span>
                <span>{tax.toLocaleString('vi-VN')}₫</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row total">
                <span>Tổng Cộng:</span>
                <span>{total.toLocaleString('vi-VN')}₫</span>
              </div>

              {subtotal < 1000000 && (
                <p className="free-ship-hint">
                  ✓ Mua thêm {(1000000 - subtotal).toLocaleString('vi-VN')}₫ để được miễn phí vận chuyển
                </p>
              )}

              <button className="btn-checkout" onClick={handleCheckout}>
                Thanh Toán Ngay
              </button>

              <Link to="/products" className="btn-continue-shopping">
                <FiArrowLeft /> Tiếp Tục Mua Sắm
              </Link>
            </div>
          </div>
        ) : (
          <div className="empty-cart">
            <div className="empty-icon">🛒</div>
            <h2>Giỏ Hàng Của Bạn Còn Trống</h2>
            <p>Hãy quay lại cửa hàng và chọn những sản phẩm yêu thích</p>
            <Link to="/products" className="btn-primary">
              Quay Lại Cửa Hàng
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
