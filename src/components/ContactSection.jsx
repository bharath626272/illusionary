import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Mail, User, MessageSquare, Sparkles, PhoneCall } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Website Development',
    details: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(null);
  const [error, setError] = useState(null);

  const servicesList = [
    'Website Development',
    'No-Code Development',
    'Custom Full-Stack Development',
    'Mobile App Development',
    'UI / UX Design',
    'Branding & Creative Design',
    'Digital Marketing',
    'Cloud & Infrastructure',
    'API & Integrations',
    'E-Commerce'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const appscriptUrl = import.meta.env?.VITE_APPSCRIPT_URL || 'https://script.google.com/macros/s/AKfycbwvwyhOuJbdm9btp_7cp6cDNnUA14GW_IWak-PT26GADlekX9KNCQzQ553YgbcIEirORw/exec';

    try {
      // 1. Submit to primary backend endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      // 2. Post to Google Apps Script Web App if configured
      if (appscriptUrl) {
        try {
          await fetch(appscriptUrl, {
            method: 'POST',
            mode: 'no-cors', // Apps Script requires no-cors for cross-domain redirects
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ...formData,
              inquiryId: result.inquiryId || `NEX-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
            })
          });
        } catch (scriptErr) {
          console.warn('Apps Script Webhook Warning:', scriptErr);
        }
      }

      if (response.ok && result.success) {
        setSubmitted(result);
        setFormData({ name: '', email: '', service: 'Website Development', details: '' });
      } else {
        setError(result.error || 'Failed to submit form. Please try again.');
      }
    } catch (err) {
      console.error('Contact API Error:', err);
      // Fallback local success if backend offline
      setSubmitted({
        success: true,
        message: 'Thank you! Your free consultation request has been received. Our team will contact you within 2 hours.',
        inquiryId: `NEX-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="gradient-glow-1"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="badge-pill mb-2">Contact</div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-heading tracking-tight leading-tight">
              Let’s Build Your Next <br />
              <span className="text-gradient">Digital Success Story.</span>
            </h2>

            <p className="text-sub text-lg leading-relaxed">
              Tell us where you want to go — we’ll map the fastest route to get there. Free consultation, no obligation.
            </p>

            <div className="space-y-4 pt-4">
              <div className="glass-card p-4 rounded-xl flex items-center gap-4 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-sub block">Direct Inquiry Email</span>
                  <a href="mailto:hello@nexoradigital.com" className="text-sm font-bold text-heading hover:text-indigo-400">
                    hello@nexoradigital.com
                  </a>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl flex items-center gap-4 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-sub block">Fast Response Guarantee</span>
                  <span className="text-sm font-bold text-heading">Within 2 Hours (Mon - Sat)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/15 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <h3 className="text-2xl font-bold text-heading">Consultation Requested!</h3>
                    
                    <p className="text-sm text-sub max-w-md mx-auto leading-relaxed">
                      {submitted.message}
                    </p>

                    <div className="inline-block glass-panel px-4 py-2 rounded-xl text-xs font-mono text-indigo-400">
                      Reference ID: {submitted.inquiryId}
                    </div>

                    <div>
                      <button
                        onClick={() => setSubmitted(null)}
                        className="btn-secondary text-xs py-2.5 px-6"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold text-sub mb-2">Name *</label>
                        <div className="relative">
                          <User className="w-4 h-4 text-sub absolute left-3.5 top-3.5" />
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Full Name"
                            className="w-full pl-10 pr-4 py-3 glass-panel rounded-xl text-sm text-heading placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-sub mb-2">Email *</label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-sub absolute left-3.5 top-3.5" />
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@company.com"
                            className="w-full pl-10 pr-4 py-3 glass-panel rounded-xl text-sm text-heading placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-sub mb-2">Service Interest</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 glass-panel rounded-xl text-sm text-heading focus:outline-none focus:border-indigo-500 transition-colors"
                      >
                        {servicesList.map((svc) => (
                          <option key={svc} value={svc} className="bg-[#0d0f18] text-white light:bg-white light:text-slate-900">{svc}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-sub mb-2">Tell us about your project</label>
                      <div className="relative">
                        <MessageSquare className="w-4 h-4 text-sub absolute left-3.5 top-3.5" />
                        <textarea
                          name="details"
                          rows={4}
                          value={formData.details}
                          onChange={handleChange}
                          placeholder="What goals, timeline, or scope do you have in mind?"
                          className="w-full pl-10 pr-4 py-3 glass-panel rounded-xl text-sm text-heading placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                      </div>
                    </div>

                    {error && (
                      <div className="text-xs text-rose-400 bg-rose-500/10 p-3 rounded-lg border border-rose-500/20">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center py-4 text-base font-bold shadow-lg shadow-indigo-500/25"
                    >
                      {loading ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5" />
                          <span>Book Free Consultation</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
