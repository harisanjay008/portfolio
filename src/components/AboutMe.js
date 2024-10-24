// src/components/AboutMe.js
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import icons
import './AboutMe.css'; // Import CSS for styling
import '../components/NavLinks'

const AboutMe = () => {
  const roles = ['Web Developer', 'MERN Developer'];
  const [index, setIndex] = useState(0); // Track the current role

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length); // Cycle through the roles
    }, 6000); // Change role every 6 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Hari resume.pdf'; // Ensure this path is correct
    link.download = 'Hariprasath_G_CV.pdf'; // Name of the file after download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up
  };

  return (
    <div className="about-me-container">
      <h2>This is Hariprasath G</h2>
      <h3 className="typing-text fade">{roles[index]}</h3> {/* Display the current role with transition */}

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://github.com/harisanjay008" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="mailto:harisanjay008@gmail.com">
          <FaEnvelope size={30} />
        </a>
        <a href="https://www.linkedin.com/in/hari-prasath-0707a5226/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
      </div>

      {/* CV Download Button */}
      <button className="cv-button" onClick={handleDownload}>
        Get CV
      </button>

      {/* About Me Section */}
      <h2 className="about-me-title">About Me</h2>
      <p className="about-me-description">
        I am a Professional Full Stack Developer.
        <br />
        Motivated and detail-oriented recent graduate specializing in MERN Full Stack Development.
        Skilled in building scalable and high-performance web applications with a solid understanding of both front-end and back-end development.
      </p>

      <hr className="divider" /> {/* Horizontal line */}

      {/* Contact Information */}
      <p className="contact-info">EMAIL: <a href="mailto:harisanjay008@gmail.com">harisanjay008@gmail.com</a></p>
      <p className="contact-info">PHONE: 8754044600</p>
    </div>
  );
};



export default AboutMe;
