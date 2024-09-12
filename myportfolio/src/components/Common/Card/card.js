import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardComponent = ({ image, title, text, link, cardStyle, cardLogoStyle, isHtml = false}) => {

  const createMarkup = () => {
    return { __html: text };
  };

  return (
    <div className="card" style={cardStyle}> {/* Apply inline styles */}
    <img src={image} className="card-img-top" style={cardLogoStyle} alt={title} />
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">
      {isHtml ? <span dangerouslySetInnerHTML={createMarkup()}></span> : text}
      </p>
    </div>
  </div>
  );
};

export default CardComponent;