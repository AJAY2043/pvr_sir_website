import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './MySkills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faReact, faPython, faJava, faHtml5, faNodeJs, faVuejs, faDocker, faJenkins } from '@fortawesome/free-brands-svg-icons'
import { faRocket, faDatabase, faVideo, faCamera, faPen, faStar, faBook, faMicrochip, faCode } from '@fortawesome/free-solid-svg-icons'

const MySkills = () => {
  return (
    <div className="skills-page-container">
      <Navbar />
      <div className="skills-content">
        <h1 className="skills-title">My Skills</h1>
        <p className="skills-description">
          Over the course of my career, I have acquired a diverse range of skills across programming, development, leadership, and creative fields. Here is a comprehensive list of my technical and soft skills:
        </p>

        <div className="skills-sections">
    
          <div className="skill-section">
            <h2>Programming Languages</h2>
            <div className="skill-list">
              <div className="skill-card">
                <FontAwesomeIcon icon={faCode} className="skill-icon" />
                <h3>C</h3>
                <p>Strong foundational knowledge in C, used for system programming and embedded systems.</p>
              </div>
              <div className="skill-card">
                <FontAwesomeIcon icon={faCode} className="skill-icon" />
                <h3>C++</h3>
                <p>Experienced in C++ for object-oriented programming, game development, and high-performance applications.</p>
              </div>
              <div className="skill-card">
                <FontAwesomeIcon icon={faCode} className="skill-icon" />
                <h3>C#</h3>
                <p>Proficient in C# for building Windows applications, games with Unity, and enterprise software solutions.</p>
              </div>
              <div className="skill-card">
                <FontAwesomeIcon icon={faCode} className="skill-icon" />
                <h3>Cobol</h3>
                <p>Experienced in COBOL, primarily used in legacy business applications and mainframes.</p>
              </div>
              <div className="skill-card">
                <FontAwesomeIcon icon={faCode} className="skill-icon" />
                <h3>Pascal</h3>
                <p>Background in Pascal, used for structured programming and early software development education.</p>
              </div>
              <div className="skill-card">
                <FontAwesomeIcon icon={faCode} className="skill-icon" />
                <h3>Fortran</h3>
                <p>Knowledgeable in Fortran, especially used in scientific and engineering calculations.</p>
              </div>
              <div className="skill-card">
                <FontAwesomeIcon icon={faJava} className="skill-icon" />
                <h3>Java</h3>
                <p>Strong background in Java for backend services and Android app development.</p>
              </div>
              <div className="skill-card">
                <FontAwesomeIcon icon={faPython} className="skill-icon" />
                <h3>Python</h3>
                <p>Extensive experience in Python for web development, machine learning, and data analysis.</p>
              </div>
              <div className="skill-card">
                <FontAwesomeIcon icon={faJs} className="skill-icon" />
                <h3>JavaScript</h3>
                <p>Expert in modern JavaScript, including ES6+ features for both front-end and back-end development.</p>
              </div>
              <div className="skill-card">
                <FontAwesomeIcon icon={faReact} className="skill-icon" />
                <h3>React</h3>
                <p>Proficient in building dynamic, fast, and responsive web applications using React and related libraries.</p>
              </div>
              <div className="skill-card">
                <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
                <h3>HTML & CSS</h3>
                <p>Expert in crafting clean and responsive UIs using HTML5 and modern CSS techniques like Flexbox and Grid.</p>
              </div>
              <div className="skill-card">
                <FontAwesomeIcon icon={faNodeJs} className="skill-icon" />
                <h3>Node.js</h3>
                <p>Experience in developing scalable server-side applications using Node.js and Express.js.</p>
              </div>
              <div className="skill-card">
                <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
                <h3>SQL & NoSQL</h3>
                <p>Proficient in working with databases such as MySQL, MongoDB, and PostgreSQL for efficient data storage.</p>
              </div>
              <div className="skill-card">
                <FontAwesomeIcon icon={faVuejs} className="skill-icon" />
                <h3>Vue.js</h3>
                <p>Proficient in building modern web applications using Vue.js framework.</p>
              </div>
              <div className="skill-card">
                <FontAwesomeIcon icon={faDocker} className="skill-icon" />
                <h3>Docker</h3>
                <p>Skilled in containerization and deploying applications using Docker.</p>
              </div>
              <div className="skill-card">
                <FontAwesomeIcon icon={faJenkins} className="skill-icon" />
                <h3>Jenkins</h3>
                <p>Experience with Jenkins for continuous integration and continuous deployment (CI/CD).</p>
              </div>
              <div className="skill-card">
                <FontAwesomeIcon icon={faBook} className="skill-icon" />
                <h3>Books & Publications</h3>
                <p>Authored commercial books and writings in Java and other programming languages.</p>
              </div>
            </div>
          </div>
          <button className="skill-card">Some More...</button>

        
          <div className="skill-section">
            <h2>Backend Development & DevOps</h2>
            <ul>
              <li><FontAwesomeIcon icon={faNodeJs} className="skill-icon" /> Node.js</li>
              <li><FontAwesomeIcon icon={faDatabase} className="skill-icon" /> SQL & NoSQL Databases (MySQL, MongoDB)</li>
              <li><FontAwesomeIcon icon={faRocket} className="skill-icon" /> API Development & RESTful Services</li>
              <li><FontAwesomeIcon icon={faDocker} className="skill-icon" /> Docker</li>
              <li><FontAwesomeIcon icon={faJenkins} className="skill-icon" /> Jenkins</li>
            </ul>
          </div>

      
          <div className="skill-section">
            <h2>Creative Skills</h2>
            <ul>
              <li><FontAwesomeIcon icon={faVideo} className="skill-icon" /> Filmmaking & Video Editing</li>
              <li><FontAwesomeIcon icon={faCamera} className="skill-icon" /> Photography</li>
              <li><FontAwesomeIcon icon={faPen} className="skill-icon" /> Content Creation</li>
              <li><FontAwesomeIcon icon={faStar} className="skill-icon" /> Storyboarding & Directing</li>
            </ul>
          </div>

        
          <div className="skill-section">
            <h2>Soft Skills & Leadership</h2>
            <ul>
              <li><FontAwesomeIcon icon={faRocket} className="skill-icon" /> Motivational Speaking</li>
              <li><FontAwesomeIcon icon={faMicrochip} className="skill-icon" /> Startup Evangelism</li>
              <li><FontAwesomeIcon icon={faStar} className="skill-icon" /> Leadership & Team Building</li>
              <li><FontAwesomeIcon icon={faStar} className="skill-icon" /> Project Management</li>
              <li><FontAwesomeIcon icon={faStar} className="skill-icon" /> Problem Solving & Critical Thinking</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MySkills;
