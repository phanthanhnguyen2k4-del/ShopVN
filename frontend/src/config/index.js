/**
 * Development Configuration
 * Cài đặt cho môi trường phát triển
 */

const isDevelopment = process.env.NODE_ENV === 'development';

const config = {
  // API
  apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:8080/api',
  
  // Features
  features: {
    admin: process.env.REACT_APP_ENABLE_ADMIN === 'true',
    blog: process.env.REACT_APP_ENABLE_BLOG === 'true',
    reviews: process.env.REACT_APP_ENABLE_REVIEWS === 'true',
  },

  // Debug
  debug: isDevelopment,
  
  // Logging
  logging: {
    enabled: isDevelopment,
    level: isDevelopment ? 'debug' : 'error',
  },

  // Cache
  cache: {
    enabled: true,
    duration: 5 * 60 * 1000, // 5 minutes
  },

  // Timeouts
  timeout: {
    api: 30000, // 30 seconds
    upload: 60000, // 60 seconds
  },

  // Pagination
  pagination: {
    defaultSize: 12,
    sizes: [10, 20, 50, 100],
  },
};

// Console log config only in development
if (isDevelopment) {
  console.log('[Config]', config);
}

export default config;
