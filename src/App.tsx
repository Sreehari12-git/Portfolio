import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackgroundAnimation from './components/BackgroundAnimation';
import Hero from './sections/Hero';

import Education from './sections/Education';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-slate-200 border-t-blue-500"></div>
          <p className="mt-4 text-lg font-medium text-slate-600 dark:text-slate-400 animate-pulse">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <BackgroundAnimation />
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <Hero />
          <Experience />

          <Education />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
