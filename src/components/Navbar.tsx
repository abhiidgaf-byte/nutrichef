import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowLeft, MapPin, ChevronDown } from 'lucide-react';
import { FlowStep } from '../types';
import ncLogo from '../assets/images/nc-logo.png';

interface NavbarProps {
  currentStep?: FlowStep;
  onStartFlow?: () => void;
  onNavigateStep?: (step: FlowStep) => void;
  onReturnToLanding?: () => void;
}

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Subscriptions', href: '#subscriptions' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentStep = 'landing',
  onStartFlow,
  onNavigateStep,
  onReturnToLanding
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [demoMenuOpen, setDemoMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
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

  const isFlowActive = currentStep !== 'landing';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled || isFlowActive 
          ? 'py-3.5 bg-white/90 backdrop-blur-2xl border-b border-stone-200/80 shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onReturnToLanding}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <img
            src={ncLogo}
            alt="NutriChef"
            className="w-9 h-9 rounded-xl object-cover shadow-lg shadow-stone-900/10 group-hover:scale-105 transition-transform duration-300"
          />
          <div>
            <span className="font-serif text-xl font-semibold tracking-tight text-stone-900 block leading-none">
              NutriChef
            </span>
            <span className="text-[9px] font-bold tracking-widest text-emerald-800 uppercase block mt-0.5">
              Bangalore • Home Chef
            </span>
          </div>
        </motion.div>

        {/* LANDING PAGE NAV ITEMS */}
        {!isFlowActive ? (
          <>
            <div className="hidden md:flex items-center gap-1 bg-stone-100/80 backdrop-blur-md p-1.5 rounded-full border border-stone-200/80 shadow-inner">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-5 py-2 text-xs font-bold transition-all duration-300 rounded-full ${
                    activeSection === item.label 
                      ? 'text-stone-900' 
                      : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  {activeSection === item.label && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white rounded-full z-[-1] shadow-sm border border-stone-200/60"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={onStartFlow}
                className="text-xs font-bold uppercase tracking-wider text-stone-600 hover:text-stone-900 px-3 py-2"
              >
                Sign In
              </button>
              <button
                onClick={onStartFlow}
                className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-200 cursor-pointer"
              >
                Start Journey
              </button>
            </div>
          </>
        ) : (
          /* ONBOARDING & PROTOTYPE FLOW HEADER */
          <div className="flex items-center gap-3">
            
            {/* Quick Screen Jumper for VC Demo */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setDemoMenuOpen(!demoMenuOpen)}
                className="px-3 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-800 text-xs font-bold flex items-center gap-2 hover:bg-stone-200 transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="hidden sm:inline">Flow Stage:</span>
                <span className="text-emerald-800 font-extrabold capitalize">
                  {currentStep.replace('_', ' ')}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
              </button>

              {/* Demo Jump Menu */}
              <AnimatePresence>
                {demoMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-full mt-2 w-56 bg-white border border-stone-200 rounded-2xl shadow-xl p-2 z-50 text-xs font-medium space-y-1"
                  >
                    <p className="px-3 py-1.5 text-[10px] font-black uppercase text-stone-400 tracking-wider">
                      Demo Flow Jumper
                    </p>
                    {[
                      { id: 'intake_form', label: '1. Health Intake Form' },
                      { id: 'analysis', label: '2. Analysis Transition' },
                      { id: 'blueprint_result', label: '3. Personalized Blueprint' },
                      { id: 'subscription_select', label: '4. Subscription Tiers' },
                      { id: 'cook_schedule', label: '5. Match Cook & Schedule' },
                      { id: 'celebration', label: '6. Celebration Screen' },
                      { id: 'dashboard', label: '7. Customer Dashboard' },
                    ].map(st => (
                      <button
                        key={st.id}
                        type="button"
                        onClick={() => {
                          onNavigateStep?.(st.id as FlowStep);
                          setDemoMenuOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl transition-all ${
                          currentStep === st.id ? 'bg-emerald-800 text-white font-bold' : 'hover:bg-stone-100 text-stone-700'
                        }`}
                      >
                        {st.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={onReturnToLanding}
              className="px-3.5 py-1.5 rounded-full border border-stone-200/80 text-stone-600 hover:text-stone-900 text-xs font-bold transition-all flex items-center gap-1 bg-stone-50"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Landing Page</span>
            </button>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-stone-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-stone-200 p-5 md:hidden flex flex-col gap-4 shadow-xl text-stone-900 text-sm font-bold"
          >
            <button 
              onClick={() => {
                onStartFlow?.();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-stone-900 text-white text-center font-medium uppercase tracking-[0.12em] text-xs cursor-pointer"
            >
              Start Intake Flow
            </button>
            <button 
              onClick={() => {
                onReturnToLanding?.();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-stone-100 text-stone-800 rounded-xl text-center font-bold"
            >
              View Landing Page
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
