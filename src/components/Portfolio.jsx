import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ArrowUpRight, TrendingUp, CheckCircle, Code } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -((y - centerY) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const filters = ['All', 'Website', 'Software', 'Mobile App', 'Branding', 'UI/UX', 'Digital Marketing'];

  const projects = [
    {
      id: 'medicare-plus',
      title: 'MediCare Plus Hospital Platform',
      category: 'Software',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      problem: 'Paper-based patient records slowed down appointments and billing across three clinic locations.',
      solution: 'A custom hospital management system with scheduling, EMR, billing, and role-based dashboards.',
      impact: 'Admin time cut by 60% and zero missed appointments.',
      client: 'MediCare Plus',
      duration: '8 weeks'
    },
    {
      id: 'savoria-restaurant',
      title: 'Savoria Restaurant Group Website',
      category: 'Website',
      tech: ['Framer', 'CMS', 'SEO'],
      problem: 'An outdated site with no online reservations was losing bookings to competitors.',
      solution: 'A premium multi-location website with menus, table booking, and local SEO optimization.',
      impact: 'Online reservations up 3.2× in the first quarter.',
      client: 'Savoria Group',
      duration: '3 weeks'
    },
    {
      id: 'fieldsync-delivery',
      title: 'FieldSync Delivery App',
      category: 'Mobile App',
      tech: ['Flutter', 'Firebase', 'Maps API'],
      problem: 'A logistics SME coordinated drivers over phone calls with no live visibility.',
      solution: 'A cross-platform driver and customer app with live tracking, routing, and proof of delivery.',
      impact: 'Deliveries per driver up 40%, support calls down 70%.',
      client: 'FieldSync Logistics',
      duration: '6 weeks'
    },
    {
      id: 'northwind-realty',
      title: 'Northwind Realty Brand Identity',
      category: 'Branding',
      tech: ['Illustrator', 'Figma', 'Print'],
      problem: 'A growing real estate firm looked indistinguishable from every local competitor.',
      solution: 'A full identity system — logo, stationery, brochures, and social templates.',
      impact: 'Brand recall doubled in post-launch client surveys.',
      client: 'Northwind Realty',
      duration: '4 weeks'
    },
    {
      id: 'learnhub-lms',
      title: 'LearnHub LMS Dashboard',
      category: 'UI/UX',
      tech: ['Figma', 'Design System', 'Prototyping'],
      problem: 'Students abandoned courses because the learning platform felt cluttered and confusing.',
      solution: 'A complete UX overhaul with a design system, simplified navigation, and progress-first dashboards.',
      impact: 'Course completion rates improved by 45%.',
      client: 'LearnHub EdTech',
      duration: '5 weeks'
    },
    {
      id: 'vertex-manufacturing',
      title: 'Vertex Manufacturing Growth Campaign',
      category: 'Digital Marketing',
      tech: ['SEO', 'Google Ads', 'Analytics'],
      problem: 'A B2B manufacturer relied entirely on trade shows for lead generation.',
      solution: 'Technical SEO, targeted Google Ads, and conversion-optimized landing pages.',
      impact: 'Inbound leads up 5× with 38% lower cost per lead.',
      client: 'Vertex Mfg',
      duration: 'Ongoing'
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge-resend mb-4"
          >
            Portfolio
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight mb-4"
          >
            Work That <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-heading)] via-[var(--text-body)] to-[var(--text-sub)]">Moves the Numbers</span>
          </motion.h2>

          <p className="text-[var(--text-sub)] text-base max-w-xl mx-auto font-normal">
            Real outcomes delivered for ambitious companies across software, web, mobile, and design.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeFilter === filter
                  ? 'bg-[var(--text-heading)] text-[var(--bg-main)] font-semibold'
                  : 'bg-[var(--pill-bg)] border border-[var(--border-color)] text-[var(--text-sub)] hover:text-[var(--text-heading)] hover:bg-[var(--border-color)]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => setSelectedProject(project)}
                className="spotlight-card rounded-xl p-6 border border-[var(--border-color)] bg-[var(--bg-card)] cursor-pointer flex flex-col justify-between group transition-transform duration-200 ease-out"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-[var(--pill-bg)] border border-[var(--border-color)] text-[var(--text-sub)] font-mono text-[11px]">
                      {project.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[var(--pill-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-sub)] group-hover:text-[var(--text-heading)] transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--text-heading)] mb-2 group-hover:text-[var(--text-heading)] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-sub)] leading-relaxed mb-6 font-normal">
                    {project.solution}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[11px] font-mono text-[var(--text-muted)]">
                        #{t}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                    {project.impact}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[var(--bg-glass-solid)] border border-[var(--border-color)] rounded-xl p-6 sm:p-8 max-w-xl w-full relative shadow-2xl"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-[var(--pill-bg)] text-[var(--text-sub)] hover:text-[var(--text-heading)] transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="badge-resend mb-3">{selectedProject.category}</div>
                <h3 className="text-2xl font-bold text-[var(--text-heading)] mb-4">{selectedProject.title}</h3>

                <div className="space-y-4 mb-6 text-sm text-[var(--text-sub)]">
                  <div>
                    <h4 className="font-mono text-xs text-[var(--text-muted)] uppercase mb-1">Problem</h4>
                    <p>{selectedProject.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs text-[var(--text-muted)] uppercase mb-1">Solution</h4>
                    <p>{selectedProject.solution}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono text-xs">
                    Impact: {selectedProject.impact}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-resend-white w-full text-xs"
                >
                  Close Case Study
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
