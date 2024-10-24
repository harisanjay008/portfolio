import React from 'react';
import './Projects.css'; // Import CSS for styling

const Projects = () => {
    return (
        <div className="projects-container">
            <h2 className="projects-heading">My Projects</h2>
            <div className="project-list">
                {/* OX Game Project */}
                <div className="project-item">
                    <img 
                        src="https://th.bing.com/th/id/OIP.g5ssABXuX0U4abs3RO4H7wAAAA?rs=1&pid=ImgDetMain" // Replace with your OX game image URL
                        alt="OX Game"
                        className="project-image"
                    />
                    <div className="project-description">
                        <h3>OX Game</h3>
                        <p>
                            Built with HTML, CSS, and JavaScript, this simple OX game adds fun by including special rules like extra points for diagonal wins.
                        </p>
                        <div className="project-links">
                            <a href="https://github.com/harisanjay008/xo-game" target="_blank" rel="noopener noreferrer" className="project-link">GitHub Link</a>
                            <a href="https://xo-game-f832e.web.app/" target="_blank" rel="noopener noreferrer" className="project-link">Demo Link</a>
                        </div>
                    </div>
                </div>

                {/* Student Management System Project */}
                <div className="project-item">
                    <img 
                        src="catfinder.png" // Replace with your Student Management System image URL
                        alt="Student Management System"
                        className="project-image"
                    />
                    <div className="project-description">
                        <h3>Cat Finder</h3>
                        <p>
                        A simple React application that fetches a list of users from a JSON placeholder API and allows users to filter the list by name.
                        </p>
                        <div className="project-links">
                            <a href="https://github.com/harisanjay008/catname-finder" target="_blank" rel="noopener noreferrer" className="project-link">GitHub Link</a>
                            <a href="https://cat-name-finder.web.app/" target="_blank" rel="noopener noreferrer" className="project-link">Demo Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
