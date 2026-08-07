import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { PROJECTS_DATA } from '../data/portfolioData';
import { FiExternalLink, FiGithub, FiVideo, FiMessageSquare, FiCalendar, FiCheckCircle, FiX } from 'react-icons/fi';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS_DATA[0] | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20">
      <SectionTitle title="Featured Projects" subtitle="Some of my recent work" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
        {PROJECTS_DATA.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-2xl overflow-hidden group flex flex-col"
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
                {project.images && project.images.length > 0 ? (
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-500 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg cursor-pointer" 
                    aria-label="View Images"
                  >
                    <FiExternalLink size={20} />
                  </button>
                ) : (
                  <a href="#" className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-500 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg" aria-label="View Live">
                    <FiExternalLink size={20} />
                  </a>
                )}
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

      {/* Fullscreen Image Gallery Modal */}
      <AnimatePresence>
        {selectedProject && selectedProject.images && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col bg-slate-950"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10 bg-slate-900/50">
              <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
              <button 
                onClick={() => { setSelectedProject(null); setZoomedImage(null); }}
                className="p-3 bg-white/10 text-white rounded-full hover:bg-rose-500 transition-colors flex items-center justify-center"
                aria-label="Close Gallery"
              >
                <FiX size={24} />
              </button>
            </div>
            
            {/* Modal Content - Grid */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pb-20">
                {selectedProject.images.map((imgUrl, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    key={idx} 
                    onClick={() => setZoomedImage(imgUrl)}
                    className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 group cursor-pointer flex items-center justify-center"
                  >
                    <img 
                      src={imgUrl} 
                      alt={`${selectedProject.title} screenshot ${idx + 1}`} 
                      className="w-full h-auto object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Zoomed Image Lightbox Overlay */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm cursor-zoom-out"
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setZoomedImage(null); }}
              className="absolute top-6 right-6 p-3 bg-white/10 text-white rounded-full hover:bg-rose-500 transition-colors flex items-center justify-center z-10"
              aria-label="Close Image"
            >
              <FiX size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={zoomedImage} 
              alt="Zoomed screenshot" 
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
