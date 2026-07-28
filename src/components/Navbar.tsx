import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Subscriptions', href: '#subscriptions' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.replace('#', '')).filter(Boolean);
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top < 100) {
          setActiveSection(navItems.find(item => item.href === `#${section}`)?.label || 'Home');
          break;
        }
      }
      if (window.scrollY < 100) setActiveSection('Home');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled ? 'py-4 bg-black/70 backdrop-blur-2xl border-b border-white/5' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
            <span className="text-white font-bold italic text-xl">N</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">
            NutriChef
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md p-1 rounded-full border border-white/10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative px-5 py-2 text-sm font-semibold transition-all duration-500 rounded-full ${
                activeSection === item.label 
                  ? 'text-white' 
                  : 'text-white/40 hover:text-white/80'
              }`}
            >
              {activeSection === item.label && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute inset-0 bg-white/10 rounded-full z-[-1]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button className="text-sm font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all duration-500">
            Login
          </button>
          <motion.button 
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-emerald-500 text-white rounded-full text-sm font-black uppercase tracking-[0.2em] shadow-[0_15px_30px_rgba(16,185,129,0.2)] hover:bg-emerald-400 transition-all duration-500"
          >
            Start Journey
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-stone-950 border-b border-white/5 p-6 md:hidden flex flex-col gap-6 shadow-2xl"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-white/70 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-6 border-t border-white/5">
              <button className="w-full py-4 text-white/70 font-medium">Login</button>
              <button className="w-full py-4 bg-emerald-500 text-white rounded-2xl font-bold shadow-lg shadow-emerald-500/20">
                Book Free Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
