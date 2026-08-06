import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { EDUCATION_DATA } from '../data/portfolioData';
import { FiBookOpen } from 'react-icons/fi';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <SectionTitle title="Education" subtitle="My academic journey" />
      
      <div className="max-w-3xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform md:-translate-x-1/2 rounded-full opacity-30"></div>
        
        <div className="space-y-12">
          {EDUCATION_DATA.map((edu, index) => (
            <div key={edu.id} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
              
              {/* Center Dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-blue-500 z-10 flex items-center justify-center shadow-lg">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              </div>

              {/* Content Card */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`w-full md:w-5/12 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}
              >
                <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className={`flex items-center gap-3 mb-3 text-blue-600 dark:text-blue-400 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                    <FiBookOpen size={24} />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                  </div>
                  
                  {edu.major && (
                    <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">{edu.major}</h4>
                  )}
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{edu.institution}</p>
                  
                  <div className={`inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-bold shadow-sm`}>
                    {edu.score}
                  </div>
                </div>
              </motion.div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
