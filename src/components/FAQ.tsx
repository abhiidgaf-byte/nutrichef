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
    <section className="bg-[#FAF8F5] py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-8xl font-semibold text-stone-900 tracking-tight leading-[0.95] mb-8"
          >
            Clinical <br />
            <span className="text-stone-400 italic">Questions.</span>
          </motion.h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              className="border-b border-stone-200/80"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className={`text-2xl md:text-3xl font-bold tracking-tight transition-all duration-500 ${activeIndex === i ? 'text-emerald-700' : 'text-stone-800 group-hover:text-emerald-600'}`}>
                  {faq.question}
                </span>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${activeIndex === i ? 'bg-emerald-600 text-white rotate-180 shadow-md shadow-emerald-600/20' : 'bg-stone-100 text-stone-500 group-hover:bg-stone-200'}`}>
                  {activeIndex === i ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, filter: 'blur(10px)' }}
                    animate={{ height: "auto", opacity: 1, filter: 'blur(0px)' }}
                    exit={{ height: 0, opacity: 0, filter: 'blur(10px)' }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-3xl tracking-tight">
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
