import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coffee } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-text">
            <p>
              Built with <Heart size={16} className="inline-icon" /> and{' '}
              <Coffee size={16} className="inline-icon" /> by Maidugu AKA Overwatch
            </p>
            <p className="copyright">
              © {currentYear} Jean Perrin. All rights reserved.
            </p>
          </div>
          
          <div className="footer-links">
            <a 
              href="#hero" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="back-to-top"
            >
              Back to top ↑
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;