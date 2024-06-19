// Carousel.js
import React, { useEffect, useRef } from 'react';
import Card from './Card'; // Import the Card component
import { cardData } from './data'; // Import the card data
import './Card.css'; // Import the Card CSS for styling

const Carousel = () => {
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
      { threshold: 0.1 } // Adjust threshold as needed
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
    <div className="carousel-container about">
      <h1 ref={titleMainRef} className="title-main">Welcome to the Future of Gaming</h1>
      <h2 ref={titleSubRef} className="title-sub">... and experience it like never before</h2>
      <div className="carousel">
        {cardData.map((card, index) => (
          <Card 
            key={index}
            imageSrc={card.imageSrc}
            altText={card.altText}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
