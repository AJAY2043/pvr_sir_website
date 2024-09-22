import React from 'react';
import './AboutMeSlideImg.css';
import { Carousel } from 'react-bootstrap';
import img1 from '../../Components/Assets/img1.jpg';
import img2 from '../../Components/Assets/img2.jpg';
import img3 from '../../Components/Assets/img3.jpg';
import img4 from '../../Components/Assets/img4.jpg';
import img5 from '../../Components/Assets/img5.jpg';

const AboutMeSlideImg = () => {
  return (
    <div className="carousel">
      <Carousel interval={2000}>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img4} alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img5} alt="Fifth slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default AboutMeSlideImg;
