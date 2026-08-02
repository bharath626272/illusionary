import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground({ theme }) {
  // Optimized dust particles for 60fps/120fps mobile performance
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 14 + 12,
    delay: Math.random() * 4,
  }));

  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-colors duration-500">
      
      {/* Light Mode Mesh Background Base Gradient */}
      {!isDark && (
        <div 
          className="absolute inset-0 transition-opacity duration-700 opacity-100"
          style={{
            background: 'linear-gradient(135deg, #eef2ff 0%, #f5f3ff 25%, #f0fdfa 60%, #fdf2f8 85%, #f8fafc 100%)'
          }}
        />
      )}

      {/* Floating Orb 1: Top Left - Indigo / Sapphire */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-[12%] left-[10%] w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] rounded-full blur-[70px] sm:blur-[80px] gpu-layer"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(110, 139, 255, 0.2) 0%, rgba(62, 214, 245, 0.04) 60%, transparent 80%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 80%)',
          willChange: 'transform',
        }}
      />

      {/* Floating Orb 2: Middle Right - Cyan / Teal */}
      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 60, -50, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[30%] -right-[12%] w-[550px] sm:w-[650px] h-[550px] sm:h-[650px] rounded-full blur-[75px] sm:blur-[85px] gpu-layer"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(62, 214, 245, 0.16) 0%, rgba(168, 85, 247, 0.06) 65%, transparent 85%)'
            : 'radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, rgba(6, 182, 212, 0.12) 60%, transparent 80%)',
          willChange: 'transform',
        }}
      />

      {/* Floating Orb 3: Bottom Left - Violet / Rose */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 50, 0],
          scale: [0.95, 1.15, 1, 0.95],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[5%] -left-[12%] w-[480px] sm:w-[550px] h-[480px] sm:h-[550px] rounded-full blur-[70px] sm:blur-[80px] gpu-layer"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(168, 85, 247, 0.14) 0%, rgba(110, 139, 255, 0.05) 60%, transparent 80%)'
            : 'radial-gradient(circle, rgba(217, 70, 239, 0.18) 0%, rgba(244, 63, 94, 0.1) 60%, transparent 80%)',
          willChange: 'transform',
        }}
      />

      {/* Floating Light Dust Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            x: `${p.x}vw`,
            y: `${p.y}vh`,
            opacity: 0,
          }}
          animate={{
            y: [`${p.y}vh`, `${(p.y - 30 + 100) % 100}vh`],
            opacity: isDark ? [0, 0.6, 0] : [0, 0.7, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
          className="absolute rounded-full gpu-layer"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: isDark ? 'rgba(110, 139, 255, 0.5)' : 'rgba(79, 70, 229, 0.5)',
            boxShadow: isDark 
              ? '0 0 8px rgba(62, 214, 245, 0.7)' 
              : '0 0 8px rgba(79, 70, 229, 0.4)',
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  );
}
