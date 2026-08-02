import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ArrowUpRight, TrendingUp, CheckCircle, Code } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

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
      gradient: 'from-blue-600 to-indigo-600',
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
      gradient: 'from-purple-600 to-pink-600',
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
      gradient: 'from-cyan-500 to-blue-600',
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
      gradient: 'from-amber-500 to-emerald-600',
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
      gradient: 'from-violet-600 to-cyan-500',
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
      gradient: 'from-emerald-500 to-teal-600',
      client: 'Vertex Mfg',
      duration: 'Ongoing'
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="badge-pill mb-4">Portfolio</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-heading tracking-tight mb-6">
            Work That <span className="text-gradient">Moves the Numbers</span>
          </h2>
          <p className="text-lg text-sub">
            Real outcomes delivered for ambitious companies across software, web, mobile, and design.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'glass-panel text-sub hover:text-heading hover:bg-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
                className="glass-card rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between group"
              >
                {/* Visual Banner Preview */}
                <div className={`h-48 bg-gradient-to-tr ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="flex items-center justify-between z-10">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-black/40 text-white backdrop-blur-md">
                      {project.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="z-10">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/20 text-white backdrop-blur-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-extrabold text-white leading-snug drop-shadow-md">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content Card Body */}
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-semibold text-sub mb-1">Impact Metric:</div>
                    <div className="text-sm font-bold text-emerald-500 dark:text-emerald-400 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4" />
                      <span>{project.impact}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-indigo-500 dark:text-indigo-400 font-semibold group-hover:text-cyan-500 transition-colors">
                    <span>View Case Study Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Case Study Details */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md p-3 sm:p-6 flex items-center justify-center overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-2xl w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative max-h-[88vh] overflow-y-auto my-auto"
            >
              {/* Header Banner */}
              <div className={`h-36 sm:h-44 bg-gradient-to-tr ${selectedProject.gradient} p-5 sm:p-8 flex flex-col justify-between relative`}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <span className="text-xs font-bold px-3 py-1 rounded-full bg-black/40 text-white w-fit">
                  {selectedProject.category}
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white drop-shadow-md pr-6">
                  {selectedProject.title}
                </h3>
              </div>

                {/* Modal Body */}
                <div className="p-8 space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-xs tag-pill p-4 rounded-xl">
                    <div>
                      <span className="text-sub block">Client:</span>
                      <strong className="text-heading text-sm">{selectedProject.client}</strong>
                    </div>
                    <div>
                      <span className="text-sub block">Duration:</span>
                      <strong className="text-heading text-sm">{selectedProject.duration}</strong>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-rose-500 uppercase tracking-wider mb-1">The Problem</h4>
                    <p className="text-sm text-sub leading-relaxed">{selectedProject.problem}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-indigo-500 uppercase tracking-wider mb-1">Our Solution</h4>
                    <p className="text-sm text-sub leading-relaxed">{selectedProject.solution}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-1">Verified Impact</h4>
                    <p className="text-sm text-emerald-200 font-semibold">{selectedProject.impact}</p>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="btn-primary text-xs py-2.5 px-6"
                    >
                      Close Overview
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
