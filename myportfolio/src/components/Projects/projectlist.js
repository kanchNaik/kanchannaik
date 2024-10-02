import React, { useState } from "react";
import './projectlist.css'
import Card from '../Common/Card/card'

import evproject from '../../assets/evdashboard.png'
import breastcancer from '../../assets/breastcancer.png'

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
  paddingBottom: '2%'
};


const cardLogoStyle = {
  height: '50vh', /* Maintain aspect ratio */
  display: 'block'
}


const projectsData = [
  { id: 1, title: "Electric Vehicle & Charging Infrastructure Analysis", category: ["viz"],  smallimg:evproject, Description : `Integrated diverse electric vehicle data to analyze market growth, infrastructure, and consumer insights, and created a comprehensive Tableau dashboard using Google BigQuery, DataPrep, BeautifulSoup, and data analysis libraries.`, Keywords : "Tableau, Data Analysis, ETL, Python, BigQuery, MySQL, Pandas, NumPy, WebScraping", details: `Integrated the available diverse electric vehicle data in the market we provide an analysis of the electric vehicles’ growth, Existing charging infrastructure, customer demographics, energy consumption, and also if the current EV infrastructure can support Electric Vehicle needs, etc. 
The aim to help stakeholders, including government organizations, business owners, and consumers to get insights into market growth, infrastructure adequacy, and future needs helping them make strategic decisions toward sustainable mobility.
Designed and developed comprehensive dashboard using Tableau and performed Data cleaning, Data Preparation, and ETL process using Google BigQuery and DataPrep.
Utilized BuetifulSoup for WebScraping, and Pandas, Numpy, SciPy, Matplotlib, Seaborn for data analysis and visualization.`, media:"<span><p>Integrated diverse electric vehicle data to analyze market growth, infrastructure, and consumer insights, and created a comprehensive Tableau dashboard using Google BigQuery, DataPrep, BeautifulSoup, and data analysis libraries.</p><p style='color:red'>Keywords: Tableau, Data Analysis, ETL, Python, BigQuery, MySQL, Pandas, NumPy, WebScraping</p></span>"},
  
{ id: 2, title: "Breast Cancer Analysis", category: ["viz"], smallimg:breastcancer, Description : "This study analyzes 4,024 breast cancer cases, examining demographic, clinical, and pathological factors to explore their relationships with patient survival. The findings aim to inform clinical decision-making and improve outcomes.", Keywords : "", media: "<span><p>This study analyzes 4,024 breast cancer cases, examining demographic, clinical, and pathological factors to explore their relationships with patient survival. The findings aim to inform clinical decision-making and improve outcomes.</p><p style='color:red'>Keywords: Tableau, Data Analysis, ETL, Python, Pandas, NumPy</p></span>"},
//{ id: 3, title: "Machine Learning Project 1", category: ["ml"], smallimg:"", Description : "", Keywords : "" },
  // { id: 4, title: "Machine Learning Project 2", category: ["ml"] },
  // { id: 5, title: "Machine Learning Project 3", category: ["ml"] },
  // { id: 6, title: "Visualization Project 3", category: ["viz"] },
  // { id: 7, title: "General Project 1", category: ["general"] },
  // { id: 8, title: "General Project 2", category: ["general"] },
];

const ProjectList = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((project) =>
          project.category.includes(activeCategory)
        );

  return (
    <section id = "project">
      <div className="projectcontainer">
      <h1 className="section-title">Projects</h1>

        <div class="filter-nav">
          <button class="filter-button" onClick={() => setActiveCategory("all")}>All</button>
          <button class="filter-button" onClick={() => setActiveCategory("viz")}>Viz</button>
          <button class="filter-button" onClick={() => setActiveCategory("ml")}>Machine Learning</button>
        </div>

        <div className="project-section">
          {filteredProjects.map((project) => (
              <Card
              image={project.smallimg}
              title={project.title} 
              text={project.media} 
              link="#"
              cardStyle={customCardStyle}
              cardLogoStyle={cardLogoStyle} 
              isHtml = {true}
              />
          ))}
        </div>
      </div>
    </section>
  );
};

const cardStyle = {
  padding: "20px",
  background: "#f0f0f0",
  border: "1px solid #ddd",
  borderRadius: "5px",
  textAlign: "center",
  width: "30%", // Adjust the width as per your requirement
};

export default ProjectList;
