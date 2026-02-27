/**
 * Application Constants
 */

// Order Status
export const ORDER_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
  FAILED: 'failed',
};

export const ORDER_STATUS_LABELS = {
  pending: 'Chờ xử lý',
  processing: 'Đang xử lý',
  shipped: 'Đã gửi',
  delivered: 'Đã giao',
  cancelled: 'Hủy',
  failed: 'Thất bại',
};

export const ORDER_STATUS_COLORS = {
  pending: '#ff9800',
  processing: '#2196f3',
  shipped: '#9c27b0',
  delivered: '#4caf50',
  cancelled: '#f44336',
  failed: '#f44336',
};

// Payment Method
export const PAYMENT_METHOD = {
  COD: 'cod',
  BANK_TRANSFER: 'bank_transfer',
  VNPAY: 'vnpay',
  MOMO: 'momo',
  ZALOPAY: 'zalopay',
};

export const PAYMENT_METHOD_LABELS = {
  cod: 'Thanh toán khi nhận hàng (COD)',
  bank_transfer: 'Chuyển khoản ngân hàng',
  vnpay: 'VNPay',
  momo: 'Ví Momo',
  zalopay: 'ZaloPay',
};

// Shipping Method
export const SHIPPING_METHOD = {
  STANDARD: 'standard',
  EXPRESS: 'express',
  SAME_DAY: 'same_day',
};

export const SHIPPING_METHOD_LABELS = {
  standard: 'Giao hàng tiêu chuẩn (3-5 ngày)',
  express: 'Giao hàng nhanh (1-2 ngày)',
  same_day: 'Giao hàng cùng ngày',
};

export const SHIPPING_COSTS = {
  standard: 50000,
  express: 100000,
  same_day: 150000,
};

// User Role
export const USER_ROLE = {
  CUSTOMER: 'customer',
  STAFF: 'staff',
  ADMIN: 'admin',
};

// Product Category
export const PRODUCT_CATEGORY = {
  SOFA: 'sofa',
  BED: 'bed',
  TABLE: 'table',
  CHAIR: 'chair',
  CABINET: 'cabinet',
  LAMP: 'lamp',
  RUG: 'rug',
  DECORATION: 'decoration',
};

export const PRODUCT_CATEGORY_LABELS = {
  sofa: 'Ghế Sofa',
  bed: 'Giường Ngủ',
  table: 'Bàn',
  chair: 'Ghế',
  cabinet: 'Tủ',
  lamp: 'Đèn',
  rug: 'Thảm',
  decoration: 'Trang Trí',
};

// Product Material
export const PRODUCT_MATERIAL = {
  WOOD: 'wood',
  LEATHER: 'leather',
  FABRIC: 'fabric',
  METAL: 'metal',
  GLASS: 'glass',
  PLASTIC: 'plastic',
};

export const PRODUCT_MATERIAL_LABELS = {
  wood: 'Gỗ',
  leather: 'Da',
  fabric: 'Vải',
  metal: 'Kim loại',
  glass: 'Kính',
  plastic: 'Nhựa',
};

// Color
export const COLOR_PALETTE = {
  PRIMARY: '#2c3e50',
  SECONDARY: '#e74c3c',
  SUCCESS: '#27ae60',
  WARNING: '#f39c12',
  DANGER: '#e74c3c',
  INFO: '#3498db',
  LIGHT: '#ecf0f1',
  DARK: '#34495e',
};

// Pagination
export const DEFAULT_PAGE_SIZE = 12;
export const PAGINATION_SIZES = [10, 20, 50, 100];

// Responsive Breakpoints
export const BREAKPOINTS = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1200,
  xxl: 1400,
};

// Tax Rate
export const TAX_RATE = 0.1; // 10%

// Discount
export const FLASH_SALE_DISCOUNT = 0.2; // 20%

// Rating
export const RATING_SCALE = 5;

// Search
export const SEARCH_DEBOUNCE_DELAY = 300;
export const SEARCH_MIN_CHARACTERS = 2;

// Toast Messages
export const TOAST_MESSAGE = {
  ADD_TO_CART_SUCCESS: 'Thêm vào giỏ hàng thành công!',
  REMOVE_FROM_CART_SUCCESS: 'Xóa khỏi giỏ hàng thành công!',
  ADD_TO_WISHLIST_SUCCESS: 'Thêm vào danh sách yêu thích thành công!',
  REMOVE_FROM_WISHLIST_SUCCESS: 'Xóa khỏi danh sách yêu thích thành công!',
  LOGIN_SUCCESS: 'Đăng nhập thành công!',
  LOGOUT_SUCCESS: 'Đăng xuất thành công!',
  REGISTER_SUCCESS: 'Đăng ký thành công!',
  UPDATE_PROFILE_SUCCESS: 'Cập nhật thong tin thành công!',
  ORDER_CREATE_SUCCESS: 'Tạo đơn hàng thành công!',
  COPY_SUCCESS: 'Sao chép thành công!',
  ERROR: 'Có lỗi xảy ra, vui lòng thử lại!',
};

// Form
export const MIN_PASSWORD_LENGTH = 6;
export const MAX_PASSWORD_LENGTH = 50;
export const MIN_USERNAME_LENGTH = 3;
export const MAX_USERNAME_LENGTH = 50;

export default {
  ORDER_STATUS,
  ORDER_STATUS_LABELS,
  ORDER_STATUS_COLORS,
  PAYMENT_METHOD,
  PAYMENT_METHOD_LABELS,
  SHIPPING_METHOD,
  SHIPPING_METHOD_LABELS,
  SHIPPING_COSTS,
  USER_ROLE,
  PRODUCT_CATEGORY,
  PRODUCT_CATEGORY_LABELS,
  PRODUCT_MATERIAL,
  PRODUCT_MATERIAL_LABELS,
  COLOR_PALETTE,
  DEFAULT_PAGE_SIZE,
  PAGINATION_SIZES,
  BREAKPOINTS,
  TAX_RATE,
  FLASH_SALE_DISCOUNT,
  RATING_SCALE,
  SEARCH_DEBOUNCE_DELAY,
  SEARCH_MIN_CHARACTERS,
  TOAST_MESSAGE,
  MIN_PASSWORD_LENGTH,
  MAX_PASSWORD_LENGTH,
  MIN_USERNAME_LENGTH,
  MAX_USERNAME_LENGTH,
};
