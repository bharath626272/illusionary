import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, BarChart2, MapPin, PenTool, 
  Code2, CheckCircle, Rocket, HeartHandshake 
} from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Discovery',
      desc: 'We learn your business, goals, and audience to define what success looks like.',
      icon: Search,
      details: 'Stakeholder interviews, requirements gathering, KPI definition, and scope alignment.'
    },
    {
      num: '02',
      title: 'Research',
      desc: 'Market, competitor, and user research grounds every decision in evidence.',
      icon: BarChart2,
      details: 'Competitor benchmarking, user persona creation, and technical feasibility analysis.'
    },
    {
      num: '03',
      title: 'Planning',
      desc: 'Roadmaps, sitemaps, and technical architecture — planned before a pixel moves.',
      icon: MapPin,
      details: 'System architecture, sitemaps, user flows, database design, and milestone timelines.'
    },
    {
      num: '04',
      title: 'UI/UX Design',
      desc: 'Wireframes become polished, interactive designs your users will love.',
      icon: PenTool,
      details: 'High-fidelity prototypes, component design systems, and responsive layouts in Figma.'
    },
    {
      num: '05',
      title: 'Development',
      desc: 'Clean, scalable builds — No-Code or full-stack, whichever fits best.',
      icon: Code2,
      details: 'Frontend styling, backend API development, database integration, and CMS setup.'
    },
    {
      num: '06',
      title: 'Testing',
      desc: 'Cross-device QA, performance audits, and accessibility checks.',
      icon: CheckCircle,
      details: 'End-to-end testing, speed optimization, security scans, and cross-browser QA.'
    },
    {
      num: '07',
      title: 'Deployment',
      desc: 'Smooth launches with hosting, SSL, analytics, and SEO configured.',
      icon: Rocket,
      details: 'DNS configuration, SSL provisioning, analytics tracking, and search index submission.'
    },
    {
      num: '08',
      title: 'Support',
      desc: 'Ongoing maintenance, updates, and optimization long after launch.',
      icon: HeartHandshake,
      details: 'Continuous monitoring, routine backups, performance audits, and iterative improvements.'
    }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill mb-4">Our Process</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-heading tracking-tight mb-6">
            From First Call to <br className="hidden sm:inline" />
            <span className="text-gradient">Long After Launch</span>
          </h2>
          <p className="text-lg text-sub">
            A battle-tested 8-stage roadmap engineered for predictable, high-quality execution.
          </p>
        </div>

        {/* 8 Step Grid Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isSelected = activeStep === index;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setActiveStep(index)}
                className={`glass-card p-6 rounded-2xl cursor-pointer transition-all border ${
                  isSelected
                    ? 'border-indigo-500 bg-indigo-500/10 shadow-lg shadow-indigo-500/20'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-gradient">{step.num}</span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-indigo-500 text-white' : 'bg-white/5 text-indigo-400'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-heading mb-2">{step.title}</h3>
                <p className="text-xs text-sub leading-relaxed mb-4">{step.desc}</p>

                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="pt-3 border-t border-white/10 text-[11px] text-indigo-300 font-medium"
                  >
                    💡 {step.details}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
