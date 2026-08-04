import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TechStackIndustries() {
  const [activeTab, setActiveTab] = useState('No-Code');

  const techCategories = {
    'No-Code': ['Framer', 'Webflow', 'WordPress', 'Wix Studio', 'Bubble', 'FlutterFlow', 'Shopify'],
    'Frontend': ['React', 'Next.js', 'Vue.js', 'TypeScript', 'TailwindCSS', 'Vite', 'Redux'],
    'Backend': ['Node.js', 'Express', 'Python', 'Django', 'Go', 'FastAPI', 'GraphQL'],
    'Database': ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase', 'MySQL'],
    'Cloud': ['AWS', 'Google Cloud', 'Vercel', 'Cloudflare', 'Docker', 'DigitalOcean'],
    'Design': ['Figma', 'Adobe XD', 'Illustrator', 'Photoshop', 'Spline 3D', 'Rive']
  };

  const industries = [
    'Healthcare', 'Pharmaceutical', 'Education', 'Manufacturing',
    'Construction', 'Finance', 'Restaurants', 'Hospitality',
    'Retail', 'Real Estate', 'Travel', 'Startups',
    'Corporate', 'E-Commerce', 'NGOs', 'Professional Services'
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Tech Stack Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge-resend mb-4">Technology Stack</div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight mb-4">
              The Right Tools for <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-heading)] via-[var(--text-body)] to-[var(--text-sub)]">Every Job</span>
            </h2>
            <p className="text-[var(--text-sub)] text-base max-w-xl mx-auto font-normal">
              We leverage cutting-edge frameworks, modern cloud platforms, and battle-tested No-Code solutions.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {Object.keys(techCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                  activeTab === category
                    ? 'bg-[var(--text-heading)] text-[var(--bg-main)] font-semibold'
                    : 'bg-[var(--pill-bg)] border border-[var(--border-color)] text-[var(--text-sub)] hover:text-[var(--text-heading)] hover:bg-[var(--border-color)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Tech Pills Grid */}
          <motion.div layout className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap justify-center gap-3"
              >
                {techCategories[activeTab].map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-sm font-mono text-[var(--text-heading)] flex items-center gap-3 hover:border-[var(--border-hover)] hover:scale-105 transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                    <span>{tech}</span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Industries Sector Cloud */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="badge-resend mb-4">Industries</div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight mb-4">
              Trusted Across <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-heading)] via-[var(--text-body)] to-[var(--text-sub)]">Every Sector</span>
            </h2>
            <p className="text-[var(--text-sub)] text-base max-w-xl mx-auto font-normal">
              Delivering specialized digital solutions tailored to unique domain requirements.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto">
            {industries.map((ind, idx) => (
              <motion.div
                key={ind}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.02 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-[var(--pill-bg)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-sub)] hover:border-[var(--border-hover)] hover:text-[var(--text-heading)] transition-all cursor-default"
              >
                {ind}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
