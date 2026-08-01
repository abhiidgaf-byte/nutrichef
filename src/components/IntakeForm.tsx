import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  User,
  MapPin,
  Phone,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldAlert,
  Activity,
  HeartPulse,
  TrendingDown,
  Award,
  Flame,
  Dumbbell,
  Heart,
  Zap,
  Utensils,
  ChevronRight,
  Info,
  Leaf
} from 'lucide-react';
import { UserProfile } from '../types';
import { BANGALORE_NEIGHBORHOODS, HEALTH_CONDITIONS, GOALS, CUISINE_STYLES } from '../data/mockData';

interface IntakeFormProps {
  userProfile: UserProfile;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  onNext?: () => void;
  onComplete?: () => void;
  onCancel?: () => void;
}

const GOAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Flame,
  Dumbbell,
  Heart,
  Zap,
};

export const IntakeForm: React.FC<IntakeFormProps> = ({
  userProfile,
  setUserProfile,
  onNext,
  onComplete,
  onCancel,
}) => {
  const [step, setStep] = useState<number>(1);

  const handleFinish = () => {
    if (onNext) {
      onNext();
    } else if (onComplete) {
      onComplete();
    }
  };

  const totalSteps = 4;

  const handleConditionToggle = (conditionName: string) => {
    if (conditionName.includes('None')) {
      setUserProfile(prev => ({ ...prev, healthConditions: ['None / General Fitness'] }));
      return;
    }

    setUserProfile(prev => {
      const current = prev.healthConditions.filter(c => !c.includes('None'));
      if (current.includes(conditionName)) {
        const next = current.filter(c => c !== conditionName);
        return { ...prev, healthConditions: next.length ? next : ['None / General Fitness'] };
      } else {
        return { ...prev, healthConditions: [...current, conditionName] };
      }
    });
  };

  const handleGoalToggle = (goalName: string) => {
    setUserProfile(prev => {
      if (prev.goals.includes(goalName)) {
        if (prev.goals.length === 1) return prev;
        return { ...prev, goals: prev.goals.filter(g => g !== goalName) };
      } else {
        return { ...prev, goals: [...prev.goals, goalName] };
      }
    });
  };

  const renderStepIndicator = () => (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-stone-500">
        <span className="text-stone-900">
          Step {step} of {totalSteps}
        </span>
        <span className="text-stone-500">
          {step === 1 && 'Basic Profile'}
          {step === 2 && 'Health Conditions'}
          {step === 3 && 'Nutrition Goals'}
          {step === 4 && 'Food & Cuisine'}
        </span>
      </div>
      <div className="h-1 w-full bg-stone-200/80 overflow-hidden">
        <motion.div
          className="h-full bg-stone-900"
          initial={{ width: `${((step - 1) / totalSteps) * 100}%` }}
          animate={{ width: `${(step / totalSteps) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] pt-24 pb-20 px-4 sm:px-6 flex flex-col justify-center items-center overflow-hidden">
      {/* Ambient background — quiet, slow-moving, not decorative noise: a nod to the
          botanical/nutrition subject matter without undermining the serious, clinical tone */}
      <motion.div
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[700px] h-[700px] bg-emerald-900/10 rounded-full blur-[160px] -translate-y-1/3 translate-x-1/4 pointer-events-none"
      />
      <Leaf className="absolute top-24 right-[8%] w-24 h-24 text-emerald-900/[0.04] hidden lg:block pointer-events-none" strokeWidth={1} />

      <div className="w-full max-w-2xl mx-auto relative z-10">

        {/* Reassuring Banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-white border border-stone-200 text-stone-700 text-xs sm:text-sm font-medium flex items-center gap-3"
        >
          <div className="w-8 h-8 bg-stone-100 text-stone-700 flex items-center justify-center shrink-0">
            <Info className="w-4 h-4" />
          </div>
          <p>
            <strong className="font-semibold text-stone-900">Personalized for Bangalore households:</strong> This intake helps our NutriChef registered dietitian engineer a weekly menu tailored to your health biomarkers.
          </p>
        </motion.div>

        {/* Form Container Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white border border-stone-200/80 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
        >
          {renderStepIndicator()}

          <AnimatePresence mode="wait">
            {/* STEP 1: BASIC INFO */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight mb-2">
                    Let's start with your details
                  </h2>
                  <p className="text-stone-500 text-sm">
                    Where in Bangalore should your dedicated Nutrition Chef visit?
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                      <input
                        type="text"
                        value={userProfile.name}
                        onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
                        placeholder="e.g. Abhinav Sharma"
                        className="w-full pl-12 pr-4 py-3.5 bg-stone-50 border border-stone-200 rounded-2xl text-stone-900 font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700 transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Age & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                        Age
                      </label>
                      <input
                        type="number"
                        value={userProfile.age}
                        onChange={(e) => setUserProfile({ ...userProfile, age: parseInt(e.target.value) || 28 })}
                        placeholder="32"
                        className="w-full px-4 py-3.5 bg-stone-50 border border-stone-200 rounded-2xl text-stone-900 font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                        Phone Number (Bangalore)
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                        <input
                          type="tel"
                          value={userProfile.phone}
                          onChange={(e) => setUserProfile({ ...userProfile, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full pl-11 pr-4 py-3.5 bg-stone-50 border border-stone-200 rounded-2xl text-stone-900 font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700 transition-all text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bangalore Neighborhood */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2 flex items-center justify-between">
                      <span>Bangalore Neighborhood</span>
                      <span className="text-stone-500 font-semibold text-[10px] lowercase">Active Service Area</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {BANGALORE_NEIGHBORHOODS.map((loc) => {
                        const isSelected = userProfile.neighborhood === loc;
                        return (
                          <button
                            key={loc}
                            type="button"
                            onClick={() => setUserProfile({ ...userProfile, neighborhood: loc })}
                            className={`p-3 text-xs font-semibold transition-colors duration-200 text-left flex items-center justify-between border cursor-pointer ${
                              isSelected
                                ? 'bg-stone-900 text-white border-stone-900'
                                : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-400'
                            }`}
                          >
                            <span className="truncate">{loc}</span>
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 ml-1" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={onCancel}
                    className="text-stone-500 hover:text-stone-900 text-xs font-bold uppercase tracking-wider px-4 py-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-8 py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm uppercase tracking-[0.1em] transition-colors duration-200 flex items-center gap-2 cursor-pointer"
                  >
                    Continue to Health Conditions
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: HEALTH CONDITIONS */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight mb-2">
                    Health Conditions & Biomarkers
                  </h2>
                  <p className="text-stone-500 text-sm">
                    Select all that apply. Our clinical team adjusts glycemic load, oil types, and sodium accordingly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {HEALTH_CONDITIONS.map((cond) => {
                    const isSelected = userProfile.healthConditions.includes(cond.name);
                    return (
                      <motion.button
                        key={cond.id}
                        type="button"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => handleConditionToggle(cond.name)}
                        className={`p-4 border text-left transition-colors duration-200 relative flex flex-col justify-between ${
                          isSelected
                            ? 'bg-stone-900 text-white border-stone-900'
                            : 'bg-stone-50/80 text-stone-800 border-stone-200 hover:border-stone-400 hover:bg-white'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 border ${
                              isSelected ? 'border-white/30 text-white/80' : 'bg-stone-200/80 text-stone-700 border-transparent'
                            }`}>
                              {cond.badge}
                            </span>
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors duration-200 ${
                              isSelected ? 'bg-white border-white' : 'border-stone-300'
                            }`}>
                              {isSelected && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3] text-stone-900" />}
                            </div>
                          </div>
                          <h4 className="font-semibold text-base mb-1 tracking-tight">{cond.name}</h4>
                          <p className={`text-xs leading-relaxed ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                            {cond.description}
                          </p>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-5 py-3 border border-stone-300 text-stone-700 text-xs font-semibold uppercase tracking-[0.1em] flex items-center gap-1.5 hover:border-stone-900 hover:text-stone-900 transition-colors duration-200 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-8 py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm uppercase tracking-[0.1em] transition-colors duration-200 flex items-center gap-2 cursor-pointer"
                  >
                    Continue to Goals
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: GOALS */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight mb-2">
                    Primary Nutrition Goals
                  </h2>
                  <p className="text-stone-500 text-sm">
                    What results are you aiming to achieve over the next 90 days?
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {GOALS.map((goal) => {
                    const isSelected = userProfile.goals.includes(goal.name);
                    const GoalIcon = GOAL_ICONS[goal.iconName] ?? Zap;
                    return (
                      <motion.button
                        key={goal.id}
                        type="button"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => handleGoalToggle(goal.name)}
                        className={`p-5 border text-left transition-colors duration-200 ${
                          isSelected
                            ? 'bg-stone-900 text-white border-stone-900'
                            : 'bg-stone-50/80 text-stone-800 border-stone-200 hover:border-stone-400 hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className={`w-8 h-8 flex items-center justify-center ${
                            isSelected ? 'bg-white/10 text-white' : 'bg-stone-200/80 text-stone-700'
                          }`}>
                            <GoalIcon className="w-4 h-4" />
                          </span>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                            isSelected ? 'bg-white border-white' : 'border-stone-300'
                          }`}>
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3] text-stone-900" />}
                          </div>
                        </div>
                        <h4 className="font-semibold text-base mb-1">{goal.name}</h4>
                        <p className={`text-xs leading-relaxed ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                          {goal.description}
                        </p>
                      </motion.button>
                    );
                  })}
                </div>

                <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-5 py-3 border border-stone-300 text-stone-700 text-xs font-semibold uppercase tracking-[0.1em] flex items-center gap-1.5 hover:border-stone-900 hover:text-stone-900 transition-colors duration-200 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="px-8 py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm uppercase tracking-[0.1em] transition-colors duration-200 flex items-center gap-2 cursor-pointer"
                  >
                    Continue to Food Preferences
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: FOOD PREFERENCES */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight mb-2">
                    Dietary & Culinary Preferences
                  </h2>
                  <p className="text-stone-500 text-sm">
                    Help your Nutrition Chef prepare meals you'll actually look forward to eating every day.
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Diet Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                      Dietary Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {(['Veg', 'Non-Veg', 'Eggetarian', 'Vegan'] as const).map((diet) => {
                        const isSelected = userProfile.dietType === diet;
                        return (
                          <button
                            key={diet}
                            type="button"
                            onClick={() => setUserProfile({ ...userProfile, dietType: diet })}
                            className={`py-3 px-3 text-xs font-semibold border transition-colors duration-200 text-center cursor-pointer ${
                              isSelected
                                ? 'bg-stone-900 text-white border-stone-900'
                                : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-400'
                            }`}
                          >
                            {diet}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Cuisine Preference */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                      Cuisine Style
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {CUISINE_STYLES.map((cuisine) => {
                        const isSelected = userProfile.cuisinePreference === cuisine.value;
                        return (
                          <button
                            key={cuisine.value}
                            type="button"
                            onClick={() => setUserProfile({ ...userProfile, cuisinePreference: cuisine.value })}
                            className={`p-4 border text-left transition-colors duration-200 cursor-pointer ${
                              isSelected
                                ? 'bg-stone-900 border-stone-900 text-white'
                                : 'bg-stone-50 border-stone-200 text-stone-800 hover:border-stone-400'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-semibold text-sm">{cuisine.name}</span>
                              {cuisine.popular && (
                                <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border ${
                                  isSelected ? 'border-white/30 text-white/80' : 'border-stone-300 text-stone-500'
                                }`}>
                                  Most Popular
                                </span>
                              )}
                            </div>
                            <p className={`text-xs leading-relaxed ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                              {cuisine.description}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Spice Level */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                      Preferred Spice Level
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {([
                        { level: 'Mild', intensity: 1 },
                        { level: 'Medium', intensity: 2 },
                        { level: 'Authentic Indian', intensity: 3 },
                      ] as const).map(({ level: spice, intensity }) => {
                        const isSelected = userProfile.spiceLevel === spice;
                        return (
                          <button
                            key={spice}
                            type="button"
                            onClick={() => setUserProfile({ ...userProfile, spiceLevel: spice })}
                            className={`py-3 px-2 border text-xs font-semibold transition-colors duration-200 text-center flex flex-col items-center gap-1.5 cursor-pointer ${
                              isSelected
                                ? 'bg-stone-900 text-white border-stone-900'
                                : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-400'
                            }`}
                          >
                            <span className="flex gap-1">
                              {[1, 2, 3].map(i => (
                                <span
                                  key={i}
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    i <= intensity ? (isSelected ? 'bg-white' : 'bg-stone-900') : (isSelected ? 'bg-white/30' : 'bg-stone-300')
                                  }`}
                                />
                              ))}
                            </span>
                            {spice === 'Authentic Indian' ? 'Authentic' : spice}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-5 py-3 border border-stone-300 text-stone-700 text-xs font-semibold uppercase tracking-[0.1em] flex items-center gap-1.5 hover:border-stone-900 hover:text-stone-900 transition-colors duration-200 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleFinish}
                    className="px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm uppercase tracking-[0.1em] transition-colors duration-200 flex items-center gap-2 cursor-pointer"
                  >
                    Analyze & Build My Plan
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};
