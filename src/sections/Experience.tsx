import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <SectionTitle title="Experience" subtitle="My professional journey" />
      
      <div className="max-w-4xl mx-auto space-y-8">
        {EXPERIENCE_DATA.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-2xl p-6 md:p-8 flex flex-col relative overflow-hidden group"
          >
            {/* Decoration */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors"></div>
            
            <div className="w-full">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                <FiBriefcase size={20} />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
              </div>
              <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                {'companyUrl' in exp && exp.companyUrl ? (
                  <a href={exp.companyUrl as string} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:underline underline-offset-4 decoration-blue-500/30">
                    {exp.company}
                  </a>
                ) : (
                  exp.company
                )}
              </h4>
              
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg inline-flex">
                <FiCalendar size={16} />
                <span>{exp.duration}</span>
              </div>
            </div>
            

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
