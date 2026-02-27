import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../styles/Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Shipping
    fullName: '',
    email: '',
    phone: '',
    province: '',
    district: '',
    ward: '',
    street: '',
    // Payment
    paymentMethod: 'COD',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
  });

  const cartTotal = 38400000 + 50000 + 3840000; // 42,290,000

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!formData.fullName || !formData.phone || !formData.street || !formData.province) {
        toast.error('Vui lòng điền đầy đủ thông tin địa chỉ!');
        return;
      }
    }
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Đặt hàng thành công! Mã đơn hàng: FS-20240115-00001');
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="checkout-page">
      <div className="container">
        <h1>Thanh Toán</h1>

        <div className="checkout-content">
          {/* Steps */}
          <div className="steps-indicator">
            <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
              <span>1</span>
              <p>Địa Chỉ</p>
            </div>
            <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
              <span>2</span>
              <p>Vận Chuyển</p>
            </div>
            <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
              <span>3</span>
              <p>Thanh Toán</p>
            </div>
            <div className={`step ${currentStep >= 4 ? 'active' : ''}`}>
              <span>4</span>
              <p>Xác Nhận</p>
            </div>
          </div>

          <form className="checkout-form" onSubmit={handleSubmit}>
            {/* Step 1: Shipping Address */}
            {currentStep === 1 && (
              <div className="form-step">
                <h2>Địa Chỉ Giao Hàng</h2>

                <div className="form-row">
                  <div className="form-group">
                    <label>Họ và Tên *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Nhập họ và tên"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Nhập email"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Điện Thoại *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Nhập số điện thoại"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Tỉnh/Thành Phố *</label>
                    <select name="province" value={formData.province} onChange={handleInputChange} required>
                      <option value="">Chọn tỉnh/thành phố</option>
                      <option value="TP.HCM">TP.HCM</option>
                      <option value="Hà Nội">Hà Nội</option>
                      <option value="Đà Nẵng">Đà Nẵng</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Quận/Huyện *</label>
                    <select name="district" value={formData.district} onChange={handleInputChange} required>
                      <option value="">Chọn quận/huyện</option>
                      <option value="Q.1">Q.1</option>
                      <option value="Q.3">Q.3</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phường/Xã *</label>
                    <select name="ward" value={formData.ward} onChange={handleInputChange} required>
                      <option value="">Chọn phường/xã</option>
                      <option value="Phường 1">Phường 1</option>
                      <option value="Phường 2">Phường 2</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Địa Chỉ Cụ Thể *</label>
                    <input
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleInputChange}
                      placeholder="Nhập số nhà, tên đường..."
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Shipping Method */}
            {currentStep === 2 && (
              <div className="form-step">
                <h2>Phương Thức Vận Chuyển</h2>

                <div className="shipping-options">
                  <label className="shipping-option">
                    <input type="radio" name="shipping" value="standard" defaultChecked />
                    <div className="option-content">
                      <h4>Giao Hàng Tiêu Chuẩn</h4>
                      <p>7-10 ngày | Miễn phí (đơn hơn 1 triệu)</p>
                    </div>
                  </label>

                  <label className="shipping-option">
                    <input type="radio" name="shipping" value="express" />
                    <div className="option-content">
                      <h4>Giao Hàng Nhanh</h4>
                      <p>1-3 ngày | 150.000 VND</p>
                    </div>
                  </label>

                  <label className="shipping-option">
                    <input type="radio" name="shipping" value="overnight" />
                    <div className="option-content">
                      <h4>Giao Hàng Qua Đêm</h4>
                      <p>1 ngày | 300.000 VND</p>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {currentStep === 3 && (
              <div className="form-step">
                <h2>Phương Thức Thanh Toán</h2>

                <div className="payment-options">
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="COD"
                      checked={formData.paymentMethod === 'COD'}
                      onChange={handleInputChange}
                    />
                    <span>💵 Thanh Toán Khi Nhận Hàng (COD)</span>
                  </label>

                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="BANK"
                      checked={formData.paymentMethod === 'BANK'}
                      onChange={handleInputChange}
                    />
                    <span>🏦 Chuyển Khoản Ngân Hàng</span>
                  </label>

                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="VNPAY"
                      checked={formData.paymentMethod === 'VNPAY'}
                      onChange={handleInputChange}
                    />
                    <span>💳 Thanh Toán Qua VNPay</span>
                  </label>

                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="ZALOPAY"
                      checked={formData.paymentMethod === 'ZALOPAY'}
                      onChange={handleInputChange}
                    />
                    <span>📱 Thanh Toán Qua ZaloPay</span>
                  </label>
                </div>

                {formData.paymentMethod === 'BANK' && (
                  <div className="bank-info">
                    <h4>Thông Tin Chuyển Khoản</h4>
                    <p>Ngân hàng: Vietcombank</p>
                    <p>Số tài khoản: 1234567890</p>
                    <p>Chủ tài khoản: FurniShop Co., Ltd</p>
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <div className="form-step">
                <h2>Xác Nhận Đơn Hàng</h2>

                <div className="order-summary">
                  <h3>Thông Tin Giao Hàng</h3>
                  <p><strong>{formData.fullName}</strong></p>
                  <p>{formData.phone}</p>
                  <p>{formData.street}, {formData.ward}, {formData.district}, {formData.province}</p>

                  <h3>Phương Thức Thanh Toán</h3>
                  <p>{
                    formData.paymentMethod === 'COD' ? 'Thanh toán khi nhận hàng' :
                    formData.paymentMethod === 'BANK' ? 'Chuyển khoản ngân hàng' :
                    formData.paymentMethod === 'VNPAY' ? 'VNPay' :
                    'ZaloPay'
                  }</p>

                  <div className="order-total">
                    <p><span>Tạm tính:</span> <span>38.400.000 VND</span></p>
                    <p><span>Phí vận chuyển:</span> <span>50.000 VND</span></p>
                    <p><span>Thuế:</span> <span>3.840.000 VND</span></p>
                    <p className="total"><span>Tổng cộng:</span> <span>{cartTotal.toLocaleString('vi-VN')} VND</span></p>
                  </div>

                  <p className="terms">
                    <input type="checkbox" required />
                    <span>Tôi đồng ý với điều khoản sử dụng và chính sách bảo mật</span>
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="form-actions">
              {currentStep > 1 && (
                <button type="button" className="btn-secondary" onClick={handlePrevStep}>
                  ← Quay Lại
                </button>
              )}

              {currentStep < 4 ? (
                <button type="button" className="btn-primary" onClick={handleNextStep}>
                  Tiếp Tục →
                </button>
              ) : (
                <button type="submit" className="btn-primary">
                  Đặt Hàng
                </button>
              )}
            </div>
          </form>

          {/* Order Summary */}
          <div className="order-summary-sidebar">
            <h3>Đơn Hàng</h3>

            <div className="summary-items">
              <div className="summary-item">
                <span>Sofa Da Nâu x 1</span>
                <span>12.000.000 VND</span>
              </div>
              <div className="summary-item">
                <span>Giường Gỗ Sồi x 1</span>
                <span>20.000.000 VND</span>
              </div>
              <div className="summary-item">
                <span>Bàn Ăn Gỗ x 2</span>
                <span>12.800.000 VND</span>
              </div>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-detail">
              <p><span>Tạm tính:</span> <span>44.800.000 VND</span></p>
              <p><span>Vận chuyển:</span> <span>Miễn phí</span></p>
              <p><span>Thuế (10%):</span> <span>4.480.000 VND</span></p>
            </div>

            <div className="summary-total">
              <p><span>Tổng:</span> <span>{cartTotal.toLocaleString('vi-VN')} VND</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
