import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faPython, faJava, faHtml5, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faVideo, faRocket, faDatabase } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';
import { Link } from 'react-router-dom';

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-heading">Skills & Expertise</h2>
      <p className="skills-intro">
        With over 30 years of experience in the industry, I specialize in multiple programming languages, full-stack development, and filmmaking. Below are some of the key skills I teach and master:
      </p>
      
      <div className="skills-list">
        <div className="skill-card">
          <FontAwesomeIcon icon={faJava} className="skill-icon" aria-label="Java" />
          <h3>Java</h3>
          <p>Strong background in Java for backend services and Android app development.</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faPython} className="skill-icon" aria-label="Python" />
          <h3>Python</h3>
          <p>Extensive experience in Python for web development, machine learning, and data analysis.</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faJs} className="skill-icon" aria-label="JavaScript" />
          <h3>JavaScript</h3>
          <p>Expert in modern JavaScript, including ES6+ features for both front-end and back-end development.</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faReact} className="skill-icon" aria-label="React" />
          <h3>React</h3>
          <p>Proficient in building dynamic, fast, and responsive web applications using React and related libraries.</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faHtml5} className="skill-icon" aria-label="HTML & CSS" />
          <h3>HTML & CSS</h3>
          <p>Expert in crafting clean and responsive UIs using HTML5 and modern CSS techniques like Flexbox and Grid.</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faNodeJs} className="skill-icon" aria-label="Node.js" />
          <h3>Node.js</h3>
          <p>Experience in developing scalable server-side applications using Node.js and Express.js.</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faDatabase} className="skill-icon" aria-label="SQL & NoSQL" />
          <h3>SQL & NoSQL</h3>
          <p>Proficient in working with databases such as MySQL, MongoDB, and PostgreSQL for efficient data storage.</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faVideo} className="skill-icon" aria-label="Filmmaking" />
          <h3>Filmmaking</h3>
          <p>Experienced in video production, editing, and directing films, helping students learn both technical and creative skills.</p>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faRocket} className="skill-icon" aria-label="Motivation & Leadership" />
          <h3>Motivation & Leadership</h3>
          <p>Committed to fostering a growth mindset and empowering students to excel in their careers and personal lives.</p>
        </div>
      </div>

      <div className="skills-button-container">
        <Link to='/myskills' className="skills-button">Know My More Skills</Link>
      </div>
    </div>
  );
}

export default Skills;
