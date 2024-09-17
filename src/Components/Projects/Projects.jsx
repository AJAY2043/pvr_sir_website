import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faSchool, faBuilding, faProjectDiagram, faRocket } from '@fortawesome/free-solid-svg-icons';
import './Projects.css';

const projects = [
  {
    title: 'PVR Academy',
    description: 'A leading educational institute offering software and coding training across various programming languages and technologies.',
    icon: faSchool,
    link: '#'
  },
  {
    title: 'Telesta',
    description: 'A startup focused on providing tech solutions and IT services, helping businesses scale with innovative software.',
    icon: faBuilding,
    link: '#'
  },
  {
    title: 'Where is My Foreman',
    description: 'An upcoming platform aimed at connecting workers and foremen with clients in need of services like plumbing, electrical work, and more.',
    icon: faProjectDiagram,
    link: '#'
  },
  {
    title: 'Scamsters',
    description: 'A project designed to expose and prevent frauds, providing a platform where users can report and check on known scams and fraudsters.',
    icon: faRocket,
    link: '#'
  },
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions developed for clients to meet their unique business needs, using modern tools and technologies.',
    icon: faLaptopCode,
    link: '#'
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-heading">My Projects & Startups</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-icon">
              <FontAwesomeIcon icon={project.icon} className="project-fa-icon" aria-label={project.title} />
            </div>
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
