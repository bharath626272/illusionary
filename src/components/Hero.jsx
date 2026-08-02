import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, FolderKanban, Users, Award, Building2, ChevronRight } from 'lucide-react';

export default function Hero() {
  const stats = [
    { number: '100+', label: 'Projects Delivered', icon: FolderKanban, color: 'text-indigo-400' },
    { number: '50+', label: 'Happy Clients', icon: Users, color: 'text-cyan-400' },
    { number: '10+', label: 'Industries Served', icon: Building2, color: 'text-blue-400' },
    { number: '99%', label: 'Client Satisfaction', icon: Award, color: 'text-emerald-400' },
  ];

  // Container Stagger Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-28 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Dynamic Animated Gradient Mesh Spheres with GPU Acceleration */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="gradient-glow-1 pointer-events-none gpu-layer"
        style={{ willChange: 'transform' }}
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="gradient-glow-2 pointer-events-none gpu-layer"
        style={{ willChange: 'transform' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Pre-heading Pill Badge with Pulsing Glow */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
          className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full glass-panel border border-indigo-500/40 text-indigo-300 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-xl shadow-indigo-500/10 hover:border-cyan-400/60 transition-all cursor-default max-w-full text-center"
        >
          <span className="flex h-2 w-2 relative flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400 animate-spin-slow flex-shrink-0" />
          <span className="truncate">Nexora Digital — Complete Digital Solutions Partner</span>
        </motion.div>

        {/* Main Headline with Staggered Word Reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto mb-6 sm:mb-8"
        >
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-heading leading-[1.25] pb-2 break-words">
            <motion.span variants={itemVariants} className="inline-block mr-2 sm:mr-3">
              Transform
            </motion.span>
            <motion.span variants={itemVariants} className="inline-block mr-2 sm:mr-3">
              Your
            </motion.span>
            <motion.span variants={itemVariants} className="inline-block mr-2 sm:mr-3">
              Business
            </motion.span>
            <motion.span variants={itemVariants} className="inline-block mr-2 sm:mr-3">
              with
            </motion.span>
            <br className="hidden sm:inline" />
            <motion.span
              variants={itemVariants}
              className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent inline-block font-black drop-shadow-[0_0_30px_rgba(56,189,248,0.5)] mt-1 sm:mt-2 pb-3 px-1"
            >
              Digital Solutions.
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-xl text-sub max-w-3xl mx-auto font-normal leading-relaxed mb-10 sm:mb-12"
        >
          We create premium websites, business software, mobile applications, cloud solutions, and marketing strategies that help businesses grow faster and work smarter.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16 sm:mb-20"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(110, 139, 255, 0.5)' }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="btn-primary text-base font-bold px-8 sm:px-9 py-4 sm:py-4.5 w-full sm:w-auto relative group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            whileTap={{ scale: 0.98 }}
            href="#work"
            className="btn-secondary text-base font-bold px-8 sm:px-9 py-4 sm:py-4.5 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <span>View Portfolio</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </motion.a>
        </motion.div>

        {/* Stats Grid with Glass Elevation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 max-w-5xl mx-auto pt-10 border-t border-white/10"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="glass-card p-5 sm:p-6 rounded-2xl text-center flex flex-col items-center justify-center relative overflow-hidden group border border-white/10 hover:border-indigo-500/40"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl sm:text-4xl font-extrabold text-gradient mb-1">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-medium text-sub">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
