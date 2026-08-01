import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, HeartPulse, UserCheck, CalendarCheck, UtensilsCrossed } from 'lucide-react';
import { UserProfile } from '../types';

interface AnalysisTransitionProps {
  userProfile: UserProfile;
  onComplete: () => void;
}

const ANALYSIS_STEPS = [
  {
    icon: UtensilsCrossed,
    title: 'Reviewing your nutrition profile...',
    subtitle: 'Analyzing glycemic index targets & ingredient allergies',
    duration: 1200
  },
  {
    icon: HeartPulse,
    title: 'Preparing your personalized nutrition strategy...',
    subtitle: 'Chief Dietitian Dr. Ananya Sharma adjusting metabolic macros',
    duration: 1400
  },
  {
    icon: UserCheck,
    title: 'Matching you with the best Nutrition Chef...',
    subtitle: 'Finding certified cooks in Koramangala & HSR Layout',
    duration: 1400
  },
  {
    icon: CalendarCheck,
    title: 'Creating your weekly cooking schedule...',
    subtitle: 'Optimizing ingredient sourcing & home visit slots',
    duration: 1200
  },
  {
    icon: CheckCircle2,
    title: 'Your Nutrition Blueprint is ready!',
    subtitle: 'Personalized culinary plan prepared for your approval',
    duration: 1000
  }
];

export const AnalysisTransition: React.FC<AnalysisTransitionProps> = ({
  userProfile,
  onComplete
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progressPercent, setProgressPercent] = useState(10);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (currentStepIndex < ANALYSIS_STEPS.length - 1) {
      const step = ANALYSIS_STEPS[currentStepIndex];
      timer = setTimeout(() => {
        setCurrentStepIndex(prev => prev + 1);
        setProgressPercent(Math.min(100, Math.round(((currentStepIndex + 2) / ANALYSIS_STEPS.length) * 100)));
      }, step.duration);
    } else {
      // Final step delay before navigating to Blueprint Result
      timer = setTimeout(() => {
        onComplete();
      }, 1200);
    }

    return () => clearTimeout(timer);
  }, [currentStepIndex, onComplete]);

  const activeStep = ANALYSIS_STEPS[currentStepIndex];

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24 pb-20 px-4 sm:px-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-xl mx-auto text-center relative z-10">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 text-white text-xs font-semibold uppercase tracking-[0.15em] mb-8"
        >
          Assessment Complete
        </motion.div>

        {/* Pulse Circle with Icon */}
        <div className="relative w-28 h-28 mx-auto mb-8 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-stone-900/10 rounded-full blur-md"
          />
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-24 h-24 bg-white border border-stone-200/80 shadow-xl flex items-center justify-center relative z-10"
          >
            <activeStep.icon className="w-9 h-9 text-stone-900" strokeWidth={1.5} />
          </motion.div>
        </div>

        {/* Animated Message Sequence */}
        <div className="min-h-[140px] flex flex-col justify-center items-center mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStepIndex}
              initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
              transition={{ duration: 0.35 }}
              className="space-y-2"
            >
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight leading-snug">
                {activeStep.title}
              </h2>
              <p className="text-stone-500 font-medium text-sm sm:text-base">
                {activeStep.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mx-auto space-y-2 mb-10">
          <div className="flex justify-between text-xs font-semibold text-stone-500 uppercase tracking-wider">
            <span>Engineering Blueprint</span>
            <span className="text-stone-900">{progressPercent}%</span>
          </div>
          <div className="h-1 w-full bg-stone-200 overflow-hidden">
            <motion.div
              className="h-full bg-stone-900"
              initial={{ width: '10%' }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Step List Feedback */}
        <div className="bg-white/90 backdrop-blur-md border border-stone-200/80 p-5 shadow-sm text-left max-w-md mx-auto space-y-3">
          {ANALYSIS_STEPS.map((s, idx) => {
            const isDone = idx < currentStepIndex;
            const isCurrent = idx === currentStepIndex;

            return (
              <div
                key={s.title}
                className={`flex items-center gap-3 transition-opacity duration-300 text-xs sm:text-sm font-medium ${
                  isDone ? 'text-stone-900 font-semibold' : isCurrent ? 'text-stone-900 font-semibold' : 'text-stone-400 opacity-60'
                }`}
              >
                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                  {isDone ? (
                    <CheckCircle2 className="w-5 h-5 text-stone-900" />
                  ) : isCurrent ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-stone-900 animate-pulse" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-stone-300" />
                  )}
                </div>
                <span className="truncate">{s.title}</span>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
