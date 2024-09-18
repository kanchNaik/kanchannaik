import React from 'react'
import './contact.css'


const contact = () => {
  return (
    <section id='contact'>
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="icon-container">
        <a href="https://github.com/kanchNaik" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
          <p>https://github.com/kanchNaik</p>
        </a>
        <a href="mailto:kanchannaik55@gmail.com">
          <i className="fas fa-envelope"></i>
          <p>kanchannaik55@gmail.com</p>
        </a>
        <a href="mailto:kanchanashok.naik@sjsu.edu">
          <i className="fas fa-envelope"></i>
          <p>kanchanashok.naik@sjsu.edu</p>
        </a>
        <a href="https://www.linkedin.com/in/kanchan-ashok-naik-b23076141" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
          <p>https://www.linkedin.com/in/kanchan-ashok-naik-b23076141</p>
        </a>
      </div>
    </div>
    </section>
  )
}

export default contact