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
    <section className="relative min-h-screen pt-32 pb-20 flex items-center bg-black overflow-hidden">
      {/* Background Ambience - More atmospheric, less busy */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-emerald-500/10 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/4" 
      />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Personal Nutrition Chef Ecosystem
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-7xl md:text-9xl font-bold text-white mb-10 tracking-tighter leading-[0.8] lg:max-w-[1.2ch]"
          >
            Your Personal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">
              Nutrition Chef.
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-white/40 text-2xl md:text-3xl font-light leading-relaxed mb-16 max-w-[600px] tracking-tight"
          >
            Stop guessing. Start engineering. <br />
            <span className="text-white/60">A medical-grade culinary experience tailored to your longevity.</span>
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-8"
          >
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-14 py-7 bg-emerald-500 text-white rounded-full font-black text-xl flex items-center justify-center gap-4 shadow-[0_20px_50px_rgba(16,185,129,0.2)] hover:bg-emerald-400 transition-all duration-500"
            >
              Start Journey
              <ArrowRight className="w-6 h-6" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-14 py-7 bg-transparent text-white border border-white/10 rounded-full font-black text-xl hover:bg-white/5 transition-all duration-500 backdrop-blur-xl"
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
          {/* Main Dashboard Shell - Slower, more elegant float */}
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[600px] aspect-[4/5] bg-white/[0.02] backdrop-blur-3xl rounded-[80px] border border-white/10 p-14 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.6)] overflow-hidden group"
          >
            <div className="flex justify-between items-center mb-20">
              <div>
                <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] mb-4 font-black">Clinical Adherence</p>
                <div className="flex items-center gap-5">
                  <motion.h3 className="text-6xl font-bold text-white tracking-tighter">
                    {adherence}%
                  </motion.h3>
                  <div className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-black rounded-lg border border-emerald-500/20 uppercase tracking-widest">
                    Optimized
                  </div>
                </div>
              </div>
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-16 h-16 bg-emerald-500 rounded-[32px] flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.3)] border border-emerald-400"
              >
                <Activity className="w-8 h-8 text-white" />
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-10 mb-16">
              <div className="p-8 bg-white/5 rounded-[48px] border border-white/10 hover:bg-white/[0.08] transition-all duration-700 group/item">
                <div className="flex justify-between items-start mb-8">
                   <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">Protein</p>
                   <PieChart className="w-5 h-5 text-emerald-400/50" />
                </div>
                <p className="text-white text-4xl font-bold tracking-tight mb-6">142<span className="text-white/20 text-xl font-medium">/160g</span></p>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '88%' }}
                    transition={{ duration: 2.5, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-emerald-500"
                  />
                </div>
              </div>
              <div className="p-8 bg-white/5 rounded-[48px] border border-white/10 hover:bg-white/[0.08] transition-all duration-700">
                <div className="flex justify-between items-start mb-8">
                   <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">Calories</p>
                   <Activity className="w-5 h-5 text-white/20" />
                </div>
                <p className="text-white text-4xl font-bold tracking-tight mb-6">1.8k<span className="text-white/20 text-xl font-medium">/2.1k</span></p>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ duration: 2.5, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-white/30"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <motion.div 
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-[32px] flex items-center gap-6 group/chef cursor-pointer hover:bg-emerald-500/10 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-white rounded-2xl overflow-hidden flex items-center justify-center shadow-2xl group-hover/chef:scale-110 transition-transform duration-700">
                  <User className="text-stone-400 w-9 h-9" />
                </div>
                <div>
                  <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Nutritionist</p>
                  <p className="text-white font-bold text-xl tracking-tight">Sarah Jenkins, RD</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="p-6 bg-white/5 border border-white/10 rounded-[32px] flex items-center gap-6 group/chef cursor-pointer hover:bg-white/[0.08] transition-all duration-500"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 group-hover/chef:scale-110 transition-transform duration-700">
                  <ChefHat className="text-white/60 w-9 h-9" />
                </div>
                <div>
                  <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Personal Chef</p>
                  <p className="text-white font-bold text-xl tracking-tight">Chef Marco Polo</p>
                </div>
              </motion.div>
            </div>

            {/* Premium Progress Visual */}
            <div className="mt-12 p-12 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 rounded-[48px] relative overflow-hidden group/score">
               <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-6">
                   <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/10">
                     <PieChart className="w-5 h-5 text-white" />
                   </div>
                   <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.4em]">NutriScore</p>
                 </div>
                 <div className="flex items-baseline gap-3">
                   <p className="text-white text-8xl font-black tracking-tighter leading-none">{score}</p>
                   <p className="text-4xl text-white/40 font-black">/10</p>
                 </div>
               </div>
               <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                 className="absolute -right-20 -bottom-20 w-96 h-96 border-[30px] border-white/5 rounded-full" 
               />
            </div>
          </motion.div>

          {/* Luxury Floating Badge */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 3, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-16 -right-12 p-8 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.5)] z-20 group cursor-default"
          >
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/40 border border-emerald-400">
                <CheckCircle2 className="text-white w-8 h-8 stroke-[3px]" />
              </div>
              <div>
                <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-1">System Status</p>
                <p className="text-white font-black text-2xl tracking-tight">Fully Optimized</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
