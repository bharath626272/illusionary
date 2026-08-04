import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Target, Compass } from 'lucide-react';

export default function About() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge-resend mb-4"
          >
            About Us
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight mb-4"
          >
            Your Complete <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-heading)] via-[var(--text-body)] to-[var(--text-sub)]">Digital Partner</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--text-sub)] text-base max-w-xl mx-auto font-normal"
          >
            One partner for design, development, growth, and everything in between.
          </motion.p>
        </div>

        {/* 2 Column Content Layout (Original Narrative Copy Preserved 100%) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-[var(--text-sub)] text-sm leading-relaxed"
          >
            <div className="bg-[var(--bg-card)] p-6 rounded-xl border border-[var(--border-color)] shadow-sm">
              <p className="text-[var(--text-heading)] font-semibold text-base mb-2">
                We develop both Custom Coded Websites & No-Code Platforms tailored to your exact business needs and growth stage.
              </p>
            </div>

            <p className="font-normal px-1 leading-relaxed">
              Whether you need a custom-engineered web app built with React, Next.js, and Node.js or a fast-launch marketing website built on Framer or Webflow, our team delivers high-performance solutions engineered for long-term success.
            </p>

            <p className="font-normal px-1 leading-relaxed">
              Every project is planned strategically, designed professionally, developed efficiently, and supported long after launch. We analyze your goals, timeline, and budget to select the perfect approach — Custom Code or No-Code.
            </p>
          </motion.div>

          {/* 4 Feature Cards (Original Copy Preserved 100%) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div 
              onMouseMove={handleMouseMove}
              className="spotlight-card p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]"
            >
              <div className="w-8 h-8 rounded-lg bg-[var(--pill-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-heading)] mb-3">
                <Target className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-[var(--text-heading)] mb-1">Strategic Planning</h3>
              <p className="text-xs text-[var(--text-sub)]">
                Grounding every decision in market evidence, user data, and clear business objectives.
              </p>
            </div>

            <div 
              onMouseMove={handleMouseMove}
              className="spotlight-card p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]"
            >
              <div className="w-8 h-8 rounded-lg bg-[var(--pill-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-heading)] mb-3">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-[var(--text-heading)] mb-1">Modern Technology</h3>
              <p className="text-xs text-[var(--text-sub)]">
                Selecting the exact tech stack — No-Code or Full-Stack — that matches your scalability goals.
              </p>
            </div>

            <div 
              onMouseMove={handleMouseMove}
              className="spotlight-card p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]"
            >
              <div className="w-8 h-8 rounded-lg bg-[var(--pill-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-heading)] mb-3">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-[var(--text-heading)] mb-1">User-Centric UI/UX</h3>
              <p className="text-xs text-[var(--text-sub)]">
                Crafting interfaces that feel effortless, intuitive, and conversion-optimized.
              </p>
            </div>

            <div 
              onMouseMove={handleMouseMove}
              className="spotlight-card p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]"
            >
              <div className="w-8 h-8 rounded-lg bg-[var(--pill-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-heading)] mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-[var(--text-heading)] mb-1">Long-Term Growth</h3>
              <p className="text-xs text-[var(--text-sub)]">
                Providing active support, ongoing maintenance, SEO optimization, and infrastructure scaling.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
