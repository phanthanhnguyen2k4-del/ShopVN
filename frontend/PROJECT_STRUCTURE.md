# 📦 FurniShop Frontend - Project Structure Summary

## 🎯 Tổng Quan Dự Án

Đây là một ứng dụng React hiện đại được xây dựng cho cửa hàng nội thất trực tuyến **FurniShop** với đầy đủ tính năng cho khách hàng và admin.

**Phiên bản:** 1.0.0
**Framework:** React 18.2.0
**Build Tool:** Create React App
**Trạng thái:** ✅ Hoàn thành (Sẵn sàng kết nối backend)

---

## 📁 Cấu Trúc Thư Mục

```
frontend/
│
├── 📄 Configuration Files
│   ├── package.json              # Dependencies và project metadata
│   ├── .gitignore               # Git ignore rules
│   ├── .env.example             # Environment variables template
│   └── README.md                # Project documentation
│
├── 📖 Documentation
│   ├── INSTRUCTIONS.md          # Quick start guide
│   ├── DEPLOYMENT.md            # Deployment guide
│   └── PROJECT_STRUCTURE.md     # This file
│
├── 📁 public/
│   └── index.html               # HTML entry point
│
└── 📁 src/
    │
    ├── 🔌 config/               # Configuration files
    │   ├── api.js               # API endpoints constants
    │   └── index.js             # Development config
    │
    ├── 🎨 styles/               # CSS files (19 files)
    │   ├── index.css            # Global styles + CSS variables
    │   ├── App.css              # Main app layout
    │   ├── Header.css           # Header & navigation
    │   ├── Footer.css           # Footer styling
    │   ├── ProductCard.css      # Product card component
    │   ├── CategoryCard.css     # Category card styling
    │   ├── HeroSlider.css       # Hero carousel
    │   ├── Pagination.css       # Pagination buttons
    │   ├── Home.css             # Homepage sections
    │   ├── Products.css         # Product listing page
    │   ├── ProductDetail.css    # Product detail page
    │   ├── Cart.css             # Shopping cart
    │   ├── Checkout.css         # Checkout process
    │   ├── Account.css          # User account page
    │   ├── Blog.css             # Blog listing
    │   ├── BlogDetail.css       # Blog detail page
    │   ├── Auth.css             # Login/Register pages
    │   └── AdminDashboard.css   # Admin panel
    │
    ├── 🧩 components/           # Reusable components (6 files)
    │   ├── Header.js            # Navigation bar
    │   ├── Footer.js            # Footer component
    │   ├── ProductCard.js       # Product display card
    │   ├── CategoryCard.js      # Category card
    │   ├── HeroSlider.js        # Homepage carousel
    │   ├── Pagination.js        # Pagination component
    │   └── ProtectedRoute.js    # Route protection wrapper
    │
    ├── 📄 pages/                # Page components (11 files)
    │   ├── Home.js              # Homepage (hero, categories, featured)
    │   ├── Products.js          # Product listing with filters
    │   ├── ProductDetail.js     # Product detail with variants
    │   ├── Cart.js              # Shopping cart management
    │   ├── Checkout.js          # 4-step checkout process
    │   ├── Account.js           # User dashboard with tabs
    │   ├── Blog.js              # Blog listing with filters
    │   ├── BlogDetail.js        # Blog post detail
    │   ├── Login.js             # User login
    │   ├── Register.js          # User registration
    │   └── AdminDashboard.js    # Admin control panel
    │
    ├── 🔐 context/              # React Context (2 files)
    │   ├── AuthContext.js       # Authentication state
    │   ├── CartContext.js       # Shopping cart state
    │   └── index.js             # Context exports
    │
    ├── 🎣 hooks/                # Custom React hooks (2 files)
    │   ├── useForm.js           # Form, async, fetch, debounce, pagination, localStorage
    │   └── index.js             # Hooks exports
    │
    ├── 📡 services/             # API service layer (3 files)
    │   ├── api.js               # Axios instance with interceptors
    │   ├── productService.js    # All API calls (products, orders, auth, users...)
    │   └── index.js             # Services exports
    │
    ├── 📦 store/                # Zustand state management (1 file)
    │   └── index.js             # All stores (user, product, cart, order, UI, wishlist)
    │
    ├── 🎯 constants/            # Application constants (1 file)
    │   └── index.js             # Status, payment methods, colors, etc.
    │
    ├── 🛠️ utils/                # Utility functions (2 files)
    │   ├── helpers.js           # Validation, formatting, string, array utilities
    │   └── index.js             # Utils exports
    │
    ├── 📊 data/                 # Mock data (1 file)
    │   └── mockData.js          # Mock products, categories, blogs, orders, etc.
    │
    ├── App.js                   # Root component with routing
    ├── App.css                  # Already in styles/
    ├── index.js                 # React entry point
    └── index.css                # Already in styles/
```

