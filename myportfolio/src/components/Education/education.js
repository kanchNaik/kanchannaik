import React from 'react'
import './education.css'
import CardComponent from '../Common/Card/card'
import SJSULogo from '../../assets/sjsulogo.png'
import VIITLogo from '../../assets/viitlogo.png'

export const education = () => {

  const customCardStyle = {
    width: '50%',  // Custom width passed as prop
    backgroundColor: '#000000',  // Custom background color
    borderRadius: '10px',  // Custom border-radius
    boxShadow: `
    0px -7px 10px rgba(0, 0, 0, 0.2),  
    7px 0px 10px rgba(0, 0, 0, 0.3), 
    0px 7px 10px rgba(0, 0, 0, 0.4),  
    -7px 0px 10px rgba(0, 0, 0, 0.3) 
  `,
    perspective: '1000px',
    color: '#ffffff',
    marginTop: '2%',
    marginBottom: '2%',
    paddingTop: '2%',
    paddingBottom: '2%'
  };

  const cardLogoStyle = {
    width: '70px', /* Set the desired width */
    height: 'auto', /* Maintain aspect ratio */
    display: 'block',
    margin: '10px auto', /* Center the image horizontally */
    paddingtop: '20px' /* Optional: Add some space from the top */
  }



  return (
    <section id='education'>
        <div className='educationcontainer'>
            <div className='education-title'>
                <h1>My Education Journey</h1>
            </div>
            <div className='education-section'>
             <CardComponent
              image={SJSULogo}
              title="Master of Science, Data Analytics" 
              text="<span><h5 style ='color: red'>San Jose State University, California, USA </h5></span><p>3.8</p><p><b>Relevant Coursework:</b> Database systems for DA, Math methods for DA, Business Intelligence and Data visualization , Big Data and Technology, Machine Learning, Distributed Systems</p>" 
              link="#"
              cardStyle={customCardStyle}
              cardLogoStyle={cardLogoStyle} 
              isHtml = {true}/>
             <CardComponent
              image={VIITLogo}
              title="Bachelor of Engineering, IT" 
              text="<span><h5 style ='color: red'>Vishwakarma Institute of Information Technology, Pune, India</h5></span><p>3.71</p><p><b>Relevant Coursework:</b> Machine Learning, Business Intelligence, Design and Analysis of Algorithms 
Database Management Systems (DBMS), Advance Database, Software Engineering
</p>" 
              link="#"
              cardStyle={customCardStyle}  
              cardLogoStyle={cardLogoStyle}
              isHtml = {true}/>
            </div>
        </div>
        
    </section>
  )
}

export default education
