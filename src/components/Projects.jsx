import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Shield, Code2, Users } from 'lucide-react';
import '../styles/projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Bright Edge',
      description: 'Real-time music distribution app, Design to help upcoming artist to record, arrange and Distribute thier musics .',
      problem: 'Artist face difficulties in distributing their music to a wide audience due to lack of resources and connections.',
      features: [
        'AI Music analyser',
        'Music Educator',
        'AI Coach to check if Any copy right ',
      ],
      tech: ['Node.js', 'React', 'MongoDB','Fast API'],
      impact: 'Reduces amount of music distributed to platforms like sportify by 60%',
      github: 'https://github.com/MAIDUGU-jean1/CIMFEST2025.git',
      demo: 'http://bright-edge-distribution.vercel.app'
    },
    {
      title: 'Protech Academy',
      description: 'A web app design to circulate students and their education, track your progress and get results ',
      problem: 'Difficult to track Students result and performance. This platform is design to help both students and teachers ',
      features: [
          'students registration and management',
          'Course material distribution',
          'Performance tracking and analytics',
          'Interactive learning modules',
          'publication of result and mentorship'
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Laravel'],
      impact: 'Student Performance increased by 20% each batch of training',
      github: 'https://github.com/gepprotech/gep.git',
      demo: 'http://student.gepprotech.com'
    },
    // {
    //   title: 'Canvas Design System',
    //   description: 'Comprehensive UI component library and design system built for consistency across large-scale applications.',
    //   problem: 'Development teams waste time rebuilding components and struggle with inconsistent user experiences.',
    //   features: [
    //     '60+ accessible React components',
    //     'Theme customization with CSS variables',
    //     'Comprehensive documentation with examples',
    //     'Automated visual regression testing'
    //   ],
    //   tech: ['React', 'TypeScript', 'Storybook', 'Jest', 'Framer Motion'],
    //   impact: 'Increased development velocity by 40% across teams',
    //   github: '#',
    //   demo: '#'
    // },
    // {
    //   title: 'LogiChain Platform',
    //   description: 'Supply chain management platform with real-time tracking, inventory management, and predictive analytics.',
    //   problem: 'Traditional supply chain systems lack real-time visibility and predictive capabilities.',
    //   features: [
    //     'Real-time shipment tracking with maps',
    //     'Inventory prediction using ML models',
    //     'Automated reporting and analytics',
    //     'Multi-tenant architecture'
    //   ],
    //   tech: ['Next.js', 'Python', 'PostgreSQL', 'Mapbox', 'TensorFlow.js'],
    //   impact: 'Improved delivery accuracy by 35% for logistics partners',
    //   github: '#',
    //   demo: '#'
    // }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>
          <p className="section-subtitle">Real solutions for real problems</p>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="project-header">
                  <div className="project-icon">
                    <Code2 size={24} />
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                
                <div className="project-details">
                  <div className="detail-section">
                    <h4>Problem Solved</h4>
                    <p>{project.problem}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Key Features</h4>
                    <ul className="features-list">
                      {project.features.map((feature, i) => (
                        <li key={i}>
                          <Zap size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Tech Stack</h4>
                    <div className="tech-stack">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-item">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Impact</h4>
                    <p className="impact-text">
                      <Shield size={18} />
                      {project.impact}
                    </p>
                  </div>
                </div>
                
                <div className="project-links">
                  <a href={project.github} className="project-link">
                    <Github size={20} />
                    View Code
                  </a>
                  <a href={project.demo} className="project-link primary">
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <a href="https://github.com/MAIDUGU-jean1" className="btn btn-outline more-projects-btn">
          <ExternalLink size={20} className="btn-icon" />
          View All Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;