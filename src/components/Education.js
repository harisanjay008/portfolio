// src/components/Education.js

import React from 'react';
import './Education.css'; // Import the CSS for styling

const Education = () => {
  return (
    <div className="education-container">
      <h2>Education</h2>
      
      <div className="education-item">
        <h3>Bachelor of Engineering (Computer Science and Engineering)</h3>
        <p>2020 - 2024</p>
        <p>Sethu Institute of Technology</p>
        <p>Madurai, Tamil Nadu</p>
      </div>
      
      <div className="education-item">
        <h3>XII Std</h3>
        <p>2019 - 2020</p>
        <p>Dolphin Public Hr Sec School</p>
        <p>Madurai, Tamil Nadu</p>
      </div>
      
      <div className="education-item">
        <h3>X Std</h3>
        <p>2017 - 2018</p>
        <p>Dolphin Public Hr Sec School</p>
        <p>Madurai, Tamil Nadu</p>
      </div>
    </div>
  );
};

export default Education;
