import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Zap, Code, Smartphone, Layout, Palette, 
  TrendingUp, Cloud, Layers, ShoppingBag, ArrowUpRight 
} from 'lucide-react';

export default function Services() {
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
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const services = [
    {
      id: 'custom-code-dev',
      title: 'Custom Coded Web & App Development',
      description: 'Hand-crafted, highly optimized custom websites and web apps built from scratch with modern code.',
      tags: ['React', 'Next.js', 'Vue', 'TypeScript', 'TailwindCSS', 'Node.js', 'Custom API'],
      icon: Code,
    },
    {
      id: 'nocode-dev',
      title: 'No-Code & Low-Code Development',
      description: 'Fast-launch websites and visual platforms built on the best modern no-code builders.',
      tags: ['Framer', 'Webflow', 'WordPress', 'Wix Studio', 'Bubble', 'Shopify'],
      icon: Zap,
    },
    {
      id: 'fullstack-dev',
      title: 'Custom Full-Stack Enterprise Systems',
      description: 'Scalable backend architectures, SaaS products, dashboards, and custom software systems.',
      tags: ['CRM', 'ERP', 'HRMS', 'SaaS', 'Dashboards', 'REST & GraphQL APIs'],
      icon: Globe,
    },
    {
      id: 'mobile-app',
      title: 'Mobile App Development',
      description: 'Native and cross-platform apps for customers, teams, and operations.',
      tags: ['Android', 'iOS', 'Cross Platform', 'PWA', 'Delivery', 'Booking', 'Healthcare'],
      icon: Smartphone,
    },
    {
      id: 'ui-ux',
      title: 'UI / UX Design',
      description: 'Interfaces that feel effortless — researched, prototyped, and systemized.',
      tags: ['App Design', 'Web Design', 'Dashboards', 'Wireframes', 'Prototypes', 'Design Systems'],
      icon: Layout,
    },
    {
      id: 'branding',
      title: 'Branding & Creative Design',
      description: 'Identities and creative assets that make your business unforgettable.',
      tags: ['Logos', 'Brand Identity', 'Brochures', 'Packaging', 'Pitch Decks', 'Social Creatives'],
      icon: Palette,
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Data-driven growth across search, social, and paid channels.',
      tags: ['SEO', 'Local SEO', 'Google Ads', 'Meta Ads', 'Content', 'Email', 'Analytics'],
      icon: TrendingUp,
    },
    {
      id: 'cloud-infra',
      title: 'Cloud & Infrastructure',
      description: 'Reliable hosting, security, and performance for total peace of mind.',
      tags: ['Hosting', 'Cloudflare', 'SSL', 'Migration', 'Backups', 'Security', 'Optimization'],
      icon: Cloud,
    },
    {
      id: 'api-integrations',
      title: 'API & Integrations',
      description: 'Connect your stack — payments, CRMs, analytics, and beyond.',
      tags: ['Razorpay', 'Stripe', 'PayPal', 'HubSpot', 'Zoho', 'Salesforce', 'REST APIs'],
      icon: Layers,
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce',
      description: 'Stores and marketplaces built to sell, ship, and scale.',
      tags: ['Shopify', 'WooCommerce', 'Magento', 'B2B Portals', 'Marketplaces', 'Shipping'],
      icon: ShoppingBag,
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge-resend mb-4"
          >
            Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight mb-4"
          >
            Everything Your Business <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-heading)] via-[var(--text-body)] to-[var(--text-sub)]">
              Needs to Win Online
            </span>
          </motion.h2>

          <p className="text-[var(--text-sub)] text-base max-w-xl mx-auto font-normal">
            Comprehensive digital services tailored for businesses, startups, and growing enterprises.
          </p>
        </div>

        {/* 10 Services Spotlight Cards - Theme Adaptive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="spotlight-card rounded-xl p-6 sm:p-7 flex flex-col justify-between group border border-[var(--border-color)] bg-[var(--bg-card)] transition-transform duration-200 ease-out"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-[var(--pill-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-heading)] group-hover:border-[var(--border-hover)] transition-all">
                      <Icon className="w-5 h-5 text-[var(--text-heading)]" />
                    </div>
                    <a 
                      href="#contact" 
                      className="w-8 h-8 rounded-full bg-[var(--pill-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-sub)] group-hover:text-[var(--text-heading)] group-hover:border-[var(--border-hover)] transition-all"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--text-heading)] mb-2 group-hover:text-[var(--text-heading)] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-sub)] leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-color)]">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-[var(--pill-bg)] border border-[var(--border-color)] text-[var(--text-sub)] font-mono text-[11px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
