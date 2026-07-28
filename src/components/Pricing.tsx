import React from 'react';
import { motion } from 'motion/react';
import { Check, Heart, User, ChefHat, Activity, Stethoscope } from 'lucide-react';

const plans = [
  {
    name: "Fitness Subscription",
    price: "Custom",
    description: "Designed for weight loss, muscle gain, and high-performance lifestyles.",
    features: [
      "Dedicated Nutritionist",
      "Dedicated Personal Nutrition Chef",
      "Personalized Meal Planning",
      "Weekly Progress Tracking",
      "Continuous Meal Adjustments",
      "Macro & Micro Nutrient Focus"
    ],
    buttonText: "Start Fitness Plan",
    isPremium: false,
    color: "bg-stone-900"
  },
  {
    name: "Health Management",
    price: "Premium",
    description: "Therapeutic nutrition for Diabetes, PCOS, Thyroid, and lifestyle disorders.",
    features: [
      "Everything in Fitness PLUS",
      "Physician Consultation",
      "Clinical Nutritionist",
      "Therapeutic Meal Planning",
      "Medically Trained Nutrition Chef",
      "Weekly Clinical Health Monitoring",
      "Physician-led Plan Optimization"
    ],
    buttonText: "Start Health Plan",
    isPremium: true,
    color: "bg-emerald-500"
  }
];

export const Pricing = () => {
  return (
    <section id="subscriptions" className="bg-stone-50 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-emerald-600 font-bold uppercase tracking-[0.3em] text-sm mb-6"
          >
            The Journey
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-stone-900 tracking-tighter leading-[0.9]"
          >
            Choose Your <br />
            <span className="text-stone-300">Nutrition Pathway.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`relative p-12 rounded-[60px] flex flex-col ${
                plan.isPremium ? 'bg-emerald-600 text-white shadow-2xl shadow-emerald-500/40' : 'bg-white text-stone-900 border border-stone-100 shadow-xl'
              } group overflow-hidden`}
            >
              {plan.isPremium && (
                <div className="absolute top-8 right-8 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">
                   Premium Choice
                </div>
              )}
              
              <div className="mb-12">
                <h3 className="text-4xl font-bold mb-4 tracking-tighter">{plan.name}</h3>
                <p className={`${plan.isPremium ? 'text-white/60' : 'text-stone-400'} text-lg font-medium leading-relaxed`}>
                  {plan.description}
                </p>
              </div>

              <div className="flex-1 space-y-4 mb-16">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4">
                    <div className={`p-1.5 rounded-full ${plan.isPremium ? 'bg-white text-emerald-600' : 'bg-emerald-100 text-emerald-600'}`}>
                      <Check className="w-4 h-4" />
                    </div>
                    <span className={`font-semibold ${plan.isPremium ? 'text-white/90' : 'text-stone-700'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-12 border-t border-current/10">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-6 rounded-full font-bold text-xl transition-all shadow-xl ${
                    plan.isPremium 
                      ? 'bg-white text-emerald-600 hover:bg-stone-50' 
                      : 'bg-stone-900 text-white hover:bg-stone-800'
                  }`}
                >
                  {plan.buttonText}
                </motion.button>
              </div>
              
              {/* Background Glow for Premium */}
              {plan.isPremium && (
                <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
