# FurniShop - Cửa Hàng Nội Thất Cao Cấp

## 📖 Giới Thiệu

FurniShop là một ứng dụng web thương mại điện tử hiện đại được xây dựng bằng React, được thiết kế để bán nội thất cao cấp. Ứng dụng cung cấp một trải nghiệm mua sắm hoàn chỉnh với các tính năng từ duyệt sản phẩm, giỏ hàng, thanh toán đến quản lý đơn hàng.

## ✨ Tính Năng Chính

### Cho Khách Hàng (Customer)
- ✅ Duyệt danh mục sản phẩm với lọc và sắp xếp
- ✅ Xem chi tiết sản phẩm với hình ảnh, đánh giá và bình luận
- ✅ Quản lý giỏ hàng
- ✅ Quy trình thanh toán đầy đủ (4 bước)
- ✅ Chọn phương thức thanh toán đa dạng (COD, Ngân hàng, VNPay, Momo, ZaloPay)
- ✅ Quản lý tài khoản cá nhân
- ✅ Xem lịch sử đơn hàng
- ✅ Quản lý địa chỉ giao hàng
- ✅ Danh sách yêu thích (wishlist)
- ✅ Đọc blog và mẹo chăm sóc nội thất
- ✅ Đăng ký/Đăng nhập với OAuth (Google, Facebook, Zalo)

### Cho Admin & Staff
- ✅ Dashboard với thống kê doanh thu, đơn hàng, khách hàng
- ✅ Quản lý sản phẩm (thêm, sửa, xóa)
- ✅ Quản lý đơn hàng (xem, xử lý, cập nhật trạng thái)
- ✅ Quản lý khách hàng
- ✅ Báo cáo và phân tích doanh số
- ✅ Quản lý kho hàng

### Thiết Kế & UX
- ✅ Responsive design (Desktop, Tablet, Mobile)
- ✅ Giao diện hiện đại và thân thiện người dùng
- ✅ Hero slider với flash sale
- ✅ Thanh search thông minh
- ✅ Loading states và error handling
- ✅ Toast notifications

## 🛠️ Công Nghệ Sử Dụng

### Frontend
- **React 18.2** - UI Library
- **React Router DOM 6** - Client-side routing
- **Axios** - HTTP client
- **React Icons** - Icon library
- **React Slick** - Carousel component
- **React Toastify** - Notification library
- **Zustand** - State management
- **SASS / CSS** - Styling

### Design Principles
- Mobile-first responsive design
- Component-based architecture
- Clean and maintainable code
- SEO-friendly structure

## 📁 Cấu Trúc Thư Mục

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── ProductCard.js
│   │   ├── CategoryCard.js
│   │   ├── HeroSlider.js
│   │   └── Pagination.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Products.js
│   │   ├── ProductDetail.js
│   │   ├── Cart.js
│   │   ├── Checkout.js
│   │   ├── Account.js
│   │   ├── Blog.js
│   │   ├── BlogDetail.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   └── AdminDashboard.js
│   ├── styles/
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── Header.css
│   │   ├── Footer.css
│   │   ├── ProductCard.css
│   │   ├── Home.css
│   │   ├── Products.css
│   │   ├── ProductDetail.css
│   │   ├── Cart.css
│   │   ├── Checkout.css
│   │   ├── Account.css
│   │   ├── Blog.css
│   │   ├── Auth.css
│   │   └── AdminDashboard.css
│   ├── assets/ (placeholder cho hình ảnh)
│   ├── hooks/ (custom hooks)
│   ├── services/ (API calls)
│   ├── context/ (React Context)
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🚀 Cách Cài Đặt & Chạy

### Yêu Cầu
- Node.js 14+
- npm 6+

### Cài Đặt

```bash
# Cài đặt dependencies
npm install

# Khởi chạy development server
npm start

# Build cho production
npm run build
```

Ứng dụng sẽ mở tại `http://localhost:3000`

## 📝 Các Trang Chính

| Trang | URL | Mô Tả |
|-------|-----|-------|
| Trang Chủ | `/` | Hero slider, sản phẩm nổi bật, danh mục |
| Sản Phẩm | `/products` | Danh sách sản phẩm với filter & sort |
| Chi Tiết SP | `/products/:id` | Thông tin chi tiết, hình ảnh, review |
| Giỏ Hàng | `/cart` | Quản lý giỏ hàng |
| Thanh Toán | `/checkout` | 4 bước: địa chỉ → vận chuyển → thanh toán → xác nhận |
| Tài Khoản | `/account` | Thông tin cá nhân, đơn hàng, địa chỉ |
| Blog | `/blogs` | Danh sách bài viết |
| Chi Tiết Blog | `/blogs/:id` | Nội dung bài viết đầy đủ |
| Đăng Nhập | `/login` | Đăng nhập với email hoặc OAuth |
| Đăng Ký | `/register` | Tạo tài khoản mới |
| Admin | `/admin` | Dashboard quản lý (chỉ admin/staff) |

## 🔐 Xác Thực

- Hỗ trợ đăng nhập traditional (email + password)
- Hỗ trợ OAuth: Google, Facebook, Zalo
- JWT token cho session management
- Role-based access control (RBAC)

## 💳 Phương Thức Thanh Toán

- **COD** - Thanh toán khi nhận hàng
- **Chuyển Khoản** - Chuyển khoản ngân hàng
- **VNPay** - Cổng thanh toán VNPay
- **Momo** - Ví điện tử Momo
- **ZaloPay** - Ví điện tử ZaloPay

## 🎨 Ghi Chú Thiết Kế

### Màu Sắc
- **Primary**: #2c3e50 (Xanh đậm)
- **Secondary**: #e74c3c (Đỏ)
- **Success**: #27ae60 (Xanh lá)
- **Warning**: #f39c12 (Vàng)
- **Light**: #ecf0f1 (Xám nhạt)

### Typography
- Font chính: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Sizes: h1-h6 theo thứ tự giảm dần

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🔄 Tích Hợp Backend

Ứng dụng được thiết kế để tích hợp với backend API Spring Boot. API endpoints nên kết hợp với:

```
http://localhost:8080/api/
```

### Ví dụ API endpoints
- `GET /api/products` - Lấy danh sách sản phẩm
- `GET /api/products/{id}` - Chi tiết sản phẩm
- `POST /api/orders` - Tạo đơn hàng
- `GET /api/orders/{id}` - Chi tiết đơn hàng
- `POST /api/auth/login` - Đăng nhập
- `POST /api/auth/register` - Đăng ký

## 📚 Các Thư Viện Chính

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "axios": "^1.3.0",
    "react-icons": "^4.7.1",
    "react-slick": "^0.29.0",
    "react-toastify": "^9.1.2",
    "zustand": "^4.3.2"
  }
}
```

## 🎯 Các Tính Năng Tương Lai (Phase 2)

- [ ] Flash Sale Timer
- [ ] Product Comparison
- [ ] Advanced Search
- [ ] Product Recommendations (AI)
- [ ] Live Chat Support
- [ ] Social Media Integration
- [ ] Loyalty Points Program
- [ ] Subscription Box
- [ ] AR/VR Product Preview

## 📧 Hỗ Trợ

Mọi câu hỏi hoặc yêu cầu hỗ trợ, vui lòng liên hệ:
- Email: support@furnishop.vn
- Hotline: 1800-1234

## 📄 License

MIT License - Feel free to use this project for personal and commercial projects.

---

**Phiên bản**: 1.0.0
**Cập nhật lần cuối**: 2024-01-20
