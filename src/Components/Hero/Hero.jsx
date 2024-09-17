import React from 'react';
import hero_img from '../Assets/pvr.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <div className="hero-text-above">
          <h2>Welcome to PVR World</h2>
          <p>Empowering the Next Generation of Coders</p>
        </div>
      </div>
      <div className="hero-image-box">
        <img src={hero_img} alt="PVR Hero" className="hero-image" />
      </div>
      <div className="hero-text">
        <h1>Welcome to Your <strong>PVR</strong>'s World</h1>
        <p>Discover my talents, skills, projects, startups, and much more...</p>
      </div>
    </div>
  );
}

export default Hero;
