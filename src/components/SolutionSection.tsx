import React from 'react';
import { motion } from 'motion/react';
import { ChefHat, Microscope, LineChart, ShieldCheck } from 'lucide-react';

const solutions = [
  {
    icon: ChefHat,
    title: "Dedicated Nutrition Chef",
    description: "A professional chef trained to prepare meals specifically for your metabolism and goals.",
    color: "text-orange-500"
  },
  {
    icon: ShieldCheck,
    title: "Personalized Nutrition Plan",
    description: "No templates. Every gram of protein and every calorie is calculated for your body.",
    color: "text-blue-500"
  },
  {
    icon: LineChart,
    title: "Weekly Progress Tracking",
    description: "We monitor your biometrics and adjust your plan every 7 days to ensure constant results.",
    color: "text-purple-500"
  },
  {
    icon: Microscope,
    title: "Continuous Optimization",
    description: "Your nutrition evolves with you. As your body changes, your chef and plan adapt instantly.",
    color: "text-emerald-500"
  }
];

export const SolutionSection = () => {
  return (
    <section className="bg-stone-950 py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-24">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-emerald-400 font-bold uppercase tracking-[0.3em] text-sm mb-6"
            >
              Meet Nutrify
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]"
            >
              We don't sell meals. <br />
              <span className="text-white/20">We deliver consistency.</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="hidden lg:block w-32 h-32 bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10 flex items-center justify-center"
          >
             <span className="text-white text-6xl font-bold italic">N</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative p-12 bg-white/5 backdrop-blur-3xl rounded-[60px] border border-white/10 overflow-hidden"
            >
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-500">
                  <solution.icon className={`w-10 h-10 ${solution.color} group-hover:text-white transition-colors`} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{solution.title}</h3>
                  <p className="text-white/40 text-lg leading-relaxed font-medium">
                    {solution.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] group-hover:bg-emerald-500/10 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
