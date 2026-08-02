import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
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
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill mb-4">Testimonials</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-heading tracking-tight mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-sub">
            Trusted by founders, executives, and leaders who demand excellence.
          </p>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 rounded-2xl border border-white/10 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 opacity-20 group-hover:text-indigo-400/30 transition-colors" />
                </div>

                <p className="text-base text-body italic leading-relaxed mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-extrabold text-sm shadow-md">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-base font-bold text-heading">{t.name}</h4>
                  <p className="text-xs text-sub">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
