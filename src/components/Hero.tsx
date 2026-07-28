import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

interface HeroProps {
  onStartFlow?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartFlow }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center bg-[#FAF8F5] overflow-hidden">
      {/* Background Ambience */}
      <motion.div 
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-emerald-200/30 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/4 pointer-events-none" 
      />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-amber-100/40 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
            </span>
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            Bangalore's First Personalized Nutrition Chef Service
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-stone-900 mb-8 tracking-tighter leading-[0.9]"
          >
            Cooked For You, <br />
            <span className="text-stone-500 font-bold">
              Not Just For Everyone.
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-stone-600 text-lg sm:text-2xl font-normal leading-relaxed mb-10 max-w-[580px] tracking-tight"
          >
            Trained nutrition chefs visit your home weekly to cook personalized, clinical-grade meals tailored to your diabetes, PCOS, thyroid, or fitness goals.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onStartFlow}
              className="w-full sm:w-auto px-10 py-5 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-full font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-amber-500/20 transition-all duration-300"
            >
              Let's Personalize It
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onStartFlow}
              className="w-full sm:w-auto px-8 py-5 bg-white text-stone-800 border border-stone-200 rounded-full font-bold text-base hover:bg-stone-100 transition-all shadow-sm"
            >
              Explore Weekly Tiers
            </motion.button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-10 flex items-center gap-6 text-xs text-stone-500 font-medium"
          >
            <span className="flex items-center gap-1.5 text-emerald-800 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              100% Background Checked
            </span>
            <span>•</span>
            <span>Koramangala, HSR, Indiranagar & Whitefield</span>
          </motion.div>
        </motion.div>

        {/* Hero Graphic / Preview Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative rounded-[40px] overflow-hidden border border-stone-200 bg-white p-6 shadow-2xl">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] mb-6">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200" 
                alt="Personalized Nutrition Chef Cooking"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="px-3 py-1 bg-amber-500 text-stone-950 font-black text-[10px] uppercase tracking-widest rounded-full">
                    Koramangala Household Visit
                  </span>
                  <p className="text-white font-bold text-xl mt-2">Chef Arjun preparing Foxtail Millet Khichdi</p>
                  <p className="text-stone-300 text-xs font-medium">Tailored for Diabetes Type 2 & Low GI Protocol</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200/80">
                <span className="text-[10px] font-bold text-stone-400 uppercase block">Glycemic GI</span>
                <span className="text-emerald-800 font-black text-base">Low GI (38)</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200/80">
                <span className="text-[10px] font-bold text-stone-400 uppercase block">Daily Protein</span>
                <span className="text-amber-800 font-black text-base">145g Target</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200/80">
                <span className="text-[10px] font-bold text-stone-400 uppercase block">Oil Protocol</span>
                <span className="text-stone-900 font-black text-base">Cold Pressed</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
