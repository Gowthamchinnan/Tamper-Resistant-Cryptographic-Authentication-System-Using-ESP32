import React, { useEffect } from 'react';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import './Components/Portfolio.css';

function App() {
  // Smooth scroll for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <>
      <header className="header">
        <div className="portfolio-container header-nav">
          <div className="logo">Portfolio.</div>
          <nav className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#projects" className="nav-link">Work</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      <main className="portfolio-container" style={{ paddingTop: '70px' }}>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer style={{ textAlign: 'center', padding: '2rem 0', color: '#94a3b8', fontSize: '0.9rem', borderTop: '1px solid var(--glass-border)' }}>
        <p>© {new Date().getFullYear()} Designed & Built with ❤️</p>
      </footer>
    </>
  );
}

export default App;
