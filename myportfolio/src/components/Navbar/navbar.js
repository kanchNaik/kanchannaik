import React from 'react'
import './navbar.css'


const navbar = () => {
  return (
    <nav className='container'>
        <div>
          <h3>Data Analytics Student</h3><br/>
          <h5>At San Jose State University</h5>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Education</li>
            <li>Skills</li>
            <li>Experience</li>
            <li>Project</li>
            <li><button className='btn'>Contact Me</button></li>
        </ul>
    </nav>
  )
}

export default navbar