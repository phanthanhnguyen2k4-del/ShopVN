import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiStar, FiShoppingCart, FiHeart, FiX } from 'react-icons/fi';
import { toast } from 'react-toastify';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('brown');
  const [selectedSize, setSelectedSize] = useState('120x60x75');
  const [activeTab, setActiveTab] = useState('description');
  const [showReviews, setShowReviews] = useState(false);

  // Mock product data
  const product = {
    id: parseInt(id),
    name: 'Sofa Da Nâu Hiện Đại',
    price: 15000000,
    salePrice: 12000000,
    rating: 5,
    reviews: 24,
    sold: 1234,
    description: 'Sofa da cao cấp được thiết kế theo phong cách hiện đại, mang đến sự thoải mái tối đa cho gia đình bạn.',
    fullDescription: `
      Đây là một sản phẩm sofa da cao cấp được nhập khẩu từ nước ngoài.
      
      Đặc điểm:
      - Chất liệu: Da tự nhiên 100%
      - Kích thước: 120cm x 60cm x 75cm
      - Màu sắc: Có sẵn 3 màu (Nâu, Đen, Kem)
      - Bảo hành: 12 tháng
      - Chứng chỉ: CE, ISO 9001
      
      Bao gồm:
      - 1 sofa chính
      - 2 gối tựa
      - 1 hướng dẫn bảo trì
    `,
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600',
      'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600',
      'https://images.unsplash.com/photo-1567538096051-b6643b08cf47?w=600',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600',
    ],
    colors: ['brown', 'black', 'cream'],
    sizes: ['120x60x75', '150x80x80', '180x90x85'],
    material: 'Da tự nhiên',
    warranty: '12 tháng',
    shippingTime: '7-10 ngày',
    returnPolicy: '30 ngày hoàn tiền',
  };

  const [mainImage, setMainImage] = useState(product.images[0]);

  const handleAddToCart = () => {
    toast.success(`Đã thêm "${product.name}" vào giỏ hàng!`, {
      position: 'bottom-right',
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/cart');
  };

  const mockReviews = [
    {
      id: 1,
      author: 'Nguyễn Thị A',
      rating: 5,
      date: '2024-01-15',
      comment: 'Sản phẩm rất tốt, giao hàng nhanh. Sẽ mua lại lần nữa!',
      images: [],
    },
    {
      id: 2,
      author: 'Trần Văn B',
      rating: 5,
      date: '2024-01-10',
      comment: 'Chất lượng da rất cao, thiết kế đẹp.',
      images: [],
    },
    {
      id: 3,
      author: 'Phạm Minh C',
      rating: 4,
      date: '2024-01-05',
      comment: 'Tốt, nhưng giao hàng hơi lâu một chút.',
      images: [],
    },
  ];

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <a href="/products">Sản Phẩm</a>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        <div className="product-detail-content">
          {/* Images Section */}
          <div className="images-section">
            <div className="main-image">
              <img src={mainImage} alt={product.name} />
              {product.salePrice && (
                <span className="sale-badge">-{Math.round((1 - product.salePrice / product.price) * 100)}%</span>
              )}
            </div>
            <div className="thumbnail-images">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className={mainImage === img ? 'active' : ''}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="info-section">
            <h1>{product.name}</h1>

            {/* Rating */}
            <div className="rating-section">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="filled" />
                ))}
              </div>
              <span className="review-count">({product.reviews} đánh giá)</span>
              <span className="sold-count">{product.sold} đã bán</span>
            </div>

            {/* Price */}
            <div className="price-section">
              {product.salePrice ? (
                <>
                  <span className="sale-price">{product.salePrice.toLocaleString('vi-VN')}₫</span>
                  <span className="original-price">{product.price.toLocaleString('vi-VN')}₫</span>
                  <span className="discount">
                    -{Math.round((1 - product.salePrice / product.price) * 100)}%
                  </span>
                </>
              ) : (
                <span className="price">{product.price.toLocaleString('vi-VN')}₫</span>
              )}
            </div>

            {/* Options */}
            <div className="options-section">
              {/* Color */}
              <div className="option-group">
                <label>Màu Sắc:</label>
                <div className="color-options">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`color-btn ${selectedColor === color ? 'active' : ''}`}
                      style={{
                        backgroundColor: color === 'brown' ? '#8B4513' : color === 'black' ? '#000' : '#FFFDD0',
                      }}
                      onClick={() => setSelectedColor(color)}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="option-group">
                <label>Kích Thước:</label>
                <div className="size-options">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="option-group">
                <label>Số Lượng:</label>
                <div className="quantity-input">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <input type="number" value={quantity} readOnly />
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>
            </div>

            {/* Information */}
            <div className="info-boxes">
              <div className="info-box">
                <span>🚚</span>
                <div>
                  <p>Giao hàng</p>
                  <small>{product.shippingTime}</small>
                </div>
              </div>
              <div className="info-box">
                <span>🔄</span>
                <div>
                  <p>Hoàn trả</p>
                  <small>{product.returnPolicy}</small>
                </div>
              </div>
              <div className="info-box">
                <span>⭐</span>
                <div>
                  <p>Bảo hành</p>
                  <small>{product.warranty}</small>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="action-buttons">
              <button className="btn-wishlist">
                <FiHeart /> Yêu Thích
              </button>
              <button className="btn-add-cart" onClick={handleAddToCart}>
                <FiShoppingCart /> Thêm Giỏ Hàng
              </button>
              <button className="btn-buy-now" onClick={handleBuyNow}>
                Mua Ngay
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="tabs-section">
          <div className="tabs-header">
            <button
              className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Mô Tả Sản Phẩm
            </button>
            <button
              className={`tab-btn ${activeTab === 'specifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('specifications')}
            >
              Thông Số Kỹ Thuật
            </button>
            <button
              className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Đánh Giá ({product.reviews})
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'description' && (
              <div className="tab-content">
                <h3>Mô Tả Chi Tiết</h3>
                <p>{product.fullDescription}</p>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="tab-content">
                <h3>Thông Số Kỹ Thuật</h3>
                <table className="specs-table">
                  <tbody>
                    <tr>
                      <td>Chất Liệu</td>
                      <td>{product.material}</td>
                    </tr>
                    <tr>
                      <td>Bảo Hành</td>
                      <td>{product.warranty}</td>
                    </tr>
                    <tr>
                      <td>Xuất Xứ</td>
                      <td>Nước Ngoài</td>
                    </tr>
                    <tr>
                      <td>Kiểu Dáng</td>
                      <td>Hiện Đại</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="tab-content">
                <h3>Đánh Giá Từ Khách Hàng</h3>
                <div className="reviews-list">
                  {mockReviews.map((review) => (
                    <div key={review.id} className="review-item">
                      <div className="review-header">
                        <span className="review-author">{review.author}</span>
                        <div className="review-rating">
                          {[...Array(5)].map((_, i) => (
                            <FiStar key={i} className={i < review.rating ? 'filled' : ''} />
                          ))}
                        </div>
                        <span className="review-date">{review.date}</span>
                      </div>
                      <p className="review-comment">{review.comment}</p>
                    </div>
                  ))}
                </div>

                <button className="btn-write-review">Viết Đánh Giá</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
