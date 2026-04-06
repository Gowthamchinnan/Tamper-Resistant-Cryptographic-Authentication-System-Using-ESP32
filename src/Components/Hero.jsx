import React from 'react';
import { ArrowRight } from 'lucide-react';
import profilePic from '../assets/Portfolioimage.JPG';

const Hero = () => {
  return (
    <section id="home" className="section animate-in" style={{ animationDelay: '0.2s', minHeight: '100vh', paddingTop: '80px' }}>
      <div className="hero-container">
        
        <div className="hero-content">
          <span className="hero-subtitle">Software Engineer</span>
          <h1 className="hero-title">
            Hi, I'm <span style={{ color: 'var(--accent)' }}>Gowtham C</span>.<br />
            Building digital experiences that matter.
          </h1>
          <p className="hero-desc">
            I'm a developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <img 
              src={profilePic} 
              alt="My Profile" 
              className="hero-profile-pic"
              // Fallback if image not found
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
