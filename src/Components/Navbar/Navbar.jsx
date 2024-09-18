import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-content">
        <div className="brand">
          <Link to='/' className='nav-link'><h2><strong>PVR's</strong></h2></Link>
        </div>
        <div className="search">
          <input type='text' placeholder='Know about me here ...' aria-label='Search' />
        </div>
        <div className="nav-items">
          <Link to='/aboutme' className='nav-link'><h3>About Me</h3></Link>
          <Link to='/myskills' className='nav-link'><h3>My Skills</h3></Link>
          <Link to='/myinterests' className='nav-link'><h3>My Interests</h3></Link>
          <Link to='/collabratewithme' className='nav-link'><h3>Collaborate with Me</h3></Link>
          <Link to='/myinstitute' className='nav-link'><h3>My Institute</h3></Link>
          <Link to='/mystartups' className='nav-link'><h3>My Startups</h3></Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
