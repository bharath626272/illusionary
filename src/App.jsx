import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechStackIndustries from './components/TechStackIndustries';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Marquee from './components/Marquee';
import AnimatedBackground from './components/AnimatedBackground';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#07080d] text-[#cbd5e1]' : 'bg-[#f8fafd] text-[#334155]'
    }`}>
      {/* Dynamic Animated Ambient Background Orbs & Dust */}
      <AnimatedBackground theme={theme} />

      {/* Top Spring Scroll Progress Bar */}
      <ScrollProgress />

      {/* Custom Mouse Cursor Glow */}
      <CustomCursor />

      {/* Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />

      {/* Main Sections */}
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <TechStackIndustries />
        <WhyChooseUs />
        <Process />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
