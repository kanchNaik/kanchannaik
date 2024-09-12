import React from 'react'
import './home.css'


const home = () => {
  return (
    <section id='home'>
      <div className='hero'>
          <div className='hero-text text-container'>
              <h4>Hi, I am</h4><br/>
              <h1>Kanchan Naik</h1>
              <div className='hero_txt_wrapper'>
                <span className='dynamic_txt'>Software Developer, Data Scientist And Data Analyst</span>
              </div>
              <p>Integrating software engineering and data analytics to create innovative, data-driven solutions.</p>
          </div>   
      </div>
    </section>
  )
}

export default home