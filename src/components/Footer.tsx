import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Instagram, Linkedin, Mail } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section className="bg-black py-48 px-6 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] mb-12"
          >
            The Future of Nutrition
          </motion.div>
          <h2 className="text-6xl md:text-9xl font-bold text-white mb-10 tracking-tighter leading-[0.85]">
            Stop Guessing. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              Start Engineering.
            </span>
          </h2>
          
          <p className="text-white/40 text-2xl md:text-3xl font-light leading-relaxed mb-20 max-w-2xl mx-auto tracking-tight">
            Join the elite waitlist and experience what it feels like to have a dedicated <span className="text-white font-bold italic">Medical-Grade Ecosystem</span> working for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-16 py-8 bg-emerald-500 text-white rounded-full font-black text-2xl flex items-center justify-center gap-4 shadow-[0_30px_60px_-15px_rgba(16,185,129,0.3)] hover:bg-emerald-400 transition-all duration-500"
            >
              Start Journey
              <ArrowRight className="w-8 h-8" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-16 py-8 bg-transparent text-white border border-white/10 rounded-full font-black text-2xl hover:bg-white/5 transition-all duration-500 backdrop-blur-xl"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-black py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
               <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold italic text-xl">N</span>
               </div>
               <span className="text-2xl font-bold text-white tracking-tight">NutriChef</span>
            </div>
            <p className="text-white/40 text-lg font-medium leading-relaxed max-w-xs">
              India's first subscription-based Personal Nutrition Chef platform.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'How It Works', 'Subscriptions', 'Experts', 'Testimonials'].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-emerald-400 transition-colors font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Mail, label: 'Email' },
              ].map(social => (
                <a 
                  key={social.label}
                  href="#" 
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white/60 hover:bg-emerald-500 hover:text-white transition-all border border-white/10"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-sm font-medium">
            © 2026 NutriChef Health. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 hover:text-white transition-colors text-sm font-medium">Privacy Policy</a>
            <a href="#" className="text-white/20 hover:text-white transition-colors text-sm font-medium">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
