// Card.js
import React from 'react';
import './Card.css'; // Import the CSS file for the styles

const Card = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="card">
      <div className="card-game">
        <img src={imageSrc} alt={altText} />
      </div>
      <div className="card-info">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
