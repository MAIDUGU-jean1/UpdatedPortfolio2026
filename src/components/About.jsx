import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Rocket } from 'lucide-react';
import '../styles/about.css';

const About = () => {
  const principles = [
    {
      icon: <Code size={28} />,
      title: 'Code with Purpose',
      description: 'Every line should solve a problem or enable new capabilities.'
    },
    {
      icon: <Users size={28} />,
      title: 'Collaborate First',
      description: 'Great software is built by teams that communicate clearly.'
    },
    {
      icon: <Rocket size={28} />,
      title: 'Ship & Iterate',
      description: 'Get solutions in users\' hands, then improve based on real feedback.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>

          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a software engineer who believes technology should <strong>simplify complexity</strong>,
                not add to it. Over the past months years, I've worked across the stack from React interfaces
                to Laravel APIs and everything in between always focusing on <strong>delivering value</strong>.

              </p>

              <p>
                At <strong><a href="http://melah.com">Melah Information Technology</a></strong>, I'm part of a team building enterprise
                solutions that handle real-world scale. We're talking systems that process thousands of
                transactions daily, with reliability and performance as non-negotiables.
              </p>

              <p>
                Before this, my time at <strong><a href="http://gepprotech.com">GEP Protech Academy</a></strong> taught me how to learn quickly
                and collaborate effectively. Working alongside other engineers on tight deadlines showed
                me the importance of clean, maintainable code and clear communication.
              </p>
              <p>
                Also i am working with <a href="http://miraedge.com">MiraEdge Technology </a> as a software engineer where I contribute to 
                building innovative solutions that drive business growth.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new frameworks, contributing to open source,
                or thinking about how to make complex systems more approachable for developers and users alike.
              </p>
            </div>

            <motion.div
              className="principles-grid"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  className="principle-card"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="principle-icon">
                    {principle.icon}
                  </div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;