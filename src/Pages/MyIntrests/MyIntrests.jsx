import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './MyIntrests.css'; // Import the CSS file for styling
import { FaBook, FaBusinessTime, FaChalkboardTeacher, FaMicrophone, FaFilm, FaHandshake, FaRss } from 'react-icons/fa'; // Import Font Awesome icons

const MyInterests = () => {
  return (
    <div className="interests-container">
      <Navbar />
      <div className="interests-content">
        <h1 className="interests-title">My Interests</h1>
        <p className="interests-description">
          Discover the activities and passions that drive me. These interests fuel my creativity, motivation, and professional growth.
        </p>
        <div className="interests-list">
          <div className="interest">
            <div className="interest-icon">
              <FaChalkboardTeacher size={50} color="#00796b" />
            </div>
            <h2>Teaching</h2>
            <p>
              Sharing knowledge and guiding others is a fulfilling part of my life. I find joy in helping students grow and achieve their goals.
            </p>
          </div>
          <div className="interest">
            <div className="interest-icon">
              <FaBook size={50} color="#00796b" />
            </div>
            <h2>Reading Books</h2>
            <p>
              I am an avid reader of both technical and commercial books. Exploring a diverse range of genres from software development to business strategies enriches my mind and perspective.
            </p>
          </div>
          <div className="interest">
            <div className="interest-icon">
              <FaMicrophone size={50} color="#00796b" />
            </div>
            <h2>Motivational Speeches</h2>
            <p>
              Delivering motivational speeches and inspiring others is a passion of mine. I enjoy encouraging people to pursue their dreams and overcome challenges.
            </p>
          </div>
          <div className="interest">
            <div className="interest-icon">
              <FaHandshake size={50} color="#00796b" />
            </div>
            <h2>Mentorship</h2>
            <p>
              Providing mentorship to aspiring individuals allows me to share my experiences and support their personal and professional development.
            </p>
          </div>
          <div className="interest">
            <div className="interest-icon">
              <FaBusinessTime size={50} color="#00796b" />
            </div>
            <h2>Startups</h2>
            <ul>
              <li><a href="https://whereismyforeman.netlify.app" target="_blank" rel="noopener noreferrer">Foreman</a> - Providing skilled professionals for various tasks.</li>
              <li><a href="https://scamsters.netlify.app" target="_blank" rel="noopener noreferrer">Scamsters</a> - A platform to alert and educate about fraudulent activities.</li>
            </ul>
          </div>
          <div className="interest">
            <div className="interest-icon">
              <FaFilm size={50} color="#00796b" />
            </div>
            <h2>Filmmaking</h2>
            <p>
              Creating films and engaging in video production is a creative outlet for me. I love telling stories through visual media.
            </p>
          </div>
          <div className="interest">
            <div className="interest-icon">
              <FaHandshake size={50} color="#00796b" />
            </div>
            <h2>Networking & Collaboration</h2>
            <p>
              Building connections and collaborating with like-minded individuals is essential for personal and professional growth.
            </p>
          </div>
          <div className="interest">
            <div className="interest-icon">
              <FaRss size={50} color="#00796b" />
            </div>
            <h2>Technology Trends</h2>
            <p>
              Keeping up with the latest technology trends and innovations keeps me motivated and informed about the future of technology.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyInterests;
