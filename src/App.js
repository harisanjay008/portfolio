// src/App.js
import React from 'react';
import Header from './components/Header'; // Import the Header component
import AboutMe from './components/AboutMe'; // Import the About Me component
import Education from './components/Education'; // Import the Education component
import Skills from './components/Skills'; // Import the Skills component
import Projects from './components/Projects'; // Import the Projects component
import Contact from './components/Contact'; // Import the Contact component
import Footer from './components/Footer';
import './MainContent.css';
import './App.css'; // Import any global styles

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <section id="about">
          <AboutMe />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default App;
