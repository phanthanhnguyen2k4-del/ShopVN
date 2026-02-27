import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';
import '../styles/Blog.css';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const articles = [
    {
      id: 1,
      title: 'Xu Hướng Thiết Kế Nội Thất 2024',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300',
      excerpt: 'Khám phá những xu hướng thiết kế nội thất sẽ thống trị năm 2024...',
      date: '2024-01-15',
      author: 'Nguyễn Văn A',
      readTime: 5,
    },
    {
      id: 2,
      title: 'Cách Chọn Sofa Phù Hợp Với Phòng Khách',
      category: 'tips',
      image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300',
      excerpt: 'Hướng dẫn chi tiết cách chọn sofa để tối ưu không gian và thoải mái...',
      date: '2024-01-12',
      author: 'Trần Thị B',
      readTime: 7,
    },
    {
      id: 3,
      title: 'Bảo Trì Đồ Nội Thất Da Lâu Dài',
      category: 'care',
      image: 'https://images.unsplash.com/photo-1567538096051-b6643b08cf47?w=300',
      excerpt: 'Những mẹo đơn giản để giữ đồ nội thất da của bạn luôn mới như ban đầu...',
      date: '2024-01-10',
      author: 'Lý Văn C',
      readTime: 6,
    },
    {
      id: 4,
      title: 'Phong Cách Scandinavian Trong Nhà Ở',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=300',
      excerpt: 'Tìm hiểu về phong cách Scandinavian và cách áp dụng vào nhà của bạn...',
      date: '2024-01-08',
      author: 'Phạm Hồ D',
      readTime: 8,
    },
    {
      id: 5,
      title: 'Thiết Kế Phòng Ngủ Thoải Mái',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1540932207986-a6f41f0719ab?w=300',
      excerpt: 'Những nguyên tắc vàng để thiết kế một phòng ngủ thoải mái và yên tĩnh...',
      date: '2024-01-05',
      author: 'Ngô Minh E',
      readTime: 9,
    },
    {
      id: 6,
      title: 'Xu Hướng Màu Sắc Năm Nay',
      category: 'tips',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=300',
      excerpt: 'Những màu sắc trending sẽ giúp bạn làm mới không gian sống...',
      date: '2024-01-03',
      author: 'Trần Phương F',
      readTime: 5,
    },
  ];

  const articlesPerPage = 6;
  const filteredArticles = selectedCategory === 'all'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const displayedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  return (
    <div className="blog-page">
      <div className="container">
        <div className="blog-header">
          <h1>Blog & Tin Tức</h1>
          <p>Chia sẻ kiến thức về thiết kế nội thất, mẹo chăm sóc và xu hướng mới nhất</p>
        </div>

        {/* Categories */}
        <div className="blog-categories">
          <button
            className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory('all');
              setCurrentPage(1);
            }}
          >
            Tất Cả
          </button>
          <button
            className={`category-btn ${selectedCategory === 'design' ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory('design');
              setCurrentPage(1);
            }}
          >
            Thiết Kế
          </button>
          <button
            className={`category-btn ${selectedCategory === 'tips' ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory('tips');
              setCurrentPage(1);
            }}
          >
            Mẹo & Thủ Thuật
          </button>
          <button
            className={`category-btn ${selectedCategory === 'care' ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory('care');
              setCurrentPage(1);
            }}
          >
            Chăm Sóc
          </button>
        </div>

        {/* Articles Grid */}
        <div className="articles-grid">
          {displayedArticles.map((article) => (
            <article key={article.id} className="article-card">
              <Link to={`/blogs/${article.id}`} className="article-image">
                <img src={article.image} alt={article.title} />
              </Link>
              <div className="article-content">
                <span className="article-category">{article.category}</span>
                <Link to={`/blogs/${article.id}`} className="article-title">
                  {article.title}
                </Link>
                <p className="article-excerpt">{article.excerpt}</p>
                <div className="article-meta">
                  <span className="meta-author">{article.author}</span>
                  <span className="meta-date">{article.date}</span>
                  <span className="meta-read-time">{article.readTime} phút đọc</span>
                </div>
                <Link to={`/blogs/${article.id}`} className="btn-read-more">
                  Đọc Tiếp →
                </Link>
              </div>
            </article>
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
  );
};

export default Blog;
