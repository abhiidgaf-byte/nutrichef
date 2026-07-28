import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, ArrowRight, ArrowLeft, ShieldCheck, Star } from 'lucide-react';
import { SUBSCRIPTION_PLANS } from '../data/mockData';
import { SubscriptionPlan } from '../types';

interface SubscriptionSelectProps {
  selectedPlanId: string;
  setSelectedPlanId: (id: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export const SubscriptionSelect: React.FC<SubscriptionSelectProps> = ({
  selectedPlanId,
  setSelectedPlanId,
  onNext,
  onBack
}) => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-800 text-amber-300 text-xs font-bold uppercase tracking-widest border border-emerald-700 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Flexible Weekly Subscriptions
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            NutriChef Subscription Tiers
          </h1>
          <p className="text-stone-600 text-sm sm:text-base font-medium max-w-lg mx-auto">
            Choose the frequency of kitchen visits that fits your lifestyle. Pause, reschedule, or swap plans anytime with 1-click.
          </p>
        </motion.div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {SUBSCRIPTION_PLANS.map((plan) => {
            const isSelected = selectedPlanId === plan.id;

            return (
              <motion.div
                key={plan.id}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`rounded-[32px] p-6 sm:p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 relative border ${
                  isSelected
                    ? 'bg-stone-900 text-white border-amber-500 shadow-2xl shadow-stone-900/30 ring-2 ring-amber-500'
                    : 'bg-white text-stone-900 border-stone-200/90 shadow-md hover:border-stone-300'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-stone-950 font-black text-[10px] uppercase tracking-widest rounded-full shadow-md flex items-center gap-1">
                    <Star className="w-3 h-3 fill-stone-950" />
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{plan.name}</h3>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      isSelected ? 'bg-amber-500 border-amber-500 text-stone-950' : 'border-stone-300'
                    }`}>
                      {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                    </div>
                  </div>

                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl sm:text-4xl font-black tracking-tight">{plan.priceDisplay}</span>
                    <span className={`text-xs font-bold uppercase tracking-wider ${isSelected ? 'text-stone-400' : 'text-stone-500'}`}>
                      / month
                    </span>
                  </div>

                  <p className={`text-xs leading-relaxed mb-6 ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
                    {plan.description}
                  </p>

                  <div className="space-y-3 border-t border-stone-200/40 pt-6 mb-8">
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs font-medium">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isSelected ? 'text-amber-400' : 'text-emerald-700'}`} />
                        <span className={isSelected ? 'text-stone-200' : 'text-stone-700'}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlanId(plan.id);
                  }}
                  className={`w-full py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all ${
                    isSelected
                      ? 'bg-amber-500 text-stone-950 hover:bg-amber-400 shadow-lg shadow-amber-500/20'
                      : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
                  }`}
                >
                  {isSelected ? 'Selected Tier' : 'Select Plan'}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Feature Table */}
        <div className="bg-white rounded-[32px] border border-stone-200 p-6 sm:p-8 shadow-sm">
          <h3 className="text-xl font-bold text-stone-900 tracking-tight mb-6">
            Detailed Tier Feature Comparison
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-stone-500 font-bold uppercase tracking-wider text-[10px]">
                  <th className="py-3 px-4">Feature Details</th>
                  <th className="py-3 px-4">Starter</th>
                  <th className="py-3 px-4 text-emerald-800 font-black">Health-Condition (Recommended)</th>
                  <th className="py-3 px-4">Full Day Care</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 font-medium text-stone-700">
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-900">Weekly Chef Visits</td>
                  <td className="py-3 px-4">2 Visits / Week</td>
                  <td className="py-3 px-4 font-bold text-emerald-800">3 Visits / Week</td>
                  <td className="py-3 px-4">5 Visits / Week</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-900">Total Monthly Fresh Meals</td>
                  <td className="py-3 px-4">32 Meals</td>
                  <td className="py-3 px-4 font-bold text-emerald-800">48 Meals</td>
                  <td className="py-3 px-4">80+ Meals</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-900">Dedicated Nutritionist (RD)</td>
                  <td className="py-3 px-4 text-stone-400">Monthly Review</td>
                  <td className="py-3 px-4 font-bold text-emerald-800">Dedicated RD & WhatsApp Support</td>
                  <td className="py-3 px-4 font-bold">Priority RD Access</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-900">Therapeutic Spice Mixes</td>
                  <td className="py-3 px-4 text-stone-400">—</td>
                  <td className="py-3 px-4 font-bold text-emerald-800">Included Free</td>
                  <td className="py-3 px-4 font-bold">Included Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between pt-4">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-3.5 border border-stone-200 rounded-2xl text-stone-700 text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-stone-100"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blueprint
          </button>
          <button
            type="button"
            onClick={onNext}
            className="px-10 py-4 bg-emerald-800 hover:bg-emerald-900 text-white rounded-2xl font-black text-sm shadow-xl shadow-emerald-800/20 transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            Match Chef & Set Schedule
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
