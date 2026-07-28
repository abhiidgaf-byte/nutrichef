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
    <section id="subscriptions" className="bg-stone-950 py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm font-bold mb-6"
          >
            <Activity className="w-4 h-4" />
            <span className="uppercase tracking-widest text-[10px]">The Journey</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.85] mb-8"
          >
            Precision <br />
            <span className="text-white/20">Nutrition Pathways.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-xl font-medium max-w-2xl mx-auto"
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
              className={`relative p-14 lg:p-20 rounded-[80px] flex flex-col transition-all duration-700 ${
                plan.isPremium 
                  ? 'bg-stone-900 text-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] border border-white/10' 
                  : 'bg-white/[0.02] text-white border border-white/10 shadow-2xl backdrop-blur-3xl'
              } group overflow-hidden hover:border-emerald-500/30 hover:scale-[1.01]`}
            >
              {plan.isPremium && (
                <div className="absolute top-14 right-14 px-8 py-3 bg-emerald-500 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-xl shadow-emerald-500/20 text-white z-10">
                   Highly Recommended
                </div>
              )}
              
              <div className="mb-16 relative z-10">
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-10 transition-transform duration-500 ${
                    plan.isPremium ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-white/10 text-emerald-400 border border-white/10'
                  }`}
                >
                  {plan.icon}
                </motion.div>
                <h3 className="text-6xl font-bold mb-6 tracking-tighter leading-tight">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-5xl font-black tracking-tighter">₹{plan.price}</span>
                  <span className="text-white/20 text-xs font-black uppercase tracking-[0.4em]">Per Month</span>
                </div>
                <p className={`${plan.isPremium ? 'text-white/40' : 'text-white/30'} text-2xl font-light leading-relaxed max-w-sm`}>
                  {plan.description}
                </p>
              </div>

              <div className="flex-1 space-y-6 mb-20 relative z-10">
                {plan.features.map((feature, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (idx * 0.05), duration: 0.8 }}
                    key={feature} 
                    className="flex items-center gap-6"
                  >
                    <div className={`p-2 rounded-xl transition-colors duration-500 ${plan.isPremium ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-emerald-500'}`}>
                      <Check className="w-4 h-4 stroke-[3px]" />
                    </div>
                    <span className={`font-bold text-xl tracking-tight transition-colors duration-500 ${plan.isPremium ? 'text-white/90 group-hover:text-white' : 'text-white/70 group-hover:text-white'}`}>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-16 border-t border-white/10 relative z-10">
                <motion.button 
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-8 rounded-[40px] font-black text-2xl transition-all shadow-2xl ${
                    plan.isPremium 
                      ? 'bg-emerald-500 text-white hover:bg-emerald-400 shadow-emerald-500/30' 
                      : 'bg-white text-black hover:bg-stone-100'
                  }`}
                >
                  {plan.buttonText}
                </motion.button>
              </div>
              
              {/* Decorative elements */}
              {plan.isPremium ? (
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
              ) : (
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