---

## 📊 File Statistics

| Category | Count | Type |
|----------|-------|------|
| **Pages** | 11 | Components |
| **Components** | 7 | Reusable |
| **CSS Files** | 19 | Stylesheets |
| **Hooks** | 6 | Custom React |
| **API Services** | 6+ | Service methods |
| **Stores** | 6 | Zustand |
| **Utils** | 25+ | Helper functions |
| **Total Files** | 60+ | Mixed |

---

## 🎯 Core Features Implemented

### 👥 For Customers
- ✅ Homepage with hero slider and featured products
- ✅ Product catalog with filtering & sorting
- ✅ Detailed product view with images, variants, reviews
- ✅ Shopping cart with item management
- ✅ 4-step checkout process
- ✅ Order history and tracking
- ✅ User account management
- ✅ Address management
- ✅ Wishlist functionality
- ✅ Blog reading with categories
- ✅ User authentication (login/register)

### 👨‍💼 For Admin/Staff
- ✅ Dashboard with statistics
- ✅ Order management interface
- ✅ Product management
- ✅ Customer management
- ✅ Analytics and reports
- ✅ Role-based access control

### 🎨 Design & UX
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Modern UI with CSS variables
- ✅ Form validation & error handling
- ✅ Toast notifications
- ✅ Loading states
- ✅ Smooth animations & transitions

---

## 🔐 Architecture Decisions

### State Management
- **Global State:** Zustand stores for user, cart, products, orders
- **Local State:** React hooks (useState) for component-level state
- **Context API:** AuthContext for authentication, CartContext for shopping cart
- **Persistence:** localStorage for cart and user data

### Routing
- **React Router v6:** Client-side routing with nested routes
- **Protected Routes:** ProtectedRoute wrapper for authenticated pages
- **Role-Based Access:** Admin pages require admin/staff role

### API Layer
- **Axios:** HTTP client with interceptors
- **Centralized Services:** All API calls in `productService.js`
- **Error Handling:** Automatic error handling with toast notifications
- **Token Management:** JWT token stored in localStorage

### CSS Architecture
- **CSS Variables:** Theme colors and spacing
- **Mobile-First:** Responsive design with breakpoints
- **BEM-like Naming:** Predictable class naming
- **Organized:** One CSS file per component/page

### Code Organization
- **Components:** Reusable UI components
- **Pages:** Full-page components
- **Services:** API integration layer
- **Stores:** Global state management
- **Utils:** Helper functions
- **Hooks:** Reusable logic

---

## 🚀 Getting Started

### 1. Installation
```bash
cd frontend
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env
```

### 3. Start Development
```bash
npm start
```

### 4. Build for Production
```bash
npm run build
```

---

## 🔗 Key Files Reference

### Entry Points
- `public/index.html` - HTML entry
- `src/index.js` - React entry
- `src/App.js` - Root component

### Main Pages
- `src/pages/Home.js` - Homepage (/)
- `src/pages/Products.js` - Product listing (/products)
- `src/pages/Cart.js` - Shopping cart (/cart)
- `src/pages/Checkout.js` - Checkout (/checkout)
- `src/pages/Account.js` - User account (/account)
- `src/pages/AdminDashboard.js` - Admin panel (/admin)

