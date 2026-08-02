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
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Tech Stack Section */}
        <div className="mb-16 sm:mb-24">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="badge-pill mb-3 sm:mb-4">Technology Stack</div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-heading tracking-tight mb-3 sm:mb-4">
              The Right Tools for <span className="text-gradient">Every Job</span>
            </h2>
            <p className="text-xs sm:text-sm text-sub">
              We leverage cutting-edge frameworks, modern cloud platforms, and battle-tested No-Code solutions.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10">
            {Object.keys(techCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === category
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25'
                    : 'glass-panel text-sub hover:text-heading hover:bg-white/10'
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
                className="flex flex-wrap justify-center gap-2.5 sm:gap-4"
              >
                {techCategories[activeTab].map((tech) => (
                  <div
                    key={tech}
                    className="glass-card px-4 py-2.5 sm:px-6 sm:py-4 rounded-xl text-xs sm:text-base font-medium text-heading flex items-center gap-2.5 sm:gap-3 border border-white/10 hover:border-indigo-500/50 hover:scale-105 transition-all shadow-md"
                  >
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
                    <span>{tech}</span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Industries Sector Badge Cloud */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="badge-pill mb-3 sm:mb-4">Industries</div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-heading tracking-tight mb-3 sm:mb-4">
              Trusted Across <span className="text-gradient">Every Sector</span>
            </h2>
            <p className="text-xs sm:text-sm text-sub">
              Delivering specialized digital solutions tailored to unique domain requirements.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-5xl mx-auto">
            {industries.map((ind, idx) => (
              <motion.div
                key={ind}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                whileHover={{ scale: 1.05 }}
                className="glass-panel px-3.5 py-2 sm:px-5 sm:py-3 rounded-full text-xs sm:text-sm font-medium text-sub border border-white/10 hover:border-cyan-500/40 hover:text-heading transition-all cursor-default"
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
