import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faLaptopCode, faBook, faLightbulb, faBuilding } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>About Your <strong>PVR</strong></h2>
          <p>
            Meet Your <strong>PVR</strong>, a highly experienced educator and software expert with over <strong>30+ years</strong> in the field. Starting My career as a teacher in several cities across Andhra Pradesh and Telangana, I had since become a leading figure in software education and entrepreneurship.
          </p>
          <p>
            I co-founded a successful software institute in Hyderabad, where My leadership played a crucial role in its growth. Now, I (PVR) runs My own ventures, including <strong>PVR Academy</strong> and <strong>Telsta Software Solutions</strong>, empowering students and professionals with industry-leading software skills.
          </p>
          <div className="skills-icons">
            <div className="skill">
              <FontAwesomeIcon icon={faGraduationCap} className="icon" />
              <p>Experienced Educator</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faLaptopCode} className="icon" />
              <p>Java & Full-Stack Specialist</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faBook} className="icon" />
              <p>Avid Book Reader</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faLightbulb} className="icon" />
              <p>Startup Evangelist</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faBuilding} className="icon" />
              <p>Entrepreneur & Mentor</p>
            </div>
          </div>
          <p>
            my passion on coding, teaching, and learning drives my success. my students thrive under my mentorship, and my courses in <strong>Java Full Stack</strong> and <strong>Python Full Stack</strong> are among the best in the industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
