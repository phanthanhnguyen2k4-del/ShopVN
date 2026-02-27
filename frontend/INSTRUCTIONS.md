# 🛋️ FurniShop Frontend - Quick Start Guide

## 📋 Yêu Cầu

- **Node.js**: 14.0 or above
- **npm**: 6.0 or above (hoặc yarn)
- **Backend API**: Spring Boot running on `http://localhost:8080`

## 🚀 Cài Đặt & Chạy

### 1️⃣ Cài Đặt Dependencies

```bash
# Sử dụng npm
npm install

# Hoặc sử dụng yarn
yarn install
```

### 2️⃣ Cấu Hình Environment

Tạo file `.env` dựa trên `.env.example`:

```bash
cp .env.example .env
```

Cập nhật các giá trị trong `.env`:

```env
REACT_APP_API_URL=http://localhost:8080/api
REACT_APP_ENV=development
REACT_APP_ENABLE_ADMIN=true
REACT_APP_ENABLE_BLOG=true
REACT_APP_ENABLE_REVIEWS=true
```

### 3️⃣ Khởi Chạy Development Server

```bash
npm start
```

Ứng dụng sẽ tự động mở tại `http://localhost:3000`

## 🏗️ Cấu Trúc Thư Mục

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/        # Reusable components (Header, Footer, ProductCard...)
│   ├── pages/            # Page components (Home, Products, Cart...)
│   ├── styles/           # CSS files (organized by page/component)
│   ├── context/          # React Context (Auth, Cart)
│   ├── hooks/            # Custom hooks (useForm, useFetch...)
│   ├── services/         # API services (productService, orderService...)
│   ├── store/            # Zustand stores
│   ├── constants/        # Application constants
│   ├── utils/            # Utility functions (format, validate...)
│   ├── App.js            # Root component with routing
│   └── index.js          # Entry point
├── .env.example          # Environment variables template
├── .gitignore           # Git ignore rules
├── package.json         # Dependencies
└── README.md            # Documentation
```

## 🔑 Các File Quan Trọng

### 📱 Components (`src/components/`)
- **Header.js** - Navigation bar với search, cart, user menu
- **Footer.js** - Footer with social links, newsletter
- **ProductCard.js** - Product display card
- **HeroSlider.js** - Homepage carousel
- **Pagination.js** - Pagination component
- **ProtectedRoute.js** - Route protection wrapper

### 📄 Pages (`src/pages/`)
| File | Route | Mô Tả |
|------|-------|-------|
| Home.js | / | Trang chủ |
| Products.js | /products | Danh sách sản phẩm |
| ProductDetail.js | /products/:id | Chi tiết sản phẩm |
| Cart.js | /cart | Giỏ hàng |
| Checkout.js | /checkout | Thanh toán |
| Account.js | /account | Tài khoản cá nhân |
| Blog.js | /blogs | Danh sách blog |
| BlogDetail.js | /blogs/:id | Chi tiết blog |
| Login.js | /login | Đăng nhập |
| Register.js | /register | Đăng ký |
| AdminDashboard.js | /admin | Bảng điều khiển admin |

### 🔐 Context (`src/context/`)
- **AuthContext.js** - Quản lý xác thực (user, token, login/logout)
- **CartContext.js** - Quản lý giỏ hàng (items, quantity, total)

### 🛠️ Services (`src/services/`)
- **api.js** - Axios instance với interceptors
- **productService.js** - Tất cả các API calls (Products, Orders, Users, Auth...)

### 📦 Stores (`src/store/`)
- **useUserStore** - Zustand store for user data
- **useProductStore** - Zustand store for products
- **useCartStore** - Zustand store for shopping cart
- **useOrderStore** - Zustand store for orders
- **useUIStore** - Zustand store for UI state
- **useWishlistStore** - Zustand store for wishlist

### 🎯 Constants (`src/constants/`)
- **ORDER_STATUS** - Trạng thái đơn hàng
- **PAYMENT_METHOD** - Phương thức thanh toán
- **SHIPPING_METHOD** - Phương thức vận chuyển
- **USER_ROLE** - Vai trò người dùng
- **PRODUCT_CATEGORY** - Danh mục sản phẩm
- **COLOR_PALETTE** - Bảng màu ứng dụng

### 🛠️ Utilities (`src/utils/helpers.js`)
- **Validation**: `validateEmail`, `validatePassword`, `validatePhone`
- **Formatting**: `formatCurrency`, `formatDate`, `formatTime`
- **String**: `truncateText`, `capitalize`, `slugify`
- **Array**: `chunk`, `unique`, `groupBy`
- **Object**: `omit`, `pick`

### 🎣 Custom Hooks (`src/hooks/useForm.js`)
- **useForm** - Form handling with validation
- **useAsync** - Async operations
- **useFetch** - Data fetching
- **useDebounce** - Debouncing values
- **usePagination** - Pagination logic
- **useLocalStorage** - LocalStorage wrapper

## 🔗 API Integration

### Kết Nối Backend

Tất cả API calls được định nghĩa trong `src/services/productService.js`:

```javascript
// Example: Get all products
import { productService } from './services/productService';

