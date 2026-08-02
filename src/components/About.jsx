import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Target, Compass } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge-pill mb-4"
          >
            About Us
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-heading tracking-tight mb-6"
          >
            Your Complete <span className="text-gradient">Digital Partner</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-sub leading-relaxed"
          >
            One partner for design, development, growth, and everything in between.
          </motion.p>
        </div>

        {/* 2 Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-sub text-base sm:text-lg leading-relaxed"
          >
            <p className="glass-panel p-6 rounded-2xl border border-white/10">
              <strong className="text-heading">We develop both Custom Coded Websites & No-Code Platforms</strong> tailored to your exact business needs and growth stage.
            </p>
            <p>
              Whether you need a custom-engineered web app built with React, Next.js, and Node.js or a fast-launch marketing website built on Framer or Webflow, our team delivers high-performance solutions engineered for long-term success.
            </p>
            <p>
              Every project is planned strategically, designed professionally, developed efficiently, and supported long after launch. We analyze your goals, timeline, and budget to select the perfect approach — Custom Code or No-Code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-indigo-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-heading mb-2">Strategic Planning</h3>
              <p className="text-sm text-sub">
                Grounding every decision in market evidence, user data, and clear business objectives.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-heading mb-2">Modern Technology</h3>
              <p className="text-sm text-sub">
                Selecting the exact tech stack — No-Code or Full-Stack — that matches your scalability goals.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-heading mb-2">User-Centric UI/UX</h3>
              <p className="text-sm text-sub">
                Crafting interfaces that feel effortless, intuitive, and conversion-optimized.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-heading mb-2">Long-Term Growth</h3>
              <p className="text-sm text-sub">
                Providing active support, ongoing maintenance, SEO optimization, and infrastructure scaling.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
