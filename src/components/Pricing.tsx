import React from 'react';
import { motion } from 'motion/react';
import { Check, Heart, User, ChefHat, Activity, Stethoscope } from 'lucide-react';

const plans = [
  {
    name: "Fitness",
    price: "11,999",
    description: "Designed for weight loss, muscle gain, and high-performance lifestyles.",
    features: [
      "Dedicated Nutritionist",
      "Dedicated Nutrition Chef",
      "Personalized Meal Planning",
      "Weekly Progress Tracking",
      "Meal Plan Adjustments"
    ],
    buttonText: "Start Fitness Plan",
    isPremium: false,
    icon: <ChefHat className="w-8 h-8" />
  },
  {
    name: "Health Management",
    price: "14,999",
    description: "Therapeutic nutrition for Diabetes, PCOS, Thyroid, and lifestyle disorders.",
    features: [
      "Everything in Fitness PLUS",
      "Physician Consultation",
      "Clinical Nutritionist",
      "Therapeutic Nutrition",
      "Disease-Specific Meal Planning",
      "Weekly Health Monitoring",
      "Continuous Nutrition Optimization"
    ],
    buttonText: "Start Health Plan",
    isPremium: true,
    icon: <Stethoscope className="w-8 h-8" />
  }
];

export const Pricing = () => {
  return (
    <section id="subscriptions" className="bg-white py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-sm font-bold mb-6 shadow-sm"
          >
            <Activity className="w-4 h-4 text-emerald-600" />
            <span className="uppercase tracking-widest text-[10px]">The Journey</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold text-stone-900 tracking-tighter leading-[0.85] mb-8"
          >
            Precision <br />
            <span className="text-stone-400">Nutrition Pathways.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-xl font-medium max-w-2xl mx-auto"
          >
            We don't just provide food. We provide a medical-grade ecosystem for your longevity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1] 
              }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative p-12 lg:p-16 rounded-[60px] flex flex-col transition-all duration-700 ${
                plan.isPremium 
                  ? 'bg-white text-stone-900 shadow-[0_30px_70px_rgba(16,185,129,0.12)] border-2 border-emerald-500' 
                  : 'bg-[#FAF8F5] text-stone-900 border border-stone-200/80 shadow-md'
              } group overflow-hidden hover:scale-[1.01]`}
            >
              {plan.isPremium && (
                <div className="absolute top-10 right-10 px-6 py-2.5 bg-emerald-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-md shadow-emerald-600/20 text-white z-10">
                   Highly Recommended
                </div>
              )}
              
              <div className="mb-14 relative z-10">
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 ${
                    plan.isPremium ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-white text-emerald-700 border border-stone-200 shadow-sm'
                  }`}
                >
                  {plan.icon}
                </motion.div>
                <h3 className="text-5xl font-bold mb-4 tracking-tighter leading-tight text-stone-900">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-black tracking-tighter text-stone-900">₹{plan.price}</span>
                  <span className="text-stone-400 text-xs font-black uppercase tracking-[0.4em]">Per Month</span>
                </div>
                <p className="text-stone-600 text-xl font-light leading-relaxed max-w-sm">
                  {plan.description}
                </p>
              </div>

              <div className="flex-1 space-y-5 mb-16 relative z-10">
                {plan.features.map((feature, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (idx * 0.05), duration: 0.8 }}
                    key={feature} 
                    className="flex items-center gap-5"
                  >
                    <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/60 shrink-0">
                      <Check className="w-4 h-4 stroke-[3px]" />
                    </div>
                    <span className="font-bold text-lg tracking-tight text-stone-800">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-12 border-t border-stone-200/80 relative z-10">
                <motion.button 
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-6 rounded-[32px] font-black text-xl transition-all shadow-md ${
                    plan.isPremium 
                      ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-emerald-600/25' 
                      : 'bg-stone-900 text-white hover:bg-stone-800'
                  }`}
                >
                  {plan.buttonText}
                </motion.button>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-100/20 rounded-full blur-[80px] pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
