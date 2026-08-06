import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { CONTACT_DATA } from '../data/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 md:mb-0">
          © {currentYear} Sreehari K P. All rights reserved.
        </p>
        
        <div className="flex space-x-6">
          <a 
            href={CONTACT_DATA.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a 
            href={CONTACT_DATA.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
          <a 
            href={`mailto:${CONTACT_DATA.email}`} 
            className="text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
