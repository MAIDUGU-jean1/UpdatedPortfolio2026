import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Download } from 'lucide-react';
import '../styles/hero.css';
import image from '../assets/Images/jean.png';

const Hero = () => {
  // CV download handler - using a direct public path for the PDF
  const handleDownloadCV = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = '/cv/Alex_Evans_Software_Engineer_CV.pdf';
    link.download = 'Alex_Evans_Software_Engineer_CV.pdf'; // Professional filename
    link.target = '_blank'; // Open in new tab for browsers that prefer it

    // Append to body, trigger click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optional: Track download event (for analytics)
    console.log('CV download initiated');
  };

  const scrollToProjects = () => {
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="container hero-wrapper">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="badge-text">Building for impact</span>
          </motion.div>

          <h1 className="hero-title">
            Maidugu<span className="text-gradient"> Jean</span>
          </h1>

          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Software Engineer / Full-Stack Developer
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I build scalable systems that solve real problems. With a focus on clean architecture
            and user experience, I bridge the gap between technical requirements and business value.
            Currently crafting the future at Melah Information Technology.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <button onClick={scrollToProjects} className="btn btn-primary">
              View Projects
              <ArrowRight size={20} className="btn-icon" />
            </button>

            {/* CV Download Button - Primary call to action */}
            <button onClick={handleDownloadCV} className="btn btn-cv">
              <Download size={20} className="btn-icon" />
              Download CV
            </button>

            <button onClick={scrollToContact} className="btn btn-outline">
              Contact Me
            </button>
          </motion.div>
        </motion.div>
        <div className="hero-image">
          <img src={image} alt="No image found" className='image' />
        </div>
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.2, repeat: Infinity, duration: 1.5 }}
          onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;