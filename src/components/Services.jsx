import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Zap, Code, Smartphone, Layout, Palette, 
  TrendingUp, Cloud, Layers, ShoppingBag, ArrowUpRight 
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'custom-code-dev',
      title: 'Custom Coded Web & App Development',
      description: 'Hand-crafted, highly optimized custom websites and web apps built from scratch with modern code.',
      tags: ['React', 'Next.js', 'Vue', 'TypeScript', 'TailwindCSS', 'Node.js', 'Custom API'],
      icon: Code,
      color: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      id: 'nocode-dev',
      title: 'No-Code & Low-Code Development',
      description: 'Fast-launch websites and visual platforms built on the best modern no-code builders.',
      tags: ['Framer', 'Webflow', 'WordPress', 'Wix Studio', 'Bubble', 'Shopify'],
      icon: Zap,
      color: 'from-amber-500/20 to-orange-500/20'
    },
    {
      id: 'fullstack-dev',
      title: 'Custom Full-Stack Enterprise Systems',
      description: 'Scalable backend architectures, SaaS products, dashboards, and custom software systems.',
      tags: ['CRM', 'ERP', 'HRMS', 'SaaS', 'Dashboards', 'REST & GraphQL APIs', 'Database'],
      icon: Globe,
      color: 'from-blue-500/20 to-indigo-500/20'
    },
    {
      id: 'mobile-app',
      title: 'Mobile App Development',
      description: 'Native and cross-platform apps for customers, teams, and operations.',
      tags: ['Android', 'iOS', 'Cross Platform', 'PWA', 'Delivery', 'Booking', 'Healthcare'],
      icon: Smartphone,
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      id: 'ui-ux',
      title: 'UI / UX Design',
      description: 'Interfaces that feel effortless — researched, prototyped, and systemized.',
      tags: ['App Design', 'Web Design', 'Dashboards', 'Wireframes', 'Prototypes', 'Design Systems'],
      icon: Layout,
      color: 'from-pink-500/20 to-rose-500/20'
    },
    {
      id: 'branding',
      title: 'Branding & Creative Design',
      description: 'Identities and creative assets that make your business unforgettable.',
      tags: ['Logos', 'Brand Identity', 'Brochures', 'Packaging', 'Pitch Decks', 'Social Creatives'],
      icon: Palette,
      color: 'from-violet-500/20 to-purple-500/20'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Data-driven growth across search, social, and paid channels.',
      tags: ['SEO', 'Local SEO', 'Google Ads', 'Meta Ads', 'Content', 'Email', 'Analytics'],
      icon: TrendingUp,
      color: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      id: 'cloud-infra',
      title: 'Cloud & Infrastructure',
      description: 'Reliable hosting, security, and performance for total peace of mind.',
      tags: ['Hosting', 'Cloudflare', 'SSL', 'Migration', 'Backups', 'Security', 'Optimization'],
      icon: Cloud,
      color: 'from-sky-500/20 to-indigo-500/20'
    },
    {
      id: 'api-integrations',
      title: 'API & Integrations',
      description: 'Connect your stack — payments, CRMs, analytics, and beyond.',
      tags: ['Razorpay', 'Stripe', 'PayPal', 'HubSpot', 'Zoho', 'Salesforce', 'REST APIs'],
      icon: Layers,
      color: 'from-teal-500/20 to-cyan-500/20'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce',
      description: 'Stores and marketplaces built to sell, ship, and scale.',
      tags: ['Shopify', 'WooCommerce', 'Magento', 'B2B Portals', 'Marketplaces', 'Shipping'],
      icon: ShoppingBag,
      color: 'from-amber-500/20 to-yellow-500/20'
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge-pill mb-4"
          >
            Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-heading tracking-tight mb-6"
          >
            Everything Your Business <br className="hidden sm:inline" />
            <span className="text-gradient">Needs to Win Online</span>
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-2xl p-8 flex flex-col justify-between relative group overflow-hidden"
              >
                {/* Glow accent in top corner */}
                <div className={`absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-br ${service.color} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl tag-pill flex items-center justify-center text-indigo-500 dark:text-indigo-400 group-hover:text-cyan-500 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <a href="#contact" className="w-8 h-8 rounded-full tag-pill flex items-center justify-center text-sub group-hover:text-white group-hover:bg-indigo-600 transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="text-xl font-bold text-heading mb-3 group-hover:text-gradient transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-sub leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag-pill"
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
