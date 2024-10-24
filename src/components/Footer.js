// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import CSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Designed and developed by Hariprasath G</p>
                <p>Copyright © 2024</p>
                <div className="social-icons">
                    <a href="https://github.com/harisanjay008" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/hari-prasath-0707a5226/" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
