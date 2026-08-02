import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 1100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07080d] dark:bg-[#07080d] light:bg-[#f8fafc] overflow-hidden"
        >
          {/* Ambient Glow Aura */}
          <div className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-indigo-600/30 to-cyan-400/30 rounded-full blur-[90px] animate-pulse" />

          {/* Logo Brand Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4 relative z-10"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 via-blue-500 to-cyan-400 p-[2.5px] shadow-2xl shadow-indigo-500/40">
              <div className="w-full h-full bg-[#07080d] dark:bg-[#07080d] light:bg-white rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-cyan-400 animate-spin-slow" />
              </div>
            </div>

            <div className="flex flex-col items-center gap-1">
              <span className="font-extrabold text-2xl tracking-tight text-gradient">
                Nexora Digital
              </span>
              <span className="text-xs font-semibold tracking-widest text-sub uppercase">
                Digital Solutions Partner
              </span>
            </div>

            {/* Smooth Progress Indicator Bar */}
            <div className="w-36 h-1 bg-white/10 rounded-full overflow-hidden mt-3">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.9, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
