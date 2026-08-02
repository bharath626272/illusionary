import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Zap, Rocket, Palette, Gem, 
  ShieldCheck, Smartphone 
} from 'lucide-react';

export default function Marquee() {
  const items = [
    { text: 'Custom Coded React & Next.js Websites', icon: Code2, color: 'text-cyan-500 dark:text-cyan-400' },
    { text: 'No-Code Framer & Webflow Platforms', icon: Zap, color: 'text-amber-500 dark:text-amber-400' },
    { text: 'Fullstack Node.js & Express Backends', icon: Rocket, color: 'text-indigo-500 dark:text-indigo-400' },
    { text: 'Premium UI/UX Design Systems', icon: Palette, color: 'text-pink-500 dark:text-pink-400' },
    { text: 'High-Conversion Landing Pages', icon: Gem, color: 'text-emerald-500 dark:text-emerald-400' },
    { text: 'Bank-Grade Security & Cloud Infra', icon: ShieldCheck, color: 'text-blue-500 dark:text-blue-400' },
    { text: 'Native & Cross-Platform Mobile Apps', icon: Smartphone, color: 'text-violet-500 dark:text-violet-400' },
  ];

  return (
    <div className="py-5 glass-panel border-y border-white/10 overflow-hidden relative backdrop-blur-md">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          className="flex gap-6 items-center shrink-0 pr-6"
        >
          {[...items, ...items].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card border border-white/10 text-xs font-bold tracking-wide text-heading shadow-sm hover:border-indigo-500/40 transition-colors"
              >
                <Icon className={`w-4 h-4 ${item.color} shrink-0`} />
                <span>{item.text}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
