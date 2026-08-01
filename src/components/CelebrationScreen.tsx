import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Flame, Dumbbell, Heart, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { UserProfile, VisitSchedule } from '../types';
import { CHEFS } from '../data/mockData';

interface CelebrationScreenProps {
  userProfile: UserProfile;
  schedule: VisitSchedule;
  onGoToDashboard: () => void;
}

export const CelebrationScreen: React.FC<CelebrationScreenProps> = ({
  userProfile,
  schedule,
  onGoToDashboard
}) => {
  const chef = CHEFS.find(c => c.neighborhoods.includes(userProfile.neighborhood)) ?? CHEFS[0];
  const calories = userProfile.goals.includes('Fat Loss & Body Recomp') ? 1850 : 2200;
  const protein = userProfile.goals.includes('Lean Muscle & Strength') ? '160g' : '135g';
  const primaryGoal = userProfile.goals[0] || 'Condition Management';

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24 pb-20 px-4 sm:px-6 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-xl mx-auto text-center relative z-10 space-y-8">
        
        {/* Celebration Header */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="space-y-3"
        >
          <div className="text-5xl sm:text-6xl mb-2 animate-bounce">🎉</div>
          <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            Congratulations!
          </h1>
          <p className="text-emerald-800 font-bold text-lg sm:text-xl">
            Your Nutrition Journey Starts Today.
          </p>
        </motion.div>

        {/* Celebratory Summary Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[36px] border border-stone-200/90 p-6 sm:p-8 shadow-2xl relative overflow-hidden text-left space-y-6"
        >
          {/* Chef Section */}
          <div className="flex items-center gap-4 border-b border-stone-100 pb-5">
            <img 
              src={chef.photo} 
              alt={chef.name} 
              className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-700 shadow-md"
            />
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Assigned Personal Chef
              </span>
              <h3 className="text-xl font-bold text-stone-900 mt-1">Meet {chef.name}</h3>
              <p className="text-xs text-stone-500 font-medium">Serving your {userProfile.neighborhood || 'Koramangala'} home</p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
              <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                Weekly Visits
              </p>
              <p className="font-bold text-stone-900 text-sm">
                {schedule.days.join(' • ')}
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
              <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-600" />
                Daily Calories
              </p>
              <p className="font-bold text-stone-900 text-sm">
                {calories} kcal
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
              <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1 flex items-center gap-1">
                <Dumbbell className="w-3.5 h-3.5 text-emerald-600" />
                Target Protein
              </p>
              <p className="font-bold text-emerald-800 text-sm">
                {protein}
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
              <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1 flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 text-rose-500" />
                Health Goal
              </p>
              <p className="font-bold text-stone-900 text-sm truncate">
                {primaryGoal}
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-800 text-white text-xs font-medium flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>First Visit Prepared: Tomorrow at {schedule.timeSlot.split(' ')[0]}</span>
            </div>
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
          </div>
        </motion.div>

        {/* Dashboard Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          type="button"
          onClick={onGoToDashboard}
          className="w-full py-4 bg-emerald-800 hover:bg-emerald-900 text-white rounded-2xl font-black text-base shadow-xl shadow-emerald-800/30 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
        >
          Go to Customer Dashboard
          <ArrowRight className="w-5 h-5 text-amber-400" />
        </motion.button>

      </div>
    </div>
  );
};
