import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll';


const navbar = () => {
  return (
    <nav className=''>
        <div>
          <h3>Applied Data Science</h3>
          <h5>At San Jose State University</h5>
        </div>
        <ul>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
            {/* <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><button className='btn'><Link to="/contact">Contact Me</Link></button></li> */}
        </ul>
    </nav>
  )
}

export default navbar