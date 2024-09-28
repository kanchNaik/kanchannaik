import React from 'react'
import './skills.css'
import SkillCard from './skillcard';


//Logos
import { ReactComponent as HtmlLogo } from '../../assets/html5.svg'
import csharplogo from '../../assets/c--4.svg'
import { ReactComponent as Pythonlogo } from '../../assets/python.svg'
import { ReactComponent as Javascriptlogo } from '../../assets/javascript.svg'
import { ReactComponent as Csslogo } from '../../assets/css3.svg'
import { ReactComponent as Wordpresslogo } from '../../assets/wordpress.svg'
import { ReactComponent as Mysqllogo } from '../../assets/mysql.svg'
import { ReactComponent as Mongodblogo } from '../../assets/mongodb.svg'
import { ReactComponent as Cassandralogo } from '../../assets/apachecassandra.svg'
import { ReactComponent as Redisdblogo } from '../../assets/redis.svg'
import { ReactComponent as Neo4jlogo } from '../../assets/neo4j.svg'
import { ReactComponent as Postgresqllogo } from '../../assets/postgresql.svg'
import { ReactComponent as Snowql } from '../../assets/snowflake.svg'
import { ReactComponent as Bigquerylogo } from '../../assets/googlebigquery.svg'
import { ReactComponent as Reactjslogo } from '../../assets/react.svg'
import { ReactComponent as Bootstraplogo } from '../../assets/bootstrap.svg'
import powerbilogo from '../../assets/pwerbi.jpg'
import { ReactComponent as Tableaulogo } from '../../assets/tableau.svg'
import sqlserver from '../../assets/sqlserver.png'
import { ReactComponent as JupyterNotebook } from '../../assets/jupyter.svg'
import datapreplogo from '../../assets/dataprep.png'
import { ReactComponent as Gitlogo } from '../../assets/git.svg'
import { ReactComponent as Jiralogo } from '../../assets/jirasoftware.svg'
import { ReactComponent as Postmanlogo } from '../../assets/postman.svg'
import { ReactComponent as Swaggerlogo } from '../../assets/swagger.svg'

