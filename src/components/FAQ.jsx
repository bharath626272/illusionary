import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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
    <section id="faq" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge-resend mb-4"
          >
            FAQ
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight mb-4"
          >
            Questions, <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-heading)] via-[var(--text-body)] to-[var(--text-sub)]">Answered</span>
          </motion.h2>

          <p className="text-[var(--text-sub)] text-base max-w-xl mx-auto font-normal">
            Got questions before getting started? Here are answers to what clients ask us most.
          </p>
        </div>

        {/* All 8 Accordions */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[var(--text-heading)] hover:text-[var(--text-heading)] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[var(--text-sub)] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[var(--text-heading)]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[var(--text-sub)] leading-relaxed border-t border-[var(--border-color)] font-normal">
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
