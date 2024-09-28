import React from 'react';
import './skillcard.css';

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <div style={{ color: skill.color }}>
        {typeof skill.logo === 'string' ? (
          // If logo is a string (image source), render as <img>
          <img src={skill.logo} alt={skill.name} className="skill-logo" />
        ) : (
          // If logo is a React component (SVG), render it directly
          React.cloneElement(skill.logo, { style: { fill: skill.color, width: '50px', height: '50px' } })
        )}
      </div>
      <p>{skill.name}</p>
    </div>
  );
};

export default SkillCard;
