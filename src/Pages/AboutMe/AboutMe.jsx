import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './AboutMe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faLaptopCode, faChalkboardTeacher, faFilm, faCodeBranch } from '@fortawesome/free-solid-svg-icons'

const AboutMe = () => {
  return (
    <div className="aboutme-container">
      <Navbar />
      <div className="aboutme-content">
        <h2 className="section-title">About Me</h2>
        <p className="intro">
          Meet <strong>PVR</strong>, a visionary and mentor with over <strong>30 years of experience</strong> in the tech industry. 
          From humble beginnings as a teacher to becoming a non-working capital partner at a successful software institute, and now, the proud founder of <strong>PVR Academy</strong> and <strong>Telesta Software Solutions</strong>, 
          my journey is one of grit, resilience, and remarkable achievements.
        </p>

        <div className="achievements">
          <div className="achievement-card">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="achievement-icon" />
            <h3>Teacher & Mentor</h3>
            <p>I began my journey as a teacher, sharing my knowledge with thousands of students in Vijayawada, Hyderabad, Karimnagar, and beyond.</p>
          </div>

          <div className="achievement-card">
            <FontAwesomeIcon icon={faLaptopCode} className="achievement-icon" />
            <h3>Software Expert</h3>
            <p>With expertise in every programming language from Pascal and COBOL to modern frameworks like React and Angular, I am a Java specialist and full-stack developer.</p>
          </div>

          <div className="achievement-card">
            <FontAwesomeIcon icon={faFilm} className="achievement-icon" />
            <h3>Filmmaker & Speaker</h3>
            <p>As a motivational speaker and film editor, I have delivered talks on multiple platforms, including Suman TV, inspiring countless individuals.</p>
          </div>

          <div className="achievement-card">
            <FontAwesomeIcon icon={faBook} className="achievement-icon" />
            <h3>Book Lover & Educator</h3>
            <p>I am a dedicated book lover and have read extensively on Java and software development. I believe in gifting knowledge, often giving books as presents.</p>
          </div>

          <div className="achievement-card">
            <FontAwesomeIcon icon={faCodeBranch} className="achievement-icon" />
            <h3>Startup Evangelist</h3>
            <p>I have co-founded a successful software institute and am now running PVR Academy and multiple startups aimed at empowering future coders and entrepreneurs.</p>
          </div>
        </div>

        <h3 className="closing-line">"The journey of a thousand miles begins with a single line of code."</h3>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
