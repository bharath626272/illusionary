import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const testimonials = [
    {
      quote: "Nexora didn’t just build us a website — they built a booking machine. The design feels world-class and reservations have never been higher.",
      name: "Rohan Mehta",
      role: "Founder, Savoria Restaurant Group",
      avatar: "RM",
      rating: 5
    },
    {
      quote: "They understood healthcare workflows better than vendors twice their size. Our management system runs three clinics without a hiccup.",
      name: "Daniel Ferreira",
      role: "COO, MediCare Plus",
      avatar: "DF",
      rating: 5
    },
    {
      quote: "Transparent, fast, and genuinely invested in our growth. Five times the leads at a lower cost — the numbers speak for themselves.",
      name: "Amir Kassab",
      role: "Director, Vertex Manufacturing",
      avatar: "AK",
      rating: 5
    }
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge-resend mb-4"
          >
            Testimonials
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight mb-4"
          >
            What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-heading)] via-[var(--text-body)] to-[var(--text-sub)]">Clients Say</span>
          </motion.h2>

          <p className="text-[var(--text-sub)] text-base max-w-xl mx-auto font-normal">
            Trusted by founders, executives, and leaders who demand excellence.
          </p>
        </div>

        {/* 3 Testimonials in Resend Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onMouseMove={handleMouseMove}
              className="spotlight-card p-7 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[var(--text-muted)] opacity-40" />
                </div>

                <p className="text-sm text-[var(--text-heading)] italic leading-relaxed mb-8 font-normal">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-color)]">
                <div className="w-10 h-10 rounded-full bg-[var(--pill-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-heading)] font-mono font-bold text-xs">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-heading)]">{t.name}</h4>
                  <p className="text-xs text-[var(--text-sub)]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
