import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Server, Smartphone, Wrench,
  Cpu,
  Database,
  GitBranch
} from 'lucide-react';
import '../styles/skills.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 size={24} />,
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 80 },
        { name: 'Next.js', level: 70 },
        { name: 'HTML', level: 95 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      icon: <Server size={24} />,
      title: 'Backend',
      skills: [
        { name: 'Laravel', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'MySQL', level: 90 },
        { name: 'PHP', level: 90 }
      ]
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile & APIs',
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Expo', level: 75 },
        { name: 'Firebase', level: 70 },
        // { name: 'WebSocket', level: 78 },
        // { name: 'WebRTC', level: 70 }
      ]
    },
      {
      icon: <Cpu size={24} />,
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', level: 95 },
        // { name: 'Docker', level: 82 },
        { name: 'AWS', level: 75 },
        { name: 'CI/CD', level: 80 },
        { name: 'MongoDB', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Skills & Expertise</h2>
          
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={category.title}
                className="skill-category"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="category-header">
                  <div className="category-icon">
                    {category.icon}
                  </div>
                  <h3>{category.title}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div 
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;