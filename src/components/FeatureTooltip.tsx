import React, { useState } from 'react';
import { Info } from 'lucide-react';

export const getFeatureExplanation = (featureText: string): string => {
  const lower = featureText.toLowerCase();
  if (lower.includes('cook visit')) {
    return "Provides fresh, hot meals prepared live in your home kitchen without reliance on pre-packaged or reheated food.";
  }
  if (lower.includes('fresh home-cooked')) {
    return "100% clean, home-prepared dishes tailored to your dietary restrictions, spice levels, and macro targets.";
  }
  if (lower.includes('health check-in')) {
    return "Regular consultations with a Registered Dietitian (RD) to evaluate body metrics, energy levels, and adjust menu plans.";
  }
  if (lower.includes('nutritionist') || lower.includes('rd')) {
    return "Having a dedicated RD ensures clinical guidance, preventing nutritional gaps and aligning meals with medical needs.";
  }
  if (lower.includes('chef')) {
    return "A single, background-checked chef builds familiarity with your kitchen setup, hygiene standards, and taste preferences.";
  }
  if (lower.includes('macro')) {
    return "Custom calculated balance of proteins, complex carbs, and essential fats suited for your daily metabolic rate.";
  }
  return "Provides customized clinical care and premium service quality optimized for your personal health goals.";
};

export const FeatureTooltip: React.FC<{ feature: string }> = ({ feature }) => {
  const [isOpen, setIsOpen] = useState(false);
  const explanation = getFeatureExplanation(feature);

  return (
    <div 
      className="relative inline-flex items-center ml-1"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen((prev) => !prev);
      }}
    >
      <button
        type="button"
        aria-label={`Info about ${feature}`}
        className="p-0.5 text-stone-400 hover:text-emerald-700 transition-colors focus:outline-none rounded-full"
      >
        <Info className="w-3.5 h-3.5 stroke-[2.2]" />
      </button>

      {isOpen && (
        <div 
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 bg-stone-900 text-stone-100 text-[11px] leading-relaxed rounded-xl shadow-xl z-50 pointer-events-none border border-stone-800 animate-in fade-in zoom-in-95 duration-150"
        >
          <p className="font-bold text-emerald-400 mb-1 text-[10px] uppercase tracking-wider">Why It Matters</p>
          <p className="text-stone-300">{explanation}</p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-stone-900" />
        </div>
      )}
    </div>
  );
};
