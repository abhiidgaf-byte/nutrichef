import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, MapPin, CheckCircle2, Sparkles, Heart, Flame, Dumbbell, ChefHat, Salad, Stethoscope, Award, Star, Quote } from 'lucide-react';
import heroBannerImg from '../assets/images/nutrichef_chef_rd_collaboration_1785251115984.jpg';
import { CHEFS } from '../data/mockData';

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
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen pt-36 pb-28 flex items-center bg-[#FAF8F5] overflow-hidden">
      {/* Background Ambience */}
      <motion.div 
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.45, 0.25]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-emerald-200/30 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/4 pointer-events-none" 
      />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-amber-100/40 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
        
        {/* Left Column: Headlines & Call-To-Action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 space-y-6"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 text-stone-500 text-[11px] font-semibold uppercase tracking-[0.2em] border-b border-stone-300 pb-2"
          >
            <MapPin className="w-3.5 h-3.5 text-stone-400" />
            Bangalore's Premier Personal Nutrition Chef Service
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl sm:text-6xl lg:text-8xl font-semibold text-stone-900 tracking-tight leading-[1.02]"
          >
            Cooked For You, <br />
            <span className="text-stone-500 italic">
              Not Just For Everyone.
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-stone-600 text-base sm:text-xl font-normal leading-relaxed max-w-[560px] tracking-tight"
          >
            Your nutrition chef visits home every week to cook fresh, clinical-grade meals personalized for your diabetes, PCOS, thyroid, or fitness targets.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <button
              onClick={onStartFlow}
              className="group px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm uppercase tracking-[0.12em] flex items-center justify-center gap-3 transition-colors duration-200 cursor-pointer"
            >
              Let's Personalize It
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={onStartFlow}
              className="px-8 py-4 bg-transparent text-stone-900 border border-stone-300 font-medium text-sm uppercase tracking-[0.12em] hover:border-stone-900 transition-colors duration-200 text-center cursor-pointer"
            >
              Explore Weekly Tiers
            </button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="pt-4 flex flex-wrap items-center gap-4 text-xs text-stone-500 font-medium border-t border-stone-200/60"
          >
            <span className="flex items-center gap-1.5 text-emerald-800 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              100% Background Checked
            </span>
            <span>•</span>
            <span>Koramangala, HSR, Indiranagar & Whitefield</span>
          </motion.div>
        </motion.div>

        {/* Right Column: Split Screen Transformation Hero Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative"
        >
          <div className="relative rounded-[36px] overflow-hidden border border-stone-200 bg-stone-900 shadow-2xl group">
            
            {/* Ultra-realistic Split Screen Banner */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
              <img 
                src={heroBannerImg} 
                alt="From Unhealthy Food Delivery to Fresh NutriChef Home Visits"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />



              {/* Single credibility marker: a live consultation is a concrete, real thing we offer */}
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-xl border border-white/90 p-2.5 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-bold text-stone-900"
              >
                <div className="w-6 h-6 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
                  <Stethoscope className="w-3.5 h-3.5" />
                </div>
                <span>Live Dietitian Consultation</span>
              </motion.div>
            </div>

            {/* Trust Passport: this is the person who'll be in your kitchen, not a vague institutional badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 bg-stone-900 border-t border-stone-800"
            >
              <div className="flex items-center gap-4">
                <img
                  src={CHEFS[0].photo}
                  alt={CHEFS[0].name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-emerald-600/60 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-white text-sm">{CHEFS[0].name}</span>
                    <span className="flex items-center gap-1 text-amber-400 text-xs font-bold shrink-0">
                      <Star className="w-3 h-3 fill-amber-400" />
                      {CHEFS[0].rating}
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400 text-[10px] font-bold uppercase tracking-wider shrink-0">
                      <ShieldCheck className="w-3 h-3" />
                      Background Verified
                    </span>
                  </div>
                  <p className="text-stone-400 text-xs italic mt-0.5 truncate">
                    <Quote className="w-3 h-3 inline mr-1 -mt-0.5 opacity-60" />
                    {CHEFS[0].favoriteDishToCook}
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

