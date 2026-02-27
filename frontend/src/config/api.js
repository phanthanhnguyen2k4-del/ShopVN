import React from 'react';

/**
 * API Configuration
 */
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

const API_ENDPOINTS = {
  // Authentication
  AUTH_LOGIN: '/auth/login',
  AUTH_REGISTER: '/auth/register',
  AUTH_LOGOUT: '/auth/logout',
  AUTH_REFRESH: '/auth/refresh',

  // Products
  PRODUCTS: '/products',
  PRODUCT_DETAIL: '/products/{id}',
  CATEGORIES: '/categories',
  PRODUCT_VARIANTS: '/products/{id}/variants',

  // Cart & Order
  CART: '/cart',
  ORDERS: '/orders',
  ORDER_DETAIL: '/orders/{id}',
  ORDER_CANCEL: '/orders/{id}/cancel',
  PAYMENTS: '/payments',

  // User
  USER_PROFILE: '/users/profile',
  USER_ADDRESSES: '/users/addresses',
  USER_ORDERS: '/users/orders',
  USER_WISHLIST: '/users/wishlist',

  // Blog
  BLOGS: '/blogs',
  BLOG_DETAIL: '/blogs/{id}',

  // Admin
  ADMIN_DASHBOARD: '/admin/dashboard',
  ADMIN_ORDERS: '/admin/orders',
  ADMIN_PRODUCTS: '/admin/products',
  ADMIN_CUSTOMERS: '/admin/customers',
};

export { API_BASE_URL, API_ENDPOINTS };
