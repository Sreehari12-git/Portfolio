import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { ABOUT_DATA } from '../data/portfolioData';
import { FiCode, FiCpu, FiUsers, FiTarget } from 'react-icons/fi';

const features = [
  { icon: <FiCode size={24} />, title: "Clean Code", desc: "Writing maintainable and scalable code." },
  { icon: <FiCpu size={24} />, title: "Modern Tech", desc: "Using latest frameworks and tools." },
  { icon: <FiUsers size={24} />, title: "Team Player", desc: "Collaborating effectively in agile teams." },
  { icon: <FiTarget size={24} />, title: "Problem Solver", desc: "Finding optimal solutions to complex issues." },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <SectionTitle title="About Me" subtitle="Get to know me better" />
      
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Image/Visual side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full"
        >
          <div className="relative rounded-2xl overflow-hidden glass p-2 w-full max-w-md mx-auto aspect-[4/5]">
            <img 
              src="https://via.placeholder.com/600x800/1e293b/3b82f6?text=Sreehari+Working" 
              alt="Sreehari Working" 
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-bold">Passionate Developer</h3>
              <p className="text-sm opacity-80">Building the future of web</p>
            </div>
          </div>
        </motion.div>

        {/* Content side */}
        <div className="flex-1 space-y-6">
          {ABOUT_DATA.text.map((paragraph, index) => (
            <motion.p 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg"
            >
              {paragraph}
            </motion.p>
          ))}

          {/* Feature grid */}
          <div className="grid grid-cols-2 gap-4 pt-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.3 + (idx * 0.1) }}
                className="glass-card p-4 rounded-xl flex items-start gap-4 group"
              >
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">{feature.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
