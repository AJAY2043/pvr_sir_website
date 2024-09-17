import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './CollabrateWithMe.css'; // Import the CSS file for styling

const CollabrateWithMe = () => {
  return (
    <div className="collaborate-container">
      <Navbar />
      <div className="collaborate-content">
        <h1>Collaborate with Me</h1>
        <p>
          I am always open to new opportunities for collaboration and partnership. If you have an exciting project,
          idea, or initiative, I would love to hear from you! My extensive experience in software development and 
          education allows me to bring valuable insights and expertise to any collaboration.
        </p>
        <p>
          Whether you are looking for a technical advisor, a project partner, or someone to help guide your development 
          efforts, I am here to assist. Please reach out to discuss potential opportunities and how we can work together.
        </p>
        <p>
          You can contact me through the following methods:
        </p>
        <ul>
          <li>Email: <a href="mailto:pvrcodingacademy.hyd@gmail.com">pvrcodingacademy.hyd@gmail.com</a></li>
          <li>Contact: +91 9701427892</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default CollabrateWithMe;
