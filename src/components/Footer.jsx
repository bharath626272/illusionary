import React from 'react';
import { Sparkles, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="glass-panel border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[2px]">
                <div className="w-full h-full bg-[#07080d] dark:bg-[#07080d] light:bg-white rounded-[6px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-heading">
                Nexora Digital
              </span>
            </div>

            <p className="text-sm text-sub leading-relaxed max-w-sm">
              Your complete digital partner — premium websites, software, apps, branding, cloud, and marketing built to grow your business.
            </p>
          </div>

          {/* Column 1: Company */}
          <div>
            <h4 className="text-sm font-bold text-heading uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-sub">
              <li><a href="#about" className="hover:text-heading transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-heading transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-heading transition-colors">Portfolio</a></li>
              <li><a href="#process" className="hover:text-heading transition-colors">Process</a></li>
              <li><a href="#faq" className="hover:text-heading transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h4 className="text-sm font-bold text-heading uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-sub">
              <li><a href="#services" className="hover:text-heading transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-heading transition-colors">Custom Software</a></li>
              <li><a href="#services" className="hover:text-heading transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-heading transition-colors">UI / UX Design</a></li>
              <li><a href="#services" className="hover:text-heading transition-colors">Branding & Creative</a></li>
            </ul>
          </div>

          {/* Column 3: Stack */}
          <div>
            <h4 className="text-sm font-bold text-heading uppercase tracking-wider mb-4">Technologies</h4>
            <ul className="space-y-2.5 text-sm text-sub">
              <li><span className="hover:text-heading transition-colors cursor-default">Framer & Webflow</span></li>
              <li><span className="hover:text-heading transition-colors cursor-default">React & Next.js</span></li>
              <li><span className="hover:text-heading transition-colors cursor-default">Node.js & Express</span></li>
              <li><span className="hover:text-heading transition-colors cursor-default">Flutter & iOS</span></li>
              <li><span className="hover:text-heading transition-colors cursor-default">Cloudflare & AWS</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-sub">
            © 2026 Nexora Digital. All rights reserved. Designed and built with care.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-sub hover:text-heading glass-panel px-4 py-2 rounded-full border border-white/10 transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
