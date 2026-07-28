import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, User, ChefHat, CheckCircle2, Activity, PieChart } from 'lucide-react';

export const Hero = () => {
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

  const [score, setScore] = React.useState(0);
  const [adherence, setAdherence] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setScore(8.4);
      setAdherence(94);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center bg-[#FAF8F5] overflow-hidden">
      {/* Background Ambience - Calm soft radial tints */}
      <motion.div 
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-emerald-200/30 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/4 pointer-events-none" 
      />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-teal-100/40 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            Personal Nutrition Chef Ecosystem
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-7xl md:text-9xl font-bold text-stone-900 mb-10 tracking-tighter leading-[0.85] lg:max-w-[1.2ch]"
          >
            Your Personal <br />
            <span className="text-stone-500 font-extrabold">
              Nutrition Chef.
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-stone-600 text-2xl md:text-3xl font-light leading-relaxed mb-16 max-w-[600px] tracking-tight"
          >
            Stop guessing. Start engineering. <br />
            <span className="text-stone-800 font-medium">A medical-grade culinary experience tailored to your longevity.</span>
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-8"
          >
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-14 py-7 bg-emerald-600 text-white rounded-full font-black text-xl flex items-center justify-center gap-4 shadow-[0_15px_35px_rgba(16,185,129,0.25)] hover:bg-emerald-500 transition-all duration-500"
            >
              Start Journey
              <ArrowRight className="w-6 h-6" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-14 py-7 bg-white text-stone-900 border border-stone-200/80 rounded-full font-black text-xl hover:bg-stone-50 transition-all duration-500 shadow-sm"
            >
              Consultation
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:h-[800px] flex items-center justify-center"
        >
          {/* Main Dashboard Shell - The Vitality Matrix */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[580px] aspect-[4/5] bg-white/90 backdrop-blur-2xl rounded-[80px] border border-stone-200/80 p-14 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.06)] overflow-hidden group"
          >
            {/* Header Section */}
            <div className="flex justify-between items-center mb-16">
              <div>
                <p className="text-stone-400 text-[10px] uppercase tracking-[0.5em] mb-4 font-black">Vitality Matrix</p>
                <div className="flex items-center gap-5">
                  <motion.h3 className="text-6xl font-bold text-stone-900 tracking-tighter">
                    {adherence}%
                  </motion.h3>
                  <div className="px-3 py-1.5 bg-emerald-50 text-emerald-800 text-[10px] font-black rounded-lg border border-emerald-200 uppercase tracking-widest">
                    Clinical
                  </div>
                </div>
              </div>
              <motion.div 
                className="w-16 h-16 bg-stone-50 rounded-3xl flex items-center justify-center border border-stone-200/80 shadow-sm"
              >
                <Activity className="w-8 h-8 text-emerald-600" />
              </motion.div>
            </div>

            {/* Central Progress - Single Unified Metric */}
            <div className="mb-16">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <p className="text-stone-400 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Weekly Longevity Score</p>
                  <p className="text-stone-900 text-5xl font-black tracking-tighter">
                    {score}<span className="text-stone-400 text-2xl font-medium ml-1">/10.0</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-emerald-700 text-[10px] font-black uppercase tracking-widest">Peak Optimization</p>
                </div>
              </div>
              <div className="h-2.5 bg-stone-100 rounded-full overflow-hidden p-0.5 border border-stone-200/60">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '84%' }}
                  transition={{ duration: 3, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-sm"
                />
              </div>
            </div>

            {/* Status Grid */}
            <div className="grid grid-cols-2 gap-8 mb-16">
              <div className="p-8 bg-stone-50/80 rounded-[40px] border border-stone-200/60">
                <p className="text-stone-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Ecosystem</p>
                <p className="text-stone-900 text-2xl font-bold tracking-tight">Active</p>
                <p className="text-emerald-700 text-[10px] font-black uppercase mt-1">Live Feed</p>
              </div>
              <div className="p-8 bg-stone-50/80 rounded-[40px] border border-stone-200/60">
                <p className="text-stone-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Chef Status</p>
                <p className="text-stone-900 text-2xl font-bold tracking-tight">Assigned</p>
                <p className="text-stone-500 text-[10px] font-black uppercase mt-1">Marco P.</p>
              </div>
            </div>

            {/* Bottom Insight */}
            <div className="p-8 bg-emerald-50/70 border border-emerald-200/80 rounded-[40px] flex items-center gap-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-emerald-200 shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-emerald-800 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Morning Insight</p>
                <p className="text-stone-800 text-sm font-medium tracking-tight">Protein adherence is optimal for recovery.</p>
              </div>
            </div>
            
            {/* Soft Ambient Glow */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-200/20 rounded-full blur-[80px] pointer-events-none" />
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
};
