// Home.js
import React from 'react';
import './home.css'; // Import the CSS file for styling
import pad from './assets/pad.png'; // Import the image

function Home() {
  return (
    <div className="home-container">
      <div className="card-home">
        <img src={pad} alt="Card" className="card-image floating-image" />
      </div>
    </div>
  );
}

export default Home;
