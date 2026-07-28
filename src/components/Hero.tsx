import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, User, ChefHat, CheckCircle2, Activity, PieChart } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center bg-black overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            India's First Personalized Nutrition Chef Platform
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.9] lg:max-w-[1.2ch]">
            Your Personal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400">Nutrition Chef.</span><br />
            On Subscription.
          </h1>

          <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-[500px]">
            Stop worrying about meal planning, calorie counting, and cooking. 
            Nutrify matches you with a dedicated Nutrition Chef who prepares meals based on your body's unique needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-2xl shadow-white/10 hover:bg-stone-100 transition-colors"
            >
              Start Subscription
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-5 bg-stone-900 text-white border border-white/10 rounded-full font-bold text-lg hover:bg-stone-800 transition-colors"
            >
              Book Free Consultation
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:h-[700px] flex items-center justify-center"
        >
          {/* Floating Dashboard Elements */}
          <div className="relative w-full max-w-[500px] aspect-[4/5] bg-white/5 backdrop-blur-2xl rounded-[40px] border border-white/10 p-8 shadow-2xl overflow-hidden">
            <div className="flex justify-between items-center mb-10">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-1 font-bold">Today's Focus</p>
                <h3 className="text-2xl font-bold text-white">Adherence 94%</h3>
              </div>
              <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Activity className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-5 bg-white/5 rounded-3xl border border-white/10">
                <p className="text-white/40 text-xs font-medium mb-1 uppercase tracking-wider">Protein</p>
                <p className="text-white text-2xl font-bold">142g <span className="text-emerald-400 text-sm">/ 160g</span></p>
                <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    className="h-full bg-emerald-500"
                  />
                </div>
              </div>
              <div className="p-5 bg-white/5 rounded-3xl border border-white/10">
                <p className="text-white/40 text-xs font-medium mb-1 uppercase tracking-wider">Calories</p>
                <p className="text-white text-2xl font-bold">1,840 <span className="text-white/20 text-sm">/ 2.1k</span></p>
                <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '70%' }}
                    className="h-full bg-white/40"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl overflow-hidden flex items-center justify-center">
                  <User className="text-stone-400" />
                </div>
                <div>
                  <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest">Nutritionist</p>
                  <p className="text-white font-semibold">Sarah Jenkins</p>
                </div>
                <div className="ml-auto p-2 bg-emerald-500/20 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
              
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <ChefHat className="text-white/40" />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Personal Chef</p>
                  <p className="text-white font-semibold">Chef Marco Polo</p>
                </div>
                <div className="ml-auto p-2 bg-white/10 rounded-lg">
                  <Activity className="w-4 h-4 text-white/40" />
                </div>
              </div>
            </div>

            {/* Nutrition Score */}
            <div className="mt-10 p-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-[32px] relative overflow-hidden group">
               <div className="relative z-10">
                 <p className="text-white/60 text-xs font-bold uppercase tracking-[0.2em] mb-1">Nutrition Score</p>
                 <p className="text-white text-5xl font-bold tracking-tighter">8.4<span className="text-2xl text-white/40">/10</span></p>
                 <p className="text-white/80 text-sm mt-4 font-medium">Top 5% in your age group</p>
               </div>
               <PieChart className="absolute -right-4 -bottom-4 w-40 h-40 text-white/10 group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>

          {/* Decorative floating bits */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-white/40 text-[10px] font-bold uppercase">Plan Optimized</p>
                <p className="text-white font-bold text-sm">Protein Intake ↑ 15%</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
