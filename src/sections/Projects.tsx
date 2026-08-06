import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { PROJECTS_DATA } from '../data/portfolioData';
import { FiExternalLink, FiGithub, FiVideo, FiMessageSquare, FiCalendar, FiCheckCircle } from 'react-icons/fi';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <SectionTitle title="Featured Projects" subtitle="Some of my recent work" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {PROJECTS_DATA.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
          >
            {/* Project Icon */}
            <div className="relative h-48 w-full flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800/30 transition-colors border-b border-slate-200 dark:border-slate-700/50">
              <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-105 z-10 border border-slate-100 dark:border-slate-800">
                {project.id === 1 && <FiVideo size={56} className="text-blue-500" />}
                {project.id === 2 && <FiMessageSquare size={56} className="text-purple-500" />}
                {project.id === 3 && <FiCalendar size={56} className="text-emerald-500" />}
                {project.id === 4 && <FiCheckCircle size={56} className="text-rose-500" />}
              </div>
              
              {/* Hover Links (Placeholder) */}
              <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4 backdrop-blur-sm">
                <a href="#" className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-500 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg" aria-label="View Live">
                  <FiExternalLink size={20} />
                </a>
                <a href="#" className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-500 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 shadow-lg" aria-label="View Code">
                  <FiGithub size={20} />
                </a>
              </div>
            </div>
            
            {/* Project Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
