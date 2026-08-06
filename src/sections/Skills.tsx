import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { SKILLS_DATA } from '../data/portfolioData';
import { FiCode, FiServer, FiDatabase, FiTool, FiCpu } from 'react-icons/fi';

const getCategoryIcon = (category: string) => {
  switch(category) {
    case 'Frontend': return <FiCode size={24} className="text-blue-500 dark:text-blue-400" />;
    case 'Backend': return <FiServer size={24} className="text-green-500 dark:text-green-400" />;
    case 'Databases': return <FiDatabase size={24} className="text-pink-500 dark:text-pink-400" />;
    case 'ORM': return <FiTool size={24} className="text-orange-500 dark:text-orange-400" />;
    case 'AI / LLM': return <FiCpu size={24} className="text-purple-500 dark:text-purple-400" />;
    default: return <FiCode size={24} className="text-slate-500 dark:text-slate-400" />;
  }
};

const getCategoryBg = (category: string) => {
  switch(category) {
    case 'Frontend': return 'bg-blue-100 dark:bg-blue-500/20';
    case 'Backend': return 'bg-green-100 dark:bg-green-500/20';
    case 'Databases': return 'bg-pink-100 dark:bg-pink-500/20';
    case 'ORM': return 'bg-orange-100 dark:bg-orange-500/20';
    case 'AI / LLM': return 'bg-purple-100 dark:bg-purple-500/20';
    default: return 'bg-slate-100 dark:bg-slate-500/20';
  }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <SectionTitle title="Technical Skills" subtitle="Technologies and tools I work with" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
        {Object.entries(SKILLS_DATA).map(([category, skills], categoryIndex) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="glass p-6 rounded-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getCategoryBg(category)}`}>
                {getCategoryIcon(category)}
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                {category}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, skillIndex) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + (skillIndex * 0.05) }}
                  className="px-4 py-2 bg-slate-50 hover:bg-slate-200 dark:bg-[#1a2332] dark:hover:bg-[#253043] rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-800/50 flex items-center gap-2"
                >
                  <skill.icon size={16} style={{ color: skill.color }} />
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
