import React from 'react';
import './footer.css';
import { Link } from 'react-scroll';
import logo from './assets/logo.png'; // Adjust the path to your logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
          <div className="quick-links">
          <Link to="home-container" smooth={true} duration={900}>Home</Link>
                <Link to="about" smooth={true} duration={900}>About</Link>
                <Link to="contact-us" className='contact' smooth={true} duration={900}>Contact Us</Link>
          </div>
          <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
          <div className="left-content">
          <p>Made with Love by Lance Kaluhi</p>
        </div>
        </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
