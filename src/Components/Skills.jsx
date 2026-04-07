import React from 'react';
import { Code2, Database, Layout, Smartphone, Terminal, Cpu } from 'lucide-react';

const skills = [
  { name: 'HTML, CSS, JavaScript', icon: <Layout size={20} /> },
  { name: 'C & C++', icon: <Terminal size={20} /> },
  { name: 'Python & Java', icon: <Code2 size={20} /> },
  { name: 'OOP & Data Structures', icon: <Database size={20} /> },
  { name: 'Flask & AWS', icon: <Cpu size={20} /> },
  { name: 'ESP32 & Hardware', icon: <Smartphone size={20} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="section animate-in" style={{ animationDelay: '0.6s' }}>
      <div style={{ width: '100%' }}>
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-container">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-tag">
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
