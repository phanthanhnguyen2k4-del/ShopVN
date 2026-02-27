import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import '../styles/BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();

  const article = {
    id: parseInt(id),
    title: 'Xu Hướng Thiết Kế Nội Thất 2024',
    category: 'Thiết Kế',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
    author: 'Nguyễn Văn A',
    date: '2024-01-15',
    readTime: 5,
    content: `
      <h2>Giới Thiệu</h2>
      <p>
        Nếu bạn đang tìm kiếm cảm hứng cho một dự án thiết kế nội thất, bạn đã đến đúng chỗ.
        Năm 2024 mang lại nhiều xu hướng mới và thú vị trong lĩnh vực thiết kế nội thất.
      </p>

      <h2>1. Màu Sắc Tự Nhiên & Bền Vững</h2>
      <p>
        Xu hướng sử dụng các màu sắc từ tự nhiên như màu đất, gỗ, đá tiếp tục thống trị.
        Những màu sắc này tạo ra cảm giác ấm áp và thân thiện với môi trường.
      </p>

      <h2>2. Nội Thất Tối Giản (Minimalism)</h2>
      <p>
        Phong cách tối giản vẫn là xu hướng mạnh mẽ, tập trung vào chức năng không quá trang trí.
        Đặc biệt là việc loại bỏ những vật dụng không cần thiết để tạo không gian sạch sẽ.
      </p>

      <h2>3. Công Nghệ Thông Minh</h2>
      <p>
        Tích hợp công nghệ thông minh vào nội thất ngày càng phổ biến. Từ đèn thông minh,
        khóa cửa thông minh đến các hệ thống điều khiển trung tâm.
      </p>

      <h2>4. Bền Vững & Thân Thiện Với Môi Trường</h2>
      <p>
        Sử dụng các vật liệu tái chế, thân thiện với môi trường là một xu hướng quan trọng.
        Người tiêu dùng ngày càng quan tâm đến việc chọn những sản phẩm bền vững.
      </p>

      <h2>5. Hỗn Hợp Phong Cách (Eclectic)</h2>
      <p>
        Kết hợp các phong cách khác nhau để tạo ra không gian độc đáo và cá nhân hóa.
        Điều này cho phép mỗi người thể hiện tính cách của mình qua nội thất.
      </p>

      <h2>Kết Luận</h2>
      <p>
        Năm 2024 là năm của sự cân bằng giữa tính thẩm mỹ, chức năng và tính bền vững.
        Lựa chọn nội thất phù hợp không chỉ tạo ra không gian đẹp mà còn phản ánh giá trị
        của bản thân chúng ta.
      </p>
    `,
  };

  const relatedArticles = [
    {
      id: 2,
      title: 'Cách Chọn Sofa Phù Hợp',
      image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=200',
    },
    {
      id: 3,
      title: 'Bảo Trì Đồ Nội Thất Da',
      image: 'https://images.unsplash.com/photo-1567538096051-b6643b08cf47?w=200',
    },
    {
      id: 4,
      title: 'Phong Cách Scandinavian',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=200',
    },
  ];

  return (
    <div className="blog-detail-page">
      <article className="article-detail">
        {/* Header */}
        <div className="article-header">
          <img src={article.image} alt={article.title} className="article-cover" />
        </div>

        <div className="container">
          <div className="article-meta-header">
            <span className="article-category">{article.category}</span>
            <h1>{article.title}</h1>
            <div className="article-info">
              <span className="author">{article.author}</span>
              <span className="date">{article.date}</span>
              <span className="read-time">{article.readTime} phút đọc</span>
            </div>
          </div>

          {/* Content */}
          <div className="article-body" dangerouslySetInnerHTML={{ __html: article.content }} />

          {/* Share & Navigation */}
          <div className="article-footer">
            <div className="article-share">
              <p>Chia sẻ bài viết:</p>
              <div className="share-buttons">
                <button className="share-btn facebook">Facebook</button>
                <button className="share-btn twitter">Twitter</button>
                <button className="share-btn linkedin">LinkedIn</button>
              </div>
            </div>

            <Link to="/blogs" className="back-link">
              <FiArrowLeft /> Quay Lại Blog
            </Link>
          </div>

          {/* Related Articles */}
          <div className="related-articles">
            <h3>Bài Viết Liên Quan</h3>
            <div className="related-grid">
              {relatedArticles.map((related) => (
                <Link key={related.id} to={`/blogs/${related.id}`} className="related-card">
                  <img src={related.image} alt={related.title} />
                  <h4>{related.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;
