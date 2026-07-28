import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is a Personal Nutrition Chef?",
    answer: "A Personal Nutrition Chef is a professional culinary expert trained specifically in clinical and fitness nutrition. Unlike standard chefs, they prepare meals following the precise macro and micro-nutrient requirements set by your nutritionist."
  },
  {
    question: "How personalized are the meals?",
    answer: "Completely. We don't have a fixed menu. Every meal is designed from scratch based on your metabolism, activity levels, health conditions, and food preferences. If your plan calls for 42g of protein, that is exactly what your chef prepares."
  },
  {
    question: "How does weekly tracking work?",
    answer: "Every week, you'll have a check-in with your nutritionist to review weight, energy levels, and goal progress. Based on this, your nutrition plan is updated, and your chef automatically adjusts your meal preparation for the upcoming week."
  },
  {
    question: "Can I pause my subscription?",
    answer: "Yes, you can pause or resume your subscription at any time with 48-hour notice. We understand that life happens and we're built to be flexible."
  },
  {
    question: "Do all plans include a physician?",
    answer: "Physician consultations and clinical monitoring are exclusive to the Health Management Subscription, which is designed specifically for therapeutic nutrition and managing medical conditions."
  }
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-stone-900 tracking-tighter leading-[0.9] mb-8"
          >
            Common <br />
            <span className="text-stone-300">Questions.</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              className="border-b border-stone-100"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className={`text-2xl font-bold tracking-tight transition-colors ${activeIndex === i ? 'text-emerald-600' : 'text-stone-900 group-hover:text-emerald-600'}`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-all ${activeIndex === i ? 'bg-emerald-500 text-white rotate-180' : 'bg-stone-50 text-stone-400 group-hover:bg-emerald-50'}`}>
                  {activeIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-xl text-stone-500 font-medium leading-relaxed max-w-3xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
