import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import '../styles/experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Melah Information Technology',
      role: 'Software Engineer',
      period: '2025 - Present',
      location: 'Remote',
      website: 'http://melah.com',
      description: [
        'Develop and maintain scalable microservices handling daily transactions',
        'Implement real-time data processing pipelines using Node.js and Laravel',
        'Lead migration of legacy systems to modern React/TypeScript architecture',
        'Collaborate with product teams to define technical requirements and API contracts',
        'Mentor junior developers and conduct code reviews'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS', 'mysql', 'laravel']
    },
    {
      company: 'GEP Protech Academy',
      role: 'Frontend Developer Trainee',
      period: '2023 - present',
      location: 'On-site',
      website: 'http://gepprotech.com',
      description: [
        'Completed intensive full-stack development training program',
        'Built production-grade applications using React, Node.js, and Mysql',
        'Worked in agile teams to deliver client projects on tight deadlines',
        'Implemented CI/CD pipelines for automated testing and deployment',
        'Presented technical solutions to senior engineers and stakeholders'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'React']
    },
    {
      company: 'Mira Edge Technology ',
      role: 'Developper',
      period: '2025 - present',
      location: 'Remote',
      website: 'http://miraedge.tech',
      description: [
        'Develop and maintain Scalable applicatiions, handeling daily activities',
        'Built production-grade applications using Modern technologies',
        'Worked in agile teams to deliver client projects on tight deadlines',
        'Presenting technical solution to the world to make a different '
      ],
      technologies: ['React', 'Express.js', 'Laravel', 'Git', 'Node.js', 'Docker']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Professional Experience</h2>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="timeline-marker">
                  <Briefcase size={20} />
                </div>

                <div className="timeline-content">
                  <div className="experience-header">
                    <h3>{exp.role}</h3>
                    <div className="company-info">
                      <span className="company-name">{exp.company}</span>
                      <div className="experience-meta">
                        <span className="meta-item">
                          <Calendar size={16} />
                          {exp.period}
                        </span>
                        <span className="meta-item">
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                        <span className='meta-item'>
                          <a href={exp.website} target='blank'>{exp.company}</a>
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="experience-description">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="technologies">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;