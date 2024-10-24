import React, { useState } from 'react';
import './Header.css'; // Import the CSS for styling

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <h1 className="logo">Hariprasath G</h1>
            <nav className={`nav ${isOpen ? 'active' : ''}`}>
                <ul className="nav-links">
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};

export default Header;
