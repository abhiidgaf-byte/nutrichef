import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, ArrowLeft, ShieldCheck, Star } from 'lucide-react';
import { SUBSCRIPTION_PLANS } from '../data/mockData';
import { SubscriptionPlan } from '../types';
import { FeatureTooltip } from './FeatureTooltip';

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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 text-white text-xs font-semibold uppercase tracking-[0.15em]">
            Flexible Weekly Subscriptions
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-stone-900 tracking-tight">
            NutriChef Subscription Tiers
          </h1>
          <p className="text-stone-600 text-sm sm:text-base font-medium max-w-lg mx-auto">
            Choose the frequency of kitchen visits that fits your lifestyle. Pause, reschedule, or swap plans anytime with 1-click.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-4xl mx-auto">
          {SUBSCRIPTION_PLANS.map((plan) => {
            const isSelected = selectedPlanId === plan.id;

            return (
              <motion.div
                key={plan.id}
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`rounded-[32px] p-6 sm:p-8 flex flex-col justify-between cursor-pointer transition-colors duration-200 relative border-2 ${
                  isSelected
                    ? 'bg-stone-50 text-stone-900 border-stone-900 shadow-xl'
                    : 'bg-white text-stone-900 border-stone-200/90 shadow-md hover:border-stone-300'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-stone-900 text-white font-semibold text-[10px] uppercase tracking-widest flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" />
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-stone-900">{plan.name}</h3>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                      isSelected ? 'bg-stone-900 border-stone-900 text-white' : 'border-stone-300'
                    }`}>
                      {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                    </div>
                  </div>

                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900">{plan.priceDisplay}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                      / month
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed mb-6 text-stone-600">
                    {plan.description}
                  </p>

                  <div className="space-y-3 border-t border-stone-200/60 pt-6 mb-8">
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs font-medium">
                        <Check className="w-4 h-4 shrink-0 text-emerald-700" />
                        <span className="text-stone-800 font-semibold flex items-center">
                          {feat}
                          <FeatureTooltip feature={feat} />
                        </span>
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
                  className={`w-full py-3.5 font-semibold text-xs uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-stone-900 text-white hover:bg-stone-800'
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
          <h3 className="font-serif text-xl font-semibold text-stone-900 tracking-tight mb-6">
            Detailed Tier Feature Comparison
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-stone-500 font-bold uppercase tracking-wider text-[10px]">
                  <th className="py-3 px-4">Feature Details</th>
                  <th className="py-3 px-4">Fitness Care Plan (₹9,999)</th>
                  <th className="py-3 px-4 text-stone-900 font-black">Health Condition Care (₹15,999)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 font-medium text-stone-700">
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-900">Cook Visit Frequency</td>
                  <td className="py-3 px-4">2 Cook Visits / Day (6 Days / Wk)</td>
                  <td className="py-3 px-4 font-bold text-stone-900">2 Cook Visits / Day (7 Days / Wk)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-900">Health Check-ins</td>
                  <td className="py-3 px-4">Monthly 2 Health Check-ins</td>
                  <td className="py-3 px-4 font-bold text-stone-900">Monthly 4 Health Check-ins</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-900">Dedicated Nutritionist (RD)</td>
                  <td className="py-3 px-4 text-stone-600">Monthly Review</td>
                  <td className="py-3 px-4 font-bold text-stone-900">Dedicated RD & WhatsApp Support</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-900">Therapeutic Spice Mixes</td>
                  <td className="py-3 px-4 text-stone-400">—</td>
                  <td className="py-3 px-4 font-bold text-stone-900">Included Free</td>
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
            className="px-6 py-3.5 border border-stone-300 text-stone-700 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 hover:border-stone-900 hover:text-stone-900 transition-colors duration-200 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blueprint
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={!selectedPlanId}
            className={`px-10 py-4 font-medium text-sm uppercase tracking-[0.1em] transition-colors duration-200 flex items-center gap-2 ${
              selectedPlanId
                ? 'bg-stone-900 hover:bg-stone-800 text-white cursor-pointer'
                : 'bg-stone-300 text-stone-500 cursor-not-allowed'
            }`}
          >
            {selectedPlanId ? 'Match Chef & Set Schedule' : 'Select a Plan to Continue'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
