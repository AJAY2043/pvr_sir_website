import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faLaptopCode, faChalkboardTeacher, faFilm, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import experienceData from '../../Components/Assets/ExpPvr.json';
import Carousal from '../../Components/Carousal/Carousal';
import AboutMeSlideImg from '../../Components/Carousal/AboutMeSlideImg';

const AboutMe = () => {
  const experiences = experienceData.experience;

  return (
    <div className="aboutme-container">
      <Navbar />
      <Carousal/>
      <div className="aboutme-content">
        <h2 className="section-title">About Me</h2>
        <p className="intro">
          Meet <strong>PVR</strong>, a visionary and mentor with over <strong>30+ years of experience</strong> in the tech industry.
          From humble beginnings as a teacher to becoming a non-working capital partner at a successful software institute, and now, the proud founder of <strong>PVR Academy</strong> and <strong>Telesta Software Solutions</strong>,
          my journey is one of grit, resilience, and remarkable achievements.
        </p>

        <div className="trainer">
          <h3>My Interests & Teachings & Hobbies</h3>
          <ul className="interests-list">
            <li><FontAwesomeIcon icon={faBook} /> Teaching Coding</li>
            <li><FontAwesomeIcon icon={faLaptopCode} /> Software Development</li>
            <li><FontAwesomeIcon icon={faChalkboardTeacher} /> Mentoring Students</li>
            <li><FontAwesomeIcon icon={faFilm} /> Watching Movies</li>
            <li><FontAwesomeIcon icon={faCodeBranch} /> Open Source Projects</li>
          </ul>
        </div>       
         <AboutMeSlideImg/>
        <center><h3 className="experience-title">Professional Experience</h3></center>
<div className="experience-list">
  {experiences.map((item, index) => (
    <div key={index} className="experience-item">
      <h4 className="experience-title">{item.title}</h4>
      <p className="experience-organization">{item.organization}</p>
      <p className="experience-location">{item.location}</p>
       <p>{item.skills}</p>
      <p className="experience-duration">{item.start_date} - {item.end_date} ({item.duration})</p>
    </div>
  ))}
</div>


        <h3 className="closing-line">"The journey of a thousand miles begins with a single line of code."</h3>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
