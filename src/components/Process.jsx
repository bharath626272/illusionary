import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, BarChart2, MapPin, PenTool, 
  Code2, CheckCircle, Rocket, HeartHandshake 
} from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

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

  // All 8 Original Process Steps Preserved 100%
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
    <section id="process" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge-resend mb-4"
          >
            Our Process
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight mb-4"
          >
            From First Call to <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-heading)] via-[var(--text-body)] to-[var(--text-sub)]">
              Long After Launch
            </span>
          </motion.h2>

          <p className="text-[var(--text-sub)] text-base max-w-xl mx-auto font-normal">
            A battle-tested 8-stage roadmap engineered for predictable, high-quality execution.
          </p>
        </div>

        {/* 8 Step Grid Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isSelected = activeStep === index;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => setActiveStep(index)}
                className={`spotlight-card p-6 rounded-xl cursor-pointer border transition-transform duration-200 ease-out ${
                  isSelected
                    ? 'border-[var(--border-hover)] bg-[var(--bg-card-hover)]'
                    : 'border-[var(--border-color)] bg-[var(--bg-card)]'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-bold text-[var(--text-heading)]">{step.num}</span>
                  <div className="w-8 h-8 rounded-lg bg-[var(--pill-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-heading)]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-[var(--text-heading)] mb-2">{step.title}</h3>
                <p className="text-xs text-[var(--text-sub)] leading-relaxed mb-4">{step.desc}</p>

                <div className="pt-3 border-t border-[var(--border-color)] text-[11px] font-mono text-[var(--text-muted)]">
                  💡 {step.details}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
