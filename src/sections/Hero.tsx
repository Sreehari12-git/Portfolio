import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { HERO_DATA, CONTACT_DATA } from '../data/portfolioData';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12">
      <div className="flex flex-col gap-10 items-center justify-center min-h-[calc(100vh-80px)] pt-20 pb-10">
        
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center z-10 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight leading-tight"
          >
            Passionate Developer <br className="hidden md:block" />
            <span className="text-gradient">Turning Ideas Into Code</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl font-semibold mb-6 h-12"
          >
            <TypeAnimation
              sequence={[
                HERO_DATA.role,
                2000,
                'Web Developer',
                2000,
                'Mobile App Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-gradient"
              repeat={Infinity}
            />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-xl leading-relaxed"
          >
            {HERO_DATA.introduction}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center mb-8"
          >
            <a 
              href="#"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
            >
              <FiDownload size={20} />
              <span>Download Resume</span>
            </a>
            <Link 
              to="contact"
              smooth={true}
              duration={500}
              className="flex items-center gap-2 px-6 py-3 glass hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white rounded-full font-medium cursor-pointer transition-all hover:-translate-y-1"
            >
              <FiMail size={20} />
              <span>Contact Me</span>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex gap-6 items-center justify-center"
          >
            <a href={CONTACT_DATA.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
              <FiGithub size={24} />
            </a>
            <a href={CONTACT_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
              <FiLinkedin size={24} />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