const products = await productService.getProducts({ 
  page: 1, 
  limit: 12 
});

// Example: Add to cart
import { cartService } from './services/productService';

await cartService.addToCart(productId, quantity, variant);
```

### Authentication Flow

1. User đăng nhập → `authService.login(email, password)`
2. Server trả về token → Lưu vào localStorage
3. API interceptor tự động thêm token vào mỗi request
4. Nếu token expired → Redirect to login

```javascript
import { authService } from './services/productService';
import { useAuth } from './context/AuthContext';

const { login } = useAuth();

const handleLogin = async (email, password) => {
  const response = await authService.login(email, password);
  login(response.data.user, response.data.token);
};
```

## 🎨 Styling

### Responsive Design

Aplicação sử dụng mobile-first approach với 3 breakpoints:

```css
/* Mobile */
@media (min-width: 768px) {
  /* Tablet */
}

@media (min-width: 1024px) {
  /* Desktop */
}
```

### CSS Variables

Tất cả màu sắc sử dụng CSS variables (defined in `src/styles/index.css`):

```css
:root {
  --primary-color: #2c3e50;
  --secondary-color: #e74c3c;
  --success-color: #27ae60;
  --warning-color: #f39c12;
  --border-color: #ecf0f1;
  --text-color: #333;
  --text-light: #666;
  --bg-light: #f9f9f9;
}
```

## 🧪 Testing

### Run Tests

```bash
npm test
```

### Build for Production

```bash
npm run build
```

## 🐛 Debugging

### Console Logs
Kiểm tra browser console (F12) để xem logs từ application

### Redux DevTools
Nếu sử dụng Redux (future), cài Redux DevTools extension

### API Testing
Dùng Postman hoặc Thunder Client để test API endpoints

## 📚 Thư Viện Chính

| Library | Version | Mục Đích |
|---------|---------|---------|
| react | 18.2.0 | UI Framework |
| react-router-dom | 6.8.0 | Routing |
| react-icons | 4.7.1 | Icons |
| react-slick | 0.29.0 | Carousel |
| axios | 1.3.0 | HTTP Client |
| zustand | 4.3.2 | State Management |
| react-toastify | 9.1.2 | Notifications |

## 🔧 Common Issues

### Issue: Port 3000 đã bị sử dụng

```bash
# Kill process on port 3000
npx kill-port 3000

# Hoặc chỉ định port khác
PORT=3001 npm start
```

### Issue: API connection refused

- Kiểm tra backend đã chạy trên port 8080: `http://localhost:8080`
- Kiểm tra REACT_APP_API_URL trong `.env`
- Clear cache: `npm cache clean --force`

### Issue: Token expired

- Implement token refresh logic (đã có sẵn trong interceptors)
- Login lại nếu cần

### Issue: CORS errors

- Backend phải enable CORS với origin `http://localhost:3000`
- Thêm headers:
```java
response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
```

## 📝 Các Bước Tiếp Theo

1. ✅ Frontend scaffold hoàn tất
2. 🔄 Kết nối với backend API
3. 🧪 Test các tính năng chính
4. 📦 Build for production
5. 🚀 Deploy to hosting

## 📞 Hỗ Trợ

Gặp vấn đề? Kiểm tra:
- [React Documentation](https://react.dev)
- [React Router Docs](https://reactrouter.com)
- [Axios Docs](https://axios-http.com)
- [Zustand Docs](https://github.com/pmndrs/zustand)

---

**Happy Coding! 🚀**
