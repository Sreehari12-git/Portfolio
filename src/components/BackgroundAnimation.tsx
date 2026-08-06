import { motion } from 'framer-motion';
import { useMemo } from 'react';

const BackgroundAnimation = () => {
  // Generate random particles for the floating effect
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2, // 2px to 6px
      left: Math.random() * 100, // 0 to 100vw
      duration: Math.random() * 20 + 20, // 20s to 40s duration
      delay: -(Math.random() * 40), // negative delay so they are already on screen when loaded
      xOffset: (Math.random() - 0.5) * 100, // swaying amount
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Grid Pattern overlay for texture */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-50 z-0" />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-slate-400/40 dark:bg-slate-300/40"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}vw`,
              top: '-10vh' // start position reference for the Y animation
            }}
            animate={{
              y: ['120vh', '-20vh'], // float from below screen to above screen
              x: [0, p.xOffset, -p.xOffset, 0], // sway left and right
              opacity: [0, 1, 1, 0], // fade in at bottom, fade out at top
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-400/30 dark:bg-blue-600/20 blur-[100px] z-0"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          x: [0, -60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute -bottom-[10%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-purple-400/30 dark:bg-purple-600/20 blur-[100px] z-0"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-indigo-400/30 dark:bg-indigo-600/20 blur-[100px] z-0"
      />
    </div>
  );
};

export default BackgroundAnimation;
