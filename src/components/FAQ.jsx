import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Do you build custom coded websites or only No-Code platforms?',
      a: 'We build both! For custom software, SaaS products, complex web applications, and enterprise platforms, we write clean custom code using React, Next.js, Node.js, and TailwindCSS. For fast-launch marketing sites and landing pages, we use No-Code builders like Framer or Webflow. We help you choose the best route based on your goals, timeline, and growth plans.'
    },
    {
      q: 'Can you redesign my existing website?',
      a: 'Absolutely. We audit your current site, keep what works, and rebuild what doesn’t — improving design, performance, SEO, and conversion in the process.'
    },
    {
      q: 'Do you provide SEO?',
      a: 'Yes. Every site we build is SEO-optimized from day one — semantic structure, metadata, performance, and schema. We also offer ongoing SEO, local SEO, and content strategy as a service.'
    },
    {
      q: 'Can you maintain my website after launch?',
      a: 'Yes — maintenance plans cover updates, backups, security monitoring, content changes, and performance optimization, so your site keeps getting better.'
    },
    {
      q: 'How long does a project take?',
      a: 'A typical business website takes 2–4 weeks. Larger builds like custom software or mobile apps range from 6 weeks to several months. We share a clear timeline before any work begins.'
    },
    {
      q: 'How much does a website cost?',
      a: 'It depends on scope. No-Code websites start at accessible price points, while custom platforms are quoted per project. Every proposal is transparent with no hidden costs.'
    },
    {
      q: 'Can you build custom software for my business?',
      a: 'Yes — CRMs, ERPs, booking systems, dashboards, SaaS products, and more. We design custom systems around your exact workflows, not the other way around.'
    },
    {
      q: 'Do you develop mobile applications?',
      a: 'We build Android, iOS, and cross-platform apps — from customer-facing apps to internal tools for employees, delivery, and bookings.'
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="badge-pill mb-4">FAQ</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-heading tracking-tight mb-6">
            Questions, <span className="text-gradient">Answered</span>
          </h2>
          <p className="text-lg text-sub">
            Got questions before getting started? Here are answers to what clients ask us most.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-base text-heading hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-indigo-500 dark:text-indigo-400 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-sub transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-indigo-500 dark:text-cyan-400' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-sub leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