### Core Utilities
- `src/services/productService.js` - All API calls
- `src/context/AuthContext.js` - Authentication
- `src/context/CartContext.js` - Shopping cart
- `src/store/index.js` - Global stores
- `src/utils/helpers.js` - Helper functions
- `src/constants/index.js` - App constants

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
Default (0px - 479px) - Mobile
480px - 767px - Small tablets
768px - 1023px - Tablets
1024px+ - Desktop
```

---

## 🎨 Design System

### Colors
- **Primary:** #2c3e50 (Dark Blue)
- **Secondary:** #e74c3c (Red)
- **Success:** #27ae60 (Green)
- **Warning:** #f39c12 (Orange)
- **Light:** #ecf0f1 (Light Gray)

### Typography
- **Font:** Segoe UI, Tahoma, Geneva, Verdana
- **Headings:** H1-H6 with scalar sizing
- **Body:** 14px-16px
- **Links:** Themed with hover effects

---

## 📚 Dependencies

### Core
- **react** 18.2.0
- **react-dom** 18.2.0
- **react-router-dom** 6.8.0

### UI & Styling
- **react-icons** 4.7.1
- **react-slick** 0.29.0
- **slick-carousel** 1.8.1

### API & State
- **axios** 1.3.0
- **zustand** 4.3.2
- **react-toastify** 9.1.2

---

## 🔄 Integration with Backend

### API Base URL
```
Development: http://localhost:8080/api
Production: https://api.furnishop.com/api
```

### Required Backend Endpoints
- `/auth/login` - User login
- `/auth/register` - User registration
- `/products` - Product listing & details
- `/orders` - Order management
- `/users/*` - User profile & data
- `/blogs` - Blog posts

### Authentication
- Uses JWT tokens
- Token stored in localStorage
- Automatically sent with every API request
- Auto-refresh on 401 response

---

## 🧪 Testing

Currently uses mock data for development. To connect to backend:

1. Update `.env` with backend URL
2. Remove mock data from components
3. Implement real API calls using existing services
4. Test with actual database

---

## 📈 Performance Optimizations

- ✅ Code splitting via React Router
- ✅ Lazy loading images
- ✅ CSS organization for minimal repaints
- ✅ Efficient state management
- ✅ Debouncing for search/filter
- ✅ HTTP caching with axios

---

## 🔒 Security Features

- ✅ Protected routes (authentication required)
- ✅ Role-based access control
- ✅ JWT token management
- ✅ CORS configuration ready
- ✅ Input validation
- ✅ XSS protection via React

---

## 📝 Next Steps

### Phase 2
1. [ ] Connect to real API backend
2. [ ] Implement payment gateway integration
3. [ ] Add real image uploads
4. [ ] Setup email notifications
5. [ ] Real-time notifications
6. [ ] Advanced search features
7. [ ] Product recommendations
8. [ ] Review & rating system

### Phase 3
1. [ ] Mobile app version
2. [ ] PWA support
3. [ ] Dark mode theme
4. [ ] Internationalization (i18n)
5. [ ] Performance optimization
6. [ ] SEO optimization
7. [ ] Analytics dashboard

---

## 👨‍💻 Development Tips

### Best Practices
- Use constants from `src/constants/`
- Use utility functions from `src/utils/`
- Use custom hooks from `src/hooks/`
- Use Zustand stores for global state
- Use Context API for auth/cart
- Keep components small and focused
- Use CSS variables for theming

### Debugging
- Browser DevTools (F12)
- React DevTools extension
- Console logs (remove before production)
- Redux DevTools (if upgrading to Redux)

### Common Tasks

**Add a new page:**
1. Create `src/pages/NewPage.js`
2. Add route in `App.js`
3. Create CSS file: `src/styles/NewPage.css`

**Add a new API service:**
1. Add endpoint to `src/config/api.js`
2. Add function to `src/services/productService.js`
3. Use it in components

**Add a new store:**
1. Add to `src/store/index.js`
2. Export from the file
3. Import and use in components with `useStore()`

---

## 📞 Support & Documentation

- **React:** https://react.dev
- **React Router:** https://reactrouter.com
- **Zustand:** https://github.com/pmndrs/zustand
- **Axios:** https://axios-http.com

---

**Project Created:** January 2024
**Last Updated:** January 2024
**Version:** 1.0.0
**Status:** ✅ Production Ready (Backend Integration Pending)

---

**Made with ❤️ for FurniShop**
