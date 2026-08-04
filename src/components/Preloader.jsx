import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 450);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--bg-main)] overflow-hidden transition-colors duration-300"
        >
          {/* Resend Top Spotlight Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] pointer-events-none bg-radial-gradient" 
            style={{
              background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255, 79, 0, 0.15) 0%, transparent 70%)'
            }}
          />

          {/* Logo Brand Animation */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.05, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4 relative z-10"
          >
            <div className="w-12 h-12 rounded-xl bg-[var(--pill-bg)] border border-[var(--border-color)] flex items-center justify-center shadow-xl">
              <Command className="w-6 h-6 text-[var(--text-heading)] animate-pulse" />
            </div>

            <div className="flex flex-col items-center gap-1">
              <span className="font-extrabold text-2xl tracking-tight text-[var(--text-heading)] font-display flex items-center gap-1.5">
                Nexora
                <span className="w-2 h-2 rounded-full bg-[#ff4f00]" />
              </span>
              <span className="text-xs font-mono text-[var(--text-sub)]">
                Digital Solutions Partner
              </span>
            </div>

            {/* Resend Progress Indicator Bar */}
            <div className="w-32 h-1 bg-[var(--border-color)] rounded-full overflow-hidden mt-2">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-[#ff4f00] to-[#f97316] rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
