import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './MyStartups.css';
import { FaCode, FaGraduationCap, FaCogs, FaExclamationTriangle } from 'react-icons/fa'; // Import Font Awesome icons

const MyStartups = () => {
  return (
    <div className="startups-container">
      <Navbar />
      <div className="startups-content">
        <h1 className="startups-title">My Startups</h1>

        <section className="startup">
          <div className="startup-icon">
            <FaCode size={50} color="#00796b" />
          </div>
          <h2>Telesta Software Company</h2>
          <p>
            Telesta Software Company provides innovative software solutions and services. We specialize in custom software development, IT consulting, and digital transformation.
          </p>
        </section>

        <section className="startup">
          <div className="startup-icon">
            <FaGraduationCap size={50} color="#00796b" />
          </div>
          <h2>PVR Academy</h2>
          <p>
            PVR Academy is dedicated to providing high-quality education and training in various fields, focusing on practical skills and industry readiness.
          </p>
        </section>

        <section className="startup">
          <div className="startup-icon">
            <FaCogs size={50} color="#00796b" />
          </div>
          <h2>Vcube Software Solutions</h2>
          <p>
            Vcube Software Solutions was a partner in various projects, offering expertise in software development and IT solutions. We collaborated on several successful ventures.
          </p>
        </section>

        <section className="startup">
          <div className="startup-icon">
            <FaExclamationTriangle size={50} color="#00796b" />
          </div>
          <h2>Upcoming Startups</h2>
          <p>We are working on new and exciting projects, including:</p>
          <ul>
            <li>
              <a href="https://whereismyforeman.netlify.app" target="_blank" rel="noopener noreferrer">
                <strong>Foreman:</strong> A project focused on providing skilled professionals for various tasks.
              </a>
            </li>
            <li>
              <a href="https://scamsters.netlify.app" target="_blank" rel="noopener noreferrer">
                <strong>Scamsters:</strong> A platform to alert and educate about fraudulent activities.
              </a>
            </li>
            <li>
              <strong>New Branch in CSE/Software Engineering:</strong> Exploring the possibility of introducing a new branch in Computer Science or Software Engineering in B.Tech programs to enhance industry relevance and student skills.
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MyStartups;
