import api from './api';
import { API_ENDPOINTS } from '../config/api';

/**
 * Product API Services
 */
export const productService = {
  // Get all products with filters
  getProducts: (params = {}) => {
    return api.get(API_ENDPOINTS.PRODUCTS, { params });
  },

  // Get product by ID
  getProductById: (id) => {
    return api.get(API_ENDPOINTS.PRODUCT_DETAIL.replace('{id}', id));
  },

  // Get product variants
  getVariants: (id) => {
    return api.get(API_ENDPOINTS.PRODUCT_VARIANTS.replace('{id}', id));
  },

  // Get categories
  getCategories: () => {
    return api.get(API_ENDPOINTS.CATEGORIES);
  },
};

/**
 * Cart API Services
 */
export const cartService = {
  // Get cart
  getCart: () => {
    return api.get(API_ENDPOINTS.CART);
  },

  // Add to cart
  addToCart: (productId, quantity, variant = {}) => {
    return api.post(API_ENDPOINTS.CART, {
      productId,
      quantity,
      ...variant,
    });
  },

  // Update cart item
  updateCart: (itemId, quantity) => {
    return api.put(`${API_ENDPOINTS.CART}/${itemId}`, { quantity });
  },

  // Remove from cart
  removeFromCart: (itemId) => {
    return api.delete(`${API_ENDPOINTS.CART}/${itemId}`);
  },

  // Clear cart
  clearCart: () => {
    return api.delete(API_ENDPOINTS.CART);
  },
};

/**
 * Order API Services
 */
export const orderService = {
  // Create order
  createOrder: (orderData) => {
    return api.post(API_ENDPOINTS.ORDERS, orderData);
  },

  // Get all orders
  getOrders: (params = {}) => {
    return api.get(API_ENDPOINTS.ORDERS, { params });
  },

  // Get order by ID
  getOrderById: (id) => {
    return api.get(API_ENDPOINTS.ORDER_DETAIL.replace('{id}', id));
  },

  // Cancel order
  cancelOrder: (id, reason = '') => {
    return api.post(API_ENDPOINTS.ORDER_CANCEL.replace('{id}', id), { reason });
  },

  // Upload payment proof
  uploadPaymentProof: (orderId, file) => {
    const formData = new FormData();
    formData.append('file', file);
    return api.post(`${API_ENDPOINTS.ORDERS}/${orderId}/upload-proof`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
};

/**
 * Authentication API Services
 */
export const authService = {
  // Login
  login: (email, password) => {
    return api.post(API_ENDPOINTS.AUTH_LOGIN, { email, password });
  },

  // Register
  register: (userData) => {
    return api.post(API_ENDPOINTS.AUTH_REGISTER, userData);
  },

  // Logout
  logout: () => {
    return api.post(API_ENDPOINTS.AUTH_LOGOUT);
  },

  // Refresh token
  refreshToken: () => {
    return api.post(API_ENDPOINTS.AUTH_REFRESH);
  },

  // Google OAuth
  loginWithGoogle: (token) => {
    return api.post(`${API_ENDPOINTS.AUTH_LOGIN}/google`, { token });
  },

  // Facebook OAuth
  loginWithFacebook: (token) => {
    return api.post(`${API_ENDPOINTS.AUTH_LOGIN}/facebook`, { token });
  },
};

/**
 * User API Services
 */
export const userService = {
  // Get profile
  getProfile: () => {
    return api.get(API_ENDPOINTS.USER_PROFILE);
  },

  // Update profile
  updateProfile: (userData) => {
    return api.put(API_ENDPOINTS.USER_PROFILE, userData);
  },

  // Get addresses
  getAddresses: () => {
    return api.get(API_ENDPOINTS.USER_ADDRESSES);
  },

  // Add address
  addAddress: (addressData) => {
    return api.post(API_ENDPOINTS.USER_ADDRESSES, addressData);
  },

  // Update address
  updateAddress: (id, addressData) => {
    return api.put(`${API_ENDPOINTS.USER_ADDRESSES}/${id}`, addressData);
  },

  // Delete address
  deleteAddress: (id) => {
    return api.delete(`${API_ENDPOINTS.USER_ADDRESSES}/${id}`);
  },

  // Get orders
  getOrders: (params = {}) => {
    return api.get(API_ENDPOINTS.USER_ORDERS, { params });
  },

  // Get wishlist
  getWishlist: () => {
    return api.get(API_ENDPOINTS.USER_WISHLIST);
  },

  // Add to wishlist
  addToWishlist: (productId) => {
    return api.post(API_ENDPOINTS.USER_WISHLIST, { productId });
  },

  // Remove from wishlist
  removeFromWishlist: (productId) => {
    return api.delete(`${API_ENDPOINTS.USER_WISHLIST}/${productId}`);
  },
};

/**
 * Blog API Services
 */
export const blogService = {
  // Get all blogs
  getBlogs: (params = {}) => {
    return api.get(API_ENDPOINTS.BLOGS, { params });
  },

  // Get blog by ID
  getBlogById: (id) => {
    return api.get(API_ENDPOINTS.BLOG_DETAIL.replace('{id}', id));
  },

  // Create comment
  createComment: (blogId, commentData) => {
    return api.post(`${API_ENDPOINTS.BLOG_DETAIL.replace('{id}', blogId)}/comments`, commentData);
  },
};

/**
 * Admin API Services
 */
export const adminService = {
  // Get dashboard stats
  getDashboard: () => {
    return api.get(API_ENDPOINTS.ADMIN_DASHBOARD);
  },

  // Get orders (admin)
  getOrders: (params = {}) => {
    return api.get(API_ENDPOINTS.ADMIN_ORDERS, { params });
  },

  // Update order status
  updateOrderStatus: (id, status) => {
    return api.put(`${API_ENDPOINTS.ADMIN_ORDERS}/${id}/status`, { status });
  },

  // Get products (admin)
  getProducts: (params = {}) => {
    return api.get(API_ENDPOINTS.ADMIN_PRODUCTS, { params });
  },

  // Create product
  createProduct: (productData) => {
    return api.post(API_ENDPOINTS.ADMIN_PRODUCTS, productData);
  },

  // Update product
  updateProduct: (id, productData) => {
    return api.put(`${API_ENDPOINTS.ADMIN_PRODUCTS}/${id}`, productData);
  },

  // Delete product
  deleteProduct: (id) => {
    return api.delete(`${API_ENDPOINTS.ADMIN_PRODUCTS}/${id}`);
  },

  // Get customers (admin)
  getCustomers: (params = {}) => {
    return api.get(API_ENDPOINTS.ADMIN_CUSTOMERS, { params });
  },

  // Get analytics
  getAnalytics: (params = {}) => {
    return api.get(`${API_ENDPOINTS.ADMIN_DASHBOARD}/analytics`, { params });
  },
};
