import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, Shield, Zap, Eye, Lock, 
  Headphones, DollarSign, TrendingUp, Sparkles, Rocket 
} from 'lucide-react';

export default function WhyChooseUs() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -((y - centerY) / centerY) * 7;
    const rotateY = ((x - centerX) / centerX) * 7;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const pillars = [
    { title: 'Business-Focused Solutions', desc: 'Engineered specifically to maximize revenue, user conversion, and operational ROI.', icon: TrendingUp },
    { title: 'Premium UI/UX', desc: 'Pixel-perfect, modern designs crafted to wow visitors and create effortless user journeys.', icon: Sparkles },
    { title: 'Scalable Development', desc: 'Architected to seamlessly handle your growth from initial launch to millions of users.', icon: Rocket },
    { title: 'Modern Technology Stack', desc: 'Built using cutting-edge frameworks like React, Next.js, Framer, and cloud infrastructure.', icon: Zap },
    { title: 'SEO Optimized', desc: 'Built-in semantic HTML, fast loading speeds, metadata, and structured data schemas.', icon: Eye },
    { title: 'Fast Delivery', desc: 'Agile execution and clear timelines to get your product to market without delay.', icon: Zap },
    { title: 'Transparent Communication', desc: 'Weekly updates, direct developer channels, and zero hidden costs or surprises.', icon: CheckCircle2 },
    { title: 'Secure Development', desc: 'Bank-grade security standards, SSL encryption, and strict data protection practices.', icon: Lock },
    { title: 'Long-Term Support', desc: 'Continuous maintenance, monitoring, security updates, and feature upgrades.', icon: Headphones },
    { title: 'Affordable Pricing', desc: 'Flexible packages tailored for startups, SMEs, and growing enterprises.', icon: DollarSign },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge-resend mb-4"
          >
            Why Choose Us
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight mb-4"
          >
            Built for Businesses That <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-heading)] via-[var(--text-body)] to-[var(--text-sub)]">
              Take Growth Seriously
            </span>
          </motion.h2>

          <p className="text-[var(--text-sub)] text-base max-w-xl mx-auto font-normal">
            We don't just write code — we build revenue-driving digital assets that position your brand ahead of competitors.
          </p>
        </div>

        {/* 10 Pillars Spotlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="spotlight-card p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] flex flex-col justify-between transition-transform duration-200 ease-out"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[var(--pill-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-heading)] mb-4">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[var(--text-heading)] mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[var(--text-sub)] leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
