import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Your PVR's</h2>
          <p>Empowering coders to become the leaders of tomorrow.</p>
        </div>
        <div className="footer-links">
          <Link to='/aboutme'>About</Link>
          <Link to='/myskills'>Skills</Link>
          <Link to='/mystartups'>Projects</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/blog'>Blog</Link>
        </div>
        <div className="footer-social">
          <h4>Follow Me On</h4>
          <a href="https://www.facebook.com/PvrCodingAcademy/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
          <a href="https://www.instagram.com/pvr_freethinker/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/pvr-55a69a210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 PVR Coding Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
