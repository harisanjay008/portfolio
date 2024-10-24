// src/components/Skills.js

import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact, FaDatabase } from 'react-icons/fa';
import './Skills.css'; // Import the CSS for styling

const skillsData = [
    { name: 'HTML', icon: <FaHtml5 />, percentage: 90 },
    { name: 'CSS', icon: <FaCss3Alt />, percentage: 80 },
    { name: 'JavaScript', icon: <FaJsSquare />, percentage: 70 },
    { name: 'Express.js', icon: <FaNodeJs />, percentage: 75 },
    { name: 'React', icon: <FaReact />, percentage: 80 },
    { name: 'MongoDB', icon: <FaDatabase />, percentage: 75 },
];

const Skills = () => {
    return (
        <div className="skills-container">
            <h2 className="skills-heading">My Skills</h2>
            <div className="skills-list">
                {skillsData.map((skill, index) => (
                    <div className="skill-item" key={index}>
                        <div className="skill-icon">{skill.icon}</div>
                        <div className="skill-name">{skill.name}</div>
                        <div className="skill-percentage">{skill.percentage}%</div>
                        <div className="skill-bar">
                            <div
                                className="skill-progress"
                                style={{ width: `${skill.percentage}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
