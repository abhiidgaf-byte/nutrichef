import React from 'react';
import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

const comparisons = [
  { feature: "Personal Chef", traditional: false, nutriChef: true },
  { feature: "Dedicated Nutritionist", traditional: false, nutriChef: true },
  { feature: "Physician Consultations", traditional: false, nutriChef: true },
  { feature: "Weekly Progress Reviews", traditional: false, nutriChef: true },
  { feature: "Plan Adjustments", traditional: false, nutriChef: true },
  { feature: "Medical Condition Focus", traditional: false, nutriChef: true },
  { feature: "Fresh Daily Preparation", traditional: true, nutriChef: true },
];

export const ComparisonTable = () => {
  return (
    <section className="bg-stone-50 py-40 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-[10px] font-black uppercase tracking-[0.4em] mb-10"
          >
            The Adherence Standard
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold text-stone-900 tracking-tighter leading-[0.85] mb-12"
          >
            Not a Delivery App. <br />
            <span className="text-stone-300 italic">A Health Partner.</span>
          </motion.h2>
          <p className="text-stone-400 text-2xl font-light max-w-2xl mx-auto">
            Traditional apps deliver food. <span className="text-emerald-600 font-bold">NutriChef delivers outcomes.</span>
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[60px] border border-stone-200/60 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] bg-white">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-stone-50/50 border-b border-stone-100">
                <th className="p-10 text-left text-[10px] font-black text-stone-400 uppercase tracking-[0.3em]">Core Experience</th>
                <th className="p-10 text-center text-[10px] font-black text-stone-400 uppercase tracking-[0.3em] bg-stone-50/30">Traditional Apps</th>
                <th className="p-10 text-center text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] bg-emerald-50/30">NutriChef</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {comparisons.map((row) => (
                <tr key={row.feature} className="group transition-all duration-500 hover:bg-emerald-50/10">
                  <td className="p-10">
                    <p className="text-2xl font-bold text-stone-900 tracking-tight">{row.feature}</p>
                    <p className="text-stone-400 text-sm font-medium mt-1 group-hover:text-stone-500 transition-colors">Premium clinical service</p>
                  </td>
                  <td className="p-10 text-center bg-stone-50/20">
                    <div className="flex justify-center">
                      {row.traditional ? (
                        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center border border-emerald-200/50">
                          <Check className="w-6 h-6 text-emerald-600 stroke-[3px]" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 bg-stone-100/50 rounded-2xl flex items-center justify-center border border-stone-200/30">
                          <X className="w-6 h-6 text-stone-300 stroke-[3px]" />
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="p-10 text-center bg-emerald-50/20 relative">
                    <div className="flex justify-center relative z-10">
                      {row.nutriChef && (
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/30 border border-emerald-400"
                        >
                          <Check className="w-8 h-8 text-white stroke-[3.5px]" />
                        </motion.div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="p-12 bg-stone-900 text-center">
             <p className="text-white/40 text-sm font-medium uppercase tracking-[0.2em] mb-8">Ready to elevate your standards?</p>
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="px-12 py-5 bg-emerald-500 text-white rounded-full font-black text-xl shadow-2xl shadow-emerald-500/20"
             >
                Reserve Your Chef
             </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
