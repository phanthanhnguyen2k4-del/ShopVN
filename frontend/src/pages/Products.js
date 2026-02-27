import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import { FiFilter, FiChevronDown } from 'react-icons/fi';
import '../styles/Products.css';

const Products = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    priceRange: 'all',
    brand: '',
    material: '',
    sort: 'newest',
  });
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const productsPerPage = 12;

  useEffect(() => {
    // Mock data - trong thực tế sẽ gọi API với filters
    const mockProducts = Array.from({ length: 48 }, (_, i) => ({
      id: i + 1,
      name: `Sản Phẩm ${i + 1}`,
      price: Math.floor(Math.random() * 20000000) + 1000000,
      salePrice: Math.random() > 0.5 ? Math.floor(Math.random() * 15000000) + 500000 : null,
      image: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 20) + 1}?w=300`,
      rating: Math.floor(Math.random() * 5) + 1,
      reviews: Math.floor(Math.random() * 50),
    }));
    setProducts(mockProducts);
  }, [filters]);

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const displayedProducts = products.slice(startIndex, startIndex + productsPerPage);

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
    setCurrentPage(1);
  };

  return (
    <div className="products-page">
      <div className="products-container">
        {/* Sidebar Filters - Desktop */}
        <aside className="filters-sidebar">
          <h3>Bộ Lọc</h3>

          {/* Category Filter */}
          <div className="filter-group">
            <h4>Danh Mục</h4>
            <label>
              <input
                type="radio"
                name="category"
                value=""
                checked={filters.category === ''}
                onChange={(e) => handleFilterChange('category', e.target.value)}
              />
              Tất Cả
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="phong-khach"
                checked={filters.category === 'phong-khach'}
                onChange={(e) => handleFilterChange('category', e.target.value)}
              />
              Phòng Khách
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="phong-ngu"
                checked={filters.category === 'phong-ngu'}
                onChange={(e) => handleFilterChange('category', e.target.value)}
              />
              Phòng Ngủ
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="phong-an"
                checked={filters.category === 'phong-an'}
                onChange={(e) => handleFilterChange('category', e.target.value)}
              />
              Phòng Ăn & Bếp
            </label>
          </div>

          {/* Price Filter */}
          <div className="filter-group">
            <h4>Giá</h4>
            <label>
              <input
                type="radio"
                name="price"
                value="all"
                checked={filters.priceRange === 'all'}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              />
              Tất Cả
            </label>
            <label>
              <input
                type="radio"
                name="price"
                value="0-5m"
                checked={filters.priceRange === '0-5m'}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              />
              Dưới 5 triệu
            </label>
            <label>
              <input
                type="radio"
                name="price"
                value="5-10m"
                checked={filters.priceRange === '5-10m'}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              />
              5 - 10 triệu
            </label>
            <label>
              <input
                type="radio"
                name="price"
                value="10-20m"
                checked={filters.priceRange === '10-20m'}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              />
              10 - 20 triệu
            </label>
            <label>
              <input
                type="radio"
                name="price"
                value="20m+"
                checked={filters.priceRange === '20m+'}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              />
              Trên 20 triệu
            </label>
          </div>

          {/* Material Filter */}
          <div className="filter-group">
            <h4>Chất Liệu</h4>
            <label>
              <input type="checkbox" /> Gỗ tự nhiên
            </label>
            <label>
              <input type="checkbox" /> Gỗ công nghiệp
            </label>
            <label>
              <input type="checkbox" /> Vải
            </label>
            <label>
              <input type="checkbox" /> Da
            </label>
          </div>

          {/* Sort */}
          <div className="filter-group">
            <h4>Sắp Xếp</h4>
            <select
              value={filters.sort}
              onChange={(e) => handleFilterChange('sort', e.target.value)}
            >
              <option value="newest">Mới Nhất</option>
              <option value="price-low">Giá: Thấp → Cao</option>
              <option value="price-high">Giá: Cao → Thấp</option>
              <option value="popular">Phổ Biến</option>
              <option value="rating">Đánh Giá</option>
            </select>
          </div>
        </aside>

        {/* Products Section */}
        <div className="products-section">
          <div className="products-header">
            <h1>Sản Phẩm</h1>
            <button
              className="filter-toggle-mobile"
              onClick={() => setShowMobileFilter(!showMobileFilter)}
            >
              <FiFilter /> Bộ Lọc
            </button>
          </div>

          {/* Mobile Filters */}
          {showMobileFilter && (
            <div className="filters-mobile">
              <select value={filters.sort} onChange={(e) => handleFilterChange('sort', e.target.value)}>
                <option value="newest">Mới Nhất</option>
                <option value="price-low">Giá: Thấp → Cao</option>
                <option value="price-high">Giá: Cao → Thấp</option>
              </select>
            </div>
          )}

          {/* Products Grid */}
          <div className="products-grid">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
