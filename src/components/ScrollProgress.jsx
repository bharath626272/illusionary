import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Optimized spring parameters for zero-latency, 60fps silky-smooth scroll tracking
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 50,
    mass: 0.2,
    restDelta: 0.0001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[1000] pointer-events-none">
      {/* Background track indicator */}
      <div className="h-[3px] w-full bg-white/10 dark:bg-white/10 light:bg-slate-200" />
      
      {/* Glowing Animated Smooth Scroll Progress Line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 via-cyan-400 to-sky-400 rounded-r-full shadow-[0_0_15px_rgba(56,189,248,0.85),0_0_25px_rgba(99,102,241,0.6)]"
        style={{
          scaleX,
          transformOrigin: 'left center',
          willChange: 'transform',
        }}
      />
    </div>
  );
}
