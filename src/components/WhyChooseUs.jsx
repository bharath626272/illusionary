import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, Shield, Zap, Eye, Lock, 
  Headphones, DollarSign, TrendingUp, Sparkles, Rocket 
} from 'lucide-react';

export default function WhyChooseUs() {
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
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill mb-4">Why Choose Us</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-heading tracking-tight mb-6">
            Built for Businesses That <br className="hidden sm:inline" />
            <span className="text-gradient">Take Growth Seriously</span>
          </h2>
          <p className="text-lg text-sub">
            We don't just write code — we build revenue-driving digital assets that position your brand ahead of competitors.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl tag-pill flex items-center justify-center text-indigo-500 dark:text-indigo-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-heading mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-sub leading-relaxed">
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
