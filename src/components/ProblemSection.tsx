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
    <section className="bg-white py-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 text-stone-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
          >
            The Adherence Gap
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold text-stone-900 tracking-tighter leading-[0.85] mb-10"
          >
            Why Your Health <br />
            <span className="text-stone-300">Strategy Fails.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 text-xl font-medium max-w-2xl mx-auto"
          >
            Willpower isn't the problem. The ecosystem of food around you is designed for convenience, not longevity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group p-10 bg-white rounded-[48px] border border-stone-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-700 relative overflow-hidden"
            >
              <div className={`w-20 h-20 ${problem.color} rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-700 shadow-sm`}>
                <problem.icon className="w-10 h-10 stroke-[1.5px]" />
              </div>
              <h3 className="text-3xl font-bold text-stone-900 mb-6 tracking-tight leading-tight">{problem.title}</h3>
              <p className="text-stone-400 text-lg leading-relaxed font-medium transition-colors group-hover:text-stone-600">
                {problem.description}
              </p>
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-5 transition-opacity duration-700">
                <problem.icon className="w-32 h-32" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
