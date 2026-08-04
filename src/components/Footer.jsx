import React from 'react';
import { Command, ArrowUp, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--bg-main)] border-t border-[var(--border-color)] pt-16 pb-12 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info (Original Copy Preserved 100%) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[var(--pill-bg)] border border-[var(--border-color)] flex items-center justify-center">
                <Command className="w-4 h-4 text-[var(--text-heading)]" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-[var(--text-heading)] font-display flex items-center gap-1.5">
                Nexora Digital
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4f00]" />
              </span>
            </div>

            <p className="text-sm text-[var(--text-sub)] leading-relaxed max-w-sm font-normal">
              Your complete digital partner — premium websites, software, apps, branding, cloud, and marketing built to grow your business.
            </p>
          </div>

          {/* Column 1: Company */}
          <div>
            <h4 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs text-[var(--text-sub)]">
              <li><a href="#about" className="hover:text-[var(--text-heading)] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[var(--text-heading)] transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-[var(--text-heading)] transition-colors">Portfolio</a></li>
              <li><a href="#process" className="hover:text-[var(--text-heading)] transition-colors">Process</a></li>
              <li><a href="#faq" className="hover:text-[var(--text-heading)] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h4 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5 text-xs text-[var(--text-sub)]">
              <li><a href="#services" className="hover:text-[var(--text-heading)] transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-[var(--text-heading)] transition-colors">Custom Software</a></li>
              <li><a href="#services" className="hover:text-[var(--text-heading)] transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-[var(--text-heading)] transition-colors">UI / UX Design</a></li>
              <li><a href="#services" className="hover:text-[var(--text-heading)] transition-colors">Branding & Creative</a></li>
            </ul>
          </div>

          {/* Column 3: Stack */}
          <div>
            <h4 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-4">Technologies</h4>
            <ul className="space-y-2.5 text-xs font-mono text-[var(--text-sub)]">
              <li>Framer & Webflow</li>
              <li>React & Next.js</li>
              <li>Node.js & Express</li>
              <li>Flutter & iOS</li>
              <li>Cloudflare & AWS</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar (Original Copy Preserved 100%) */}
        <div className="pt-8 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[var(--text-sub)]">
            © 2026 Nexora Digital. All rights reserved. Designed and built with care.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-[var(--text-sub)] hover:text-[var(--text-heading)] px-3 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--pill-bg)] transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}
