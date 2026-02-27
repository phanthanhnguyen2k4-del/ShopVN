/**
 * Mock Data for Development
 */

export const mockProducts = [
  {
    id: 1,
    name: 'Sofa Cao Cấp L-Shape',
    price: 15000000,
    salePrice: 12000000,
    image: 'https://via.placeholder.com/300x300?text=L-Shape+Sofa',
    category: 'sofa',
    material: 'leather',
    rating: 4.5,
    reviews: 24,
    description: 'Sofa L-shape cao cấp với thiết kế hiện đại, chất liệu da tự nhiên',
    colors: ['Đen', 'Trắng', 'Nâu'],
    sizes: ['2 chỗ', '3 chỗ', '4 chỗ'],
    warranty: '24 tháng',
    trending: true,
  },
  {
    id: 2,
    name: 'Giường Ngủ Gỗ Sồi',
    price: 8000000,
    salePrice: 6500000,
    image: 'https://via.placeholder.com/300x300?text=Wood+Bed',
    category: 'bed',
    material: 'wood',
    rating: 4.8,
    reviews: 31,
    description: 'Giường ngủ gỗ sồi nguyên khối, kiểu dáng tân cổ',
    colors: ['Tự nhiên', 'Nâu đậm'],
    sizes: ['Queen', 'King'],
    warranty: '36 tháng',
    trending: false,
  },
  {
    id: 3,
    name: 'Bàn Ăn Marble 6 Chỗ',
    price: 5000000,
    salePrice: 4200000,
    image: 'https://via.placeholder.com/300x300?text=Marble+Table',
    category: 'table',
    material: 'glass',
    rating: 4.3,
    reviews: 15,
    description: 'Bàn ăn mặt đá marble, chân inox sang trọng',
    colors: ['Trắng'],
    sizes: ['6 chỗ', '8 chỗ'],
    warranty: '24 tháng',
    trending: false,
  },
  {
    id: 4,
    name: 'Ghế Làm Việc Ergonomic',
    price: 3000000,
    salePrice: 2400000,
    image: 'https://via.placeholder.com/300x300?text=Office+Chair',
    category: 'chair',
    material: 'fabric',
    rating: 4.6,
    reviews: 42,
    description: 'Ghế làm việc ergonomic với tính năng điều chỉnh tối đa',
    colors: ['Đen', 'Xám'],
    sizes: ['M'],
    warranty: '24 tháng',
    trending: true,
  },
];

export const mockCategories = [
  { id: 1, name: 'Ghế Sofa', slug: 'sofa', image: 'https://via.placeholder.com/200x200?text=Sofa' },
  { id: 2, name: 'Giường Ngủ', slug: 'bed', image: 'https://via.placeholder.com/200x200?text=Bed' },
  { id: 3, name: 'Bàn', slug: 'table', image: 'https://via.placeholder.com/200x200?text=Table' },
  { id: 4, name: 'Ghế', slug: 'chair', image: 'https://via.placeholder.com/200x200?text=Chair' },
];

export const mockReviews = [
  {
    id: 1,
    authorName: 'Nguyễn Văn A',
    rating: 5,
    comment: 'Sản phẩm chất lượng tốt, giao hàng nhanh chóng. Rất hài lòng!',
    date: '2024-01-15',
    verified: true,
  },
  {
    id: 2,
    authorName: 'Trần Thị B',
    rating: 4,
    comment: 'Đẹp và bền, nhưng giá hơi cao một chút.',
    date: '2024-01-10',
    verified: true,
  },
  {
    id: 3,
    authorName: 'Lê Văn C',
    rating: 5,
    comment: 'Tuyệt vời! Chính xác như hình ảnh. Sẽ mua thêm lần sau.',
    date: '2024-01-05',
    verified: true,
  },
];

export const mockOrderHistory = [
  {
    id: 'ORD-2024-001',
    date: '2024-01-20',
    total: 12050000,
    status: 'delivered',
    items: 2,
  },
  {
    id: 'ORD-2024-002',
    date: '2024-01-15',
    total: 4250000,
    status: 'processing',
    items: 1,
  },
  {
    id: 'ORD-2024-003',
    date: '2024-01-10',
    total: 6550000,
    status: 'shipped',
    items: 1,
  },
];

export const mockAddresses = [
  {
    id: 1,
    fullName: 'Nguyễn Văn A',
    phone: '0912345678',
    address: '123 Đường Nguyễn Huệ',
    ward: 'Bến Nghé',
    district: 'Quận 1',
    province: 'TP. Hồ Chí Minh',
    isDefault: true,
  },
  {
    id: 2,
    fullName: 'Nguyễn Văn A',
    phone: '0987654321',
    address: '456 Đường Trần Hưng Đạo',
    ward: 'Nguyễn Cư Trinh',
    district: 'Quận 1',
    province: 'TP. Hồ Chí Minh',
    isDefault: false,
  },
];

export const mockBlogs = [
  {
    id: 1,
    title: 'Cách chọn sofa phù hợp cho phòng khách',
    excerpt: 'Tìm hiểu những tiêu chí quan trọng để chọn sofa ...',
    content: 'Lorem ipsum dolor sit amet...',
    image: 'https://via.placeholder.com/400x300?text=Blog+1',
    author: 'Nguyễn Văn A',
    date: '2024-01-20',
    readTime: 5,
    category: 'tips',
  },
  {
    id: 2,
    title: 'Xu hướng thiết kế nội thất 2024',
    excerpt: 'Những xu hướng thiết kế nội thất đang hot nhất ...',
    content: 'Lorem ipsum dolor sit amet...',
    image: 'https://via.placeholder.com/400x300?text=Blog+2',
    author: 'Trần Thị B',
    date: '2024-01-18',
    readTime: 8,
    category: 'design',
  },
];

export const mockDashboardStats = {
  revenue: 2400000000,
  orders: 245,
  customers: 1203,
  products: 324,
  recentOrders: [
    { id: 'ORD-001', customer: 'Nguyễn Văn A', amount: 5000000, status: 'delivered' },
    { id: 'ORD-002', customer: 'Trần Thị B', amount: 3200000, status: 'processing' },
    { id: 'ORD-003', customer: 'Lê Văn C', amount: 7500000, status: 'shipped' },
  ],
};

export const mockHeroSlides = [
  {
    id: 1,
    title: 'Sofa Cao Cấp Flash Sale',
    description: 'Giảm đến 40% - Chỉ hôm nay!',
    image: 'https://via.placeholder.com/1000x400?text=Flash+Sale',
    cta: 'Xem ngay',
    link: '/products?category=sofa',
  },
  {
    id: 2,
    title: 'Giường Ngủ Gỗ Tự Nhiên',
    description: 'Chất lượng cao, giá tốt',
    image: 'https://via.placeholder.com/1000x400?text=Giuong+Ngu',
    cta: 'Khám phá',
    link: '/products?category=bed',
  },
  {
    id: 3,
    title: 'Bộ Bàn Ăn Đẹp',
    description: 'Thiết kế hiện đại, sang trọng',
    image: 'https://via.placeholder.com/1000x400?text=Ban+An',
    cta: 'Mua ngay',
    link: '/products?category=table',
  },
];

export default {
  mockProducts,
  mockCategories,
  mockReviews,
  mockOrderHistory,
  mockAddresses,
  mockBlogs,
  mockDashboardStats,
  mockHeroSlides,
};