const SkillsData = [
  {
    type: "Languages",
    list: [
      {
        name: "C#",
        logo: csharplogo
      },
      {
        name: "Python",
        logo: <Pythonlogo style={{ fill: '#3776AB', width: '50px', height: '50px' }} />,
        color: '#3776AB'
      },
      {
        name: "JavaScript",
        logo: <Javascriptlogo style={{ fill: '#F7DF1E', width: '50px', height: '50px' }} />,
        color: '#F7DF1E'
      }]
  },
  {
    type: "Web Skills",
    list: [
      {
        name: "HTML",
        logo: <HtmlLogo style={{ fill: '#E34F26', width: '50px', height: '50px' }} />,
        color: '#E34F26'
      },
      {
        name: "CSS",
        logo: <Csslogo style={{ fill: '#1572B6', width: '50px', height: '50px' }} />,
        color: '#1572B6'
      },
      {
        name: "WordPress",
        logo: <Wordpresslogo style={{ fill: '#21759B', width: '50px', height: '50px' }} />,
        color: '#21759B'
      },
      {
        name: "ReactJs",
        logo: <Reactjslogo style={{ fill: '#61DAFB', width: '50px', height: '50px' }} />,
        color: '#61DAFB'
      },
      {
        name: "Bootstrap",
        logo: <Bootstraplogo style={{ fill: '#7952B3', width: '50px', height: '50px' }} />,
        color: '#7952B3'
      }
    ]
  },
  {
    type: "Database and DataWarehouse",
    list: [
      {
        name: "MySQL",
        logo: <Mysqllogo style={{ fill: '#4479A1', width: '50px', height: '50px' }} />,
        color: '#4479A1'
      },
      {
        name: "MongoDb",
        logo: <Mongodblogo style={{ fill: '#47A248', width: '50px', height: '50px' }} />,
        color: '#47A248'
      },
      {
        name: "Cassandra",
        logo: <Cassandralogo style={{ fill: '#1287B1', width: '50px', height: '50px' }} />,
        color: '#1287B1'
      },
      {
        name: "RedisDb",
        logo: <Redisdblogo style={{ fill: '#FF4438', width: '50px', height: '50px' }} />,
        color: '#FF4438'
      },
      {
        name: "Neo4j",
        logo: <Neo4jlogo style={{ fill: '#4581C3', width: '50px', height: '50px' }} />,
        color: '#4581C3'
      },
      {
        name: "PostgreSQL",
        logo: <Postgresqllogo style={{ fill: '#4169E1', width: '50px', height: '50px' }} />,
        color: '#4169E1'
      },
      {
        name: "Snowflake",
        logo: <Snowql style={{ fill: '#29B5E8', width: '50px', height: '50px' }} />,
        color: '#29B5E8'
      },
      {
        name: "Big Query",
        logo: <Bigquerylogo style={{ fill: '#669DF6', width: '50px', height: '50px' }} />,
        color: '#669DF6'
      }
    ]
  },
  {
    type: "Tools",
    list: [
      {
        name: "PowerBI",
        logo: powerbilogo
      },
      {
        name: "Tableau",
        logo: <Tableaulogo style={{ fill: '#E97627', width: '50px', height: '50px' }} />,
        color: '#E97627'
      },
      {
        name: "SQLServer",
        logo: sqlserver
      },
      {
        name: "Jupyter Notebook",
        logo: <JupyterNotebook style={{ fill: '#F37626', width: '50px', height: '50px' }} />,
        color: '#F37626'
      },
      {
        name: "DataPrep",
        logo: datapreplogo
      },
      {
        name: "Git",
        logo: <Gitlogo style={{ fill: '#F05032', width: '50px', height: '50px' }} />,
        color: '#F05032'
      },
      {
        name: "Jira",
        logo: <Jiralogo style={{ fill: '#0052CC', width: '50px', height: '50px' }} />,
        color: '#0052CC'
      },
      {
        name: "Postman",
        logo: <Postmanlogo style={{ fill: '#FF6C37', width: '50px', height: '50px' }} />,
        color: '#FF6C37'
      },
      {
        name: "Swagger",
        logo: <Swaggerlogo style={{ fill: '#85EA2D', width: '50px', height: '50px' }} />,
        color: '#85EA2D'
      }
    ]
  }
  ];
 
  // ● Other Tech Skills: A/B Testing, ETL
  // ● Architecture: Data Modeling, Microservices
  // ● Software Design Patterns: Singleton, Strategy, Factory, Adaptor,
  // Decorator, Observer, Command
  // ● Soft Skills: Solution-oriented, Good communication skills, Time
  // management, Work under pressure, Teamwork, Leadership,
  // Organization skills, Planner and Executor
  // ● Frameworks & Libraries: Dapper, MoQ, Nunit,
  //, Angular, JQuery, REST APIs, SOAP APIs, MVC,
  // Pandas, NumPy, MatplotLib
  // ● Tools: , Dataflow, Es
  // Kibana, Sumology, Google Suite (Sheets, Slides), Microsoft
  // Office Suite (Excel, PowerPoint), 
  function Skills() {

    const data = SkillsData;

    return (
      <section id='skills'>
        <div className="skills">
            <h1 className="section-title">Skills</h1>
            <div className="skills-container">
                {data.map((item, sectionindex) => {
                    return(
                        <div className="skills-section">
                            <label className="skills-section-title">{item.type}</label>
                            <div className="skills-list">
                                {item.list.map((skill, skillindex) => {
                                    return(
                                        <SkillCard 
                                        key={`${sectionindex}-${skillindex}`}
                                        skill={skill} />
                                    )
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        </section>
    );
}

export default Skills;