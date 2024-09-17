import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './MyInstitue.css'; 

const MyInstitute = () => {
  return (
    <div className="institute-container">
      <Navbar />
      <div className="institute-content">
        <h1 className="institute-title">Welcome to PVR Coding Academy</h1>
        <p className="institute-description">
          At PVR Coding Academy, we are committed to delivering high-quality education and training in the realm of software development and technology. Our comprehensive courses and training programs are designed to equip you with the skills needed to excel in the ever-evolving tech industry.
        </p>
        <div className="institute-details">
          <div className="detail">
            <h2>Our Vision</h2>
            <p>
              Our vision is to bridge the gap between academic knowledge and industry requirements by providing innovative training programs and hands-on workshops. We strive to empower our students with the latest technological skills to meet the demands of the modern workforce.
            </p>
          </div>
          <div className="detail">
            <h2>Our Courses</h2>
            <ul>
              <li>JAVA Full-Stack</li>
              <li>AI & ML</li>
              <li>Python Full-Stack</li>
            </ul>
          </div>
          <div className="detail">
            <h2>Why Choose Us?</h2>
            <p>
              Our state-of-the-art curriculum and expert instructors ensure that you receive the best possible training. We offer real-world projects and hands-on experience to prepare you for a successful career in technology.
            </p>
          </div>
          <div className="detail">
            <h2>Contact Us</h2>
            <p>
              For inquiries about our courses or any other questions, please reach out to us at:
              <br />
              <a href="mailto:info@pvracademy.com" className="contact-email">info@pvracademy.com</a>
            </p>
          </div>
        </div>
        <div className="institute-video">
          <iframe
            src="https://www.pvrcodingacademy.com/"
            title="PVR Coding Academy Introduction"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyInstitute;
