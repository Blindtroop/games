// Feedback.js
import './Feedback.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import videoSrc from './assets/videoplayback.mp4'; // Adjust the path as per your directory structure

const Feedback = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate if the message field is not empty
    const message = form.current['message'].value.trim();
    if (!message) {
      alert('Please enter a message.');
      return; // Prevent further execution of the function
    }

    emailjs
      .sendForm('service_5xuej19', 'template_gf3trsh', form.current, {
        publicKey: 'By7e1jVwfaigoY9mV',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSent(true);
          form.current.reset();
          // Hide success message after 3 seconds
          setTimeout(() => {
            setSent(false);
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="feedback-events">
      <div className="feedback-video-container">
        <div className="feedback-video-overlay"></div>
        <video src={videoSrc} autoPlay muted loop></video>
        <div className="feedback-text-container">
          <p>SHARE YOUR THOUGHTS AND SUGGESTIONS</p>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder="Name" required />
            <input type="email" name="from_email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <input type="submit" value="Send" />
          </form>
          {sent && (
            <div className="success-message">
              Message sent successfully!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
