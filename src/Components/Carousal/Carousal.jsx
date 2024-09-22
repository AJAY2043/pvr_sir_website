import React, { useState, useEffect } from 'react';
import './Carousal.css';
import hero_img_1 from '../Assets/img7.jpg';
import hero_img_2 from '../Assets/hero-img-2.jpg';
import hero_img_3 from '../Assets/hero-img-3.jpg';
import hero_img_4 from '../Assets/hero-img-4.jpg';
import hero_img_5 from '../Assets/hero-img-5.jpg';

const images = [hero_img_1, hero_img_2, hero_img_3, hero_img_4, hero_img_5];

const Carousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousal-wrapper">
      <div className="carousel-container">
        {images.map((image, index) => (
          <div
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousal;
