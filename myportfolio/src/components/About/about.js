import React from 'react'
import './about.css'
import ProfilePic from '../../assets/profilepic.jpeg'
import Resume from '../../assets/Kanchan_Naik_Resume.pdf'

export const about = () => {
  
  const aboutDivStyle = {
    display: 'flex',
    marginTop: '40px',
  };

  return (
    <section id='about'>
      <div className='aboutcontainer'>
          <div className='eleven'>
          <h1>Little about me</h1>
          </div>
          <div style={aboutDivStyle}>
            <div className='about'>
            <div className='about_text_container'>
              <div className='about_text'>I am a dedicated Data Analytics graduate student at San Jose State University with a comprehensive background in data analysis, machine learning, and cross-platform application development. My professional journey at Musafir, where I advanced from Junior to Lead Developer, gave me a strong foundation in software engineering, team leadership, and stakeholder management. I played a key role in developing and implementing scalable solutions that addressed complex business needs, ensuring high-quality project delivery.
      My expertise includes designing data-driven applications, implementing machine learning algorithms, and using insights from data to drive decision-making. I excel at collaborating with stakeholders to define business goals, managing cross-functional teams, and delivering results under tight deadlines. I am passionate about transforming raw data into actionable insights and look forward to applying my technical and analytical skills to innovative, data-centric initiatives in dynamic environments.
              </div>
              </div>
              <a href={Resume} download='Kanchan_Naik_Resume.pdf'>
                <button className='resume btn'>Download Resume</button>
              </a>
            </div>

            <div className='about image-container'>
              <img src={ProfilePic}/>
            </div>
          </div>
      </div>
    </section>
  )
}

export default about
