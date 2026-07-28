import React from 'react';
import { motion } from 'motion/react';
import { Clock, Ban, Zap, RotateCcw } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: "Busy Schedules",
    description: "Work, family, and life leave zero time for meticulous meal planning and grocery shopping.",
    color: "bg-stone-100"
  },
  {
    icon: Ban,
    title: "No Personalization",
    description: "Generic meal delivery apps serve the 'average' body, ignoring your unique metabolism and goals.",
    color: "bg-stone-100"
  },
  {
    icon: RotateCcw,
    title: "Inconsistency",
    description: "Most people know what to eat, but struggle with the friction of preparing it day after day.",
    color: "bg-stone-100"
  },
  {
    icon: Zap,
    title: "Diet Fatigue",
    description: "The mental energy required to track every calorie leads to burnout and abandoned health goals.",
    color: "bg-stone-100"
  }
];

export const ProblemSection = () => {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-emerald-600 font-bold uppercase tracking-[0.3em] text-sm mb-6"
          >
            The Obstacles
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-stone-900 tracking-tighter leading-[0.9]"
          >
            Why Healthy Eating <br />
            <span className="text-stone-300">Fails for Most.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group p-8 bg-stone-50 rounded-[40px] border border-stone-100 hover:bg-white hover:shadow-2xl hover:shadow-stone-200 transition-all duration-500"
            >
              <div className={`w-16 h-16 ${problem.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500`}>
                <problem.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4 tracking-tight">{problem.title}</h3>
              <p className="text-stone-500 leading-relaxed font-medium">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
