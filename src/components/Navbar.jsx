import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
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
          ? 'py-2.5 sm:py-3 glass-panel border-b border-white/10 shadow-lg'
          : 'py-3.5 sm:py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group text-decoration-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-blue-500 to-cyan-400 p-[2px] shadow-md transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-white dark:bg-[#07080d] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500 dark:text-indigo-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-gradient">
                Nexora Digital
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className={`hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full transition-all duration-300 ${
            scrolled ? 'bg-transparent' : 'glass-panel border border-white/10'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                  activeSection === link.name.toLowerCase()
                    ? 'bg-indigo-500/20 text-heading shadow-sm'
                    : 'text-sub hover:text-heading hover:bg-indigo-500/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full glass-panel border border-white/10 hover:border-indigo-500/40 text-sub hover:text-heading transition-all"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary text-sm font-semibold !py-2.5 !px-5"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full glass-panel text-sub hover:text-heading"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg glass-panel text-sub hover:text-heading"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
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
            className="md:hidden glass-panel border-b border-white/10 px-5 py-5 max-h-[85vh] overflow-y-auto shadow-2xl"
          >
            <div className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base sm:text-lg font-semibold text-sub hover:text-heading py-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="btn-primary w-full justify-center py-3 text-sm"
                >
                  <span>Start Your Project</span>
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
