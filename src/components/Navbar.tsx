import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Subscriptions', href: '#subscriptions' },
  { label: 'Our Experts', href: '#experts' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-stone-100' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <span className="text-white font-bold italic text-xl">N</span>
          </div>
          <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
            Nutrify
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-stone-600 hover:text-emerald-600' : 'text-white/70 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className={`text-sm font-medium transition-colors ${
            isScrolled ? 'text-stone-600 hover:text-emerald-600' : 'text-white/70 hover:text-white'
          }`}>
            Login
          </button>
          <button className="px-6 py-2.5 bg-emerald-500 text-white rounded-full text-sm font-bold shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-colors">
            Book Free Consultation
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-stone-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-stone-900' : 'text-white'} />
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
            className="absolute top-full left-0 right-0 bg-white border-b border-stone-100 p-6 md:hidden flex flex-col gap-6 shadow-2xl"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-stone-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-6 border-t border-stone-100">
              <button className="w-full py-4 text-stone-900 font-medium">Login</button>
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
