import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowRight, Command } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ theme, toggleTheme, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[var(--bg-glass)] backdrop-blur-md border-b border-[var(--border-color)] shadow-sm'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group text-decoration-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--pill-bg)] border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--border-hover)] transition-all">
              <Command className="w-4 h-4 text-[var(--text-heading)]" />
            </div>
            <span className="font-extrabold text-lg tracking-tight text-[var(--text-heading)] font-display flex items-center gap-1.5">
              Nexora
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4f00]" />
            </span>
          </a>

          {/* Floating Pill Navigation Bar */}
          <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[var(--pill-bg)] border border-[var(--border-color)] backdrop-blur-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  activeSection === link.name.toLowerCase()
                    ? 'bg-[var(--border-color)] text-[var(--text-heading)] font-semibold'
                    : 'text-[var(--text-sub)] hover:text-[var(--text-heading)] hover:bg-[var(--border-color)]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Live Operational Badge */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-mono">
              <span className="status-pulse-dot" />
              <span>Operational</span>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[var(--pill-bg)] border border-[var(--border-color)] hover:border-[var(--border-hover)] text-[var(--text-sub)] hover:text-[var(--text-heading)] transition-all"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-600" />}
            </button>

            {/* Primary Action Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-resend-white text-xs !py-2 !px-4"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[var(--pill-bg)] border border-[var(--border-color)] text-[var(--text-sub)]"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[var(--pill-bg)] border border-[var(--border-color)] text-[var(--text-sub)] hover:text-[var(--text-heading)]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--bg-glass-solid)] border-b border-[var(--border-color)] px-5 py-5 max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-medium text-[var(--text-sub)] hover:text-[var(--text-heading)] py-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-[var(--border-color)]">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="btn-resend-white w-full justify-center py-2.5 text-sm"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
