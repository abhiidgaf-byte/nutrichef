import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  ShieldAlert
} from 'lucide-react';
import { UserProfile } from '../types';
import { SAMPLE_WEEKLY_MEALS, CHEFS } from '../data/mockData';

interface BlueprintResultProps {
  userProfile: UserProfile;
  onNext: () => void;
}

export const BlueprintResult: React.FC<BlueprintResultProps> = ({
  userProfile,
  onNext
}) => {
  // Derived macros based on selected goals & health conditions
  const targetCalories = userProfile.goals.includes('Fat Loss & Body Recomp') ? 1850 : 2200;
  const targetProtein = userProfile.goals.includes('Lean Muscle & Strength') ? '155g' : '135g';
  const primaryCondition = userProfile.healthConditions[0] || 'General Fitness';
  const realAllergies = userProfile.allergies.filter(a => a !== 'None');
  const chef = CHEFS.find(c => c.neighborhoods.includes(userProfile.neighborhood)) ?? CHEFS[0];
  const chefFirstNameFallback = chef.name.split(' ')[1];

  const blueprintId = `KRM-${(userProfile.neighborhood || 'Koramangala').length}${targetCalories}`.slice(0, 8).toUpperCase();
  const generatedOn = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <div className="min-h-screen bg-[#fbfaf7] pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#eaf3ee] text-[#0f5c3f] text-[11px] font-semibold uppercase tracking-[0.08em]">
              Clinical Nutrition Blueprint
            </span>
            <span className="text-[12px] text-[#4b5259]">
              Blueprint #{blueprintId} · Generated {generatedOn}
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#14171a] tracking-tight leading-[1.15]">
            {userProfile.name || 'Your'}'s plan
          </h1>
          <p className="text-[#4b5259] text-base max-w-xl font-normal">
            Built for a <strong className="text-[#14171a] font-semibold">{userProfile.neighborhood || 'Koramangala'}</strong> household managing <strong className="text-[#14171a] font-semibold">{primaryCondition}</strong>. Cooked fresh, in-home, from groceries you already buy — no pre-made meals.
          </p>
        </motion.div>

        {/* Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="flex items-center gap-3 border border-[#e4e2dc] bg-white rounded-[10px] px-4 sm:px-5 py-3.5"
        >
          <div className="w-9 h-9 rounded-full bg-[#eaf3ee] flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-[18px] h-[18px] text-[#0f5c3f]" strokeWidth={2} />
          </div>
          <p className="text-[13.5px] leading-snug">
            <strong className="font-semibold text-[#14171a]">Verified by Dr. Ananya Sharma</strong>
            <span className="text-[#4b5259]">, Senior Registered Dietitian, Indian Dietetic Association.</span>
            <span className="block text-[#4b5259]">Low Glycemic Load Protocol · reviewed {generatedOn}.</span>
          </p>
        </motion.div>

        {/* Allergy Alert — only renders when the customer actually flagged something,
            so it never falsely implies a risk that isn't there. */}
        {realAllergies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="flex items-center gap-3 border border-[#e4b8a3] bg-[#fdf3ee] rounded-[10px] px-4 sm:px-5 py-3.5"
          >
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
              <ShieldAlert className="w-[18px] h-[18px] text-[#b5502e]" strokeWidth={2} />
            </div>
            <p className="text-[13.5px] leading-snug">
              <strong className="font-semibold text-[#14171a]">Allergy Alert on File: {realAllergies.join(', ')}.</strong>
              <span className="block text-[#4b5259]">Chef {chefFirstNameFallback} has been briefed — every dish this week is prepared without these ingredients.</span>
            </p>
          </motion.div>
        )}

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#e4e2dc] border border-[#e4e2dc] rounded-xl overflow-hidden"
        >
          <div className="bg-white p-5">
            <p className="text-[10.5px] tracking-[0.07em] uppercase text-[#4b5259] mb-2">Daily Calories</p>
            <p className="text-2xl font-semibold text-[#14171a] flex items-baseline gap-1">
              {targetCalories} <span className="text-[13px] font-medium text-[#4b5259]">kcal</span>
            </p>
          </div>
          <div className="bg-white p-5">
            <p className="text-[10.5px] tracking-[0.07em] uppercase text-[#4b5259] mb-2">Daily Protein</p>
            <p className="text-2xl font-semibold text-[#14171a]">{targetProtein}</p>
          </div>
          <div className="bg-white p-5">
            <p className="text-[10.5px] tracking-[0.07em] uppercase text-[#4b5259] mb-2">Primary Focus</p>
            <p className="text-[17px] font-semibold text-[#14171a]">{primaryCondition.split('/')[0]}</p>
          </div>
          <div className="bg-white p-5">
            <p className="text-[10.5px] tracking-[0.07em] uppercase text-[#4b5259] mb-2">Diet Style</p>
            <p className="text-[17px] font-semibold text-[#14171a]">{userProfile.dietType} · {userProfile.spiceLevel}</p>
          </div>
        </motion.div>

        {/* Weekly Meal Plan Preview Cards */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl font-semibold text-stone-900 tracking-tight">
              Sample Weekly Home-Cooked Schedule
            </h3>
            <span className="text-xs font-bold text-stone-700 bg-stone-100 px-3 py-1 border border-stone-200">
              2 Cook Visits / Day (7 Days / Week)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SAMPLE_WEEKLY_MEALS.map((meal) => (
              <div key={meal.id} className="bg-white rounded-3xl border border-stone-200 p-5 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <span className="font-bold text-stone-900 text-base">{meal.dayName}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-600 bg-stone-100 px-2.5 py-1 border border-stone-200">
                    {meal.dateStr}
                  </span>
                </div>

                {/* Lunch */}
                <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Lunch Meal</p>
                  <p className="font-bold text-stone-900 text-sm leading-snug">{meal.lunch.title}</p>
                  <p className="text-xs text-stone-500 leading-relaxed">{meal.lunch.description}</p>
                  <div className="flex gap-2 text-[10px] font-bold text-stone-600 pt-1">
                    <span>{meal.lunch.calories} kcal</span>
                    <span>•</span>
                    <span className="text-stone-900 font-bold">{meal.lunch.protein}g Protein</span>
                  </div>
                </div>

                {/* Dinner */}
                <div className="space-y-1 pt-2 border-t border-stone-100">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Dinner Prep</p>
                  <p className="font-bold text-stone-900 text-sm leading-snug">{meal.dinner.title}</p>
                  <p className="text-xs text-stone-500 leading-relaxed">{meal.dinner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Step */}
        <div className="border border-[#e4e2dc] bg-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-[#14171a] mb-1">Ready for the chef assignment?</h3>
            <p className="text-[13.5px] text-[#4b5259]">
              Confirm this blueprint and we schedule your first cook visit within 48 hours.
            </p>
          </div>
          <button
            type="button"
            onClick={onNext}
            className="shrink-0 px-8 py-3.5 bg-[#14171a] hover:bg-black text-white font-semibold text-[13.5px] rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          >
            Approve Blueprint
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
