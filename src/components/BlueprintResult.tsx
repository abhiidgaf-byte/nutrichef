import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2, 
  Activity, 
  Flame, 
  Dumbbell, 
  ShieldCheck, 
  ChevronRight,
  Info,
  Utensils,
  Zap,
  Clock
} from 'lucide-react';
import { UserProfile } from '../types';
import { DISH_COMPARISON, SAMPLE_WEEKLY_MEALS } from '../data/mockData';

interface BlueprintResultProps {
  userProfile: UserProfile;
  onNext: () => void;
}

export const BlueprintResult: React.FC<BlueprintResultProps> = ({
  userProfile,
  onNext
}) => {
  const [activeComparisonTab, setActiveComparisonTab] = useState<'standard' | 'nutriChef'>('nutriChef');

  // Derived macros based on selected goals & health conditions
  const targetCalories = userProfile.goals.includes('Fat Loss & Body Recomp') ? 1850 : 2200;
  const targetProtein = userProfile.goals.includes('Lean Muscle & Strength') ? '155g' : '135g';
  const primaryCondition = userProfile.healthConditions[0] || 'General Fitness';

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 text-white text-xs font-semibold uppercase tracking-[0.15em]">
            Clinical Nutrition Blueprint
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-stone-900 tracking-tight leading-tight">
            Your NutriChef Plan <br />
            <span className="text-stone-500 italic font-normal">Engineered For {userProfile.name || 'You'}</span>
          </h1>
          <p className="text-stone-600 text-base max-w-xl mx-auto font-medium">
            Designed for <strong className="text-stone-900 font-bold">{userProfile.neighborhood || 'Koramangala'}</strong> household kitchen visits. Zero pre-cooked meals — cooked fresh in your kitchen by a certified Nutrition Chef.
          </p>
        </motion.div>

        {/* Blueprint Key Biomarkers Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-stone-900 text-white rounded-[32px] p-6 sm:p-8 shadow-xl relative overflow-hidden"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center border-b border-stone-800 pb-6 mb-6">
            <div>
              <p className="text-stone-400 text-[10px] font-black uppercase tracking-widest mb-1">Daily Calories</p>
              <p className="text-2xl sm:text-3xl font-black text-white flex items-center justify-center gap-1">
                <Flame className="w-5 h-5 text-stone-400" />
                {targetCalories} <span className="text-xs font-normal text-stone-400">kcal</span>
              </p>
            </div>
            <div>
              <p className="text-stone-400 text-[10px] font-black uppercase tracking-widest mb-1">Daily Protein</p>
              <p className="text-2xl sm:text-3xl font-black text-white flex items-center justify-center gap-1">
                <Dumbbell className="w-5 h-5 text-stone-400" />
                {targetProtein}
              </p>
            </div>
            <div>
              <p className="text-stone-400 text-[10px] font-black uppercase tracking-widest mb-1">Primary Focus</p>
              <p className="text-lg sm:text-xl font-bold text-stone-100 truncate">
                {primaryCondition.split('/')[0]}
              </p>
            </div>
            <div>
              <p className="text-stone-400 text-[10px] font-black uppercase tracking-widest mb-1">Diet Style</p>
              <p className="text-lg sm:text-xl font-bold text-stone-100">
                {userProfile.dietType} • {userProfile.spiceLevel}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-stone-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified by Senior RD Dr. Ananya Sharma (Indian Dietetic Association)</span>
            </div>
            <span className="text-stone-200 font-bold bg-white/10 px-3 py-1 border border-white/10">
              Low Glycemic Load Protocol
            </span>
          </div>
        </motion.div>

        {/* FEATURED WIDGET: "Same Rice, Different You" Dish Comparison */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[32px] border border-stone-200 p-6 sm:p-8 shadow-md"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-stone-500 font-bold uppercase tracking-widest text-xs flex items-center gap-1.5 mb-1">
                <Utensils className="w-3.5 h-3.5 text-stone-400" />
                Same Rice, Different You
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-stone-900 tracking-tight">
                How NutriChef Transforms Standard Indian Dishes
              </h3>
            </div>

            {/* Toggle Buttons */}
            <div className="bg-stone-100 p-1 rounded-2xl flex items-center border border-stone-200">
              <button
                type="button"
                onClick={() => setActiveComparisonTab('standard')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeComparisonTab === 'standard'
                    ? 'bg-stone-800 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Standard Hotel Dish
              </button>
              <button
                type="button"
                onClick={() => setActiveComparisonTab('nutriChef')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeComparisonTab === 'nutriChef'
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                NutriChef Personalized
              </button>
            </div>
          </div>

          {/* Comparison View Box */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-stone-50 rounded-2xl p-5 border border-stone-200/80">
            <div className="md:col-span-5 relative rounded-2xl overflow-hidden aspect-video md:aspect-square shadow-sm">
              <img 
                src={DISH_COMPARISON.image} 
                alt={DISH_COMPARISON.dishName} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent flex items-end p-4">
                <div>
                  <p className="text-white font-bold text-lg">{DISH_COMPARISON.dishName}</p>
                  <p className="text-amber-300 text-xs font-medium">
                    {activeComparisonTab === 'nutriChef' ? 'Low GI • High Bioavailable Protein' : 'High Calorie • Commercial Recipe'}
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              {activeComparisonTab === 'nutriChef' ? (
                <motion.div 
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                    <div>
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Health Rating</span>
                      <p className="text-2xl font-black text-emerald-700">9.8 / 10</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Glycemic Impact</span>
                      <p className="text-base font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                        {DISH_COMPARISON.nutriChef.glycemicIndex}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Calories</span>
                      <p className="text-xl font-black text-stone-900">{DISH_COMPARISON.nutriChef.calories} kcal</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">Tailored Ingredients Cooked In Your Kitchen:</h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-stone-700">
                      {DISH_COMPARISON.nutriChef.ingredients.map(ing => (
                        <li key={ing} className="flex items-center gap-2 bg-white p-2 rounded-xl border border-stone-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{ing}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200/80 text-emerald-900 text-xs font-medium flex items-start gap-2">
                    <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <p>{DISH_COMPARISON.nutriChef.clinicalNotes}</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                    <div>
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Health Rating</span>
                      <p className="text-2xl font-black text-rose-600">4.2 / 10</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Glycemic Impact</span>
                      <p className="text-base font-bold text-rose-700 bg-rose-100 px-3 py-1 rounded-full border border-rose-200">
                        {DISH_COMPARISON.standard.glycemicIndex}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Calories</span>
                      <p className="text-xl font-black text-stone-900">{DISH_COMPARISON.standard.calories} kcal</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">Standard Hotel Ingredients (Blood Sugar Spike):</h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-stone-700">
                      {DISH_COMPARISON.standard.ingredients.map(ing => (
                        <li key={ing} className="flex items-center gap-2 bg-white p-2 rounded-xl border border-stone-200 text-stone-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                          <span>{ing}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>
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

        {/* Bottom CTA Box */}
        <div className="bg-stone-900 text-white p-8 text-center space-y-6 relative overflow-hidden">
          <div className="max-w-xl mx-auto space-y-3 relative z-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight">
              Ready to bring NutriChef into your kitchen?
            </h3>
            <p className="text-stone-300 text-sm font-medium">
              Choose your weekly visit tier. No long term lock-in — pause or cancel anytime.
            </p>
            <button
              type="button"
              onClick={onNext}
              className="mt-4 px-10 py-4 bg-white hover:bg-stone-200 text-stone-900 font-medium text-sm uppercase tracking-[0.1em] transition-colors duration-200 flex items-center justify-center gap-3 mx-auto cursor-pointer"
            >
              Choose Your Subscription Plan
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
