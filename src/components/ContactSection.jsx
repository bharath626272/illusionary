import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Website Development',
    details: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(null);

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

    const inquiryId = `NEX-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    const payload = { ...formData, inquiryId };

    const appscriptUrl = import.meta.env?.VITE_APPSCRIPT_URL || 'https://script.google.com/macros/s/AKfycbwvwyhOuJbdm9btp_7cp6cDNnUA14GW_IWak-PT26GADlekX9KNCQzQ553YgbcIEirORw/exec';

    try {
      await fetch(appscriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      });
    } catch (scriptErr) {
      console.warn('Apps Script Webhook Warning:', scriptErr);
    }

    setSubmitted({
      success: true,
      message: 'Thank you! Your free consultation request has been received. Our team will contact you within 1 hour.',
      inquiryId: inquiryId
    });
    setFormData({ name: '', email: '', service: 'Website Development', details: '' });
    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">

          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="badge-resend mb-2">Contact</div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight leading-tight">
              Let’s Build Your Next <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-heading)] via-[var(--text-body)] to-[var(--text-sub)]">
                Digital Success Story.
              </span>
            </h2>

            <p className="text-[var(--text-sub)] text-base leading-relaxed font-normal">
              Tell us where you want to go — we’ll map the fastest route to get there. Free consultation, no obligation.
            </p>

            <div className="space-y-4 pt-4 border-t border-[var(--border-color)] font-mono text-xs text-[var(--text-sub)]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Response Time: &lt; 1 hour</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--text-heading)]" />
                <span>Direct Contact: hello@nexora.digital</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Resend Form Window */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 sm:p-8 shadow-2xl relative">

              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-heading)]">Request Received</h3>
                  <p className="text-xs font-mono text-[var(--text-muted)]">Inquiry ID: {submitted.inquiryId}</p>
                  <p className="text-sm text-[var(--text-sub)] max-w-sm mx-auto">{submitted.message}</p>
                  <button
                    onClick={() => setSubmitted(null)}
                    className="btn-resend-ghost text-xs mt-4"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono text-[var(--text-muted)] mb-2 uppercase">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="enter your name"
                      className="w-full px-4 py-3 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] text-[var(--text-heading)] text-sm focus:outline-none focus:border-[var(--text-heading)] transition-all font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--text-muted)] mb-2 uppercase">Work Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="enter you email address"
                      className="w-full px-4 py-3 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] text-[var(--text-heading)] text-sm focus:outline-none focus:border-[var(--text-heading)] transition-all font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--text-muted)] mb-2 uppercase">Service Required</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] text-[var(--text-heading)] text-sm focus:outline-none focus:border-[var(--text-heading)] transition-all font-mono"
                    >
                      {servicesList.map(s => (
                        <option key={s} value={s} className="bg-[var(--bg-card)] text-[var(--text-heading)]">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--text-muted)] mb-2 uppercase">Project Details</label>
                    <textarea
                      name="details"
                      rows={4}
                      required
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Tell us about your goals, current challenges, or timeline..."
                      className="w-full px-4 py-3 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] text-[var(--text-heading)] text-sm focus:outline-none focus:border-[var(--text-heading)] transition-all font-mono"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-resend-white w-full py-3 text-sm justify-center"
                  >
                    <span>{loading ? 'Sending Request...' : 'Send Request'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
