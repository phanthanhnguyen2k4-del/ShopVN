/**
 * Validation utilities
 */

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePhone = (phone) => {
  const regex = /^(0|84)\d{9}$/;
  return regex.test(phone);
};

export const validatePassword = (password) => {
  // At least 6 characters
  return password && password.length >= 6;
};

export const validatePasswordStrength = (password) => {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;
  return strength; // 0-4
};

export const validateRules = {
  required: (value) => {
    if (typeof value === 'string') return value.trim().length > 0;
    return !!value;
  },

  email: (value) => validateEmail(value),

  minLength: (length) => (value) => {
    return value && value.length >= length;
  },

  maxLength: (length) => (value) => {
    return !value || value.length <= length;
  },

  pattern: (pattern) => (value) => {
    return !value || pattern.test(value);
  },

  phone: (value) => validatePhone(value),

  match: (otherValue) => (value) => {
    return value === otherValue;
  },
};

/**
 * Format utilities
 */

export const formatCurrency = (amount, currency = 'VND') => {
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  });
  return formatter.format(amount);
};

export const formatDate = (date, format = 'dd/MM/yyyy') => {
  if (!date) return '';
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();

  return format
    .replace('dd', day)
    .replace('MM', month)
    .replace('yyyy', year);
};

export const formatTime = (date) => {
  if (!date) return '';
  return new Date(date).toLocaleTimeString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const formatNumber = (num) => {
  return new Intl.NumberFormat('vi-VN').format(num);
};

/**
 * String utilities
 */

export const truncateText = (text, maxLength) => {
  if (!text) return '';
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const slugify = (str) => {
  if (!str) return '';
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

/**
 * Array utilities
 */

export const chunk = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

export const unique = (array, key) => {
  return [...new Map(array.map((item) => [key ? item[key] : item, item])).values()];
};

export const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    (result[item[key]] = result[item[key]] || []).push(item);
    return result;
  }, {});
};

/**
 * Object utilities
 */

export const omit = (obj, keys) => {
  const result = { ...obj };
  keys.forEach((key) => delete result[key]);
  return result;
};

export const pick = (obj, keys) => {
  const result = {};
  keys.forEach((key) => {
    if (key in obj) result[key] = obj[key];
  });
  return result;
};

/**
 * URL utilities
 */

export const buildQueryString = (params) => {
  return Object.entries(params)
    .filter(([, value]) => value != null && value !== '')
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
};

export const parseQueryString = (queryString) => {
  const result = {};
  (queryString || '').split('&').forEach((pair) => {
    const [key, value] = pair.split('=');
    if (key) result[decodeURIComponent(key)] = decodeURIComponent(value || '');
  });
  return result;
};
