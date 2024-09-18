import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './CollabrateWithMe.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Font Awesome for icons
import { faEnvelope, faPhoneAlt, faHandshake } from '@fortawesome/free-solid-svg-icons';

const CollabrateWithPVR = () => {
  return (
    <div className="collaborate-container">
      <Navbar />
      <div className="collaborate-content">
        <h1>Collaborate with PVR</h1>
        <p className="intro-text">
          Welcome to my platform! I’m <strong>PVR</strong>, a passionate software developer and educator with a strong background in IT technologies and mentorship. If you have an innovative project, idea, or business that requires technical expertise, I’m excited to collaborate with you!
        </p>
        <div className="collaborate-details">
          <FontAwesomeIcon icon={faHandshake} className="icon-handshake" />
          <p>
            With years of experience in <strong>IT development</strong>, particularly <strong>JAVA</strong>, I specialize in building scalable and impactful solutions. I’ve mentored countless developers and worked on various projects that span across multiple industries. Whether you need a partner, advisor, or developer, I’m here to help take your project to the next level.
          </p>
          <p>
            I am open to collaborations in:
          </p>
          <ul>
            <li>IT development (JAVA, JavaScript, Python, React etc..)</li>
            <li>Mentorship and training for software development</li>
            <li>Consulting on software architecture and design</li>
            <li>Partnerships in educational initiatives or tech startups</li>
          </ul>
          <p>Get in touch to discuss how we can collaborate:</p>
          <ul>
            <li><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:pvrcodingacademy.hyd@gmail.com">pvrcodingacademy.hyd@gmail.com</a></li>
            <li><FontAwesomeIcon icon={faPhoneAlt} /> Contact: +91 9701427892</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CollabrateWithPVR;
