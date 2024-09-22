import React from 'react';
import './MyJourney.css'; 
import { Link } from 'react-router-dom';

const MyJourney = () => {
  return (
    <section className="journey-container">
      <div className="journey-header">
        <h1>Your PVR</h1>
        <p>
          Founder & Director - PVR Coding Academy, HYD | Educationalist | Start-up Evangelist | Filmmaker | Entrepreneur | Founder-Chairman Telsta Group |
          Motivational Speaker | Humanist | Rationalist | Author
        </p>
      </div>

      <div className="journey-content">
        <h2>Top Skills</h2>
        <ul className="skills-list">
          <li><i className="fas fa-code"></i> Python Full Stack</li>
          <li><i className="fas fa-code"></i> Java Full Stack</li>
          <li><i className="fas fa-code"></i> C#</li>
          <li><i className="fas fa-code"></i> C++</li>
          <li><i className="fas fa-code"></i> C</li>
          <Link to='/myskills'><li><i className="fas fa-code">And More ...</i></li></Link>
        </ul>

        <h2>Services</h2>
        <ul className="services-list">
          <li><i className="fas fa-laptop-code"></i> IT Consulting</li>
          <li><i className="fas fa-mobile-alt"></i> Application Development</li>
          <li><i className="fas fa-graduation-cap"></i> Career Development</li>
          <li><i className="fas fa-briefcase"></i> Interview Preparation</li>
          <li><i className="fas fa-cogs"></i> Custom Software Development</li>
          <Link to='/collabratewithme'><li><i className="fas fa-paint-brush"></i> Know More ...</li></Link>
        </ul>

        <h2>Experience</h2>
        <div className="experience-section">
          <p><strong>Computer Lab Assistant:</strong> NIIT Limited, Vijayawada, AP, India (1990-1992)</p>
          <p><strong>Lab Programmer:</strong> LCC, Vijayawada, AP, India (1992-1993)</p>
          <p><strong>IT Trainer:</strong> ICS, Vijayawada, AP, India (1994)</p>
          <p><strong>Freelance Programmer:</strong> Developed ticket booking system (1995)</p>
          <Link to='/aboutme'><p>Know More ...</p></Link>
      
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
