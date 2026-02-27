import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/HeroSlider.css';

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const slides = [
    {
      id: 1,
      title: 'Sofa Hiện Đại',
      subtitle: 'Thiết kế tối ưu cho phòng khách của bạn',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1000',
      cta: '/products?category=sofa',
    },
    {
      id: 2,
      title: 'Giường Ngủ Cao Cấp',
      subtitle: 'Chất lượng giấc ngủ bắt đầu từ đây',
      image: 'https://images.unsplash.com/photo-1540932207986-a6f41f0719ab?w=1000',
      cta: '/products?category=giuong',
    },
    {
      id: 3,
      title: 'Bàn Ăn Sang Trọng',
      subtitle: 'Không gian ăn uống ấm áp cho gia đình',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1000',
      cta: '/products?category=ban-an',
    },
  ];

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.image} alt={slide.title} />
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <a href={slide.cta} className="btn-cta">Xem Ngay</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
