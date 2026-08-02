import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground({ theme }) {
  // Generate random float dust particles
  const particles = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    size: Math.random() * 5 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 14 + 10,
    delay: Math.random() * 5,
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
          x: [0, 80, -60, 0],
          y: [0, -70, 50, 0],
          scale: [1, 1.2, 0.9, 1],
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-[12%] left-[10%] w-[600px] h-[600px] rounded-full blur-[80px] gpu-layer"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(110, 139, 255, 0.22) 0%, rgba(62, 214, 245, 0.05) 60%, transparent 80%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.28) 0%, rgba(59, 130, 246, 0.12) 50%, transparent 80%)',
        }}
      />

      {/* Floating Orb 2: Middle Right - Cyan / Teal */}
      <motion.div
        animate={{
          x: [0, -90, 70, 0],
          y: [0, 80, -60, 0],
          scale: [1, 1.25, 0.95, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[30%] -right-[12%] w-[650px] h-[650px] rounded-full blur-[85px] gpu-layer"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(62, 214, 245, 0.18) 0%, rgba(168, 85, 247, 0.08) 65%, transparent 85%)'
            : 'radial-gradient(circle, rgba(20, 184, 166, 0.24) 0%, rgba(6, 182, 212, 0.15) 60%, transparent 80%)',
        }}
      />

      {/* Floating Orb 3: Bottom Left - Violet / Rose */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 70, 0],
          scale: [0.9, 1.2, 1, 0.9],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[5%] -left-[12%] w-[550px] h-[550px] rounded-full blur-[80px] gpu-layer"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(168, 85, 247, 0.16) 0%, rgba(110, 139, 255, 0.06) 60%, transparent 80%)'
            : 'radial-gradient(circle, rgba(217, 70, 239, 0.22) 0%, rgba(244, 63, 94, 0.12) 60%, transparent 80%)',
        }}
      />

      {/* Floating Orb 4: Center Pulse Glow */}
      <motion.div
        animate={{
          scale: [0.9, 1.15, 0.9],
          opacity: [0.4, 0.65, 0.4],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[60%] right-[25%] w-[450px] h-[450px] rounded-full blur-[85px] gpu-layer"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(110, 139, 255, 0.12) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, rgba(147, 51, 234, 0.1) 65%, transparent 80%)',
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
            y: [`${p.y}vh`, `${(p.y - 35 + 100) % 100}vh`],
            opacity: isDark ? [0, 0.7, 0] : [0, 0.8, 0],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: isDark ? 'rgba(110, 139, 255, 0.6)' : 'rgba(79, 70, 229, 0.6)',
            boxShadow: isDark 
              ? '0 0 10px rgba(62, 214, 245, 0.8)' 
              : '0 0 10px rgba(79, 70, 229, 0.5)',
          }}
        />
      ))}
    </div>
  );
}
