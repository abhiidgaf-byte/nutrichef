import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, MapPin, CheckCircle2, Sparkles, Heart, Flame, Dumbbell, ChefHat, Salad, Stethoscope, Award } from 'lucide-react';
import heroBannerImg from '../assets/images/nutrichef_chef_rd_collaboration_1785251115984.jpg';

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
    <section className="relative min-h-screen pt-28 pb-20 flex items-center bg-[#FAF8F5] overflow-hidden">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-bold uppercase tracking-wider shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
            </span>
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            Bangalore's Premier Personal Nutrition Chef Service
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-stone-900 tracking-tighter leading-[0.92]"
          >
            Cooked For You, <br />
            <span className="text-stone-500 font-bold">
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
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onStartFlow}
              className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-full font-black text-base flex items-center justify-center gap-3 shadow-xl shadow-amber-500/20 transition-all duration-300"
            >
              Let's Personalize It
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onStartFlow}
              className="px-8 py-4 bg-white text-stone-800 border border-stone-200/90 rounded-full font-bold text-sm hover:bg-stone-100 transition-all shadow-sm text-center"
            >
              Explore Weekly Tiers
            </motion.button>
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



              {/* Floating Apple-style Glassmorphism UI Badges */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute top-4 left-4 bg-emerald-900/90 backdrop-blur-xl border border-emerald-400/50 p-2.5 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-bold text-emerald-100"
              >
                <div className="w-6 h-6 rounded-xl bg-emerald-500/30 flex items-center justify-center text-emerald-300">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <span>✓ Approved by Nutrition Experts</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-xl border border-white/90 p-2.5 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-bold text-stone-900"
              >
                <div className="w-6 h-6 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
                  <Stethoscope className="w-3.5 h-3.5" />
                </div>
                <span>Live Dietitian Consultation</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-4 right-4 bg-stone-900/90 backdrop-blur-xl border border-amber-500/40 p-2.5 rounded-2xl shadow-2xl flex items-center gap-2 text-xs font-bold text-white"
              >
                <div className="w-6 h-6 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <ChefHat className="w-3.5 h-3.5" />
                </div>
                <span>Trained In-Home Chef</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xl border border-white/90 p-2.5 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-bold text-stone-900"
              >
                <div className="w-6 h-6 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600">
                  <Heart className="w-3.5 h-3.5" />
                </div>
                <span>Clinical GI Protocol</span>
              </motion.div>
            </div>

            {/* Bottom Quick Feature Strip */}
            <div className="p-4 bg-stone-900 text-stone-300 grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-[11px] font-bold border-t border-stone-800">
              <div className="flex items-center justify-center gap-1.5 p-1.5 rounded-xl bg-stone-800/80">
                <Stethoscope className="w-3.5 h-3.5 text-blue-400" />
                <span>Doctor Validated Plan</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 p-1.5 rounded-xl bg-stone-800/80">
                <ChefHat className="w-3.5 h-3.5 text-emerald-400" />
                <span>Cooked Fresh At Home</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-1.5 p-1.5 rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-800/50">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Personalized Care</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

