// Contact.js
import React, { useEffect, useRef } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaGithub } from 'react-icons/fa';
import './Contact.css'; // Import the CSS file for the styles
import lanceImage from './assets/lance.png';
import boyImage from './assets/girl.png';

const Contact = () => {
  const titleMainRef = useRef(null);
  const titleSubRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (titleMainRef.current) {
      observer.observe(titleMainRef.current);
    }
    if (titleSubRef.current) {
      observer.observe(titleSubRef.current);
    }

    return () => {
      if (titleMainRef.current) {
        observer.unobserve(titleMainRef.current);
      }
      if (titleSubRef.current) {
        observer.unobserve(titleSubRef.current);
      }
    };
  }, []);

  return (
    <section className="team contact-us">
      <div className="team-head">
        <h1 ref={titleMainRef}>AND NOW, THE FACES BEHIND FUN</h1>
        <h3 ref={titleSubRef}>....meet our team</h3>
      </div>

      <div className="content">
        <img src={lanceImage} alt="Lance Kaluhi" />
        <h3>LANCE KALUHI</h3>
        <p>CEO</p>
        <div className="socials">
          <a href=""><FaFacebook /></a>
          <a href=""><FaInstagram /></a>
          <a href=""><FaTwitter /></a>
          <a href=""><FaWhatsapp /></a>
          <a href=""><FaGithub /></a>
        </div>
      </div>

      <div className="content">
        <img src={boyImage} alt="Debra Demba" />
        <h3>DEBRA DEMBA</h3>
        <p>GRAPHICS ADVISOR</p>
        <div className="socials">
          <a href=""><FaFacebook /></a>
          <a href=""><FaInstagram /></a>
          <a href=""><FaTwitter /></a>
          <a href=""><FaWhatsapp /></a>
          <a href=""><FaGithub /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
