import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faBookOpen, faGraduationCap, faChalkboardTeacher, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import './Blog.css'


const posts = [
  {
    title: 'Mastering Java: From Basics to Advanced Concepts',
    excerpt: 'Learn the core fundamentals of Java, object-oriented programming, and advanced features that make it a powerful language.',
    link: '#',
    icon: faCode
  },
  {
    title: 'Top 5 Java Frameworks You Should Know',
    excerpt: 'A guide to the most popular Java frameworks, including Spring, Hibernate, and how to choose the right one for your project.',
    link: '#',
    icon: faLaptopCode
  },
  {
    title: 'The Power of Mentorship in Software Development',
    excerpt: 'How mentorship from experienced developers can shape the careers of budding coders.',
    link: '#',
    icon: faChalkboardTeacher
  },
  {
    title: 'Lifelong Learning as a Developer',
    excerpt: 'A story of how continuous learning keeps developers relevant in the fast-paced tech world.',
    link: '#',
    icon: faBookOpen
  },
  {
    title: 'Mastering Full Stack Java Development',
    excerpt: 'Insights from 30 years of experience in mastering Java and teaching it to thousands of students.',
    link: '#',
    icon: faGraduationCap
  }
];

const Blog = () => {
  return (
  
    <div className="blog-container">
      <h2>Latest Articles by PVR</h2>
      <div className="blog-list">
        {posts.map((post, index) => (
          <div key={index} className="blog-card">
            <div className="blog-icon">
              <FontAwesomeIcon icon={post.icon} className="icon" />
            </div>
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <a href={post.link} className="blog-link">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Blog;
