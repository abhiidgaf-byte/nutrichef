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
    <section id="how-it-works" className="bg-stone-950 py-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-32">
          <div className="max-w-3xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-emerald-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-8"
            >
              The New Standard
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.85]"
            >
              We don't just cook. <br />
              <span className="text-white/20">We engineer longevity.</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex w-40 h-40 bg-white/5 backdrop-blur-3xl rounded-[60px] border border-white/10 items-center justify-center shadow-2xl group cursor-pointer hover:bg-white/10 transition-colors"
          >
             <span className="text-white text-7xl font-bold italic group-hover:scale-110 transition-transform duration-700">N</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group relative p-12 bg-white/[0.03] backdrop-blur-3xl rounded-[60px] border border-white/10 overflow-hidden hover:bg-white/[0.06] transition-all duration-700"
            >
              <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">
                <div className="p-8 bg-white/5 rounded-[32px] border border-white/10 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-700 shadow-2xl">
                  <solution.icon className={`w-12 h-12 ${solution.color} group-hover:text-white transition-colors duration-700`} />
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-white mb-6 tracking-tight leading-tight">{solution.title}</h3>
                  <p className="text-white/30 text-xl leading-relaxed font-light group-hover:text-white/60 transition-colors duration-700">
                    {solution.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 p-12 opacity-0 group-hover:opacity-5 transition-all duration-1000 rotate-12 group-hover:rotate-0">
                <solution.icon className="w-48 h-48 text-white" />
              </div>
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] group-hover:bg-emerald-500/10 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
