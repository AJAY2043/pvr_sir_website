import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './MyStartups.css';
import { FaCode, FaGraduationCap, FaCogs, FaExclamationTriangle } from 'react-icons/fa';


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
          <h2>ATC Computer Training Centers</h2>
          <p>Co-Founder and CEO at PACE - ATC Computer Training Centers, where I focused on coaching, mentoring, and motivational speaking to empower students.</p>
          <p><strong>Location:</strong> East Godavari District, Andhra Pradesh, India</p>
          <p><strong>Skills:</strong> Teaching , Coaching & Mentoring, Motivational Speaking, Leadership</p>
        </section>

        <section className="startup">
          <div className="startup-icon">
            <FaGraduationCap size={50} color="#00796b" />
          </div>
          <h2>Telesta Software Company</h2>
          <p>Founder-CEO of Telsta Tech Solutions Pvt. Ltd., dedicated to providing innovative software solutions and IT consulting.</p>
          <p><strong>Location:</strong> Hyderabad, Telangana, India</p>
          <p><strong>Skills:</strong> Entrepreneurship, Leadership</p>
        </section>

        <section className="startup">
          <div className="startup-icon">
            <FaCogs size={50} color="#00796b" />
          </div>
          <h2>Vcube Software Solutions</h2>
          <p>Partnered with Vcube Software Solutions on various projects, offering expertise in software development and IT solutions.</p>
          <p><strong>Location:</strong> Hyderabad, Telangana, India</p>
          <p><strong>Skills:</strong> Teaching , Coaching & Mentoring, Motivational Speaking, Leadership</p>
        </section>

        <section className="startup">
          <div className="startup-icon">
            <FaExclamationTriangle size={50} color="#00796b" />
          </div>
          <h2>PVR Academy</h2>
          <p>PVR Academy is dedicated to providing high-quality education and training in various fields, focusing on practical skills and industry readiness.</p>
          <p><strong>Location:</strong> Hyderabad, Telangana, India</p>
          <p><strong>Skills:</strong> Teaching , Coaching & Mentoring, Motivational Speaking, Leadership</p>
        </section>
        <div className="institute-video">
          <iframe
            src="https://www.pvrcodingacademy.com/"
            title="PVR Coding Academy Introduction"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <section className="startup">
          <div className="startup-icon">
            <FaExclamationTriangle size={50} color="#00796b" />
          </div>
          <h2>Upcoming Startup Ideas</h2>
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
              <strong>New Branch in B.Tech similar to CSE</strong> Exploring the possibility of introducing a new branch similar Computer Science or Software Engineering in B.Tech programs to enhance industry relevance and student skills.
            </li>
            <li><strong>Many More Innovative Ideas ... </strong>(StartUp's)</li>
          </ul>
        </section>
        

      </div>
      <Footer />
    </div>
  );
};

export default MyStartups;
