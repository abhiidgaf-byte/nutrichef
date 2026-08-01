import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Instagram, Linkedin, Mail, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onStartFlow?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartFlow }) => {
  return (
    <section className="bg-white py-32 px-6 relative overflow-hidden border-t border-stone-200/80">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-sm"
          >
            Bangalore's Premier Nutrition Chef Service
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-bold text-stone-900 mb-8 tracking-tighter leading-[0.9]">
            Stop Guessing. <br />
            <span className="text-stone-400">
              Start Engineering.
            </span>
          </h2>
          
          <p className="text-stone-600 text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-2xl mx-auto tracking-tight">
            Experience what it feels like to have a dedicated <span className="text-stone-900 font-bold italic">Nutrition Chef & Registered Dietitian</span> working for your family in Bangalore.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onStartFlow}
              className="w-full sm:w-auto px-12 py-6 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-full font-black text-lg flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(245,158,11,0.25)] transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 text-stone-950" />
              Start Assessment Flow
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onStartFlow}
              className="w-full sm:w-auto px-12 py-6 bg-stone-100 text-stone-800 border border-stone-200 rounded-full font-bold text-lg hover:bg-stone-200 transition-all shadow-sm"
            >
              View Sample Plan
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-[#FAF8F5] py-20 px-6 border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-10 bg-emerald-800 rounded-xl flex items-center justify-center shadow-md shadow-emerald-800/20">
                  <span className="text-amber-400 font-bold italic text-xl">N</span>
               </div>
               <span className="text-2xl font-bold text-stone-900 tracking-tight">NutriChef</span>
            </div>
            <p className="text-stone-500 text-lg font-medium leading-relaxed max-w-xs">
              Bangalore's first subscription-based Personal Nutrition Chef platform.
            </p>
          </div>

          <div>
            <h4 className="text-stone-900 font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'How It Works', 'Subscriptions', 'Experts'].map(item => (
                <li key={item}>
                  <a href="#" className="text-stone-600 hover:text-emerald-800 transition-colors font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-stone-900 font-bold mb-6 uppercase tracking-widest text-xs">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Mail, label: 'Email' }
              ].map(social => (
                <a 
                  key={social.label}
                  href="#" 
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-stone-600 hover:bg-emerald-800 hover:text-amber-300 transition-all border border-stone-200 shadow-sm"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-stone-200/80 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-400 text-sm font-medium">
            © 2026 NutriChef, Bangalore. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-stone-400 hover:text-stone-700 transition-colors text-sm font-medium">Privacy Policy</a>
            <a href="#" className="text-stone-400 hover:text-stone-700 transition-colors text-sm font-medium">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
