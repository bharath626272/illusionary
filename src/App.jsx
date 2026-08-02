import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import AnimatedBackground from './components/AnimatedBackground';
import Preloader from './components/Preloader';

// Lazy load below-the-fold sections for instant first paint (< 100ms)
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const TechStackIndustries = lazy(() => import('./components/TechStackIndustries'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Process = lazy(() => import('./components/Process'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      {/* Top Spring Scroll Progress Bar (Anchored to Viewport Window Top) */}
      <ScrollProgress />

      {/* Custom Mouse Cursor Glow */}
      <CustomCursor />

      {/* Brand Opening Reveal Preloader */}
      <Preloader onComplete={() => setIsAppLoaded(true)} />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isAppLoaded ? 1 : 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`min-h-screen relative transition-colors duration-300 ${
          theme === 'dark' ? 'bg-[#07080d] text-[#cbd5e1]' : 'bg-[#f8fafd] text-[#334155]'
        }`}
      >
        {/* Dynamic Animated Ambient Background Orbs & Dust */}
        <AnimatedBackground theme={theme} />

        {/* Navbar */}
        <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />

        {/* Main Sections */}
        <main>
          <Hero />
          <Marquee />

          {/* Deferred Loading for High Performance */}
          <Suspense fallback={
            <div className="py-24 text-center text-sub text-sm">
              <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              Loading Nexora Digital Experience...
            </div>
          }>
            <About />
            <Services />
            <TechStackIndustries />
            <WhyChooseUs />
            <Process />
            <Portfolio />
            <Testimonials />
            <FAQ />
            <ContactSection />
          </Suspense>
        </main>

        {/* Deferred Footer */}
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </motion.div>
    </>
  );
}
