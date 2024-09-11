import {Link} from 'react-router-dom';
import React from 'react'
import './navbar.css'


const navbar = () => {
  return (
    <nav className='container'>
        <div>
          <h3>Data Analytics Student</h3>
          <h5>At San Jose State University</h5>
        </div>
        <ul>
            <li><Link to="#home">Home</Link></li>
            <li><Link to="#about">About</Link></li>
            {/* <li><Link to="#education">Education</Link></li> */}
            {/* <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><button className='btn'><Link to="/contact">Contact Me</Link></button></li> */}
        </ul>
    </nav>
  )
}

export default navbar