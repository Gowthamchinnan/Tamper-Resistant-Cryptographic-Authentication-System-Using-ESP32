import React from 'react';


const GithubIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    title: 'Tamper-Resistant Cryptographic Authentication System',
    desc: 'Developing a high-security authentication system using ESP32 with hardware-level protection to prevent physical and digital tampering.',
    tags: ['ESP32', 'Embedded Systems', 'IoT Security', 'Cryptography'],
    image: '/assets/images/esp32_project.png',
    links: {},
    status: 'Ongoing'
  },
  {
    title: 'Cloud Cost Monitoring and Optimization Tool',
    desc: 'A Flask and AWS-Based Cost Monitoring System. Developed using Python (Boto3) to track real-time resource usage, identify idle instances, and utilize AWS APIs for accurate spending forecasts.',
    tags: ['Python', 'Flask', 'AWS', 'Boto3'],
    image: '/assets/images/cloud_cost.png',
    links: { github: 'https://github.com/Gowthamchinnan/Cloud-Cost-Optimization-Tool' }
  },
  {
    title: 'Conventional Planner Festive Frolics',
    desc: 'A web-based platform designed for hassle-free event management, utilizing SQL Server for robust data management. It provides a centralized booking system for Marriage Halls, Decorations, Catering, Photography, and more.',
    tags: ['HTML', 'CSS', 'JavaScript', 'SQL Server', 'Web Platform'],
    image: '/assets/images/event_planner.png',
    links: { github: 'https://github.com/Gowthamchinnan/Conventional-Planner-Festive-Froclis.git' }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section animate-in" style={{ animationDelay: '0.4s' }}>
      <div style={{ width: '100%' }}>
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', gap: '1rem', flexWrap: 'wrap' }}>
                  <h3 className="project-title" style={{ marginBottom: 0 }}>{project.title}</h3>
                  {project.status === 'Ongoing' && (
                    <span className="tag" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', border: '1px solid rgba(245, 158, 11, 0.3)', fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>
                      Ongoing
                    </span>
                  )}
                </div>
                <div className="tech-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <p className="project-desc">{project.desc}</p>
                <div className="project-links">
                  {project.links.github && (
                    <a href={project.links.github} className="project-link a" aria-label="Github link" target="_blank" rel="noopener noreferrer">
                      <GithubIcon size={18} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
