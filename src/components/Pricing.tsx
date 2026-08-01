import React from 'react';
import { motion } from 'motion/react';
import { Check, Activity, Stethoscope, ChefHat } from 'lucide-react';
import { FeatureTooltip } from './FeatureTooltip';
import { SUBSCRIPTION_PLANS } from '../data/mockData';

interface PricingProps {
  onStartFlow?: (planId?: string) => void;
}

// Presentational-only metadata (icon, CTA copy, premium styling) keyed by plan id.
// The actual price/name/features come from SUBSCRIPTION_PLANS — the single source of
// truth also used by SubscriptionSelect and CustomerDashboard — so they can never drift apart.
const PLAN_PRESENTATION: Record<string, { buttonText: string; isPremium: boolean; icon: React.ReactNode }> = {
  starter: {
    buttonText: "Choose Fitness Care Plan",
    isPremium: false,
    icon: <ChefHat className="w-8 h-8" />
  },
  health_condition: {
    buttonText: "Choose Health Condition Plan",
    isPremium: true,
    icon: <Stethoscope className="w-8 h-8" />
  }
};

const plans = SUBSCRIPTION_PLANS.map(plan => ({
  id: plan.id,
  name: plan.name,
  price: plan.price.toLocaleString('en-IN'),
  description: plan.description,
  features: plan.features,
  ...PLAN_PRESENTATION[plan.id]
}));

export const Pricing: React.FC<PricingProps> = ({ onStartFlow }) => {
  return (
    <section id="subscriptions" className="bg-[#FAF8F5] py-36 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold mb-4 shadow-sm"
          >
            <Activity className="w-4 h-4 text-emerald-700" />
            <span className="uppercase tracking-widest text-[10px]">Weekly Home Subscriptions</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-7xl font-semibold text-stone-900 tracking-tight leading-[1] mb-6"
          >
            Precision <br />
            <span className="text-stone-400 italic">Nutrition Pathways.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-lg font-medium max-w-2xl mx-auto"
          >
            No instant or one-off bookings. Subscription-only service ensuring same certified chef visits your kitchen every week.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04, y: -8 }}
              transition={{ delay: index * 0.15, duration: 0.4 }}
              viewport={{ once: true }}
              className={`relative p-10 rounded-[40px] flex flex-col justify-between transition-all duration-300 hover:shadow-2xl ${
                plan.isPremium 
                  ? 'bg-emerald-50/90 text-stone-900 border-2 border-emerald-600 shadow-xl hover:border-emerald-700' 
                  : 'bg-white text-stone-900 border border-stone-200 shadow-md hover:border-emerald-300'
              }`}
            >
              {plan.isPremium && (
                <div className="absolute top-8 right-8 px-5 py-2 bg-emerald-800 text-amber-300 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  plan.isPremium ? 'bg-emerald-800 text-white' : 'bg-emerald-100 text-emerald-800'
                }`}>
                  {plan.icon}
                </div>

                <h3 className="text-3xl font-bold mb-3 tracking-tight text-stone-900">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-black tracking-tight text-stone-900">₹{plan.price}</span>
                  <span className="text-xs font-black uppercase tracking-widest text-stone-500">/ Month</span>
                </div>
                <p className="text-sm leading-relaxed mb-8 text-stone-600">
                  {plan.description}
                </p>

                <div className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="p-1.5 rounded-lg shrink-0 bg-emerald-100 text-emerald-800">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="font-bold text-sm text-stone-800 flex items-center">
                        {feature}
                        <FeatureTooltip feature={feature} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onStartFlow?.(plan.id)}
                className="w-full py-4 bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm uppercase tracking-[0.12em] transition-colors duration-200 cursor-pointer"
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
